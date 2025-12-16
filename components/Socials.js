import Link from "next/link";
import { RiYoutubeLine, RiFacebookLine, RiInstagramLine, RiLinkedinLine, RiGithubLine } from "react-icons/ri";


const Socials = () => {
  return (
    <div className="flex items-center  md:gap-x-5 gap-x-2 text-lg">
      <Link href={'#'} className="hover:text-accent transition-all duration-300">
        <RiYoutubeLine />
      </Link>
      <Link href={'#'} className="hover:text-accent transition-all duration-300">
        <RiFacebookLine />
      </Link>
      <Link href={'#'} className="hover:text-accent transition-all duration-300">
        <RiInstagramLine />
      </Link>
      <Link href={'#'} className="hover:text-accent transition-all duration-300">
        <RiLinkedinLine />
      </Link>
      <Link href={'#'} className="hover:text-accent transition-all duration-300">
        <RiGithubLine />
      </Link>
    </div>
  );
};

export default Socials;
