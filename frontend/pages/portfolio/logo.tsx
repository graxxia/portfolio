import { motion } from "framer-motion";
import { Bonita } from "pages";
import Image from "next/image";

function Logo() {
  return (
    <div>
      <motion.div animate={{ scale: 1.5 }}>
        <h1 className="text-2xl font-bold">Logo</h1>
      </motion.div>

      <div className="card-normal  bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <Image src={Bonita} alt="Bonita Logo" quality={100} />
        </figure>
        <div className="card-body items-center text-center">
          <h4>DESIGN</h4>
        </div>
      </div>
    </div>
  );
}

export default Logo;
