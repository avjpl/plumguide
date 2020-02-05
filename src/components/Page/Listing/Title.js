import React from 'react';
import propTypes from 'prop-types';

import styles from './Title.css';

const Title = ({ name, street, town }) => (
  <div className={styles.title__group}>
    <div className={'partial__address'}>{street}, {town}</div>
    <h1 className={'location__name'}>{name}</h1>
  </div>
);

Title.propTypes = {
  name: propTypes.string,
  streets: propTypes.string,
  town: propTypes.string
};

export default Title;
