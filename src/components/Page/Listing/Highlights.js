import React from 'react';

import styles from './Highlights.css';

const Highlights = () => {

  return (
    <div className={styles.highlights}>
      <h2 className={styles.highlights__heading}>Handpicked Highlights</h2>

      <div className={styles.highlights__images}>
        <div className={styles.highlights__image__container}>
          <picture>
            <source
              srcset="https://fakeimg.pl/600x400"
              media="(min-width: 1000px)"
            />
            <source
              srcset="https://fakeimg.pl/400x300"
              media="(min-width: 768px)"
            />
            <source
              srcset="https://fakeimg.pl/200x150"
              media="(min-width: 375px)"
            />
            <img className={styles.highlights__image} src="https://fakeimg.pl/720x405" alt="logo" />
          </picture>
          <p>Highlight #1</p>
          <p className={styles.highlights__description}>Lorem ipsum dolor sit amet, gravida felis</p>
        </div>

        <div className={styles.highlights__image__container}>
          <picture>
            <source
              srcset="https://fakeimg.pl/600x400"
              media="(min-width: 1000px)"
            />
            <source
              srcset="https://fakeimg.pl/400x300"
              media="(min-width: 768px)"
            />
            <source
              srcset="https://fakeimg.pl/200x150"
              media="(min-width: 375px)"
            />
            <img className={styles.highlights__image} src="https://fakeimg.pl/720x405" alt="logo" />
          </picture>
          <p>Highlight #2</p>
          <p className={styles.highlights__description}>Lorem ipsum dolor sit amet, gravida felis</p>
        </div>

        <div className={styles.highlights__image__container}>
          <picture>
            <source
              srcset="https://fakeimg.pl/600x400"
              media="(min-width: 1000px)"
            />
            <source
              srcset="https://fakeimg.pl/400x300"
              media="(min-width: 768px)"
            />
            <source
              srcset="https://fakeimg.pl/200x150"
              media="(min-width: 375px)"
            />
            <img className={styles.highlights__image} src="https://fakeimg.pl/720x405" alt="logo" />
          </picture>
          <p>Highlight #3</p>
          <p className={styles.highlights__description}>Lorem ipsum dolor sit amet, gravida felis</p>
        </div>
      </div>
    </div>
  );
}

export default Highlights;
