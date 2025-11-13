import '../styles/globals.css';
import Layout from '../components/Layout';
import Transition from '../components/Transition';


// router  

import { useRouter } from 'next/router';

// framer motion
import { AnimatePresence, motion } from 'framer-motion';





function MyApp({ Component, pageProps }) {
  const router = useRouter();
  // vedio duration = 28.27;
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
