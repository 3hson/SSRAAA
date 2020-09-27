import HeaderMenu from './HeaderMenu';
import Logo from './Logo';
import styles from '../styles/components/Navbar.module.css';

export default function Navbar() {
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.items}>
          <Logo>NextJS</Logo>
          <HeaderMenu />
        </div>
      </div>
    </>
  );
}