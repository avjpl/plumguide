// import '@babel/polyfill';
import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import { routes } from './routes/syncRoutes';

import Menu from './components/Menu';

const App = () => (
  <Router>
    <>
      <header>
        <nav>
          <Menu>
            <Menu.HambergerItem />
            <Menu.TextItem text={'Homes'} />
            <Menu.TextItem text={'Hosts'} />
            <Menu.LogoItem />
            <Menu.TextItem text={'Login'} />
            <Menu.HelpItem />
            <Menu.SearchItem />
          </Menu>
        </nav>
      </header>

      <main>
        {renderRoutes(routes)}
      </main>
    </>
  </Router>
);

export default App;
