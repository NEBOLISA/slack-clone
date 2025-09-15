import React from 'react'
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton
} from '@clerk/clerk-react'
import LogoComponent from '../components/LogoComponent'
import AuthFeatures from '../components/AuthFeatures'
const AuthPage = () => {
  return (
    <div className=' w-full h-[100vh] overflow-hidden flex justify-center bg-linear-to-br from-[#1a0b2e] from-0% via-[#0f3460] via-30%  to-[#7209b7] to-[100%]'>
      <main className='overflow-scroll w-full px-12 lg:px-0 lg:w-[90%] h-full mx-auto py-8 flex-col lg:flex-row gap-8 flex justify-between items-center '>
        {/* left section */}
        <section className='bg-[#0f3460] shadow-xl lg:min-w-[400px] h-[85%] lg:w-[30%] w-full text-white p-9 rounded-2xl'>
          <LogoComponent />
          <h1 className='text-4xl font-bold w-[70%] text-transparent bg-white bg-clip-text mb-3'>
            Where Work Happens ✨
          </h1>
          <p className='text-md mb-4'>
            Connect with your team instantly through secure, real-time
            messaging. Experience seamless collaboration with powerful features
            designed for modern teams
          </p>
          <AuthFeatures icon='💬' text='Real-time messaging' />
          <AuthFeatures icon='🎥' text='Video calls & meetings' />
                  <AuthFeatures icon='🔐' text='Secure & private' />
                  <SignInButton mode='modal'>
                      
          <button className=' cursor-pointer hover:bg-linear-r hover:from-[#7209b7]/90 hover:to-[#680666]/90 bg-linear-to-r from-[#7209b7] from-50% to-[#680666] rounded-md text-sm mt-8 text-center font-semibold flex gap-2  px-5 py-3'>
            {' '}
            Get started with Lapo <span>→</span>
          </button>
                  </SignInButton>
        </section>
        <section className='bg-linear-to-br from-[#0f3460] from-10% to-[#7209b7] to-100% bg-[#0f3460] lg:w-[35%] w-full rounded-2xl p-4'>
          <img src='./auth-4.png' alt='' />
        </section>
      </main>
      {/* <header>
        <SignedOut>
          <SignInButton mode='modal' />
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>
      </header> */}
    </div>
  )
}

export default AuthPage
