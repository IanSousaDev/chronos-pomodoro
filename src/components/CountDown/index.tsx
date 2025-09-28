import styles from './styles.module.css';
import { useEffect, useState } from 'react';

export function CountDown() {
  const [time, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  function formatTimer(totalSeconds: number) {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
  }

  useEffect(() => {
    let interval: number | undefined;

    if (isRunning) {
      interval = setInterval(() => {
        setTimer((prevTime) => prevTime + 1);
      }, 1000);
    } else if (!isRunning && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval); 
  }, [isRunning, time]);

  const handleStartPause = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTimer(0);
  }
  
  

    

  return (
    <>
      <div className={styles.container}>
        <div className={styles.timerDisplay}>
          {formatTimer(time)}
        </div>

        <button 
          onClick={handleStartPause} 
          className={styles.button}
        >
          {/* 6. Altera o texto do botão */}
          {isRunning ? 'Pausar ⏸️' : 'Iniciar ▶️'}
        </button>
        
        <button 
          onClick={handleReset} 
          className={styles.buttonReset}
        >
          Resetar 🔄
        </button>
      </div>
  
    </>
  );
}
