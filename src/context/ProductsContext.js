import React from 'react';
import {createContext} from 'react';

const tags = {
  adidas: 'adidas',
  nike: 'nike',
  vans: 'vans',
  asics: 'asics',
  sport: 'sport',
  lifestyle: 'lifestyle',
};

const products = [
  {
    title: 'Nike Air Max Plus',
    image:
      'https://cdn-images.farfetch-contents.com/16/81/15/05/16811505_33345073_1000.jpg',
    added: 12,
    tags: [tags.nike, tags.lifestyle, tags.sport],
    price: 12000,
  },
  {
    title: 'Vans Old Skool',
    image:
      'https://vans.ru/upload/resize_cache/iblock/e04/700_700_0/e04ea223f35af285ba9e226b5e3b80ea.jpg',
    added: 10,
    tags: [tags.vans, tags.lifestyle, tags.sport],
    price: 7000,
  },
  {
    title: 'Adidas NMD R1',
    image:
      'https://cdn-images.farfetch-contents.com/16/26/27/14/16262714_36098274_1000.jpg',
    added: 10,
    tags: [tags.adidas, tags.lifestyle, tags.sport],
    price: 10000,
  },

  {
    title: 'Asics Gel-Lyte III',
    image:
      'https://cdn-images.farfetch-contents.com/17/02/32/73/17023273_34089145_1000.jpg',
    added: 10,
    tags: [tags.asics, tags.lifestyle, tags.sport],
    price: 7500,
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
