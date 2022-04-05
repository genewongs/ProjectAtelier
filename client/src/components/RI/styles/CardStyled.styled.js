/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: flex;

  height: 335px;
  width: 225px;
  border: 1px solid;
  /* background: white; */
  margin: 0px 12px;
`;

export const CardImage = styled.div`
  background-image: url(${(props) => props.photo});
`;

export const CardName = styled.p`
  flex-wrap: wrap;
  display: flex;
  font-weight: bold;
  font-size: 17px;
  position: absolute;
  padding-left: 15px;
`;
