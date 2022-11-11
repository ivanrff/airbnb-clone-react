import AirbnbLogo from "../images/airbnb-logo.png"

const Navbar = () => {
    return (
        <nav>
            <img className='navbar--logo' src={AirbnbLogo} alt=""/>
        </nav>
    )
    
}

export default Navbar;