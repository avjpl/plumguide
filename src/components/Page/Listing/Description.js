import React from 'react';
import propTypes from 'prop-types';

import styles from './Description.css';

const Description = ({ listingDescription, listingSpecs, photoCount }) => {
  return (
    <section className={styles.decription}>
      <h1 className={styles.decription_heading}>Plum's Review</h1>

      <div className={styles.decription_wrapper}>
        <div className={styles.decription__body}>
          {
            listingDescription.map((text) => {
              return <p className={styles.decription__para}>{text}</p>
            })
          }
        </div>

        <ul className={styles.list__spec}>
          <li className={`${styles.list__spec__item} ${styles.list__spec__group}`}>
            <span className={'pgLogo'}>PG</span>
            <div>
              {
                listingSpecs.vettedBy.map((text) => {
                  return <p className={styles.list__spec__para}>{text}</p>
                })
              }
            </div>
          </li>
          <li className={styles.list__spec__item}>
            <ul className={styles.list__spec__group}>
              <li className={styles.list__spec__group_item}>{listingSpecs.guests} guests</li>
              <li className={styles.list__spec__group_item}>{listingSpecs.bedrooms} bedrooms</li>
              <li className={styles.list__spec__group_item}>{listingSpecs.bathrooms} bathrooms</li>
            </ul>
          </li>
          <li className={styles.list__spec__item}>
            Step-free entry . {listingSpecs.size} sq/ft
          </li>
          <li className={styles.list__spec__item}>
            {listingSpecs.closestStation}
          </li>
          <li className={styles.list__spec__item}>
            <button type='button' className={styles.list__spec__btn}>View Floorplan</button>
            <button type='button' className={styles.list__spec__btn}>View Photo ({photoCount})</button>
          </li>
        </ul>
      </div>
    </section>
  );
}

Description.propTypes = {
  listingDescription: propTypes.array
};

export default Description;
