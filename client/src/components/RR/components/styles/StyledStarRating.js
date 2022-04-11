import styled from 'styled-components';

const StyledStar = styled.div.attrs({ 'data-testid': 'StyledStar' })`
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center;

.stars-rating {
  font-size: ${(props) => props.fontSize};
  position: relative;
  display: inline-block;
  color: transparent;

  &:before {
  position: absolute;
  top: 0;
  left: 0;
  content: '☆☆☆☆☆';
  color: black;
  font-size: ${(props) => props.fontSize};
  }

  &:after {
  position: absolute;
  top: 0;
  left: 0;
  content: '★★★★★';
  /* color: #f2b03c; */
  color: red;
  overflow: hidden;
  font-size: ${(props) => props.fontSize};
  width: ${(props) => props.percent};
  }
}
`;

export default StyledStar;
