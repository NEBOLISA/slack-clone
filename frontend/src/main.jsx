import { ClerkProvider } from '@clerk/clerk-react'
import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import * as Sentry from '@sentry/react'
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'
import {
  BrowserRouter,
  createRoutesFromChildren,
  matchRoutes,
  useLocation,
  useNavigationType
} from 'react-router'
import AuthProvider from './providers/AuthProvider.jsx'
Sentry.init({
  dsn: 'https://8532aad4b0b871473833b67b6fe28c9d@o489578.ingest.us.sentry.io/4510125224296448',
  integrations: [
    Sentry.reactRouterV7BrowserTracingIntegration({
      useEffect: React.useEffect,
      useLocation,
      useNavigationType,
      createRoutesFromChildren,
      matchRoutes
    })
  ],
  tracesSampleRate: 1.0
})
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
const queryClient = new QueryClient()
if (!PUBLISHABLE_KEY) {
  
    
  
  throw new Error('Missing Publishable Key')

}
createRoot(document.getElementById('root')).render(
  <StrictMode>
  
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>

          <App />
          </AuthProvider>
          <Toaster position="top-right" />
        </QueryClientProvider>
      </BrowserRouter>
    </ClerkProvider>
  </StrictMode>
)
