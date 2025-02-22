import React from 'react'
import img from "../assets/loader.gif"
function Loading() {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
        <img className='w-auto' src={img} alt="Loading---"  />
    </div>
  )
}

export default Loading