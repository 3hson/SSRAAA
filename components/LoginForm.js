import api from '../pages/api';
import Router from 'next/router';
import {UserDataContext} from '../lib/userDataContext';

import styles from '../styles/components/LoginForm.module.css';
export default function LoginForm() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const {userData, setUserData} = React.useContext(UserDataContext);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

    
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit= async (e) => {
    e.preventDefault();
    try {
      const res = await api.login(email, password);
      const { status, data} = res;

      if(status !==200 ) {
        //show error
        console.log(res);
      } else {
        if(data &&  data.user) {
          setUserData(data.user);
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
        <h1>ورود</h1>
        <input className={styles.input} type="text" required value={email} onChange={handleEmailChange} placeholder="ایمیل" />
        <input className={styles.input} type="password"  required value={password} onChange={handlePasswordChange}  placeholder="رمز عبور" />
        <button type="submit">ورود</button>
      </form>
    </>
  );
}
