import Image from "next/image";

const Avatar = ({ width = 737, height = 678, className = "" }) => {
  return <div className={`flex xl:max-w-none ${className}`}>
    <Image
      className="translate-z-0 w-full h-full"
      src={'/avatar-2.png'}
      width={width}
      height={height}
      alt="" />
  </div>;
};

export default Avatar;
