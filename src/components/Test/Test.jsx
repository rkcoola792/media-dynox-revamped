import React from 'react'
import Blog from '../Blog/Blog'

const Test = () => {
  return (
    <div className='parallex scrol'>
      <div className="left">
        
      </div>
      <div className="right my-12 relative ">
        <div className='blogs relative my-12'>
          <div className='z-10 sticky top-8'>

          <Blog></Blog>
          </div>
          
          <div className='z-20 bg-white sticky top-8'>

          <Blog></Blog>
          </div>
          <div className='z-30 bg-white sticky top-8 '>

          <Blog></Blog>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Test
