import HeaderMenu from './HeaderMenu';
import Logo from './Logo';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  return (
    <>
      <navbar className={styles.navbar}>
        <div className={styles.items}>
          <Logo>NextJS</Logo>
          <HeaderMenu />
        </div>
      </navbar>
    </>
  );
}