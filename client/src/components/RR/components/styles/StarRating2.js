import styled from 'styled-components';

const StyledStar = styled.div`

.average {
  font-size: 50px;
}

.stars-rating {
  font-size: 50px;
  position: relative;
  display: inline-block;
  color: transparent;

  &:before {
  position: absolute;
  top: 0;
  left: 0;
  content: '★★★★★';
  color: black;
  font-size: 50px;
  }

  &:after {
  position: absolute;
  top: 0;
  left: 0;
  content: '★★★★★';
  color: red;
  overflow: hidden;
  font-size: 50px;
  width: ${(props) => props.percent};
  }
}
`;

export default StyledStar;
