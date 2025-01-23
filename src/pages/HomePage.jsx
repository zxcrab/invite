import styles from '../css/HomePage.module.css';

const HomePage = ({ onStart }) => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>Запрошую пограти!</div>
      <img
          src="https://media.tenor.com/bXIzx6izXTQAAAAj/cute.gif"
          alt="Cute animated illustration"
        />
      <button className={styles.startButton} onClick={onStart}>Вибрати дату та час</button>
    </div>
  );
};

export default HomePage;