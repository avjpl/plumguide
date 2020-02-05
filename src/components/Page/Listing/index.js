import React from 'react';

import Listing from './Listing';

import listingData from '../../../../data/listing.json';

const ListingPage = () => {
  return (
    <Listing {...listingData}>
      <Listing.Title />
      <Listing.ImageSlider />
      <Listing.Description />
      <Listing.Highlights />
    </Listing>
  );
};

export default ListingPage;
