import Link from 'next/link';
import styles from '../styles/components/HeaderMenu.module.css';
import {UserDataContext} from '../lib/userDataContext';
import { setCookie, removeCookie } from '../lib/cookies';

export default function HeaderMenu() {
  const {userData, setUserData} = React.useContext(UserDataContext);
  const handleLogout = () => {
    setUserData(null);
    removeCookie('token');

  };
  return (
    <>
      <ul className={styles.menu}>
        <li><Link href="/">خانه</Link></li>
        
        {!userData && (<li><Link href="/user/login">ورود</Link></li>)}
        {!userData && (<li><Link href="/user/register">ثبت نام</Link></li>)}
        {userData && (<li><button onClick={handleLogout} className={styles.button} type="button" >خروج</button></li>)}
        
      </ul>
    </>
  );
}
