import React from "react";

const FullMenu = () => {
  return (
    <section className="container min-h-screen flex flex-col justify-center items-center">
      <div className="mt-24">
        <ul className="flex flex-wrap justify-center items-center gap-12">
          <li className="bg-secondary px-8 py-12 text-background rounded-lg">
            <h2 className="text-2xl">Spicy Marinara: </h2>
            <ul>
              <li>Double Red Sauce</li>
              <li>Garlic Paste</li>
              <li>Calabrian Chili</li>
              <span>finished with</span>
              <li>Arugula & Sea Salt</li>
              <li>$15</li>
            </ul>
          </li>
          <li className="bg-primary px-8 py-12 text-background rounded-lg">
            <h2 className="text-2xl">Shroom: </h2>
            <ul>
              <li>Roasted Mushrooms and Onion</li>
              <li>Low Moisture Mozzarella</li>
              <li>Garlic Oil</li>
              <li>Walnut-Fennel Pesto</li>
              <li>$16</li>
            </ul>
          </li>
          <li className="bg-primary px-8 py-12 text-background rounded-lg">
            <h2 className="text-2xl">Spicy Salami: </h2>
            <ul>
              <li>Salami</li>
              <li>Red Sauce</li>
              <li>Low Moisture Mozzarella</li>
              <li>Pickled Serranos</li>
              <li>Hot Honey</li>
              <li>$16</li>
            </ul>
          </li>
          <li className="bg-secondary px-8 py-12 text-background rounded-lg">
            <h2 className="text-2xl">Pepperoni: </h2>
            <ul>
              <li>Pepperoni</li>
              <li>Red Sauce</li>
              <li>Low Moisture Mozzarella</li>
              <span>finished with</span>
              <li>Toasted Pistachio Dust</li>
              <li>$16</li>
            </ul>
          </li>
          <li className="bg-accent px-8 py-12 text-background rounded-lg">
            <h2 className="text-2xl">Crazy Bread: </h2>
            <ul>
              <li>Low Moisture Mozzarella</li>
              <li>Garlic Paste</li>
              <li>Black Pepper</li>
              <li>Parm</li>
              <li>$12</li>
            </ul>
          </li>
        </ul>
      </div>
      <img
        src="/menu.png"
        alt="Menu for Bocca Bocca"
        className="rounded-xl max-h-264 my-24"
      />
    </section>
  );
};

export default FullMenu;
