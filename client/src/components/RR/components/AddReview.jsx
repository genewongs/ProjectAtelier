import React, {
  useState, useCallback, useEffect, useContext,
} from 'react';
import axios from 'axios';
import Modal from './Modal';
import ModalStyled from './styles/StyledModal';
import StyledAddReview from './styles/StyledAddReview';
import AddPhotos from './AddPhotos';
import StarRatingForm from './StarRatingForm';
import CharacteristicsForm from './CharacteristicsForm';
import ReviewStoreContext from '../utils/ReviewContext';

function AddReview({ modalState, toggleModal }) {
  const { id, metaData } = useContext(ReviewStoreContext);
  const [productName, setProductName] = useState('');
  const [photoModalState, setPhotoModalState] = useState(false);
  const [errModalState, setErrModalState] = useState(false);
  const [warning, setWarning] = useState('');
  const [formData, setFormData] = useState({
    product_id: id,
    rating: null,
    summary: '',
    body: '',
    recommend: null,
    name: null,
    email: null,
    photos: [],
    characteristics: null,
  });
  const query = {
    path: 'reviews',
    query: formData,
  };

  function handleChange(e) {
    setFormData((prevForm) => ({ ...prevForm, [e.target.id]: e.target.value }));
  }

  function handleRecommended(e) {
    setFormData(((prevForm) => ({ ...prevForm, [e.target.name]: (e.target.id === 'rec-true') })));
  }

  function handleRating(e) {
    setFormData((prevForm) => ({ ...prevForm, [e.target.name]: Number(e.target.value) }));
  }

  function handleCharacteristic(e) {
    setFormData((prevForm) => ({
      ...prevForm,
      characteristics: {
        ...formData.characteristics,
        [metaData.characteristics[e.target.className].id]: Number(e.target.value),
      },
    }));
  }

  const handleRatingChange = useCallback((e) => handleRating(e), [formData]);

  const togglePhotoModal = useCallback(() => setPhotoModalState((prev) => !prev), []);

  const toggleErrModal = useCallback(() => setErrModalState((prev) => !prev), []);

  const handleCharacteristicChange = useCallback(
    (e) => handleCharacteristic(e),
    [metaData, formData],
  );

  function getProductName() {
    axios.get('/api', { params: { path: `products/${id}` } })
      .then((response) => (setProductName(response.data.name)))
      .catch((err) => new Error(err));
  }

  function verifyEmail() {
    const regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i;
    return regex.test(formData.email);
  }

  async function postToServer(e) {
    e.preventDefault();
    let verified = false;
    let warningString = '';

    if (formData.rating === null) {
      warningString += 'Rating\n';
    }
    if (formData.body === null || formData.body.length === undefined || formData.body.length < 50) {
      warningString += 'Body\n';
    }
    if (formData.recommend === null) {
      warningString += 'Recommendation\n';
    }
    if (formData.name === null || formData.name === undefined || formData.name.length === 0) {
      warningString += 'Name\n';
    }
    if (formData.email === null || !verifyEmail()) {
      warningString += 'Email\n';
    }
    if (formData.characteristics === null) {
      warningString += 'Characteristics\n';
    } else if (formData.characteristics !== null) {
      if (Object.keys(formData.characteristics).length
      !== Object.keys(metaData.characteristics).length) {
        warningString += 'Characteristics\n';
      }
    }

    if (warningString) {
      setWarning('You must enter the following: \n'.concat(warningString));
      setErrModalState(true);
    } else {
      setWarning(warningString);
      verified = true;
    }

    if (verified === true) {
      axios.post('/api', query)
        .then((response) => console.log(response))
        .catch((err) => new Error(err));
      toggleModal();
    }
  }

  useEffect(() => {
    getProductName();
  }, []);

  return (
    <div>
      <br />
      <ModalStyled>
        <Modal className="add-form" show={modalState} toggleModal={toggleModal}>
          <StyledAddReview>
            <div className="form-container">
              <div className="title-text">Write Your Review</div>
              <div className="about-product">
                About the
                {' '}
                {productName}
              </div>
              <StarRatingForm handleChange={handleRatingChange} />
              <CharacteristicsForm handleChange={handleCharacteristicChange} />
              <div className="rec-selector">
                Do you recommend this product?
                <form id="recommend">
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
              <div className="text-container">
                <div className="headers">Summary</div>
                <textarea
                  id="summary"
                  rows="3"
                  cols="60"
                  maxLength="60"
                  placeholder="Example: Best purchase ever!"
                  onChange={(e) => handleChange(e)}
                />
                <div className="headers">Body</div>
                <textarea
                  id="body"
                  className="form-body"
                  rows="7"
                  cols="60"
                  maxLength="1000"
                  placeholder="Why did you like the product or not?"
                  onChange={(e) => handleChange(e)}
                />
                <div>
                  Minimum required characters left:
                  {' '}
                  {formData.body.length < 50 ? 50 - formData.body.length : 0}
                </div>
              </div>
              <div className="small-text-container">
                <div className="headers">Name</div>
                <input
                  type="text"
                  id="name"
                  className="name-input"
                  placeholder="Example: jackson11!"
                  onChange={(e) => handleChange(e)}
                />
                <div className="caution-text">For privacy reasons, do not use your full name or email address</div>
                <div className="headers">E-Mail Address</div>
                <input
                  type="text"
                  id="email"
                  className="email-input"
                  placeholder="Example: jackson11@email.com"
                  onChange={(e) => handleChange(e)}
                />
                <div className="caution-text">For authentication reasons, you will not be emailed</div>
              </div>
              <button
                type="button"
                className="add-photos-button"
                id="photos"
                onClick={togglePhotoModal}
              >
                Add Photos
              </button>
              <Modal show={photoModalState} toggleModal={togglePhotoModal}>
                <AddPhotos setFormData={setFormData} toggleModal={togglePhotoModal} />
              </Modal>
              <div className="photos-container">
                {formData.photos && formData.photos.map((image) => <img key={image} src={image} alt="" />)}
              </div>
              <br />
              <button type="button" className="post-review" onClick={postToServer}>Add Review</button>
              <Modal show={errModalState} toggleModal={toggleErrModal}>
                <div className="err-modal">
                  {warning ? <pre className="warning">{warning}</pre> : null }
                  <button type="button" className="err-close" onClick={toggleErrModal}>Close</button>
                </div>
              </Modal>
              <br />
              <button
                type="button"
                className="modal-close"
                onClick={toggleModal}
              >
                Close
              </button>
            </div>
          </StyledAddReview>
        </Modal>
      </ModalStyled>
    </div>
  );
}

export default AddReview;
