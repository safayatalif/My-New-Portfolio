import SectionHeading from '../../components/SectionHeading'
import GlassCard from '../../components/GlassCard'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'

const projects = [
  {
    title: 'Call Center Management System',
    tech: 'Next.js, Node.js, PostgreSQL, TypeScript, Tailwind CSS',
    description: 'Scalable web-based system to manage agents, customers, projects, and analytics with role-based access control and JWT authentication.',
    image: '/thumb1.jpg',
  },
  {
    title: 'H360 - Hospital ERP Solution',
    tech: 'Laravel, PHP, Oracle, jQuery, RESTful APIs',
    description: 'Robust ERP system for hospitals covering OPD, IPD, Pharmacy, Billing, Inventory, Accounts, and HRMS modules.',
    image: '/thumb2.jpg',
  },
  {
    title: 'Medicare Point - Medicine Booking',
    tech: 'React, Node.js, MongoDB, Tailwind CSS, Firebase',
    description: 'Online medicine booking platform with prescription upload, lab test booking, and pharmacist dashboards.',
    image: '/thumb3.jpg',
  },
  {
    title: 'Divine Mercy Hospital Website',
    tech: 'React, Next.js, JavaScript, ERP Integration',
    description: 'Official website integrated with ERP for online appointments, payments, and real-time data synchronization.',
    image: '/thumb4.jpg',
  },
];

const Work = () => {
  return (
    <div className="h-full py-8">
      <div className="container mx-auto h-full flex flex-col justify-center">
        <SectionHeading>Featured Projects</SectionHeading>

        <p className="text-white/70 max-w-2xl mb-8">Selection of projects showcasing full-stack development, healthcare solutions, and real-world impact.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <GlassCard key={i} delay={0.1 * i} className="flex flex-col h-full">
              <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
              <p className="text-accent text-sm font-semibold mb-2">{project.tech}</p>
              <p className="text-white/70 text-sm mb-4 flex-grow">{project.description}</p>
              <a href="#" className="text-accent hover:text-accent/80 transition text-sm font-semibold">View Project →</a>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Work;
