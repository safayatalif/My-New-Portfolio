import Image from "next/image";

// Components
import ParticlesContainer from "../components/ParticlesContainer"
import ProjectsBtn from "../components/ProjectsBtn"
import Avatar from "../components/Avatar"

// framer motion 
import { motion } from 'framer-motion'

//variants 
import { fadeIn } from "../variants";

const Home = () => {
    return <div className="h-full">
        <div className="w-full h-full ">
            <div className="container mx-auto h-full flex flex-col justify-center items-center text-center pb-20">

                {/* Avatar Section - Centered */}
                <motion.div
                    variants={fadeIn('up', 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.5 }}
                    className="w-full max-w-[220px] xl:max-w-[320px] mb-4 relative"
                >
                    <Avatar width={320} height={320} className="mx-auto" />
                </motion.div>

                {/* Text Section - Below Avatar */}
                <motion.div
                    variants={fadeIn('up', 0.2)}
                    // initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.5 }}
                    className="z-10"
                >
                    <h1 className="h1 mb-2">
                        Safayat Hossen <span className="text-accent">Alif</span>
                    </h1>
                    <p className="tracking-widest mb-4 text-sm md:text-base uppercase text-white/70">
                        Software Engineer // Product Designer
                    </p>

                    {/* <div className="flex justify-center mt-6">
            <ProjectsBtn />
          </div> */}
                </motion.div>

                {/* Brands/Footer Section */}
                <motion.div
                    variants={fadeIn('up', 0.8)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.5 }}
                    className="mt-8 w-full flex flex-wrap justify-center items-center gap-6 md:gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500"
                >
                    {/* Placeholder Brands - you can replace with actual SVG/Images */}
                    <span className="text-lg font-bold">Slack</span>
                    <span className="text-lg font-bold">Amazon</span>
                    <span className="text-lg font-bold">Logitech</span>
                    <span className="text-lg font-bold">Google</span>
                    <span className="text-lg font-bold">Facebook</span>
                </motion.div>

            </div>
        </div>
    </div>;
};

export default Home;
