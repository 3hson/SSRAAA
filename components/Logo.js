import styles from '../styles/components/Logo.module.css';


export default function Logo ({children}) {
  return (
    <>
      <a className={styles.logo} href="/">
        {children}
      </a>
    </>
  );
}

