import styled from 'styled-components';

const AddReviewStyled = styled.div`
  .form-container{
    background-color: rgba(255, 255, 255, 1);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border: 2px;
    border-radius: 10px;
    overflow: auto;
    max-height: 75vh;

    &::-webkit-scrollbar {
      background-color: transparent;
      width: 5px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: transparent;
    }

    &:hover {
      &::-webkit-scrollbar-thumb {
        /* background-color: rgba(221, 54, 54, 0.5); */
        background-color: transparent;
      }
    }

    .title-text {
      font-size: 30px;
      padding-bottom: 5px;
    }

    .about-product {
      font-size: 20px;
      padding-bottom: 10px;
    }

    .star-rating-container {
      display: flex;
      flex-direction: column;
      align-items: center;

      .rate-text {
        font-size: 15px;
      }

      .star-rating {
        display: flex;
        flex-directin: row-reverse;
        align-items: center;
        gap: 2px;

        button {
          background-color: transparent;
          border: none;
          outline: none;
          cursor: pointer;
          font-size: 20px;
        }

        .on {
          color: red;
        }

        .off {
          color: grey;
        }
      }

      .selected-star-rating {
        display: flex;
        font-size: 15px;
        justify-content: center;
      }
    }


    .characteristics-form {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 350px;
      font-size: 19px;
      padding: 5px;

      .characteristic-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 200px;
        font-size: 17px;

        .input-container {
          display: flex;
          flex-direction: row;
        }
      }

      .selected {
        font-size: 15px;
      }
    }

    .rec-selector {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: 17px;

      form {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

      label {
        justify-content: center;
        align-items: center;
        font-size: 13px;
        }
      }
    }

    .text-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 15px;
      textarea {
        border: 2px solid red;
        resize: none;

        ::placeholder {
          font-family: helvetica;
          font-size: 13px;
        }
      }
    }

    .small-text-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .headers {
        font-size: 17px;
        padding: 5px;
      }

      .caution-text {
        font-size: 12px;
        padding: 2px;
      }

      .name-input {
        width: 50%;
        height: 20px;
        border: 2px solid red;
      }

      .email-input {
        width: 70%;
        height: 20px;
        border: 2px solid red;
      }
    }

    .add-photos-button {
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

    .modal-close {
      border: 0px;
      background: transparent;
      outline: 0px;

      &:hover {
        color: red;
      }
    }
  }
`;

export default AddReviewStyled;
