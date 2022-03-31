import styled from 'styled-components';

export const GalleryStyled = styled.div`
  width: 60%;
  height: 700px;
  background-color: darkgray;
`;

export const GalleryInnerStyled = styled.div`
  height: 100%;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${(props) => props.img || ''});
  display: flex;
`;

export const GalleryInnerLeftStyled = styled.div`
  display: flex;
  flex: 10%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.105);
  transition: all ease-in-out 0.03s;
  &:hover {
    cursor: pointer;
    font-size: 1.1em;
    transition: all ease-in-out 0.03s;
  }
`;

export const GalleryInnerCenterStyled = styled.div`
  flex: 80%;
  height: 100%;
`;

export const GalleryInnerRightStyled = styled.div`
  display: flex;
  flex: 10%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.105);
  transition: all ease-in-out 0.03s;
  &:hover {
    cursor: pointer;
    font-size: 1.1em;
    transition: all ease-in-out 0.03s;
  }
`;
