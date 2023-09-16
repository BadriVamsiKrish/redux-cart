import classes from './CartButton.module.css';
import { uiActions } from '../../store/Ui-slice';
import { useDispatch ,useSelector} from 'react-redux';
const CartButton = (props) => {
  const dispatch=useDispatch();
  const cartsize=useSelector(state=>state.cart.totalQuantity);
  const btnhandler = () =>{
    dispatch(uiActions.toggleShowcart());
  } 
  return (
    <button onClick={btnhandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartsize}</span>
    </button>
  );
};

export default CartButton;
