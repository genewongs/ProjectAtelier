import React, {
  useState, useContext, useEffect, useCallback,
} from 'react';
import axios from 'axios';
import ReviewStoreContext from '../utils/ReviewContext';
import StarRating from './StarRating';
import ReviewList from './ReviewList';
import AddReview from './AddReview';
import ContainerStyled from './styles/StyledContainer';

function Container() {
  const { id, setReviewData, setMetaData } = useContext(ReviewStoreContext);
  const [count, setCount] = useState(2);
  const [reviewCount, setReviewCount] = useState(0);
  const [limitHit, setLimitHit] = useState(false);
  const [modalState, setModalState] = useState(false);
  const [sort, setSort] = useState('relevant');

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

  const incrementCount = useCallback(() => setCount((prevCount) => prevCount + 2), []);

  const toggleModal = useCallback(() => setModalState((prevState) => !prevState), []);

  useEffect(() => {
    Promise.all([getReviews(), getMetaData()])
      .then((results) => {
        setReviewData(results[0]);
        setMetaData(results[1]);
        setReviewCount(Object.values(results[1].ratings)
          .reduce((sum, num) => Number(sum) + Number(num), 0));
      })
      .catch((err) => new Error(err));
  }, []);

  useEffect(() => {
    getReviews()
      .then((response) => setReviewData(response))
      .then(() => {
        if (count >= reviewCount) {
          setLimitHit(true);
        } else {
          setLimitHit(false);
        }
      })
      .catch((err) => new Error(err));
  }, [count, reviewCount, sort]);

  return (
    <ContainerStyled>
      <div className="rating-container">
        <StarRating />
      </div>
      <div className="review-sorted-by">
        {reviewCount}
        {reviewCount >= 2 ? ' reviews, ' : ' review, '}
        sorted by
        {' '}
        <select className="sort-selector" onChange={(e) => setSort(e.target.value)}>
          <option value="relevance">Relevance</option>
          <option value="newest">Newest</option>
          <option value="helpful">Helpfulness</option>
        </select>
      </div>
      <ReviewList />
      <div className="review-buttons-container">
        {limitHit ? null
          : (
            <button
              type="button"
              className="more-reviews-button"
              onClick={incrementCount}
            >
              More Reviews
            </button>
          )}
        <button
          type="button"
          className="add-review-button"
          onClick={toggleModal}
        >
          Add Review
        </button>
        <AddReview modalState={modalState} toggleModal={toggleModal} />
      </div>
    </ContainerStyled>
  );
}

export default Container;
