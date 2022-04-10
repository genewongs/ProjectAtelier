import styled from 'styled-components';

const StyledAddPhotos = styled.div`
  .add-photos-container {
    background-color: rgba(255, 255, 255, 1);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border: 2px;
    border-radius: 10px;
    overflow: auto;
    max-height: 75vh;

    .close-upload-button {
        height: 45px;
        width: 150px;
        border: 0px;
        outline: 0px;
        background: black;
        font-size: 15px;
        color: white;
        border-radius: 10px;
        transition: 0.3s;

        &:hover {
        background: red;
        }
    }

    .preview-list {
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .photo-preview {
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        gap: 5px;
        width: 50%;
    }

    .delete-photo {
        background: transparent;
        border: 1px solid black;

        &:hover {
        border: 1px solid red;
        color: red;
        }
    }
  }
`;

export default StyledAddPhotos;
