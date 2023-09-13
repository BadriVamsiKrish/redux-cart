import classes from './CartButton.module.css';
import { useDispatch } from 'react-redux';
import { uiActions } from '../../store/Ui';
const CartButton = (props) => {
  const dispatch=useDispatch();
  const cartbuttonhandler = () =>{
    dispatch(uiActions.setshowcart());
  } 
  return (
    <button className={classes.button} onClick={cartbuttonhandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
