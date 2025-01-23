import { useState } from 'react';
import styles from '../css/SelectGamePage.module.css';
import games from '../games.json';

const SelectGamePage = ({ onGameSelect }) => {
  const [selectedGame, setSelectedGame] = useState(null);

  const handleGameSelect = (game) => {
    setSelectedGame(game);
    onGameSelect(game);
  };

  return (
    <div className={styles.container}>
      <div className={styles.text}>Вибери гру</div>
      <div className={styles.gameList}>
        {games.map((game) => (
          <div key={game.id} className={styles.gameCard} onClick={() => handleGameSelect(game)}>
            <img src={game.image} alt={game.name} className={styles.gameImage} />
            <div className={styles.gameName}>{game.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectGamePage;