// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
} from "react-icons/rx";


// data
const serviceData = [
  {
    icon: <RxCrop className="text-2xl" />,
    title: 'Branding',
    description: 'Strategy, identity and visual systems for digital products and brands.',
  },
  {
    icon: <RxPencil2 className="text-2xl" />,
    title: 'Design',
    description: 'UI/UX design, prototyping and interaction design with user focus.',
  },
  {
    icon: <RxDesktop className="text-2xl" />,
    title: 'Development',
    description: 'Modern frontend development using React, Next.js and accessible HTML.',
  },
  {
    icon: <RxReader className="text-2xl" />,
    title: 'Copywriting',
    description: 'Concise product copy and microcopy for better conversion and clarity.',
  },
  {
    icon: <RxRocket className="text-2xl" />,
    title: 'SEO',
    description: 'Performance and discoverability improvements for product websites.',
  },
];

import GlassCard from './GlassCard'

const ServiceSlider = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {serviceData.map((s, i) => (
        <GlassCard key={i} delay={0.1 * i} className="text-left">
          <div className="flex items-center gap-4">
            <div className="text-accent bg-white/5 p-3 rounded-lg inline-flex">
              {s.icon}
            </div>
            <div>
              <div className="text-lg font-bold text-white mb-1">{s.title}</div>
              <p className="text-white/70 text-sm">{s.description}</p>
            </div>
          </div>
        </GlassCard>
      ))}
      </div>
  )
}

export default ServiceSlider;
