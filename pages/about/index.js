import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import GlassCard from '../../components/GlassCard'
import SectionHeading from '../../components/SectionHeading'

const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Frontend',
        icons: ['React','Next.js','TypeScript','Tailwind CSS','Redux','jQuery']
      },
      {
        title: 'Backend',
        icons: ['Node.js','Express','Laravel','PHP','REST APIs']
      },
      {
        title: 'Database',
        icons: ['PostgreSQL','Oracle','MySQL','MongoDB']
      },
      {
        title: 'Tools',
        icons: ['Git','GitHub','GitLab','VS Code']
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Software Engineer L2 - Gigabit',
        stage: 'January 2026 - Present',
      },
      {
        title: 'Software Engineer - Nextgen Innovation Ltd.',
        stage: 'December 2024 - January 2026',
      },
      {
        title: 'Software Implementation Engineer - Nextgen Innovation Ltd.',
        stage: 'August 2023 - December 2024',
      },
    ],
  },
  {
    title: 'education',
    info: [
      {
        title: 'B.Sc. in CSE - Southeast University',
        stage: '2nd Year (Ongoing)',
      },
      {
        title: 'Diploma in CSE - Shariatpur Polytechnic Institute',
        stage: 'June 2019 - November 2023 | CGPA: 3.75',
      },
    ],
  },
];

const About = () => {
  return (
    <div className="h-full py-8">
      <Circles />

      <div className="container mx-auto h-full flex flex-col lg:flex-row items-start gap-8">
        <div className="flex-1">
          <SectionHeading>About</SectionHeading>

          <motion.p
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView={'show'}
            className="max-w-2xl text-white/80 mb-6"
          >
            Motivated Software Engineer with 2.5+ years of hands-on, full-stack experience in HIS/ERP and web application development.
            Expertise in Laravel, React, Next.js, and Node.js. Dedicated to building efficient, scalable, and user-focused software solutions.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aboutData.map((section, sidx) => (
              <div key={sidx}>
                <h3 className="text-accent uppercase tracking-widest font-semibold mb-3">{section.title}</h3>
                <div className="flex flex-col gap-4">
                  {section.info.map((it, idx) => (
                    <GlassCard key={idx} delay={0.05 * idx} className="">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="font-semibold text-white text-lg">{it.title}</div>
                          {it.stage && (
                            <div className="text-white/60 text-sm mt-1">{it.stage}</div>
                          )}
                        </div>
                        {it.icons && (
                          <div className="text-white/60 text-sm flex gap-2 items-center">
                            {it.icons.map((icon, i) => (
                              <div className="px-2 py-1 bg-white/5 rounded text-sm" key={i}>{icon}</div>
                            ))}
                          </div>
                        )}
                      </div>
                    </GlassCard>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView={'show'}
          className="w-full lg:w-[420px] xl:w-[520px] max-w-[520px] relative"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
