import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';
import styles from '../css/SelectDatePage.module.css';

const SelectDatePage = ({ onDateSelect }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleChange = (date) => {
    setSelectedDate(date);
  };

  const handleNext = () => {
    if (selectedDate) {
      const date = format(selectedDate, 'yyyy-MM-dd');
      const time = format(selectedDate, 'HH:mm');
      onDateSelect(date, time);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.text}>Вибрати дату та час</div>
      <img
          src="https://media1.tenor.com/m/h7wPjGdxX1wAAAAd/cat-wait-waiting-cat.gif"
          alt="Cute animated illustration"
        />
      <DatePicker
        selected={selectedDate}
        onChange={handleChange}
        showTimeSelect
        timeFormat="HH:mm"
        dateFormat="MMMM d, yyyy h:mm aa"
        className={styles.datePicker}
        minDate={new Date()}
        onFocus={(e) => e.target.blur()}
      />
      <button
        className={`${styles.nextButton} ${!selectedDate ? styles.disabled : ''}`}
        onClick={handleNext}
        disabled={!selectedDate} 
      >
        Далi
      </button>
    </div>
  );
};

export default SelectDatePage;