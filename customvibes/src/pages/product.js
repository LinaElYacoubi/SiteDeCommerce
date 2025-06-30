const productsData = [
  {
    id: 1,
    name: 'Custom Mug',
    category: 'Mugs',
    colors: ['White', 'Black', 'Pink'],
    descriptionLong: 'Personalize this classic mug with your own text or image. Dishwasher and microwave safe.',
    price: '13.99',
    image: require('../assets/mug.png')
  },
  {
    id: 2,
    name: 'Personalized Tote',
    category: 'Totes',
    colors: ['Beige', 'Pink', 'Black'],
    descriptionLong: 'Design your own eco-friendly tote bag, perfect for everyday use.',
    price: '17.99',
    image: require('../assets/tote.png')
  },
  {
    id: 3,
    name: 'Custom T-shirt',
    category: 'T-shirts',
    colors: ['White', 'Black', 'Beige'],
    descriptionLong: 'Create a T-shirt with your favourite phrase or photo, available in all sizes.',
    price: '22.99',
    image: require('../assets/tshirt.png')
  },
  {
    id: 4,
    name: 'Minimalist Mug',
    category: 'Mugs',
    colors: ['White', 'Beige'],
    descriptionLong: 'A minimalist mug design for lovers of simplicity.',
    price: '14.99',
    image: require('../assets/mug.png')
  }
  // Ajoute autant de produits que tu veux ici
];

export default productsData;
