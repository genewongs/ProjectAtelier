/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const CardWrapper = styled.div`
  height: 335px;
  width: 225px;
  border: 1px solid;
  margin: 0px 12px;
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
  background-image: url(${(props) => props.photo});
`;

export const CardName = styled.h1`
  /* flex-wrap: wrap; */
  /* display: flex; */
  font-weight: bold;
  font-size: 17px;
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

export const ActionCardIcon = styled.div`
  grid-area: icon;
  padding-bottom: 30px;
  font-size: 30px;
  padding-left: 15px;
`;
