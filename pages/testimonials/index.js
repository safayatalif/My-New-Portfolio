// components
// import Circles from "../../components/Circles";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const testimonialData = [
  {
    company: "Self-Employed, Brisbane",
    date: "Aug 2014 - Sep 2016",
    role: "Visual Designer",
    description:
      "A visual designer designs for a variety of platforms, which may include Internet and intranet sites, games, movies, kiosks and wearables. In short, they create the concepts.",
  },
  {
    company: "New Man Services",
    date: "Jan 2017 - Mar 2018",
    role: "UI/UX Designer",
    description:
      "User interface design or user interface engineering is the design of user interfaces for machines and software, such as computers, home appliances, mobile devices.",
  },
  {
    company: "Global Solution",
    date: "Feb 2019 - Mar 2020",
    role: "Sr. Product Designer",
    description:
      "Find Product Photography Canada. Large Selection. Always Sale. Cheap Prices. Full Offer, Save Online. Compare Online. Simple Search, The Best Price. Compare Simply.",
  },
  {
    company: "Global Solution",
    date: "Feb 2019 - Mar 2020",
    role: "Sr. Product Designer",
    description:
      "Find Product Photography Canada. Large Selection. Always Sale. Cheap Prices. Full Offer, Save Online. Compare Online. Simple Search, The Best Price. Compare Simply.",
  },
  {
    company: "Global Solution",
    date: "Feb 2019 - Mar 2020",
    role: "Sr. Product Designer",
    description:
      "Find Product Photography Canada. Large Selection. Always Sale. Cheap Prices. Full Offer, Save Online. Compare Online. Simple Search, The Best Price. Compare Simply.",
  },
  {
    company: "Global Solution",
    date: "Feb 2019 - Mar 2020",
    role: "Sr. Product Designer",
    description:
      "Find Product Photography Canada. Large Selection. Always Sale. Cheap Prices. Full Offer, Save Online. Compare Online. Simple Search, The Best Price. Compare Simply.",
  },
];

const Testimonials = () => {
  return (
    <div className="h-full py-8 text-center xl:text-left">
      {/* <Circles /> */}
      <div className="container mx-auto h-full flex flex-col justify-center">
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="h2 mb-12 xl:mb-20 text-center"
        >
          Testimonials <span className="text-accent">.</span>
        </motion.h2>

        <div className="flex flex-col relative gap-y-12 xl:gap-y-12">
          {/* Dashed Line */}
          <div className="hidden xl:block absolute left-[50%] top-0 bottom-0 w-[1px] border-l border-dashed border-white/20 translate-x-[-50%]"></div>

          {testimonialData.map((item, index) => {
            return (
              <motion.div
                key={index}
                variants={fadeIn("up", 0.2 + index * 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.5 }}
                className="flex flex-col xl:flex-row items-center w-full relative z-10"
              >
                {/* Left Side */}
                <div className="flex-1 xl:text-right pr-0 xl:pr-24 mb-4 xl:mb-0 w-full xl:w-auto text-center xl:text-right">
                  <div className="text-xl font-bold mb-1 text-white">
                    {item.company}
                  </div>
                  <div className="text-accent text-sm uppercase tracking-widest font-semibold">
                    {item.date}
                  </div>
                </div>

                {/* Center Dot */}
                <div className="relative flex items-center justify-center shrink-0 mb-6 xl:mb-0">
                  <div className="w-[16px] h-[16px] rounded-full bg-accent/20 flex items-center justify-center xl:absolute xl:left-[50%] xl:translate-x-[-50%]">
                    <div className="w-[10px] h-[10px] bg-accent rounded-full animate-pulse"></div>
                  </div>
                </div>

                {/* Right Side */}
                <div className="flex-1 pl-0 xl:pl-24 w-full xl:w-auto text-center xl:text-left">
                  <div className="text-xl font-bold mb-2 text-white">
                    {item.role}
                  </div>
                  <p className="text-white/60 max-w-md mx-auto xl:mx-0 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
