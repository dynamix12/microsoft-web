import React from 'react';
import styles from './home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <img
        className={styles.img}
        alt='animals in the zoo'
        src='./images/hero.jpg'
      ></img>
      <section className={styles.section}>
        <h1 className={styles.heading}>Duis hendrerit vehicula elit quis.</h1>
        <p className={styles.paragraph}>
          Maecenas non erat est. Praesent tempor ante et libero rhoncus egestas.
          Donec ornare fermentum nulla, et volutpat ipsum dignissim in. Aliquam
          viverra, libero vel porta molestie, neque nulla maximus nisl, ac
          aliquam justo ligula quis nisi. Nam imperdiet orci ipsum, lobortis
          ultrices nisi ultrices vitae. Vestibulum dignissim semper semper.
          Aliquam in orci cursus, fermentum neque quis, pulvinar massa.
        </p>
        <p className={styles.paragraph}>
          Proin elementum eu felis id accumsan. Pellentesque tempus velit at
          massa malesuada placerat. Etiam gravida porttitor vehicula. Integer ut
          tortor et ligula lobortis pulvinar at at odio. Aliquam consectetur
          nisi quis pellentesque consequat. Nullam congue faucibus vestibulum.
          Curabitur fermentum fermentum tortor, dapibus semper ante. Quisque
          commodo nisl massa, ut convallis arcu bibendum et. Praesent dignissim
          convallis risus eleifend ullamcorper. Vestibulum sed sapien faucibus,
          interdum tellus sed, auctor nulla. Integer sodales felis dolor. Proin
          ultricies finibus lorem, non dignissim purus scelerisque non. Duis
          tempor sapien porttitor nibh mattis tincidunt. Nam facilisis fringilla
          lectus, a semper sem. Suspendisse vestibulum faucibus velit vitae
          consectetur.
        </p>
      </section>
    </div>
  );
};

export default Home;
