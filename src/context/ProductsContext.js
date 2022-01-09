import React from 'react';
import {createContext} from 'react';

const tags = {
  adidas: 'adidas',
  nike: 'nike',
  vans: 'vans',
  sport: 'sport',
  lifestyle: 'lifestyle',
};

const products = [
  {
    title: 'Nike Air Max Plus',
    image:
      'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/fdd779ea-f005-493c-8ec1-52858febedfd/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-air-max-plus-37Q9Bk.png',
    added: 3,
    tags: [tags.nike, tags.lifestyle, tags.sport],
    price: 2000,
  },
];

const ProductsContext = createContext(products);

<ProductsContext.Provider value={products}></ProductsContext.Provider>;

export const ProductProvider = ({children}) => {
  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductContext = () => React.useContext(ProductsContext);
