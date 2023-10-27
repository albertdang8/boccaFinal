import { FaInstagram } from "react-icons/fa6";
import { GrMail } from "react-icons/gr";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col gap-6 justify-center items-center container">
      <div className="max-w-[800px] w-full rounded-sm px-4 mt-24">
        <img
          src="/wood-logo.jpg"
          alt="Bocca Bocca logo"
          className="rounded-lg transition-transform transform hover:scale-105"
        />
      </div>
      <div className="max-w-[800px] px-4 flex flex-col gap-4">
        <h1 className="rubik uppercase text-[#00c2ca] text-center text-[3rem]">
          Pop up with pizzazz!
        </h1>
        <p className="kanit text-center text-2xl">{`Hey! Welcome to our website. We're an Orange-County based food pop-up striving to bring out the beauty in simple foods, namely pizza. We like to hone in and focus on the details of our ingredients and cooking method to bring a tasteful product that can't be easily replicated elsewhere. In a word-- we never prioritize quantity over quality.`}</p>
      </div>
      <div className="py-4 px-8 rounded-md">
        <h1 className="text-center mb-4 text-4xl font-semibold">Contact Us:</h1>
        <ul className="flex flex-col gap-4">
          <li className="flex justify-center items-center">
            <FaInstagram />{" "}
            <span className="font-bold pl-2">@BoccaBoccaPizza</span>
          </li>
          <li className="flex justify-center items-center">
            <GrMail />{" "}
            <email className="font-bold pl-2">BoccaBoccaPizza@gmail.com</email>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default HeroSection;
