import React, { Component } from 'react';
import styles from './work-time.module.css';

export class WorkTime extends Component {



  render() {
    return (
      <div className={styles.wrapper}>
        <h1 className={styles.heading}>Working hours</h1>
        <table border={1}>
          <tr>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
            <th>Sunday</th>
          </tr>
          <tr>
            <td>9:00-18:00</td>
            <td>9:00-18:00</td>
            <td>9:00-18:00</td>
            <td>9:00-18:00</td>
            <td>9:00-18:00</td>
            <td>8:00-19:00</td>
            <td>Off day</td>
          </tr>

        </table>

      </div>
    );
  }
}
