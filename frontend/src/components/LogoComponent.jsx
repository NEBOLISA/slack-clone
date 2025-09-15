import React from 'react'

const LogoComponent = () => {
  return (
      <div className='flex  gap-1 items-center'>
          <img src="./app-logo.png" alt="The apps logo" className='w-20 h-20' />
          <h3 className='font-medium -m-4 text-white text-lg font-sans tracking-[.3rem]'>LAPO</h3>
    </div>
  )
}

export default LogoComponent
