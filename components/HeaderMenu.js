import Link from 'next/link';
import styles from '../styles/components/HeaderMenu.module.css';
export default function HeaderMenu() {
  return (
    <>
      <ul className={styles.menu}>
        <li><Link href="/">خانه</Link></li>
        <li><Link href="/user/login">ورود</Link></li>
        <li><Link href="/user/register">ثبت نام</Link></li>
      </ul>
      <style jsx>{`

      `}</style>
    </>
  );
}
