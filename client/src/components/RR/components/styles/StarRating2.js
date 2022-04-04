import styled from 'styled-components';

const StyledStar = styled.div`
font-size: 50px;

:root {
  --star-size: 60px;
  --star-color: #fff;
  --star-background: #fc0;
}

.stars {

  display: inline-block;
  font-size: var(--star-size);
  font-family: Times; // make sure ★ appears correctly
  line-height: 1;

  &::before {
    content: '★★★★★';
    letter-spacing: 3px;
    background: linear-gradient(90deg, var(--star-background) var(percent), var(--star-color) var(percent));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}

`;

export default StyledStar;
