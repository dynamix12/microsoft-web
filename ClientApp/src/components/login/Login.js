import React from 'react';
import styles from './login.module.css';

const Login = () => {
  const getUser = async () => {
    const response = await fetch(`https://${window.location.host}/user`);
    const [user] = await response.json();
    localStorage.setItem('user', JSON.stringify(user));
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>Login to our website</h1>
      <form action='/'>
        <div className={styles.imgContainer}>
          <img src='images/avatar.jpg' alt='Avatar' className={styles.avatar} />
        </div>

        <div className={styles.container}>
          <label htmlFor='uname'>
            <b>Username</b>
          </label>
          <input
            type='text'
            placeholder='Enter Username'
            name='uname'
            required
          />

          <label htmlFor='psw'>
            <b>Password</b>
          </label>
          <input
            type='password'
            placeholder='Enter Password'
            name='psw'
            required
          />

          <button onClick={() => getUser()} type='submit'>
            Login
          </button>
          <label>
            <input
              onChange={() => {}}
              type='checkbox'
              checked='checked'
              name='remember'
            />{' '}
            Remember me
          </label>
        </div>

        <div
          className={`${styles.container} ${styles.formFooter}`}
          style={{ backgroundColor: '#f1f1f1' }}
        >
          <span className={styles.psw}>
            Don't have an account?<a href='/register'> Sign Up</a>
          </span>
          <span className={styles.psw}>
            Forgot <a href='/'>password?</a>
          </span>
        </div>
      </form>
    </div>
  );
};
export default Login;
