import { useState } from 'react';
import HomePage from './pages/HomePage';
import SelectDatePage from './pages/SelectDatePage';
import SelectGamePage from './pages/SelectGamePage';
import FinalPage from './pages/FinalPage';
import axios from 'axios';

const App = () => {
  const [page, setPage] = useState('home');
  const [invitation, setInvitation] = useState({
    date: null,
    time: null,
    game: null
  });

  const handleStart = () => {
    setPage('selectDate');
  };

  const handleDateSelect = (date, time) => {
    setInvitation({ ...invitation, date, time });
    setPage('selectGame');
  };

  const handleGameSelect = (selectedGame) => {
    setInvitation({ ...invitation, game: selectedGame });
    setPage('final');
    axios.post('https://67921d6bcf994cc68048c0d7.mockapi.io/invite', {
      date: invitation.date,
      time: invitation.time,
      game: selectedGame.name
    });
  };

  return (
    <div>
      {page === 'home' && <HomePage onStart={handleStart} />}
      {page === 'selectDate' && <SelectDatePage onDateSelect={handleDateSelect} />}
      {page === 'selectGame' && <SelectGamePage onGameSelect={handleGameSelect} />}
      {page === 'final' && <FinalPage date={invitation.date} time={invitation.time} game={invitation.game} />}
    </div>
  );
};

export default App;
