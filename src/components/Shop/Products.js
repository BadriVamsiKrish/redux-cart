import ProductItem from './ProductItem';
import classes from './Products.module.css';
const Products = (props) => {
  const cart = [
    {
      id: 1,
      title: 'Item 1',
      price: 10.99,
      description: 'This is the description for Item 1.',
    },
    {
      id: 2,
      title: 'Item 2',
      price: 15.49,
      description: 'Description for Item 2 goes here.',
    },
    {
      id: 3,
      title: 'Item 3',
      price: 7.99,
      description: 'This is the description for Item 3.',
    },
    {
      id: 4,
      title: 'Item 4',
      price: 23.99,
      description: 'Description for Item 4 goes here.',
    },
    {
      id: 5,
      title: 'Item 5',
      price: 12.99,
      description: 'This is the description for Item 5.',
    },
  ];
  
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {cart.map((item)=>{return <ProductItem key={item.id}
          title={item.title}
          price={item.price}
          description={item.description}
        />})}
      </ul>
    </section>
  );
};

export default Products;
