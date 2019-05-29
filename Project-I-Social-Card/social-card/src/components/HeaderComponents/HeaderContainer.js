import React from 'react';
import ImageThumbnail from './ImageThumbnail';
import HeaderContent from './HeaderContent';
import './Header.css';

const HeaderContainer = () => {
  return (
    <header className="header">
      <ImageThumbnail />
      <HeaderContent />
    </header>
  );
};

export default HeaderContainer;
