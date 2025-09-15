import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'
import React from 'react'
import { useAuth } from '@clerk/clerk-react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import * as Sentry from '@sentry/react'
import AuthPage from './pages/AuthPage'
import HomePage from './pages/HomePage'

const SentryRoutes = Sentry.withSentryReactRouterV7Routing(Routes)
const App = () => {
    const { isSignedIn, isLoaded } = useAuth()
   if (!isLoaded) return null
  return (

      <SentryRoutes>

        <Route
          path='/'
          element={
            isSignedIn ? <HomePage /> : <Navigate to={'/auth'} replace />
          }
        />
        <Route
          path='/auth'
          element={!isSignedIn ? <AuthPage /> : <Navigate to={'/'} replace />}
        />
      </SentryRoutes>

    // <header>
    //   <SignedOut>
    //     <SignInButton mode='modal' />
    //   </SignedOut>
    //   <SignedIn>
    //     <UserButton />
    //   </SignedIn>
    // </header>
  )
}

export default App
