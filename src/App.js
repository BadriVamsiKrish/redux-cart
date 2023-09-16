import { useEffect ,Fragment} from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector ,useDispatch } from 'react-redux';
import { uiActions } from './store/Ui-slice';
import Notification from './components/UI/Notification';
import { cartActions } from './store/Cart-slice';
let init=true;
function App() {
  const dispatch=useDispatch();
  const cart=useSelector(state=>state.cart);
  const notification=useSelector(state=>state.ui.notification);
  useEffect(()=>{
          const fetchdata = async() =>{
        dispatch(uiActions.setnotification({status:'pending',
        message:'fetching cart data!',
        title:'fetching...'}));
        const response=await fetch('https://react-http-f171e-default-rtdb.firebaseio.com/redux_cart.json');
        if(!response.ok){
          throw new Error('fetching cart data is failed.');
        };
        const responsedata=await response.json();
        dispatch(cartActions.adddatafromdb(responsedata));
        dispatch(uiActions.setnotification({status:'success',
        message:'fetching cart data successfull...!',
        title:'success...'}))};  
      fetchdata().catch((err)=>{
        dispatch(uiActions.setnotification({status:'error',
        message:'fetching cart data failed!',
        title:'Error!'}));
        });
  },[dispatch]);
  //     dispatch(uiActions.setnotification({status:'pending',
  //     message:'get cart data!',
  //     title:'getting...'}));
  //     const response=await fetch('https://react-http-f171e-default-rtdb.firebaseio.com/redux_cart.json');
  //     if(!response.ok){
  //       throw new Error('could not fetch the cart data.!');
  //     }
  //     const data=await response.json();
  //     dispatch(cartActions.adddatafromdb(data));
  //     dispatch(uiActions.setnotification({status:'success',
  //     message:'get cart data successfull...!',
  //     title:'success...'}));
  //     return data;
  //     };
  //   try{
  //     fetchdata();
  //   }catch(error){
  //     dispatch(uiActions.setnotification({status:'error',
  //     message:'fetching cart data failed!',
  //     title:'Error!'}));
  //   };
  // },[dispatch]);
  useEffect(()=>{
    if(init){
      init=false;
      return;
    };
    const senddata = async() =>{ 
      dispatch(uiActions.setnotification({status:'pending',
      message:'sending cart data!',
      title:'sending...'}));
      const response=await fetch('https://react-http-f171e-default-rtdb.firebaseio.com/redux_cart.json',{method:'PUT',body:JSON.stringify(cart)});
      if(!response.ok){
        throw new Error('sending cart data is failed.');
      };
      const responsedata=await response.json();
      dispatch(uiActions.setnotification({status:'success',
      message:'sending cart data successfull...!',
      title:'success...'}))};  
    senddata().catch((err)=>{
      dispatch(uiActions.setnotification({status:'error',
      message:'sending cart data failed!',
      title:'Error!'}));
      });
},[cart,dispatch]);
  const showcart=useSelector(state=>state.ui.showcart);
  return (
    <Fragment>
      {notification && <Notification message={notification.message} title={notification.title} status={notification.status} />}
    <Layout>
      {showcart && <Cart />}
      <Products />
    </Layout>
    </Fragment>
  );
}

export default App;
