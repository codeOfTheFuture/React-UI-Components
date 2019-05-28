import React from 'react';
import ImageThumbnail from './ImageThumbnail';
import HeaderContent from './HeaderContent';
import './Header.css';

const HeaderContainer = () => {
  return (
    <header>
      <ImageThumbnail />
      <HeaderContent />
    </header>
  );
};

export default HeaderContainer;
