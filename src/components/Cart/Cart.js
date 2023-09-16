import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';
const Cart = (props) => {
  const cart=useSelector(state=>state.cart.cart);
  const total=useSelector(state=>state.cart.total);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <h2>Total:${total.toFixed(2)}</h2>
      <ul>
        {cart.map((item)=>{return<CartItem key={Math.random()}
          item={{ title:item.title, quantity:item.quantity, total:item.totalprice, price:item.price ,id:item.id}}
        />})}
      </ul>
    </Card>
  );
};

export default Cart;
