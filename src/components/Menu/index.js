import React, { Children, cloneElement } from 'react';

import HambergerItem from './HambergerItem';
import TextItem from './TextItem';
import LogoItem from './LogoItem';
import HelpItem from './HelpItem';
import SearchItem from './SearchItem';

const Menu = ({ children }) => {
  return (
    <ul className='menu'>
      {
        Children.map(children, child => cloneElement(child))
      }
    </ul>
  )
};

Menu.HambergerItem = HambergerItem;
Menu.TextItem = TextItem;
Menu.LogoItem = LogoItem;
Menu.HelpItem = HelpItem;
Menu.SearchItem = SearchItem;

export default Menu;
