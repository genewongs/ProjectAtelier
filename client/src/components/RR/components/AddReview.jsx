import React, {
  useState, useCallback, useEffect, useContext,
} from 'react';
import axios from 'axios';
import Modal from './Modal';
import ModalStyled from './styles/StyledModal';
import AddReviewStyled from './styles/AddReviewStyled';
import StarRatingForm from './StarRatingForm';
import CharacteristicsForm from './CharacteristicsForm';
import ReviewStoreContext from '../utils/ReviewContext';

function AddReview({ modalState, toggleModal }) {
  const { id, metaData } = useContext(ReviewStoreContext);
  const [productName, setProductName] = useState('');
  const [photos, setPhotos] = useState([]);
  const [formData, setFormData] = useState({
    product_id: id,
    rating: null,
    summary: '',
    body: '',
    recommend: null,
    name: '',
    email: '',
    photos,
    characteristics: {},
  });
  const query = {
    path: 'reviews',
    query: formData,
  };

  function handleChange(e) {
    setFormData((prevForm) => ({ ...prevForm, [e.target.id]: e.target.value }));
  }

  function handleRecommended(e) {
    let bool = false;
    if (e.target.id === 'rec-true') {
      bool = true;
    }
    setFormData(((prevForm) => ({ ...prevForm, [e.target.name]: bool })));
  }

  function handleRating(e) {
    setFormData((prevForm) => ({ ...prevForm, [e.target.name]: e.target.value }));
  }

  // function handlePhoto(e) {
  //   setPhotos((prevPhotos) => ({ ...prevPhotos }));
  // }

  function handleCharacteristic(e) {
    setFormData((prevForm) => ({
      ...prevForm,
      characteristics: {
        ...formData.characteristics,
        [metaData.characteristics[e.target.className].id]: e.target.value,
      },
    }));
  }

  const handleRatingChange = useCallback((e) => handleRating(e), [formData]);

  const handleCharacteristicChange = useCallback(
    (e) => handleCharacteristic(e),
    [metaData, formData],
  );

  function getProductName() {
    axios.get('/api', { params: { path: `products/${id}` } })
      .then((response) => (setProductName(response.data.name)))
      .catch((err) => new Error(err));
  }

  // function postToServer(e) {
  //   e.preventDefault();
  //   axios.post('/api', { query })
  //     .catch((err) => new Error(err));
  // }

  useEffect(() => {
    getProductName();
  }, []);

  return (
    <div>
      <br />
      <ModalStyled>
        <Modal className="add-form" show={modalState} toggleModal={toggleModal}>
          <AddReviewStyled>
            <div className="form-container">
              <h2>Write Your Review</h2>
              <h3>
                <span>
                  About the
                  {' '}
                  {productName}
                </span>
              </h3>
              <StarRatingForm handleChange={handleRatingChange} />
              <CharacteristicsForm handleChange={handleCharacteristicChange} />
              <div>
                Do you reccomend this product?
                <form className="rating-selector" id="recommend">
                  <label htmlFor="rec-true">
                    Yes
                    <input
                      type="radio"
                      id="rec-true"
                      name="recommend"
                      onChange={(e) => handleRecommended(e)}
                    />
                  </label>
                  <label htmlFor="rec-false">
                    No
                    <input
                      type="radio"
                      id="rec-false"
                      name="recommend"
                      onChange={(e) => handleRecommended(e)}
                    />
                  </label>
                </form>
              </div>
              <div>Summary: </div>
              <textarea
                className="form-summary"
                id="summary"
                rows="3"
                cols="60"
                placeholder="Example: Best purchase ever!"
                onChange={(e) => handleChange(e)}
              />
              <div>Body: </div>
              <textarea
                className="form-body"
                id="body"
                rows="7"
                cols="60"
                placeholder="Why did you like the product or not?"
                onChange={(e) => handleChange(e)}
              />
              <div>Name: </div>
              <input
                type="text"
                id="name"
                placeholder="Example: jackson11!"
                onChange={(e) => handleChange(e)}
              />
              <div>For privacy reasons, do not use your full name or email address</div>
              <div>E-Mail: </div>
              <input
                type="text"
                id="email"
                placeholder="Example: jackson11@email.com"
                onChange={(e) => handleChange(e)}
              />
              <div>For authentication reasons, you will not be emailed</div>
              <button type="button" id="photos">Add Photos</button>
              <br />
              <button
                type="button"
                className="modal-close"
                onClick={toggleModal}
              >
                Close
              </button>
            </div>
          </AddReviewStyled>
        </Modal>
      </ModalStyled>
    </div>
  );
}

export default AddReview;
