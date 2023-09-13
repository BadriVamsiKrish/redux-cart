import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector ,useDispatch} from 'react-redux';
import { uiActions } from '../../store/Ui';
import { useEffect } from 'react';
const Cart = (props) => {
  const cart =useSelector(state=>state.cart.items);
  const dispatch=useDispatch();
  const showcart = () =>{
    dispatch(uiActions.setshowcart());
  };
  useEffect(()=>{
    fetch('https://react-http-f171e-default-rtdb.firebaseio.com/reduxCart.json',{
      method:'PUT',
      body:JSON.stringify(cart)
    },[cart]);
  })
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cart.length===0 && showcart()}
        {cart.map((it)=>{
        return <CartItem item={it} />
        })}
      </ul>
    </Card>
  );
};

export default Cart;
