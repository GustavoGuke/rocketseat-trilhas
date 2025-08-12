import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { CounterPovider } from './context/HistoryContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CounterPovider >
      <App />
    </CounterPovider>
  </StrictMode>,
)
