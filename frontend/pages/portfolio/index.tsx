import { motion } from "framer-motion"


function Portfolio() {

  return  (<div><motion.div animate={{ scale: 1.5 }}><h1 className="text-2xl font-bold">Work Portfolio</h1></motion.div>

  <div className="grid grid-cols-2 gap-4"><img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" /><img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" /></div></div>
  )
  }
  
  export default Portfolio