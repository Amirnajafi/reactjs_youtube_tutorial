import React, { useEffect } from 'react'

interface ICountDownOutput {
    counter: number;
    resetTimer: () => void;
}

const useCountDown = (startTime:number = 60) :ICountDownOutput =>{
    const [counter, setCount] = React.useState(startTime);

    useEffect(()=>{
        if (counter <= 0) return
        const timer = setInterval(()=>{
            setCount(counter - 1)
        }, 1000)
        return () => clearInterval(timer)
    }, [counter])
    
    const resetTimer = () =>{
        setCount(5)
    }
    return {counter, resetTimer}
}

export default useCountDown;