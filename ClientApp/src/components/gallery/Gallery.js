import React, { Component } from 'react';
import styles from './gallery.module.css';

export class Gallery extends Component {
  render() {
    return (
      <>
        <h1 className={styles.heading}>Our zoo gallery</h1>
        <div className={styles.row}>
          <div className={styles.column}>
            <img src='/images/1.jpg' alt='animal' />
            <img src='/images/2.jpg' alt='animal' />
            <img src='/images/3.jpg' alt='animal' />
            <img src='/images/8.jpg' style={{ height: '251px' }} alt='animal' />
          </div>
          <div className={styles.column}>
            <img src='/images/4.jpg' alt='animal' />
            <img src='/images/5.jpg' alt='animal' />
            <img src='/images/6.jpg' alt='animal' />
          </div>
          <div className={styles.column}>
            <img src='/images/7.jpg' alt='animal' />
            <img src='/images/9.jpg' alt='animal' />
            <img src='/images/10.jpg' alt='animal' />
          </div>
        </div>
      </>
    );
  }
}
