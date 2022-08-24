import Image from "next/image";
export const Bonita = require("../public/assets/img/bonita.png");
const Emily = require("../public/assets/img/emily600px.png");
const Colours = require("../public/assets/img/colours600px.png");
const Cat = require("../public/assets/img/cat600px.png");

export default function Home() {
  return (
    <div className="flex flex-col items-center  ">
      {/* <h1 className="text-3xl text-center pb-4">
        Welcome to my{" "}
        <a className="text-yellow-400 font-bold" href="/portfolio/">
          portfolio
        </a>
      </h1> */}

      <div className="card-normal  bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <Image src={Bonita} alt="Bonita Logo" quality={100} />
        </figure>
        <div className="card-body items-center text-center">
          <h4>DESIGN</h4>
        </div>
      </div>
      <div className="">
        <Image src={Emily} alt="Emily Murphy Logo" quality={100} />
      </div>
      <div className="">
        <Image src={Colours} alt="Colours Logo" quality={100} />
      </div>
      <div className="">
        <Image src={Cat} alt="Cat Illustration" quality={100} />
      </div>
    </div>
  );
}
