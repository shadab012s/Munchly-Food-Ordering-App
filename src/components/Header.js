import munchlyLogo from '/img/munchly log.png';
const Header=()=>
    {
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
                </ul>
            </div>
           </div> 
        )
    }
    export default Header;