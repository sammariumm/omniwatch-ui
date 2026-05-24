import { createContext, useContext, useState, useEffect } from 'react'

const WatchContext = createContext(null)

export function WatchProvider({ children }) {
  const [theme, setTheme] = useState('dark')
  const [timeFormat, setTimeFormat] = useState(() =>
    localStorage.getItem('timeFormat') || '12'
  )

  useEffect(() => {
        localStorage.setItem('timeFormat', timeFormat);
  }, [timeFormat]);

  const toggleTheme = () =>
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')

  const colors = theme === 'dark'
    ? { text: 'text-white', subtext: 'text-gray-400', bg: 'bg-slate-900' }
    : { text: 'text-gray-900', subtext: 'text-gray-500', bg: 'bg-gray-100' }

  return (
    <WatchContext.Provider value={{ theme, setTheme, toggleTheme, timeFormat, setTimeFormat, colors }}>
      {children}
    </WatchContext.Provider>
  )
}

export function useWatch() {
  const context = useContext(WatchContext)
  if (!context) throw new Error('useWatch must be used inside a WatchProvider')
  return context
}