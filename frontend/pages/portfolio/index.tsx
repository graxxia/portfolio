import Image from "next/image";
const Cat1 = require("../../public/assets/3D/Donut.png");
const Cat2 = require("../../public/assets/3D/Donut.png");
const Banner = require("../../public/assets/3D/Donut.png");

function Portfolio() {
  return (
    <div>
      <div>
        {" "}
        <h1 className="text-2xl font-bold">Work Portfolio</h1>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
      </div>

      <div className="card bordered grid grid-cols-1 gap-4">
        <figure>
          <Image src={Banner} alt="cat picture" />
        </figure>
      </div>

      <div className="card bordered grid grid-cols-2 gap-4">
        <figure>
          <Image src={Cat1} alt="cat picture" />
        </figure>
        <figure>
          <Image src={Cat2} alt="cat picture" />
        </figure>
      </div>
    </div>
  );
}

export default Portfolio;
