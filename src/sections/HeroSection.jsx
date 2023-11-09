import { FaInstagram } from "react-icons/fa6";
import { GrMail } from "react-icons/gr";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col gap-6 justify-center items-center container">
      <div className="max-w-[800px] w-full rounded-sm px-4 mt-24">
        <img
          src="/wood-logo.jpg"
          alt="Bocca Bocca logo"
          className="rounded-lg"
        />
      </div>
      <div className="max-w-[800px] px-4 flex flex-col gap-4">
        <h1 className="rubik uppercase text-[#FFA600] text-center text-[3rem] drop-shadow-md">
          Pop up with pizzazz!
        </h1>
        <p className="kanit test-font font-semibold text-center text-2xl">{`Hey! Welcome to our website. We're an Orange-County based food pop-up striving to bring out the beauty in simple foods, namely pizza. We like to hone in and focus on the details of our ingredients and cooking method to bring a tasteful product that can't be easily replicated elsewhere. In a word-- we never prioritize quantity over quality.`}</p>
      </div>
      <div className="py-4 px-8 rounded-md">
        <h1 className="text-center mb-8 text-4xl font-bold">Contact Us!</h1>
        <ul className="flex flex-col md:flex-row gap-6 text-primary">
          <a
            href="https://www.instagram.com/BoccaBoccaPizza"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className="flex justify-center items-center">
              <FaInstagram size={32} />
              <span className="font-bold pl-2 text-xl">@BoccaBoccaPizza</span>
            </li>
          </a>{" "}
          <li className="flex justify-center items-center">
            <GrMail size={32} />{" "}
            <a
              className="font-bold pl-2 text-xl"
              href="mailto:BoccaBoccaPizza@gmail.com"
            >
              BoccaBoccaPizza@gmail.com
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default HeroSection;
