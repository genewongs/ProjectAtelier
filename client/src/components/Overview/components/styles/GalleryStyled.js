import styled from 'styled-components';

export const GalleryStyled = styled.div.attrs({ 'data-testid': 'carousel'})`
  display: flex;
  flex-grow: 1;
  max-width: 100%;
  background-color: white;
  transition: all ease-in-out 0.5s;
  cursor: zoom-out;
  .magnify {
    cursor: zoom-in;
  }
`;

export const ThumbnailsLeft = styled.div`
  display: flex;
  flex: 8%;
  height: 100%;
  align-items: center;
  justify-content: center;
  color: gray;
  transition: all ease-in-out 0.1s;
  .upButton {
    &:hover {
      color: black;
      transition: all ease-in-out 0.1s;
      cursor: pointer;
  }
  }
  .disable {
    cursor: default;
    color: rgb(0 0 0 / 20%);
    &:hover {
      color: rgb(0 0 0 / 20%);
      cursor: default;
    }
  }
`;

export const ThumbnailsRight = styled.div`
  display: flex;
  flex: 8%;
  height: 100%;
  align-items: center;
  justify-content: center;
  color: gray;
  transition: all ease-in-out 0.1s;
  .downButton {
    &:hover {
      color: black;
      transition: all ease-in-out 0.1s;
      cursor: pointer;
    }
  }
  .disable {
    cursor: default;
    color: rgb(0 0 0 / 20%);
    &:hover {
      color: rgb(0 0 0 / 20%);
      cursor: default;
    }
  }
`;

export const ThumbnailsStyled = styled.div`
  cursor: default;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-width: 130px;
  max-height: 800px;
  background-color: white;
  transition: all ease-in-out 0.05s;
  .selected {
    border-bottom: 6px solid red;
    transition: all ease-in-out 0.05s;
  }
`;

export const ThumbnailsImageStyled = styled.div`
  display: flex;
  flex: 1;
  border: 1px solid black;
  min-width: 75px;
  min-height: 75px;
  max-height: 75px;
  margin: 10px 0px;
  background-image: url(${(props) => props.img || ''});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: cover;
  transition: all ease-in-out 0.03s;
  box-sizing: border-box;
  &:hover {
    cursor: pointer;
    transition: all ease-in-out 0.03s;
    transform: scale(0.96);
    cursor: pointer;
  }
`;

export const GalleryInnerStyled = styled.div`
  max-height: 800px;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: cover;
  background-image: url(${(props) => props.img || '/dist/images/NPA.jpeg'});
  display: flex;
`;

export const GalleryInnerLeftStyled = styled.div`
  display: flex;
  flex: 8%;
  height: 100%;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: rgba(0, 0, 0, 0.105);
  transition: all ease-in-out 0.1s;
  .button {
    &:hover {
      color: red;
      transition: all ease-in-out 0.1s;
      cursor: pointer;
    }
  }
  .disable {
    cursor: default;
    color: rgb(0 0 0 / 37%);
    &:hover {
      color: rgb(0 0 0 / 37%);
      cursor: default;
    }
  }
`;

export const GalleryInnerCenterStyled = styled.div`
  flex: 84%;
  height: 100%;
`;

export const GalleryInnerRightStyled = styled.div`
  display: grid;
  flex: 8%;
  height: 100%;
  align-items: start;
  justify-content: center;
  color: white;
  background-color: rgba(0, 0, 0, 0.105);
  transition: all ease-in-out 0.03s;
  &:hover {
    transition: all ease-in-out 0.03s;
  }
  .button2 {
    margin-bottom: 45px;
    margin-left: 8px;
    &:hover {
      color: red;
      transition: all ease-in-out 0.1s;
      cursor: pointer;
    }
  }
  .disable {
    cursor: default;
    color: rgb(0 0 0 / 37%);
    &:hover {
      color: rgb(0 0 0 / 37%);
      cursor: default;
    }
  }
  .expandIcon {
    position: relative;
    font-size: 2em;
    margin-top: 5px;
    max-height: 40px;
    min-width: 40px;
    color: white;
    transition: all ease-in-out 0.1s;
    &:hover {
      color: red;
      transition: all ease-in-out 0.1s;
    }
  }
`;
