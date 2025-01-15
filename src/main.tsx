import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { LDProvider } from 'launchdarkly-react-client-sdk'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LDProvider clientSideID="67862f750a055f09a3b1f4cc">
      <App />
    </LDProvider>
  </StrictMode>
)
