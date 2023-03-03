import React, { Component } from 'react';
import styles from './faq.module.css';

export class FAQ extends Component {
  data = [
    {
      question: 'What are your safety enhancements at ZooSofia?',
      answer:
        'For more than 40 years, ZooSofia® North Sofia Wildlife Park has strived to provide exceptional expert care to more than 200 animals while educating guests and the greater community in a safe and enjoyable environment. As an AZA-accredited zoo, safety has and will continue to be the top priority at ZooSofia. Based on updated Pennsylvania guidance, we have updated our safety enhancements. Guests are free to continue to wear face coverings anywhere on property if they choose to do so. Please note reservations are not required to visit ZooSofia.',
    },
    {
      question: 'What are your safety enhancements at ZooSofia?',
      answer:
        'For more than 40 years, ZooSofia® Bulgarian Wildlife Park has strived to provide exceptional expert care to more than 200 animals while educating guests and the greater community in a safe and enjoyable environment. As an AZA-accredited zoo, safety has and will continue to be the top priority at ZooSofia. Based on updated Pennsylvania guidance, we have updated our safety enhancements. Guests are free to continue to wear face coverings anywhere on property if they choose to do so. Please note reservations are not required to visit ZooSofia.',
    },
    {
      question: 'What type of payments does ZooSofia accept?',
      answer:
        'ZooSofiaAdmissions accepts cash, all major credit cards, debit cards and Hersheypark gift cards, as well as Apple Pay, Samsung Pay, and Google Pay. Timber TreatsSM and Watering Hole are cashless.',
    },
  ];

  render() {
    return (
      <div className={styles.wrapper}>
        <h1 className={styles.heading}>Frequently asked questions</h1>
        {this.data.map((item) => (
          <div className={styles.container}>
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </div>
        ))}
      </div>
    );
  }
}
