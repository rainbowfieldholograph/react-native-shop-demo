import React from 'react';
import {createContext} from 'react';

const products = [
  {
    title: 'asdfksajkdfn',
    image: 'https://upload.wikimedia.org/wikipedia/en/a/af/Arthas_Menethil.png',
    added: 3,
    tags: [
      {title: 's', color: 'red'},
      {title: 's', color: 'red'},
      {title: 's', color: 'red'},
    ],
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
