const Menu = () => {
  return (
    <div className="w-full bg-accent">
      <section className="container mt-8 pt-16 pb-24 flex flex-col justify-center items-center gap-8">
        <div className="flex flex-col items-center">
          <h1 className="text-8xl font-bold rubik text-primary">Menu</h1>
          <span className="text-xs font-normal kanit">{`(subject to change)`}</span>
        </div>
        <div aria-describedby="menu-description" className="p-16">
          <img
            src="/menu.png"
            alt="Menu for Bocca Bocca"
            className="rounded-xl transition-transform transform hover:scale-105"
          />
          <div id="menu-description" className="sr-only">
            Our menu includes a variety of delicious Italian pies. Prices,
            availability and changes are subject to change. For a more elaborate
            menu, please go to the menu page.
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;
