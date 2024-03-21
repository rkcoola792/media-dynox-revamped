import React from 'react'
import Section1 from './Section1'
import Section9 from './Section9'
import Section8 from './Section8'
import Section3 from './Section3'
// import Test from '../Test/Test'
import CircleAnimation from '../circleAnimation/CircleAnimation'
import ScrollProgress from '../ScrollProgress/ScrollProgress'
import Blogs from '../Blogs/Blogs'

const Homepage = () => {
  return (
    <div className='homepage'>
      <Section1></Section1>
      <Section3></Section3>
      <Section8></Section8>
      <Section9></Section9>
      
      {/* <Test></Test> */}
      {/* <ScrollProgress></ScrollProgress> */}


    </div>
  )
}

export default Homepage
