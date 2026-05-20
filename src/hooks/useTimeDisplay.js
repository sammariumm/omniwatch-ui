import { useState, useEffect } from "react";

function useTimeDisplay() {
    // Time state variables
    const [time, setTime] = useState(new Date());

    useEffect(() => {
    const id = setInterval(()=> {
        setTime(new Date())
    }, 1000)
    return () => clearInterval(id)
    }, [])

    return {
        time
    };
}

export default useTimeDisplay;