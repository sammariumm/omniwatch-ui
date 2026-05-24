import { useState, useEffect } from "react";

function generateRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function simulateSyncAPI() {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.15) {
                reject(new Error("Sync Error: server error"));
            } else {
                resolve({
                    steps: generateRandom(5000, 12000),
                    calories: generateRandom(200, 800),
                    heartRate: generateRandom(58, 110),
                })
            }
        }, 1500)
    })
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
    const [syncError, setSyncError] = useState(null);

    async function handleSyncStats() {
        setIsSyncing(true);
        setSyncError(null);
        try {
            const newStats = await simulateSyncAPI();
            setStats(newStats);
            setLastSync(new Date());
        } catch (error) {
            // console.error(error);
            setSyncError(error.message);
        } finally {
            setIsSyncing(false);
        }
    }

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
        syncError,
        handleSyncStats
    }
}

export default useStats;