import React from 'react';

import { useEffect, useState, Key } from 'react';
// import { FixedSizeList as List } from 'react-window';
// import AutoSizer from 'react-virtualized-auto-sizer';
// import Card from '../one-card/one-card.component';
import Card2 from '../card2/card2.component';
import './card-container.style.scss';

export type Product = {
  id: Key;
  name: string;
  price: number;
  src: string;
};
export interface IProduct {
  id: number;
  name: string;
  price: number;
  src: string;
}

const CardContainer = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch('https://testbackend.nc-one.com/image')
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((product) => {
        setProduct(product);
      })
      .catch((error) => {
        console.error('Something go wrong', error);
      });
  }, []);

  // name={product.name} price={product.price} src={product.src}
  console.log(product);
  return (
    <div className="card-container">
      {product.map((product: Product) => {
        return <Card2 key={product.id} products={product} />;
      })}
    </div>
  );
};

export default CardContainer;
