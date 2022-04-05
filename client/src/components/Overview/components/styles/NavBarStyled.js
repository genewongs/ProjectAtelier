import styled from 'styled-components';

export const NavBar = styled.div`
  display: flex;
  height: 50px;
  width: 100%;
  padding-top: 4px;
  margin-bottom: 15px;
  border-bottom: 1px solid gray;
  justify-content: space-between;
  > img {
    position: relative;
    margin-left: 100px;
    height: 32px;
    align-items: left;
    background: transparent;
  }
`;

export const NavButtonsStyled = styled.div`
  display: flex;
  justify-self: flex-end;
  height: 30px;
  color: black;
  margin-right: 50px;
  &:hover {
    cursor: pointer;
  }
  .icon {
    margin-right: 35px;
  }
`;

export const CartBadgeStyled = styled.div`
  position: absolute;
  top: 1.7em;
  right: 5.8em;
  background-color: black;
  color: white;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  text-align: center;
  > span {
    position: relative;
    font-size: 0.8em;
    align-self: center;
  }
`;
