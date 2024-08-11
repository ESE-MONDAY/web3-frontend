'use client'
import React, {useState } from 'react'

const Portfolio = () => {
  const [isConnected, setIsConnected] = useState(false)

  return (
    <div className='w-full h-full max-w-[1560px] mx-auto bg-red-400'>
      {isConnected ? (<></>) : (
        <div>
          <h1>Connect your wallet</h1>
          <button onClick={() => setIsConnected(true)}>Connect</button>
        </div>
      )}
    </div>
  )
}

export default Portfolio