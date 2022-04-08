import styled from 'styled-components';

const StyledRatingBreakdownFactors = styled.div`

  .breakdown-container {
    padding: 5px;

    .key-container {
      font-size: 18px;
    }

    .bar-container {
      input {
        -webkit-appearance: none;
        appearance: none;
        background: transparent;
        outline: 1px solid black;
        width: 100%;

        ::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 23px;
          height: 24px;
          border: 0;
          border-radius: 50%;
          background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Black_triangle.svg/1200px-Black_triangle.svg.png');
          background-size: contain;
          background-position: center center;
          background-repeat: no-repeat;
      }

    }

    .description-container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      font-size: 15px;
    }
  }




`;

export default StyledRatingBreakdownFactors;
