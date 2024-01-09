import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <Link to={'/'}>Crud App</Link>
            <ul className="nav-link">
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/users'}>Users</Link></li>
            </ul>
        </div>
    );
};

export default Navbar;