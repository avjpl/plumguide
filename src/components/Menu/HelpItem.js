import React from 'react';

import styles from './HelpItem.css';

const HelpItem = () => {
  return (
    <li className='menu__item'>
      <button type='button' className={styles.help__btn}>Need help?</button>
    </li>
  )
}

export default HelpItem;
