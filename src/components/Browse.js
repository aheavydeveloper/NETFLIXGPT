import React from 'react'
import MainMovie from './MainMovie';
import Suggestions from './Suggestions'

const Browse = () => {
  return (
    <div className='absolute top-0'>

      <MainMovie />
      <Suggestions/>
      
    </div>
  )
}

export default Browse;