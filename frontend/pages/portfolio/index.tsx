import { motion } from "framer-motion";
import Image from "next/image";
const Cat1 = require("../../public/assets/illustration/cat_1.png");
const Cat2 = require("../../public/assets/illustration/cat_2.png");
const Banner = require("../../public/assets/illustration/banner_bonitocat.png");

function Portfolio() {
  return (
    <div>
      <div>
        {" "}
        <motion.div animate={{ scale: 1.5 }}>
          <h1 className="text-2xl font-bold">Work Portfolio</h1>
        </motion.div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
      </div>

      <div className="card bordered grid grid-cols-1 gap-4">
        <figure>
          <motion.div animate={{ scale: 1.5 }}>
            <Image src={Banner} alt="cat picture" />
          </motion.div>
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
