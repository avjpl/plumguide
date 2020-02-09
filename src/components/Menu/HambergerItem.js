import React, { useState } from 'react';

import SVGIcon from '../../ui/SVGIcon';

import SideMenu from './SideMenu';

const HambergerItem = () => {
  const [toggleMenu, setToggleMenu ] = useState(false);

  return (
    <>
      <li
        onClick={(() => setToggleMenu(!toggleMenu))}
        className='hamberger__icon menu__item menu__item--right_border'
      >
        <SVGIcon icon={'menuLines'} />
      </li>
      <SideMenu toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
    </>
  )
}

export default HambergerItem;
