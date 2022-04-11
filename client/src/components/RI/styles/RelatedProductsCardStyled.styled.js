/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: grid;
  height: 335px;
  width: 225px;
  border: 1px solid;
  margin: 0px 12px 10px;
  text-align: center;
  grid-template-areas: "image" "text";
  .star-icon {
    height: 30px;
    width: 30px;
    &:hover {
      transform: scale(1.1);
      transition: all ease-in-out 0.03s;
      cursor: pointer;
    }
  }
`;

export const CardImage = styled.div`
  grid-area: image;
  background-image: url(${(props) => props.photo});
  background-size: cover;
`;

export const CardName = styled.h1`
  grid-area: text;
  font-weight: bold;
  font-size: 15px;
  text-align: left;
  position: absolute;
  padding-left: 15px;
`;

export const CardCategory = styled.p`
  /* flex-wrap: wrap;
  display: flex; */
  font-size: 17px;
  position: absolute;
  padding-left: 15px;
`;

export const CardPrice = styled.p`
  /* flex-wrap: wrap;
  display: flex; */
  font-size: 17px;
  position: absolute;
  padding-left: 15px;
`;
