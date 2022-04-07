import React, {
  useState, useContext, useEffect, useCallback,
} from 'react';
import axios from 'axios';
import ReviewStoreContext from '../utils/ReviewContext';
import StarRating from './StarRating';
import RatingBreakdownFilter from './RatingBreakdownFilter';
import RatingBreakdownFactor from './RatingBreakdownFactor';
import ReviewSortSelector from './ReviewSortSelector';
import ReviewList from './ReviewList';
import ReviewListButtons from './ReviewListButtons';
import AddReview from './AddReview';
import ContainerStyled from './styles/StyledContainer';

function Container() {
  const {
    id, reviews, setReviewData, setMetaData,
  } = useContext(ReviewStoreContext);
  const [count, setCount] = useState(2);
  const [reviewCount, setReviewCount] = useState(0);
  const [limitHit, setLimitHit] = useState(false);
  const [modalState, setModalState] = useState(false);
  const [sort, setSort] = useState('relevant');
  const [filtered, setFiltered] = useState([]);
  const [filterState, setFilterState] = useState(false);
  const [sortBy, setSortBy] = useState([]);

  function getReviews() {
    return new Promise((resolve, reject) => {
      axios.get('api', { params: { path: `reviews?count=${count}&sort=${sort}&product_id=${id}` } })
        .then((response) => resolve(response.data))
        .catch((err) => reject(err));
    });
  }

  function getMetaData() {
    return new Promise((resolve, reject) => {
      axios.get('api', { params: { path: `reviews/meta?product_id=${id}` } })
        .then((response) => resolve(response.data))
        .catch((err) => reject(err));
    });
  }

  function sortByStars() {
    if (sortBy.length === 0) {
      setFilterState(false);
    } else {
      setFiltered([]);
      setFilterState(true);
      setFiltered(reviews.filter((review) => sortBy.includes(review.rating)));
    }
  }

  const handleSortBy = useCallback((e) => {
    e.preventDefault();
    const clickedStar = Number(e.target.id);
    if (sortBy.includes(clickedStar)) {
      setSortBy((prev) => prev.filter((num) => num !== clickedStar));
    } else {
      setSortBy((prev) => [...prev, clickedStar]);
    }
  }, [sortBy]);

  const incrementCount = useCallback(() => setCount((prevCount) => prevCount + 2), []);

  const toggleModal = useCallback(() => setModalState((prevState) => !prevState), []);

  useEffect(() => {
    Promise.all([getReviews(), getMetaData()])
      .then((results) => {
        setReviewData(results[0].results);
        setMetaData(results[1]);
        setReviewCount(Object.values(results[1].ratings)
          .reduce((sum, num) => Number(sum) + Number(num), 0));
      })
      .catch((err) => new Error(err));
  }, []);

  useEffect(() => {
    getReviews()
      .then((response) => { setReviewData(response.results); })
      .then(sortByStars())
      .then(() => {
        if (count >= reviewCount) {
          setLimitHit(true);
        } else {
          setLimitHit(false);
        }
      })
      .catch((err) => new Error(err));
  }, [count, reviewCount, sort, sortBy]);

  return (
    <ContainerStyled>
      <div className="review-left-container">
        <StarRating />
        <RatingBreakdownFilter handleSortBy={handleSortBy} sortBy={sortBy} />
        <RatingBreakdownFactor />
      </div>
      <div className="review-right-container">
        <ReviewSortSelector reviewCount={reviewCount} setSort={setSort} />
        <ReviewList reviews={filterState ? filtered : reviews} />
        <ReviewListButtons
          limitHit={limitHit}
          incrementCount={incrementCount}
          toggleModal={toggleModal}
        />
        <AddReview modalState={modalState} toggleModal={toggleModal} />
      </div>
    </ContainerStyled>
  );
}

export default Container;
