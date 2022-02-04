import React from 'react';
import {createContext} from 'react';
import {productsData} from '../helpers/appData';

const ProductsContext = createContext(productsData);

export const ProductProvider = ({children}) => {
  return (
    <ProductsContext.Provider value={productsData}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductContext = () => React.useContext(ProductsContext);
