import React, { Component } from 'react';
import styles from './register.module.css';

export class Register extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <h1 className={styles.heading}>Sign Up into our website</h1>
        <form action='/asd' method='post'>
          <div className={styles.imgContainer}>
            <img
              src='images/avatar.jpg'
              alt='Avatar'
              className={styles.avatar}
            />
          </div>

          <div className={styles.container}>
            <label htmlFor='name'>
              <b>Name</b>
            </label>
            <input
              id='name'
              type='text'
              placeholder='Enter Name'
              name='name'
              required
            />

            <label htmlFor='uname'>
              <b>Username</b>
            </label>
            <input
              id='uname'
              type='text'
              placeholder='Enter Username'
              name='uname'
              required
            />

            <label htmlFor='psw'>
              <b>Password</b>
            </label>
            <input
              id='psw'
              type='password'
              placeholder='Enter Password'
              name='psw'
              required
            />
            <label htmlFor='psw2'>
              <b>Repeat Password</b>
            </label>
            <input
              id='psw2'
              type='password'
              placeholder='Repeat Password'
              name='psw2'
              required
            />

            <button type='submit'>Sign Up</button>
          </div>
        </form>
      </div>
    );
  }
}
