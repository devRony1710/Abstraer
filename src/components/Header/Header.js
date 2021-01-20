import React from 'react';
import './Header.css';

import Logo from '../../assets/press-hotel-logo.png';

export const Header = () => {
  return (
    <div className="Header-Container">
      <h1>Portland, Maine</h1>
      <img alt={Logo} src={Logo} />
    </div>
  );
};
