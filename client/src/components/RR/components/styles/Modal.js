import styled from 'styled-components';

const ModalStyled = styled.div`

.modal-block{
  display: block;
}

.modal-none{
  display: none;
}

.modal-container{
  position: fixed;
  overflow: auto;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  &::-webkit-scrollbar {
    background-color: transparent;
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }
}

.form-container{
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 10px;
  border-radius: 10px;
  overflow: auto;
}

.star-container{
  display: flex;
  flex-directin: row;

  button {
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  }

  .on {
    color: #000;
  }

  .off {
    color: #ccc;
  }
}

.modal-close{
  width: 10%;
}

`;

export default ModalStyled;
