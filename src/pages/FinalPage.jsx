import styles from '../css/FinalPage.module.css';

const FinalPage = ({ date, time, game }) => {
  if (!game) {
    return <div className={styles.container}>жук.</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.text}>Буду чекати!</div>
      <p className={styles.p}>твоя душа зарезервована на цей час.</p>
      <div>
        <img
          className={styles.gif}
          src="https://media.tenor.com/5nSKlBlwdkIAAAAi/cat.gif"
          alt="Cute animated illustration"
        />
        <img
          className={styles.gif}
          src="https://media.tenor.com/5nSKlBlwdkIAAAAi/cat.gif"
          alt="Cute animated illustration"
        />
        <img
          className={styles.gif}
          src="https://media.tenor.com/5nSKlBlwdkIAAAAi/cat.gif"
          alt="Cute animated illustration"
        />
      </div>
      <div className={styles.details}>
        <div>Дата: {date}</div>
        <div>Час: {time}</div>
        <div>Гра: {game.name}</div>
      </div>
    </div>
  );
};

export default FinalPage;