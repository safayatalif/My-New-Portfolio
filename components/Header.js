import Image from "next/image";
import Link from "next/link";
import Socials from "../components/Socials";



const Header = ({ visible }) => {
  return (
    <header
      className={`bg-black/5 absolute z-30 w-full flex items-center px-2 xl:px-0 h-[40px] xl:h-[50px] transition-all duration-300 ${visible ? 'top-0' : '-top-[100px]'
        }`}
    >
      <div className="container mx-auto">
        <div className="flex flex-row lg:flex-row justify-between items-center gap-y-4 py-4 my-2">
          {/* logo */}
          <Link href="/">
            <Image src="/logo.svg" alt="" width={180} height={30} priority={true} />
          </Link>
          <Socials></Socials>
        </div>
      </div>
    </header>
  );
};

export default Header;
