import React, { useState, useCallback } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle, faImage, faSpinner } from '@fortawesome/free-solid-svg-icons';
import StyledAddPhotos from '../../RR/components/styles/StyledAddPhotos';

function AddAnswerPhotos({ setFormData, toggleModal }) {
  const [limitPhotos, setLimitPhotos] = useState(0);
  const [imageStore, setImageStore] = useState([]);
  const [uploading, setUploading] = useState(false);

  function onChange(e) {
    const images = Array.from(e.target.files);
    setUploading(true);

    const formData = new FormData();

    images.forEach((image, index) => {
      formData.append(index, image);
    });

    axios.post('/image-upload', formData)
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

  const deleteImage = useCallback((id) => { removeImage(id); }, []);

  function display() {
    if (uploading) {
      return <Spinner />;
    }
    if (limitPhotos < 5 && imageStore.length >= 0) {
      return (
        <div>
          <Images images={imageStore} removeImage={deleteImage} />
          <Button onChange={handleChange} />
        </div>
      );
    }
    return <Images images={imageStore} removeImage={deleteImage} />;
  }

  return (
    <StyledAddPhotos>
      <div className="add-photos-container">
        <div>Upload Photos</div>
        <div>
          You may upload up to
          {' '}
          {5 - limitPhotos}
          {' '}
          more photos
        </div>
        {display()}
        <button type="button" className="close-upload-button" onClick={sendToReviewForm}>Finish Uploading</button>
      </div>
    </StyledAddPhotos>
  );
}

function Spinner() {
  return (
    <div className="spinner fadein">
      <FontAwesomeIcon icon={faSpinner} size="2x" color="#FF0000" />
    </div>
  );
}

function Images({ images, removeImage }) {
  return (
    images.map((image) => (
      <div key={image.public_id} className="photo-prev">
        <button type="button" onClick={() => removeImage(image.public_id)} className="delete-photo">
          <FontAwesomeIcon icon={faTimesCircle} size="2x" />
        </button>
        <img src={image.secure_url} alt="" />
      </div>
    ))
  );
}

function Button({ onChange }) {
  return (
    <div className="add-photo-button">
      <label htmlFor="add-photo">
        <FontAwesomeIcon icon={faImage} color="#FF0000" size="2x" />
        <input type="file" id="add-photo" onChange={onChange} />
      </label>
    </div>
  );
}

export default AddAnswerPhotos;
