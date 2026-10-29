import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import '@fontsource/big-shoulders-display/latin-800'
import '@fontsource/big-shoulders-display/latin-900'
import '@fontsource/schibsted-grotesk/latin-400'
import '@fontsource/schibsted-grotesk/latin-500'
import '@fontsource/schibsted-grotesk/latin-700'
import './styles/base.css'
import './styles/components.css'
import './styles/mocks.css'
import './styles/pages.css'

// Browsers restore the old scroll position on reload; the intro wipe expects to start at the top.
if ('scrollRestoration' in history) history.scrollRestoration = 'manual'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
