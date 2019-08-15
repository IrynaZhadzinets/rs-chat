import React from 'react';
import PropTypes from 'prop-types';
import Nickname from './Nickname';

const Layout = ({ children }) => (
  <>
    <header>
      <Nickname />
    </header>
    <main className="chat">
      {children}
    </main>
    <footer>
      <span>
        (c) Iryna Zhadzinets
      </span>
    </footer>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
