import Image from "next/image";

// Componet
import ParticlesContainer from "../components/ParticlesContainer"
import ProjectsBtn from "../components/ProjectsBtn"
import Avatar from "../components/Avatar"

// framer motion 
import { motion } from 'framer-motion'

//variants 
import { fadeIn } from "../variants";

// to-do: 45:00


const Home = () => {
  return <div className="bg-primary/60 h-full">
    <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
      <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
        {/* title */}
        <h1 className="h1">
          Transforming Ideas <br /> Into {' '}
          <span className="text-accent">Digital Reality</span>
        </h1>
        {/* sub title */}
        <p className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16">
          Excepteur reprehenderit Lorem id et voluptate dolore ad qui ad incididunt nulla excepteur veniam. Dolor nostrud reprehenderit aute nulla consecteturet Lorem cillum mollit quis enim exercitation sit nulla amet  tempor deserunt tempor eiusmod laborum.
        </p>
        {/* btn  */}
        <div className="flex justify-center xl:hidden relative">
          <ProjectsBtn></ProjectsBtn>
        </div>
      </div>
    </div>
    image
    <div>
      image
    </div>
  </div>;
};

export default Home;
