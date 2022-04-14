import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const LandingStyledContainer = styled.div`
  width: auto;
  height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 100px;
    transition: all ease-in-out 0.3s;
    &:hover {
      cursor: pointer;
      transform: scale(1.05);
      transition: all ease-in-out 0.3s;
    };
  };
`;

const LandingStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <LandingStyledContainer>
      <LandingStyled onClick={() => { navigate('/65638'); }}>
        <img src="./dist/images/BL.png" alt="logo" />
      </LandingStyled>
    </LandingStyledContainer>
  );
}
