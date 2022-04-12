import styled from 'styled-components';

const StyledModal = styled.div`
background-color: rgba(255, 255, 255, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 10px;
  border-radius: 10px;
  overflow: auto;
  max-height: 75vh;

  .new-answer {
  display: flex;
  flex-direction: column;
  align-items: center;
  }

  .new-answer-buttons {
  padding: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  }
`;

export default StyledModal;
