import React, { useState, useCallback } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Modal from './Modal';
import StyledAddPhotos from './styles/StyledAddPhotos';

function AddPhotos({ setFormData, toggleModal }) {
  const [limitPhotos, setLimitPhotos] = useState(0);
  const [imageStore, setImageStore] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [errModalState, setErrModalState] = useState(false);

  function onChange(e) {
    const images = Array.from(e.target.files);

    const formData = new FormData();
    const types = ['png', 'jpeg', 'gif', 'webp'];

    images.forEach((image, index) => {
      formData.append(index, image);
    });

    setUploading(true);
    axios.post('/image-upload', formData)
      .then((response) => {
        if (types.every((type) => response.data[0].format !== type)) {
          setUploading(false);
          setErrModalState(true);
          throw response;
        }
        return response;
      })
      .then((response) => {
        setUploading(false);
        setImageStore((prev) => prev.concat(response.data));
        setLimitPhotos((prev) => prev + 1);
      })
      .catch((err) => new Error(err));
  }

  function removeImage(id) {
    setImageStore((prev) => prev.filter((image) => image.public_id !== id));
  }

  function sendToReviewForm() {
    const photoUrls = [];
    imageStore.forEach((image) => {
      photoUrls.push(image.secure_url);
    });
    setFormData((prev) => ({ ...prev, photos: photoUrls }));
    toggleModal();
  }

  const handleChange = useCallback((e) => { onChange(e); }, []);

  const deleteImage = useCallback((id) => {
    removeImage(id);
    setLimitPhotos((prev) => prev - 1);
  }, []);

  const toggleErrorModal = useCallback(() => setErrModalState((prev) => !prev), []);

  function display() {
    if (uploading) {
      return <Spinner />;
    }
    if (limitPhotos < 5 && imageStore.length >= 0) {
      return (
        <div className="preview-list">
          <Images images={imageStore} removeImage={deleteImage} />
          <br />
          <Button onChange={handleChange} />
        </div>
      );
    }
    return <Images images={imageStore} removeImage={deleteImage} />;
  }

  return (
    <StyledAddPhotos>
      <div className="add-photos-container">
        <Modal show={errModalState} toggleModal={toggleErrorModal}>
          <div className="error-modal">
            <h3>Error</h3>
            <div>Unable to upload file.</div>
            <button type="button" onClick={toggleErrorModal}>Close</button>
          </div>
        </Modal>
        <div>Upload Photos</div>
        <div>
          You may upload up to
          {' '}
          {5 - limitPhotos}
          {' '}
          more photos
        </div>
        <br />
        {display()}
        <br />
        <button
          type="button"
          className="close-upload-button"
          onClick={sendToReviewForm}
        >
          Finish Uploading
        </button>
      </div>
    </StyledAddPhotos>
  );
}

function Spinner() {
  return (
    <div className="spinner fadein">
      Uploading...
    </div>
  );
}

function Images({ images, removeImage }) {
  return (
    images.map((image) => (
      <div key={image.public_id} className="photo-preview">
        <button type="button" onClick={() => removeImage(image.public_id)} className="delete-photo">
          ✖ remove photo
        </button>
        <img src={image.secure_url} alt="" />
        <br />
      </div>
    ))
  );
}

function Button({ onChange }) {
  return (
    <div className="add-photo-button">
      <label htmlFor="add-photo">
        <input
          type="file"
          id="add-photo"
          accept="image/png, image/jpg, image/gif, image/webp"
          onChange={onChange}
        />
      </label>
    </div>
  );
}

export default AddPhotos;

AddPhotos.propTypes = {
  setFormData: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

Button.propTypes = {
  onChange: PropTypes.func.isRequired,
};
