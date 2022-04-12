/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 335px;
  width: 225px;
  border: 1px solid;
  margin: 0px 12px 10px;
  text-align: center;
  .star-icon{
    z-index: 98;
    margin-left: 194;
    padding-top: 3;
    height: 30px;
    width: 30px;
    position: absolute;
    color: white;
    mix-blend-mode: difference;
    &:hover {
      transform: scale(1.05);
      transition: all ease-in-out 0.01s;
      cursor: pointer;
    }
  }
  .x-icon{
    z-index: 98;
    margin-left: 194;
    padding-top: 3;
    height: 30px;
    width: 30px;
    position: absolute;
    color: white;
    mix-blend-mode: difference;
    &:hover {
      transform: scale(1.05);
      transition: all ease-in-out 0.01s;
      cursor: pointer;
    }
  }
`;

export const CardImage = styled.div`
  grid-area: image;
  height: 240px;
  background-image: url(${(props) => props.photo});
  background-size: cover;
`;

export const CardName = styled.h1`
  display: flex;
  margin-top: 5px;
  margin-bottom: 0px;
  font-size: 14px;
  padding-left: 5px;
`;

export const CardCategory = styled.p`
  display: flex;
  margin-top: 5px;
  margin-bottom: 0px;
  font-size: 14px;
  padding-left: 5px;
`;

export const CardPrice = styled.p`
  display: flex;
  margin-top: 5px;
  margin-bottom: 0px;
  font-size: 14px;
  padding-left: 5px;
`;
