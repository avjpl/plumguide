import React, { Children, cloneElement, useEffect, useState } from 'react';

import Page from '../';
import Title from './Title';
import ImageSlider from './ImageSlider';
import Description from './Description';
import Highlights from './Highlights';

const Listing = ({ children, ...data }) => {
  return (
    <Page>
      {
        Children.map(children, child => cloneElement(child, {...data}))
      }
    </Page>
  )
};

Listing.Title = Title;
Listing.ImageSlider = ImageSlider;
Listing.Description = Description;
Listing.Highlights = Highlights;

export default Listing;
