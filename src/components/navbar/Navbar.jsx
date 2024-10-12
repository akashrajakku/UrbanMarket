import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import { useSelector } from "react-redux";


const Navbar = () => {
    const user = JSON.parse(localStorage.getItem('users'));

    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear('users');
        navigate("/login")
    }

    const cartItems = useSelector((state) => state.cart);

    const navList = (
        <div className="flex justify-between">
                <ul className="flex space-x-8 text-white font-bold">
                <li>
                <a href="#home" className="hover:shadow-2xl p-4">
                    Home
                </a>
                </li>
                <li>
                <a href="#about" className="hover:shadow-2xl p-4">
                    About
                </a>
                </li>
                <li>
                <a href="#services" className="hover:shadow-2xl p-4">
                    Services
                </a>
                </li>
                <li>
                <a href="#contact" className="hover:shadow-2xl p-4">
                    Contact
                </a>
                </li>
            </ul>
        </div>
    )
    return (
        <nav className="bg-blue-700 sticky top-0">
            {/* main  */}
            <div className="lg:flex lg:justify-between items-center py-3 lg:px-3 ">
                {/* left  */}
                <div className="left py-3 lg:py-0">
                    <Link to={'/'}>
                        <h2 className=" font-bold text-white text-3xl text-center">E-Bharat</h2>
                    </Link>
                </div>

                {/* right  */}
                <div className="right flex justify-between mb-4 lg:mb-0">
                    {navList}
                </div>

                {/* Search Bar  */}
                <SearchBar />
            </div>
        </nav>
    );
}

export default Navbar;
