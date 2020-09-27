import styles from '../styles/components/RegisterForm.module.css';

export default function RegisterForm() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

    
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit= (e) => {
    e.preventDefault();
  };



  return (
    <>
      <form className={styles.form} onSubmit={handleFormSubmit}>
        <h1>ثبت نام</h1>
        <input className={styles.input} type="text" required value={username} onChange={handleUsernameChange} placeholder="نام کاربری" />
        <input className={styles.input} type="password"  required value={password} onChange={handlePasswordChange}  placeholder="رمز عبور" />
        <button type="submit">ثبت نام</button>
      </form>
    </>
  );
}
