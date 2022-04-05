import styled from 'styled-components';

export const ProdDescriptionStyled = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-self: center;
  align-self: center;
  width: 50%;
  > h2{
    text-decoration: underline;
    text-shadow: 2px 2px rgba(0, 0, 0, 0.2);
  }
  > p {
    display: flex;
    margin-left: auto;
    width: 100%;
  }
`;
