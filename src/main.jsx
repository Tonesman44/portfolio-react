import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import App from './App.jsx'
import '@fontsource/big-shoulders-display/latin-800'
import '@fontsource/big-shoulders-display/latin-900'
import '@fontsource/schibsted-grotesk/latin-400'
import '@fontsource/schibsted-grotesk/latin-500'
import '@fontsource/schibsted-grotesk/latin-700'
import './styles/base.css'
import './styles/components.css'
import './styles/pages.css'

// Hash routing is only used for the single-file preview build.
// eslint-disable-next-line react-refresh/only-export-components
const Router = import.meta.env.VITE_ROUTER === 'hash' ? HashRouter : BrowserRouter

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>,
)
