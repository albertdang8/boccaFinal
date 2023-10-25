const NavBar = () => {
  return (
    <div className="w-full bg-[#4747475f] backdrop-blur-md fixed z-50">
      <nav className="flex justify-between items-center h-16 max-w-[1240px] mx-auto max-md:flex-col kanit">
        <h1 className="text-primary font-bold">BoccaBocca Pizza</h1>
        <div>
          <ul className="text-primary">
            <li>
              <a href="#menu">Menu</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
