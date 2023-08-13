import './CampProject.css'
import { motion } from 'framer-motion';


export default function CampProject() {
  return (
    <motion.div
      className='CampProject'
      initial={{ opacity: 0, y:1000}}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1.2
      }}
    >
      <div className='CampProject__inner'>
        <h1>Chan-Camp</h1>
        <h2>-Chan Young-</h2>
      </div>
    </motion.div>

  )
}