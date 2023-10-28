import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="w-full bg-[#742706b4] backdrop-blur-md fixed z-50">
      <nav className="flex justify-between items-center min-h-16 max-w-[1240px] mx-auto max-md:flex-col kanit container">
        <h1 className="text-[#00c2ca] font-bold">BoccaBocca Pizza</h1>
        <div>
          <ul className="text-[#00c2ca] flex pb-2">
            <Link to="/">
              <li className="nav__link py-4 px-8">Home</li>
            </Link>
            <Link to="/menu">
              <li className="nav__link py-4 px-8">Menu</li>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

// 4747475f
