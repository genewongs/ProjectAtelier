import React from 'react';
import { render } from '@testing-library/react';
import Overview from "../Overview";
import { GalleryStyled } from '../components/Gallery';
import { ProdDescriptionStyled } from '../components/ProdDescription';


describe('Add to Cart Component', () => {

  it('should render a Nav Bar', () => {
    const { getByTestId } = render(<Overview />);
    const navBar = getByTestId('navbar');
    expect(navBar).toBeTruthy();
  });

});
