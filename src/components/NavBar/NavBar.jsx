import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="w-full bg-[#742706b4] backdrop-blur-md fixed z-50">
      <nav className="flex justify-between items-center h-16 max-w-[1240px] mx-auto max-md:flex-col kanit">
        <h1 className="text-[#00c2ca] font-bold">BoccaBocca Pizza</h1>
        <div>
          <ul className="text-[#00c2ca] flex gap-8 pb-2">
            <li className="nav__link">
              <Link to="/">Home</Link>
            </li>
            <li className="nav__link">
              <Link to="/menu">Menu</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

// 4747475f
