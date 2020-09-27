import Head from 'next/head';
import RegisterForm from '../../components/RegisterForm';
import Navbar from '../../components/Navbar';

export default function login() {
  return (
    <>
      <Head>
        <title>ثبت نام</title>
        <meta
          name="description"
          content="NextJS and Nodejs SSR Authentication, Authorization and Accounting"
        />
      </Head>
      <Navbar />
      <RegisterForm />
    </>
  );
}
