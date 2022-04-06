import styled from 'styled-components';

export const RightFlex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40%;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  min-height: 200px;
  h2 {
    margin: 0px;
    padding: 15px 0px 15px 0px;
  }
  .category {
    font-size: .8em;
    color: gray;
  }
`;

export const SocialStyled = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 40px;
  justify-content: flex-end;
  .icons {
    display: flex;
    margin-right: 12px;
    font-size: 1.5em;
    transition: all ease-in-out 0.03s;
    &:hover {
      transform: scale(1.1);
      transition: all ease-in-out 0.03s;
      cursor: pointer;
    }
  }
  .fbIcon {
    color: #4867AA;
  }

  .twitterIcon {
    color: #1DA1F2;
  }

  .pinterestIcon {
    color: #E60023;
  }
`;
