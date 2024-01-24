import { useState, useRef } from "react"
export default function TimerChallenge ({ title, targetTime }) {
    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);

    const timer = useRef();

    function handleStart () {
        timer.current = setTimeout(() => {
            setTimerExpired(true)
        }, targetTime * 1000)
        setTimerStarted(true)
    }

    function handleStop () {
        clearTimeout
    }
    return (
        <section className="challenge">
            <h2>{title}</h2>
            {timerExpired && <p>You lost!</p> }
            <p className="challenge-time">
                {targetTime} Second{targetTime > 1 && 's' }
            </p>
            <p>
                <button onClick={timerStarted? handleStop : handleStart}>
                    {timerStarted ? 'Stop' : 'Start'}
                </button>
            </p>
            <p className={timerStarted? 'active' : undefined}>
                {timerStarted? 'Time is Runing...' : 'Timer inactive'}
            </p>
        </section>
    )
}