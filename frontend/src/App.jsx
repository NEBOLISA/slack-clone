import { useAuth } from '@clerk/clerk-react'

import AuthPage from './pages/AuthPage'
import HomePage from './pages/HomePage'

import * as Sentry from '@sentry/react'
import { Navigate, Route, Routes } from 'react-router'
import CallPage from './pages/CallPage'

const SentryRoutes = Sentry.withSentryReactRouterV7Routing(Routes)
const App = () => {
  const { isSignedIn, isLoaded } = useAuth()
  if (!isLoaded) return null
  return (
    <div className=''>
      <SentryRoutes>
        <Route
          path='/'
          element={
            isSignedIn ? <HomePage /> : <Navigate to={'/auth'} replace />
          }
        />
        <Route
          path='/call/:id'
          element={
            isSignedIn ? <CallPage /> : <Navigate to={'/auth'} replace />
          }
        />
        <Route
          path='/auth'
          element={!isSignedIn ? <AuthPage /> : <Navigate to={'/'} replace />}
        />
      </SentryRoutes>
    </div>

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
