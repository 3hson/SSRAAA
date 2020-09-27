import Head from 'next/head';
import styles from '../styles/Home.module.css';

import Navbar from '../components/Navbar';
export default function Home() {
  return (
    <>
      <Head>
        <title>خانه</title>
        <meta
          name="description"
          content="NextJS and Nodejs SSR Authentication, Authorization and Accounting"
        />
      </Head>
      <Navbar />
    </>
  );
}