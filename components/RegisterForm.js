
import Router from 'next/router';
import api from '../pages/api';
import {UserDataContext} from '../lib/userDataContext';
import { setCookie, removeCookie } from '../lib/cookies';

import styles from '../styles/components/RegisterForm.module.css';
export default function RegisterForm() {
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const {userData, setUserData} = React.useContext(UserDataContext);
  

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

    
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFormSubmit= async (e) => {
    e.preventDefault();
    try {
      const res = await api.register(username, email, password);
      const { status, data} = res;

      if(status !==200 ) {
        //show error
        console.log(res);
      }else {
        if(data &&  data.user) {
          setUserData(data.user);
          setCookie('token', data.user.token);
        }
        Router.push('/');
      }
    } catch(err) {
      console.log(err);
    }
  };



  return (
    <>
      <form className={styles.form} onSubmit={handleFormSubmit}>
        <h1>ثبت نام</h1>
        <input className={styles.input} type="text" required value={username} onChange={handleUsernameChange} placeholder="نام کاربری" />
        <input className={styles.input} type="email" required value={email} onChange={handleEmailChange} placeholder="ایمیل" />
        <input className={styles.input} type="password"  required value={password} onChange={handlePasswordChange}  placeholder="رمز عبور" />
        <button type="submit">ثبت نام</button>
      </form>
    </>
  );
}
