// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from 'react-icons/hi2';


//next link
import Link from 'next/link';

//next router
import { useRouter } from 'next/router';



// nav data
export const navData = [
  { name: 'home', path: '/', icon: <HiHome /> },
  { name: 'about', path: '/about', icon: <HiUser /> },
  { name: 'services', path: '/services', icon: <HiRectangleGroup /> },
  { name: 'work', path: '/work', icon: <HiViewColumns /> },
  {
    name: 'testimonials',
    path: '/testimonials',
    icon: <HiChatBubbleBottomCenterText />,
  },
  {
    name: 'contact',
    path: '/contact',
    icon: <HiEnvelope />,
  },
];

const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;

  return <nav>
    {/* inner */}
    <div className='flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10  '>
      {navData.map((item, index) => {
        return <Link key={index} href={item.path} >{item.icon} </Link>
      })}
    </div>
  </nav>;
};

export default Nav;
