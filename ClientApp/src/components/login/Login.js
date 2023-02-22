import React, { Component } from 'react';
import styles from './login.module.css';

export class Login extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <h1 className={styles.heading}>Login to our website</h1>
        <form action='/asd' method='post'>
          <div className={styles.imgContainer}>
            <img
              src='images/avatar.jpg'
              alt='Avatar'
              className={styles.avatar}
            />
          </div>

          <div className={styles.container}>
            <label for='uname'>
              <b>Username</b>
            </label>
            <input
              type='text'
              placeholder='Enter Username'
              name='uname'
              required
            />

            <label for='psw'>
              <b>Password</b>
            </label>
            <input
              type='password'
              placeholder='Enter Password'
              name='psw'
              required
            />

            <button type='submit'>Login</button>
            <label>
              <input type='checkbox' checked='checked' name='remember' />{' '}
              Remember me
            </label>
          </div>

          <div
            className={styles.container}
            style={{ backgroundColor: '#f1f1f1' }}
          >
            <button type='button' className={styles.cancelBtn}>
              Cancel
            </button>
            <span className={styles.psw}>
              Forgot <a href='#'>password?</a>
            </span>
          </div>
        </form>
      </div>
    );
  }
}
