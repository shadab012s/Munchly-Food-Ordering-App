import munchlyLogo from '/img/munchly log.png';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';


const Header=()=>
    {
        const[BtnNameReact,setBtnNameReact]=useState("Login");
        const onlineStatus=useOnlineStatus();
        const data=useContext(UserContext); // it is a hook from react
        console.log(data.loggedInUser);
        return(
           <div className="flex justify-between bg-pink-50 shadow-2xl sm:bg-yellow-50 lg:bg-green-50">
            <div className="">
                <img className="w-20" src={munchlyLogo}/>
            </div>
            <div className="flex items-center">
           
                <ul className='flex p-4 m-4 justify-evenly'><li>Status:{onlineStatus? "✅" :"❌"}</li>
                    <li className='px-4'><Link to="./">Home</Link></li>
                    <li className='px-4'><Link to="/About"> About Us</Link></li>
                    <li className='px-4'><Link to="/Contact">Contact Us</Link></li>
                    <li className='px-4'><Link to="/Grocery">Grocery</Link></li>
                    <li className='px-4'>Cart</li>
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