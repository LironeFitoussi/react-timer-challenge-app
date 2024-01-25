import { useState, useRef } from "react"
import ResultModal from "./ResultModal";
export default function TimerChallenge ({ title, targetTime }) {
    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
    const timeIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;
    const dialog = useRef();
    const timer = useRef();

    if (timeRemaining <= 0) {
        clearInterval(timer.current);
        dialog.current.open()
    } 

    function handleReset () {
        setTimeRemaining(targetTime * 1000)
    }

    function handleStart () {
        timer.current = setInterval(() => {
            setTimeRemaining(prevTime => prevTime - 10)
        },  10)
    }

    function handleStop () {
        clearInterval(timer.current);
        dialog.current.open()
    }
    
    return (
        <>
        <ResultModal 
            ref={dialog} 
            targetTime={targetTime} 
            remainingTime={timeRemaining}
            onReset={handleReset}
        />

        <section className="challenge">
            <h2>{title}</h2>
            <p className="challenge-time">
                {targetTime} Second{targetTime > 1 && 's' }
            </p>
            <p>
                <button onClick={timeIsActive? handleStop : handleStart}>
                    {timeIsActive ? 'Stop' : 'Start'}
                </button>
            </p>
            <p className={timeIsActive? 'active' : undefined}>
                {timeIsActive? 'Time is Runing...' : 'Timer inactive'}
            </p>
        </section>
        </>
    )
}