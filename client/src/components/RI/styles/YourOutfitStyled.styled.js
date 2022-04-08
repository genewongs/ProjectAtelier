/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const YourOutfitStyled = styled.div`
  display: flex;
  justify-content: center;
`;

export const AddOutfitWrapper = styled.div`
  height: 400px;
  width: 250px;
  display: flex;
  grid-template-columns: 250px;
  grid-template-rows: 240px 160px;
  grid-template-areas: "text" "icon";
  /* border-radius: 18px; */
  background: white;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  /* align-items: center; */
`;

export const AddOutfitText = styled.div`
  grid-area: text;
  font-size: 34px;
  font-weight: 1000;
  font-family: 'Roboto Serif', sans-serif;
  /* font-family: 'Roboto Mono', monospace; */
  color: #202020;
  padding-left:15px;
  padding-right: 20px;
  padding-top:60px;
  /* padding-bottom: 30px; */
`;

export const ActionCardIcon = styled.div`
  grid-area: icon;
  padding-bottom: 30px;
  font-size: 30px;
  padding-left: 15px;
`;
