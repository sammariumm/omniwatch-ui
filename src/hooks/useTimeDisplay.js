import { useState, useEffect } from "react";

function useTimeDisplay() {
    // Time state variables
    const [time, setTime] = useState(new Date());
    const [format, setFormat] = useState('12');  

    useEffect(() => {
    const id = setInterval(()=> {
        setTime(new Date())
    }, 1000)
    return () => clearInterval(id)
    }, [])

    const handleToggleFormat = () => {
        setFormat(prev => prev === '12' ? '24' : '12'); 
    };

    return {
        time,
        format,
        handleToggleFormat
    };
}

export default useTimeDisplay;