import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  const items = [
    {
      id: 1,
      title: 'Item 1',
      description: 'Description for Item 1',
      price: 19.99,
    },
    {
      id: 2,
      title: 'Item 2',
      description: 'Description for Item 2',
      price: 24.99,
    },
    {
      id: 3,
      title: 'Item 3',
      description: 'Description for Item 3',
      price: 14.99,
    },
    {
      id: 4,
      title: 'Item 4',
      description: 'Description for Item 4',
      price: 29.99,
    },
    {
      id: 5,
      title: 'Item 5',
      description: 'Description for Item 5',
      price: 9.99,
    },
    {
      id: 6,
      title: 'Item 6',
      description: 'Description for Item 6',
      price: 34.99,
    },
    {
      id: 7,
      title: 'Item 7',
      description: 'Description for Item 7',
      price: 39.99,
    },
    {
      id: 8,
      title: 'Item 8',
      description: 'Description for Item 8',
      price: 49.99,
    },
    {
      id: 9,
      title: 'Item 9',
      description: 'Description for Item 9',
      price: 15.99,
    },
    {
      id: 10,
      title: 'Item 10',
      description: 'Description for Item 10',
      price: 12.99,
    },
  ];
  
  
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
      {items.map((item)=>{
      return <li><ProductItem
        title={item.title}
        price={item.price}
        description={item.description}
        id={item.id}/>
      </li>})}
      </ul>
    </section>
  );
};

export default Products;
