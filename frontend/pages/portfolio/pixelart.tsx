import { motion } from "framer-motion";

function PixelArt() {
  return (
    <div>
      <motion.div animate={{ scale: 1.5 }}>
        <h1 className="text-2xl font-bold">Pixel Art</h1>
      </motion.div>
    </div>
  );
}

export default PixelArt;
