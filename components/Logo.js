import styles from '../styles/components/Logo.module.css';
import Link from 'next/link';

export default function Logo ({children}) {
  return (
    <>
      <Link className={styles.logo} href="/">
        {children}
      </Link>
    </>
  );
}

