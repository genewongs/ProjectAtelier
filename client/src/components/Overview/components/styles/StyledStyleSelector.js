import styled from 'styled-components';

export const SelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  &:span {
    font-weight: bold;
    font-size: 2em;
  }
  .danger {
    visibility: visible;
  }
`;

export const ImageContainer = styled.div`
  /* padding: 20px 5px; */
  border-radius: 15px;
  /* display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-flow: row wrap; */
  display: grid;
  grid-template-columns: repeat(4, 75px);
  grid-auto-rows: minmax(100px, auto);
  max-width: 100%;
  overflow: auto;

  > img {
    position: relative;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    /* border: 2px solid black; */
    margin: 10px;
    transition: all ease-in-out 0.05s;

    &:hover {
    cursor: pointer;
    border: 2px solid black;
    transform: scale(0.98);
    box-shadow: 4px 2px 2px rgba(0, 0, 0, 0.235);
    transition: all ease-in-out 0.05s;
    }
  }

  >img.selectedSize {
    border: 2px solid black;
    box-shadow: 4px 2px 2px rgba(0, 0, 0, 0.35);
    transform: scale(1.02);
  }
`;

export const BadgeStyled = styled.div`
  position: absolute;
  top: 20px;
`;
