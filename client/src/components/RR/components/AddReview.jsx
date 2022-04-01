import React, { useState, useCallback, useEffect } from 'react';
import axios from 'axios';
import Modal from './Modal.jsx';
import RatingForm from './RatingForm.jsx';
import CharacteristicsForm from './CharacteristicsForm.jsx';

function AddReview({ id }) {
  const [modalState, setModalState] = useState(false);
  const [productName, setProductName] = useState('');
  const [photos, setPhotos] = useState([]);
  const [formData, setFormData] = useState({
    product_id: id,
    rating: null,
    summary: '',
    body: '',
    recommend: true,
    name: '',
    email: '',
    photos,
    characteristics: {},
  });
  const [query, setQuery] = useState({
    path: 'reviews',
    query: formData,
  });

  function handleChange(e) {
    setFormData((prevForm) => ({ ...prevForm, [e.target.id]: e.target.value }));
  }

  const toggleModal = useCallback(() => setModalState(!modalState), []);

  function addReviewModal() {

  }

  function getProductName() {
    axios.get('/api', { params: { path: `products/${id}` } })
      .then((response) => (setProductName(response.data.name)));
  }

  function postToServer(e) {
    e.preventDefault();
    axios.post('/api', { query })
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    getProductName();
  }, []);

  return (
    <div>
      <button
        type="button"
        className="add-review-button"
        onClick={toggleModal}
      >
        Add Review
      </button>
      <br />
      <Modal className="add-form" show={modalState} handleClose={toggleModal}>
        <h2>Write Your Review</h2>
        <h3>
          <span>
            About the
            {' '}
            {productName}
          </span>
        </h3>
        <RatingForm />
        <CharacteristicsForm />
        <br />
        <span>Summary: </span>
        <br />
        <textarea
          id="summary"
          rows="2"
          cols="50"
          placeholder="Example: Best purchase ever!"
          onChange={(e) => handleChange(e)}
        />
        <br />
        <span>Body: </span>
        <br />
        <textarea
          id="body"
          rows="4"
          cols="50"
          placeholder="Why did you like the product or not?"
          onChange={(e) => handleChange(e)}
        />
        <br />
        <span>Do you reccomend this product? </span>
        <select className="rating-selector" id="recommend" onChange={(e) => handleChange(e)}>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
        <br />
        <span>Name: </span>
        <br />
        <input
          type="text"
          id="name"
          placeholder="Example: jackson11!"
          onChange={(e) => handleChange(e)}
        />
        <br />
        <span>Email: </span>
        <br />
        <input
          type="text"
          id="email"
          placeholder="Example: jackson11@email.com"
          onChange={(e) => handleChange(e)}
        />
        <br />
        <button type="button" id="photos">Add Photos</button>
        <br />
      </Modal>
    </div>
  );
}

export default AddReview;
