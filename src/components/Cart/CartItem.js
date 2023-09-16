import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/Cart-slice';
const CartItem = (props) => {
  const { title, quantity, total, price ,id} = props.item;
  const dispatch=useDispatch();
  const addhandler = (data) => {
    dispatch(cartActions.addtoitems(data))
  };
  const removehandler = (data) => {
    dispatch(cartActions.removeitem(data));
  }
  return (
    <li className={classes.item} key={id}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${parseFloat(total).toFixed(2)}{' '}
          <span className={classes.itemprice}>(${parseFloat(price).toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={()=>{removehandler({title:title,quantity:quantity,price:price,total:total,id:id})}}>-</button>
          <button onClick={()=>{addhandler({title:title,quantity:quantity,price:price,total:total,id:id})}}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
