import styled from 'styled-components';

export const GalleryStyled = styled.div`
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

export const ThumbnailsStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 130px;
  height: 800px;
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
  width: 90px;
  height: 90px;
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
  }
`;

export const GalleryInnerStyled = styled.div`
  height: 100%;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: cover;
  background-image: url(${(props) => props.img || ''});
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
  transition: all ease-in-out 0.03s;
  &:hover {
    cursor: pointer;
    font-size: 1.1em;
    transition: all ease-in-out 0.03s;
  }
  .button {
    border-radius: 50%;
    border: 1.5px solid rgb(75, 75, 75, 0.95);
  }
  .disable {
    border: none;
    opacity: 0;
  }
`;

export const GalleryInnerCenterStyled = styled.div`
  flex: 84%;
  height: 100%;
`;

export const GalleryInnerRightStyled = styled.div`
  display: flex;
  flex: 8%;
  height: 100%;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: rgba(0, 0, 0, 0.105);
  transition: all ease-in-out 0.03s;
  &:hover {
    cursor: pointer;
    font-size: 1.1em;
    transition: all ease-in-out 0.03s;
  }
  .button {
    border-radius: 50%;
    border: 1.5px solid rgb(75, 75, 75, 0.95);
  }
  .disable {
    border: none;
    opacity: 0;
  }
`;
