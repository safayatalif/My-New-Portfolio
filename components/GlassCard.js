import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

const GlassCard = ({ children, className = '', delay = 0 }) => {
  return (
    <motion.div
      variants={fadeIn('up', delay)}
      initial="hidden"
      whileInView={'show'}
      viewport={{ once: false, amount: 0.6 }}
      className={`bg-white/5 border border-white/10 backdrop-blur-md rounded-lg p-6 ${className}`}
    >
      {children}
    </motion.div>
  )
}

export default GlassCard
