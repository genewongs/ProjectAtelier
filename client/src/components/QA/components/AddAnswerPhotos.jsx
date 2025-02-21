import React, { useState, useCallback } from 'react';
import axios from 'axios';
import StyledModalContainer from './styles/StyledModalContainer';
import StyledModal from './styles/StyledModal';

function AddAnswerPhotos({ togglePhotoModal, setAnswerPhotos }) {
  const [limitPhotos, setLimitPhotos] = useState(0);
  const [imageStore, setImageStore] = useState([]);
  const [uploading, setUploading] = useState(false);

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

  function submitImages() {
    setAnswerPhotos(imageStore);
    togglePhotoModal();
  }

  const handleChange = useCallback((e) => { onChange(e); }, []);

  const deleteImage = useCallback((id) => {
    removeImage(id);
    setLimitPhotos((prev) => prev - 1);
  }, []);

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
    <div>
      <StyledModalContainer onClick={togglePhotoModal}>
        <StyledModal onClick={(e) => { e.stopPropagation(); }}>
          <div className="add-photos-container">
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
              onClick={submitImages}
            >
              Done Uploading
            </button>
          </div>
        </StyledModal>
      </StyledModalContainer>
    </div>
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

export default AddAnswerPhotos;
