
"use client"
import { useEffect, useState } from 'react';

const Timer = () => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(() => {
                setTime(prevTime => prevTime + 1);
            }, 1000);
        } else if (!isRunning && time !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isRunning, time]);

    const startTimer = () => {
        setIsRunning(true);
    };

    const stopTimer = () => {
        setIsRunning(false);
    };

    const resetTimer = () => {
        setIsRunning(false);
        setTime(0);
    };

    return (
        <div className='flex flex-col items-center justify-center min-h-screen'>
            <h1 className='text-4xl mb-4'>{time}s</h1>
            <div className='flex gap-4'>
                <button className={`px-4 py-2 rounded ${isRunning ? 'bg-green-500 text-white' : 'bg-blue-500 text-white'}`} onClick={startTimer}>Start</button>
                <button className={`px-4 py-2 rounded ${isRunning ? 'bg-red-500 text-white' : 'bg-gray-500 text-white'}`} onClick={stopTimer}>Stop</button>
                <button className='bg-gray-500 text-white px-4 py-2 rounded' onClick={resetTimer}>Reset</button>
            </div>
        </div>
    );
};

export default Timer;
