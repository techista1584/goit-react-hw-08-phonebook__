import React from 'react';
import css from './Layout.module.css';
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
  return (
    <div className={css.container}>
      <main>{children}</main>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Layout;
