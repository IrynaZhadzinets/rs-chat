import React from 'react';
import PropTypes from 'prop-types';

const Layout = ({ children }) => (
  <>
    <header>
      <h3>Hello!</h3>
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
