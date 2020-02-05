import React from 'react';

import SVGIcon from '../../ui/SVGIcon';

const HambergerItem = () => {
  return (
    <li className='hamberger__icon menu__item menu__item--right_border'>
      <SVGIcon icon={'menuLines'} />
    </li>
  )
}

export default HambergerItem;
