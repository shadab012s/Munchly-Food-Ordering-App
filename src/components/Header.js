import munchlyLogo from '/img/munchly log.png';
import { useState } from 'react';
const Header=()=>
    {
        const[BtnNameReact,setBtnNameReact]=useState("Login");
        return(
           <div className="header">
            <div className="logo-Conainer">
                <img className="logo" src={munchlyLogo}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
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