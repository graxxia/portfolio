import Image from "next/image";
import Bonita from "../assets/img/bonita600px.png";
import Emily from "../assets/img/emily600px.png";
import Colours from "../assets/img/colours600px.png";
import Cat from "../assets/img/cat600px.png";

export default function Home() {
  return (
    <div className="flex flex-col items-center  ">
      {/* <h1 className="text-3xl text-center pb-4">
        Welcome to my{" "}
        <a className="text-yellow-400 font-bold" href="/portfolio/">
          portfolio
        </a>
      </h1> */}

      <div className="">
        <Image src={Bonita} alt="Bonita Logo" quality={100} />
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
