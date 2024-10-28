import munchlyLogo from '/img/munchly log.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';


const Header=()=>
    {
        const[BtnNameReact,setBtnNameReact]=useState("Login");
        const onlineStatus=useOnlineStatus();
        return(
           <div className="header">
            <div className="logo-Conainer">
                <img className="logo" src={munchlyLogo}/>
            </div>
            <div className="nav-items">
           
                <ul><li>Status:{onlineStatus? "✅" :"❌"}</li>
                    <li><Link to="./">Home</Link></li>
                    <li><Link to="/About"> About Us</Link></li>
                    <li><Link to="/Contact">Contact Us</Link></li>
                    <li><Link to="/Grocery">Grocery</Link></li>
                    <li>Cart</li>
                    <button className='login' onClick={
                        ()=>
                        {
                            BtnNameReact==="Login"? setBtnNameReact("Logout"):
                            setBtnNameReact("Login");
                        }
                    }>{BtnNameReact}</button>
                </ul>
            </div>
           </div> 
        )
    }
    export default Header;