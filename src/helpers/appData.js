export const tagsNames = {
  ADIDAS: 'ADIDAS',
  NIKE: 'NIKE',
  VANS: 'VANS',
  ASICS: 'ASICS',
  SPORT: 'sport',
  LIFESTYLE: 'lifestyle',
};

export const tagsData = [
  {title: tagsNames.ADIDAS},
  {title: tagsNames.NIKE},
  {title: tagsNames.VANS},
  {title: tagsNames.ASICS},
  {title: tagsNames.SPORT},
  {title: tagsNames.LIFESTYLE},
];

export const productsData = [
  {
    id: 1,
    title: 'Nike Air Max Plus',
    image:
      'https://cdn-images.farfetch-contents.com/16/81/15/05/16811505_33345073_1000.jpg',
    added: 12,
    tags: [tagsNames.NIKE, tagsNames.LIFESTYLE],
    price: 12000,
  },
  {
    id: 2,
    title: 'Vans Old Skool',
    image:
      'https://vans.ru/upload/resize_cache/iblock/e04/700_700_0/e04ea223f35af285ba9e226b5e3b80ea.jpg',
    added: 10,
    tags: [tagsNames.VANS, tagsNames.SPORT],
    price: 7000,
  },
  {
    id: 3,
    title: 'Adidas NMD R1',
    image:
      'https://cdn-images.farfetch-contents.com/16/26/27/14/16262714_36098274_1000.jpg',
    added: 10,
    tags: [tagsNames.ADIDAS, tagsNames.LIFESTYLE],
    price: 10000,
  },
  {
    id: 4,
    title: 'Asics Gel-Lyte III',
    image:
      'https://cdn-images.farfetch-contents.com/17/02/32/73/17023273_34089145_1000.jpg',
    added: 10,
    tags: [tagsNames.ASICS, tagsNames.LIFESTYLE, tagsNames.SPORT],
    price: 7500,
  },
];
