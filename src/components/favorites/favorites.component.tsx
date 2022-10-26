import React from 'react';
import './favorites.style.scss';

export type Some = {
  name: string;
};
const Favorites = () => {
  return (
    <div className="fav-container">
      <span>favorites</span>
    </div>
  );
};

export default Favorites;
