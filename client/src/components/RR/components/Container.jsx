import React, {
  useState, useContext, useEffect, useCallback,
} from 'react';
import axios from 'axios';
import ReviewStoreContext from '../utils/ReviewContext';
import StarRating from './StarRating';
import RatingBreakdownFilter from './RatingBreakdownFilter';
import RatingBreakdownFactor from './RatingBreakdownFactor';
import KeywordSearch from './KeywordSearch';
import ReviewSortSelector from './ReviewSortSelector';
import ReviewList from './ReviewList';
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
  const [searchTerm, setSearchTerm] = useState('');
  const [searched, setSearched] = useState([]);
  const [currDisplay, setCurrDisplay] = useState([]);

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
      if (filterState === true) {
        setFilterState(false);
      }
    } else {
      setFilterState(true);
      setFiltered(reviews.filter((review) => sortBy.includes(review.rating)));
    }
  }

  function searchReviews() {
    if (searchTerm.length > 3) {
      if (filterState) {
        setSearched(filtered.filter((review) => review.body.includes(searchTerm)
          || review.summary.includes(searchTerm)));
      } else {
        setSearched(reviews.filter((review) => review.body.includes(searchTerm)
        || review.summary.includes(searchTerm)));
      }
    } else {
      setSearched([]);
    }
  }

  function returnDisplay() {
    if (searchTerm.length !== 0) {
      setCurrDisplay(searched);
    } else if (filterState === true) {
      setCurrDisplay(filtered);
    } else {
      setCurrDisplay(reviews);
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

  const clearFilters = useCallback(() => setSortBy([]), []);

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
      .then((response) => setReviewData(response.results))
      .then(() => {
        if (count >= reviewCount) {
          setLimitHit(true);
        } else {
          setLimitHit(false);
        }
      })
      .catch((err) => new Error(err));
  }, [count, reviewCount, sort, sortBy]);

  useEffect(() => {
    sortByStars();
  }, [reviews, sortBy]);

  useEffect(() => {
    searchReviews();
  }, [searchTerm, sortBy, reviews, sort, filtered]);

  useEffect(() => {
    returnDisplay();
  }, [searched, filtered, reviews]);

  return (
    <ContainerStyled>
      <div className="review-left-container">
        <StarRating />
        <RatingBreakdownFilter
          handleSortBy={handleSortBy}
          sortBy={sortBy}
          clearFilters={clearFilters}
        />
        <RatingBreakdownFactor />
      </div>
      <div className="review-right-container">
        <KeywordSearch setSearchTerm={setSearchTerm} />
        <br />
        <ReviewSortSelector reviewCount={reviewCount} setSort={setSort} />
        <ReviewList reviews={currDisplay} />
        <div className="review-buttons-container">
          {limitHit ? null
            : (
              <button
                type="button"
                className="more-reviews-button"
                onClick={incrementCount}
              >
                MORE REVIEWS
              </button>
            )}
          <button
            type="button"
            className="add-review-button"
            onClick={toggleModal}
          >
            ADD A REVIEW +
          </button>
        </div>
        <AddReview modalState={modalState} toggleModal={toggleModal} />
      </div>
    </ContainerStyled>
  );
}

export default Container;
