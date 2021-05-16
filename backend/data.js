import bcrypt from "bcryptjs";
const data = {
  users: [
    {
      name: 'Mantas',
      email: 'mantastravian@gmail.com',
      password: bcrypt.hashSync('123445678', 8),
      isAdmin: true,
    },
    {
      name: 'Tadas',
      email: 'user@example.com',
      password: bcrypt.hashSync('123446578', 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'Marškinėlis1',
      category: 'Marškinėliai',
      image: '/images/d1.jpg',
      price: 30,
      countInStock: 5,
      brand: 'DEDAM',
      rating: 4.5,
      numReviews: 10,
      description: 'Čia produkto aprašymas',
    },
    {
      name: 'Marškinėlis2',
      category: 'Marškinėliai',
      image: '/images/d2.jpg',
      price: 15,
      countInStock: 8,
      brand: 'DEDAM',
      rating: 4,
      numReviews: 15,
      description: 'Čia produkto aprašymas',
    },
    {
      name: 'Marškinėlis3',
      category: 'Marškinėliai',
      image: '/images/d3.jpg',
      price: 65,
      countInStock: 9,
      brand: 'DEDAM',
      rating: 3.5,
      numReviews: 30,
      description: 'Čia produkto aprašymas',
    },
    {
      name: 'Kepurė1',
      category: 'Kepurės',
      image: '/images/d4.jpg',
      price: 75,
      countInStock: 8,
      brand: 'DEDAM',
      rating: 1,
      numReviews: 1,
      description: 'Čia produkto aprašymas',
    },
    {
      name: 'Marškinėlis5',
      category: 'Marškinėliai',
      image: '/images/d5.jpg',
      price: 13,
      countInStock: 0,
      brand: 'DEDAM',
      rating: 5,
      numReviews: 100,
      description: 'Čia produkto aprašymas',
    },
    {
      name: 'Kepurė2',
      category: 'Kepurės',
      image: '/images/d6.jpg',
      price: 300,
      countInStock: 50,
      brand: 'DEDAM',
      rating: 2.2,
      numReviews: 11,
      description: 'Čia produkto aprašymas',
    },
  ],
};
export default data;