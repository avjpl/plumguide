import React, { Children, cloneElement } from 'react';
import { Helmet } from "react-helmet";

import Page from '../';
import Title from './Title';
import ImageSlider from './ImageSlider';
import Description from './Description';
import Highlights from './Highlights';

const Listing = ({ children, ...data }) => {
  return (
    <Page>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Listing page</title>
        <link rel="canonical" href="http://plumguide.com/listing" />
      </Helmet>
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
