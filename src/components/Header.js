import munchlyLogo from './img/munchlyLogo.png';

import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';


const Header=()=>
    {
        const[BtnNameReact,setBtnNameReact]=useState("Login");
        const onlineStatus=useOnlineStatus();
        const data=useContext(UserContext); // it is a hook from react
        console.log(data.loggedInUser);

        // selector  will give access to store
        // subscribing to the store using selector
        const cart=useSelector((store)=>store.cart.items); // subscribing to redux store
        console.log(cart);
        return(
           <div className="flex justify-between bg-pink-50 shadow-2xl sm:bg-yellow-50 lg:bg-purple-50">
            <div className="">
                <img className="w-20" src={munchlyLogo}/>
            </div>
            <div className="flex items-center">
           
                <ul className='flex p-4 m-4 justify-evenly'><li>Status:{onlineStatus? "✅" :"❌"}</li>
                    <li className='px-4 hover:text-blue-500'><Link to="./">Home</Link></li>
                    <li className='px-4 hover:text-blue-500'><Link to="/About"> About Us</Link></li>
                    <li className='px-4 hover:text-blue-500'><Link to="/Contact">Contact Us</Link></li>
                    <li className='px-4 hover:text-blue-500'><Link to="/Grocery">Grocery</Link></li>
                    <li className='px-4 hover:text-blue-500 font-bold'><Link to="/Cart">Cart -<span className="text-red-500">{cart.length}</span></Link></li>
                  <li> <button className='login ' onClick={
                        ()=>
                        {
                            BtnNameReact==="Login"? setBtnNameReact("Logout"):
                            setBtnNameReact("Login");
                        }
                    }>{BtnNameReact}</button></li> 

<li className='px-4'>{data.loggedInUser}</li>
                </ul>
            </div>
           </div> 
        )
    }
    export default Header;
// import munchlyLogo from './img/munchlyLogo.png';
// import { useContext, useState } from 'react';
// import { Link } from 'react-router-dom';
// import useOnlineStatus from '../utils/useOnlineStatus';
// import UserContext from '../utils/UserContext';
// import { useSelector } from 'react-redux';

// const Header = () => {
//   const [BtnNameReact, setBtnNameReact] = useState('Login');
//   const onlineStatus = useOnlineStatus();
//   const { loggedInUser } = useContext(UserContext); // Access user context
//   const cart = useSelector((store) => store.cart.items); // Access cart data

//   return (
//     <header className="bg-pink-50 shadow-2xl sm:bg-yellow-50 lg:bg-purple-50 sticky top-0 z-10">
//       <div className="container mx-auto flex flex-wrap items-center justify-between p-4">
//         {/* Logo Section */}
//         <Link to="/" className="flex-shrink-0">
//           <img 
//             className="w-20 sm:w-24" 
//             src={munchlyLogo} 
//             alt="Munchly Logo" 
//           />
//         </Link>

//         {/* Navigation Section */}
//         <nav className="w-full sm:w-auto mt-4 sm:mt-0">
//           <ul className="flex flex-wrap justify-center sm:justify-end space-x-4 sm:space-x-6 text-gray-800">
//             <li>
//               <Link className="hover:text-blue-500" to="/">Home</Link>
//             </li>
//             <li>
//               <Link className="hover:text-blue-500" to="/About">About Us</Link>
//             </li>
//             <li>
//               <Link className="hover:text-blue-500" to="/Contact">Contact Us</Link>
//             </li>
//             <li>
//               <Link className="hover:text-blue-500" to="/Grocery">Grocery</Link>
//             </li>
//             <li className="relative">
//               <Link className="hover:text-blue-500" to="/Cart">
//                 Cart
//                 <span className="bg-red-500 text-white rounded-full px-2 text-xs absolute -top-2 -right-4">
//                   {cart.length}
//                 </span>
//               </Link>
//             </li>
//           </ul>
//         </nav>

//         {/* User Action Section */}
//         <div className="flex items-center space-x-4 mt-4 sm:mt-0">
//           {/* Online Status */}
//           <span className={`font-semibold ${onlineStatus ? 'text-green-500' : 'text-red-500'}`}>
//             {onlineStatus ? '✅ Online' : '❌ Offline'}
//           </span>

//           {/* Logged-in User Display */}
//           <span className="text-gray-700">{loggedInUser || 'Guest'}</span>

//           {/* Login/Logout Button */}
//           <button
//             className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded shadow-md"
//             onClick={() =>
//               BtnNameReact === 'Login' ? setBtnNameReact('Logout') : setBtnNameReact('Login')
//             }
//           >
//             {BtnNameReact}
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;
