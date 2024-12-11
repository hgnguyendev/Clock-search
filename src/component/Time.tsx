import React, { useState, useEffect, useRef } from 'react';
import { Button } from './Button';

export const Time: React.FC = () => {
  const [seconds, setSeconds] = useState<number>(0); 
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const secondsRef = useRef<number>(0); 
  const timerRef = useRef<NodeJS.Timeout | null>(null); 

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        secondsRef.current += 1; 
        setSeconds(secondsRef.current);
      }, 1000);
    }
     else if (timerRef.current) {
      clearInterval(timerRef.current); 
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current); 
      }
    };
  }, [isRunning]); 

  const formatTime = (totalSeconds: number): string => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const startHandle = () => {
    setIsRunning(true); 
  };

  const stopHandle = () => {
    setIsRunning(false); 
  };

  const resetHandle = () => {
    setIsRunning(false);
    secondsRef.current = 0; 
    setSeconds(0); 
  };

  return (
    <div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '24px',
          fontWeight: 'bold',
          padding: '10px',
          border: '1px solid #ccc',
          borderRadius: '5px',
          width: '250px',
        }}
      >
        {formatTime(seconds)} 
      </div>
      <div 
      style={{
        marginTop:'10px',
        display:'flex',
        justifyContent:'space-between'
      }}
      >
          <Button backGroundColor='green' name="Start" onClick={startHandle} />
          <Button backGroundColor='red' name="Stop" onClick={stopHandle} />
          <Button backGroundColor='orange' name="Reset" onClick={resetHandle} />
      </div>
    </div>
  );
};
