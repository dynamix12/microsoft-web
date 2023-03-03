import React, { Component } from 'react';
import styles from './location.module.css';

export class Location extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <h1 className={styles.heading}>Here is our location</h1>
        <iframe
          className={styles.map}
          title='zoo location'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6978.852489147106!2d23.326838067245557!3d42.65614167512301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x405b8bc0ff09ea1d%3A0x5f15d7008b99c072!2sSofia%20Zoo!5e0!3m2!1sen!2sbg!4v1677857247188!5m2!1sen!2sbg'
          width='600'
          height='450'
          allowFullScreen=''
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        ></iframe>
      </div>
    );
  }
}
