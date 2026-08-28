import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ClerkProvider } from '@clerk/react'
import './index.css'
import App from './App.jsx'

const PUBLISHABLE_KEY =
  import.meta.env.VITE_CLERK_PUBLISHABLE_KEY ||
  import.meta.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY ||
  'pk_test_ZGVsaWNhdGUtaGVyb24tMTQ4MS5jbGVyay5hY2NvdW50cy5kZXYk'

if (!PUBLISHABLE_KEY) {
  console.error("Missing Clerk Publishable Key")
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <App />
    </ClerkProvider>
  </StrictMode>,
)
