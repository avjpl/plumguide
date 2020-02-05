import React from 'react';
import propTypes from 'prop-types';
import { Carousel } from 'react-responsive-carousel';

import SVGIcon from '../../../ui/SVGIcon';
import 'react-responsive-carousel/lib/styles/carousel.css';

import styles from './ImageSlider.css';

const formatter = (current, total) => <div className={styles.status}>{`${current} / ${total}`}</div>;

const ImageSlider = ({ galleryImages, name, street, town, stayTotal }) => {
  return (
    <div className={styles.carousel}>
      <Carousel
        showThumbs={false}
        infiniteLoop={true}
        showIndicators={false}
        transitionTime={1000}
        statusFormatter={formatter}
      >
        {
          galleryImages.map(({ desktop, tablet, mobile }) => {
            return (
              <div>
                <picture>
                  <source
                    srcset={desktop}
                    media="(min-width: 1000px)"
                  />
                  <source
                    srcset={tablet}
                    media="(min-width: 768px)"
                  />
                  <source
                    srcset={mobile}
                    media="(min-width: 375px)"
                  />
                  <img src={tablet} alt="logo" />
                </picture>
              </div>
            )
          })
        }
      </Carousel>

      <ul className={styles.info__panel}>
        <li className={styles['info__panel--left']}>
          <div className={'location__name location__name--medium'}>{name}</div>
          <div className={'partial__address'}>{street}, {town}</div>
        </li>

        <li className={styles['info__panel--right']}>
          <div className={styles.info__panel__cost}>
            <sup className={styles.info__panel__symbol}>£</sup>
            <span className={styles.info__panel__amount}>{stayTotal}</span>
            <small>Total stay</small>
          </div>
          <button className={styles.reserve__btn} type="button">Reserve</button>
          <SVGIcon icon={'heart'} />
        </li>
      </ul>
    </div>
  );
}

ImageSlider.propTypes = {
  galleryImages: propTypes.array,
  name: propTypes.string,
  streets: propTypes.string,
  town: propTypes.string
};

export default ImageSlider;
