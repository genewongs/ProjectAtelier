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
  }

  .star-rating {
    display: flex;
    flex-directin: row-reverse;
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

  .characteristics-form {

  }

  .rating-selector {

  }

  .form-summary {

  }

  .form-body {

  }


`;

export default AddReviewStyled;
