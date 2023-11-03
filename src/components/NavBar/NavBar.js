import CartWidget from "../CartWidget/CartWidget";
import {NavLink, Link} from 'react-router-dom';

const NavBar = () => {

    //<img src={logoEcommerce} alt="Logo Neo Ecommerce"/>
    return (
        <nav className="navbar">
            <Link to="/">
                <h3>Veed Style</h3>
            </Link>
            <div className="Categories">
                        <NavLink to={`/category/Mates Linea Gold`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}> Mates Linea Gold</NavLink>
                        <NavLink to={`/category/Mates de algarrobo`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Mates de albarrobo</NavLink>
                        <NavLink to={`/category/Mates Linea Premium`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Mates Linea Premium</NavLink>
            </div>
            <CartWidget/>
        </nav>

    )
}

export default NavBar;