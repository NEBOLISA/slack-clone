'use client'
import React, { useEffect, useState } from 'react'

const HomePage = () => {
  const [someValue, setSomeValue] = useState(0)
  useEffect(() => {
    console.log('Effect runs for:', someValue)

    return () => {
      console.log('Cleanup before next run for:', someValue)
    }
  }, [someValue])

  return (
    <div>
      <button onClick={() => setSomeValue(someValue + 1)}>change</button>
      Homepage
    </div>
  )
}

export default HomePage
