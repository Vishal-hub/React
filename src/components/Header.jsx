import { LOGO_IMG } from "../utils/constant";

const Header = () => {
  return (
    <div className="header">
    <img
      className="logo"
      src={LOGO_IMG}
      alt="logo"
    />
      <h1>EAT @ MOTA SINGH</h1>
      <nav className="nav-items">
        <ul className="nav-list">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
