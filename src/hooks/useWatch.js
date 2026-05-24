import { useContext } from 'react'
import WatchContext from '../components/WatchContext';

export function useWatch() {
  const context = useContext(WatchContext)
  if (!context) throw new Error('useWatch must be used inside a WatchProvider')
  return context
}