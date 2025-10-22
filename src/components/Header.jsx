import { Link } from "react-router-dom";
import { LOGO_IMG } from "../utils/constant";
import useOnline from "./useOnline";

const Header = () => {

  const status = useOnline();
  
  return (
    <div className="flex items-center justify-between bg-gray-100 p-4 shadow-md">
      {/* Logo and Brand Name */}
      <div className="flex items-center">
        <img
          className="w-10 sm:w-12"
          src={LOGO_IMG}
          alt="logo"
        />
        <a href="/">
          <h1 className="ml-2 text-2xl sm:text-3xl font-bold text-gray-800 tracking-tight">
            EAT @ MOTA SINGH
          </h1>
        </a>
      </div>

      {/* Navigation Items */}
      <nav>
        <ul className="flex items-center space-x-4 md:space-x-8">
          <li className="text-sm md:text-base font-medium text-gray-500">
            Online Status: {status ? <span className="text-green-500">✅</span> : <span className="text-red-500">❌</span>}
          </li>
          <Link to="/">
            <li className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Home</li>
          </Link>
          <Link to="/about">
            <li className="text-gray-600 hover:text-gray-900 transition-colors duration-200">About</li>
          </Link>
          <Link to="/contact">
            <li className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Contact</li>
          </Link>
          <Link to="/cart">
            <li className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Cart</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};


export default Header;
