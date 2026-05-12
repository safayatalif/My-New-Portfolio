import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

const SectionHeading = ({ children, className = '' }) => {
  return (
    <motion.h2
      variants={fadeIn('up', 0.2)}
      initial="hidden"
      whileInView={'show'}
      viewport={{ once: false, amount: 0.7 }}
      className={`h2 mb-8 ${className}`}
    >
      {children} <span className="text-accent">.</span>
    </motion.h2>
  )
}

export default SectionHeading
