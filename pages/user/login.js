import Head from 'next/head';
import LoginForm from '../../components/LoginForm';
import Navbar from '../../components/Navbar';

export default function login() {
  return (
    <>
      <Head>
        <title>ورود</title>
        <meta
          name="description"
          content="NextJS and Nodejs SSR Authentication, Authorization and Accounting"
        />
      </Head>
      <Navbar />
      <LoginForm />
    </>
  );
}
