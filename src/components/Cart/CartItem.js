import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/Cart';
const CartItem = (props) => {
  const dispatch=useDispatch();
  const { title, quantity, total, price,itemid } = props.item;
  console.log({ title, quantity, total, price,itemid });
  const addbtn = (data) =>{
    dispatch(cartActions.additem(data));

  } ;
  const removebtn = (data) =>{
    dispatch(cartActions.removeitem(data));
  } 
  const id=itemid;
  return (
    <li className={classes.item} key={itemid}>
      <header>
        <h3>{props.item.title}</h3>
        <div className={classes.price}>
          ${parseFloat(props.item.total).toFixed(2)}
          <span className={classes.itemprice}>(${parseFloat(props.item.price).toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{props.item.quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={(event)=>{removebtn({title, quantity, total, price,id })}}>-</button>
          <button onClick={(event)=>{addbtn({title, quantity, total, price,id })}}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
