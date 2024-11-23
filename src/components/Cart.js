// import { useDispatch, useSelector } from "react-redux";
// import ItemList from "./ItemList";
// import { clearCart } from "../utils/cartSlice";



// const Cart=()=>
// {
//     const dispatch=useDispatch();
// const handleClearCart=()=>{
// dispatch(clearCart()); // it will come from cartslice
// };

//     const cartItems=useSelector((store)=>store.cart.items) // it coming from redux store

//     return (<div className="text-center m-4 p-4">
//         <h1 className="text-2xl font-bold">Cart</h1>
//         <button className="bg-black text-white rounded-lg m-2 p-2"
//          onClick={handleClearCart}>Clear Cart</button>
//          {cartItems.length === 0 ? (
//             <div>
//     <h1 className="text-2xl m-2">Hey, it feels so light!</h1>
//     <h1>There is nothing in your bag. Let's add some items.</h1>
//     </div>
// ) : null}

//         <div className="w-6/12 m-auto">
//             <ItemList items={cartItems} />
//         </div>
//         </div>
//         )
        
// }
// export default Cart;

import { useDispatch, useSelector } from "react-redux";
import ItemCartList from "./ItemCartList";
import { clearCart, selectTotalPrice } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();

  // Get cart items and total price from the Redux store
  const cartItems = useSelector((store) => store.cart.items);
  const totalPrice = useSelector(selectTotalPrice);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <button
        className="bg-black text-white rounded-lg m-2 p-2"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>

      {cartItems.length === 0 ? (
        <div>
          <h1 className="text-2xl m-2">Hey, it feels so light!</h1>
          <h1>There is nothing in your bag. Let's add some items.</h1>
        </div>
      ) : (
        <>
          <div className="w-6/12 m-auto">
            <ItemCartList items={cartItems} />
          </div>
          <h2 className="text-xl font-bold mt-4">
            Total Price: ₹{totalPrice.toFixed(2)}
          </h2>
        </>
      )}
    </div>
  );
};

export default Cart;
