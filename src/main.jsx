import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { WatchProvider } from './components/WatchContext';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WatchProvider>
      <App />
    </WatchProvider>
  </StrictMode>,
)
