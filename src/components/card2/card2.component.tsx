import { FC } from 'react';
import React from 'react';
import { Product } from '../card-container/card-container.component';
import './card2.styles.scss';

type CardProps = {
  products: Product;
};
const Card2: FC<CardProps> = ({ products }) => {
  const { name, price, src } = products;

  return (
    <div className="onecard-container">
      <div className="image-container">
        <img alt="product" src={`https://testbackend.nc-one.com` + src} />
      </div>
      <div className="onecard-info">
        <span className="product-name">{name}</span>
        <div className="onecard-footer">
          <span className="product-price">{price}$</span>
          <button></button>
        </div>
      </div>
    </div>
  );
};

export default Card2;
