import styled from 'styled-components';

export const GalleryStyled = styled.div`
  width: 50%;
  height: 700px;
  background-color: darkgray;
`;

export const GalleryInnerStyled = styled.div`
  height: 100%;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${props => props.img || ''});
`;
