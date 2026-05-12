// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: '/thumb1.jpg',
        },
        {
          title: 'title',
          path: '/thumb2.jpg',
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
        },
        {
          title: 'title',
          path: '/thumb4.jpg',
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/thumb4.jpg',
        },
        {
          title: 'title',
          path: '/thumb1.jpg',
        },
        {
          title: 'title',
          path: '/thumb2.jpg',
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
        },
      ],
    },
  ],
};

import Image from 'next/image'
import GlassCard from './GlassCard'

const thumbs = ['/thumb1.jpg','/thumb2.jpg','/thumb3.jpg','/thumb4.jpg']

const WorkSlider = () => {
  return (
    <div className="py-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {thumbs.map((t, i) => (
          <GlassCard key={i} className="p-0 overflow-hidden">
            <div className="w-full h-40 md:h-48 relative">
              <Image src={t} alt={`work-${i}`} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  )
}

export default WorkSlider;
