import classes from './CartButton.module.css';
import { useDispatch } from 'react-redux';
import { uiActions } from '../../store/Ui';
import { useSelector } from 'react-redux';
const CartButton = (props) => {
  const dispatch=useDispatch();
  const cartbuttonhandler = () =>{
    dispatch(uiActions.setshowcart());
  } ;
  const cart=useSelector(state=>state.cart.items);
  return (
    <button className={classes.button} onClick={cartbuttonhandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cart.length}</span>
    </button>
  );
};

export default CartButton;
