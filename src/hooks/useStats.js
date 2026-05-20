import { useState, useEffect, useCallback } from "react";

function generateRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function useStats() {
    // Stats state variable
    const [stats, setStats] = useState({
        steps: generateRandom(5000, 12000),
        calories: generateRandom(200, 800),
        heartRate: generateRandom(58, 110),
    })

    const [lastSync, setLastSync] = useState(null);
    const [isSyncing, setIsSyncing] = useState(false);

    const handleSyncStats = useCallback(() => {
        setIsSyncing(true);

        // Simulate a network request
        setTimeout(() => {
        setStats({
            steps:     generateRandom(5000, 12000),
            calories:  generateRandom(200, 800),
            heartRate: generateRandom(58, 110),
        });
        setLastSync(new Date());
        setIsSyncing(false);
        }, 1000);
    }, [])

    // Spread to update one key
    // Heart rate interval 
    useEffect(() => {
        const id = setInterval(() => {
        const delta = (Math.random() * 10 - 5) | 0
        setStats(prev => ({
            ...prev, heartRate: prev.heartRate + delta
        }))
        }, 3000)
        return () => clearInterval(id)
    }, [])

    return {
        stats,
        lastSync,
        isSyncing,
        handleSyncStats
    }
}

export default useStats;