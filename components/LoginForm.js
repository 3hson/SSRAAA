import styles from '../styles/LoginForm.module.css';

export default function LoginForm() {
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
      <form onSubmit={handleFormSubmit}>
        <input type="text" required value={username} onChange={handleUsernameChange} placeholder="نام کاربری" />
        <input type="password"  required value={password} onChange={handlePasswordChange}  placeholder="رمز عبور" />
      </form>
    </>
  );
}
