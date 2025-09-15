import React from 'react'
import { LuMessageCircleMore } from 'react-icons/lu'

const AuthFeatures = ({icon,text}) => {
  return (
    <div className='flex mt-2 items-center gap-2 px-4 py-3 rounded-xl bg-[#5c6ba8]/30'>
      <div className='bg-white/23 w-7 h-7 rounded-full flex items-center justify-center'>
              <span>{ icon}</span>
      </div>
      <span className='text-[12px] font-semibold'>{text}</span>
    </div>
  )
}

export default AuthFeatures
