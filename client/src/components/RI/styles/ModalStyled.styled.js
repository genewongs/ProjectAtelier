import styled from 'styled-components';

export const ModalWrapper = styled.div`
  .modal-container{
    z-index: 99;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: fixed;
    display: flex;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
  }
  .compare-container {
    display: flex;
    padding: 20px;
    flex-direction: column;
    align-items: center;
    border: 1px solid;
    min-width: 350px;
    min-height: 200px;
    background-color: rgba(255, 255, 255, 1);
  }
`;

export const BothWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  flex-direction: column;
  padding-top: 10px;
  .check-left{
    position: absolute;
    left: -3em;
  }
  .check-right{
    position: absolute;
    right: -3em;
  }
`;

export const Title = styled.h1`
    display: flex;
    font-size: 20px;
    font-weight: bold;
    text-decoration: underline;
    color: black;
`;
