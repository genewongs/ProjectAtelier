import styled from 'styled-components';

const AddReviewStyled = styled.div`
  .form-container{
    background-color: rgba(255, 255, 255, 1);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border: 10px;
    border-radius: 10px;
    overflow: auto;

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
      font-size: 18px;
      width: 350px;

      .characteristic-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 200px;

        .input-container {
          display: flex;
          flex-direction: row;
        }
      }

      .selected {
        font-size: 15px;
      }
    }

    .rating-selector {

    }

    .form-summary {

    }

    .form-body {

    }

    .name-input {

    }

    .email-input {

    }

  }
`;

export default AddReviewStyled;
