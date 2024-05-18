import React from 'react'

const Login = () => {
  return (
    <div>

    <div className='relative'>

        <img className='absolute z-[-2]' src='https://assets.nflxext.com/ffe/siteui/vlv3/41c789f0-7df5-4219-94c6-c66fe500590a/3149e5eb-4660-4e3d-9e65-b1e615229c64/IN-en-20240513-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt="img" />
        
        <div className='h-lvh  absolute bg-black bg-opacity-50'> </div>
 
      <img className=' ml-32  w-52 h-40' src='https://images.ctfassets.net/y2ske730sjqp/6bhPChRFLRxc17sR8jgKbe/6fa1c6e6f37acdc97ff635cf16ba6fb3/Logos-Readability-Netflix-logo.png' alt='ntflix' />

      <form className='w-1/3 mx-auto py-10 bg-black bg-opacity-70 rounded-lg'>
        <div className='w-2/4 m-auto'>
          <h1 className='mb-4 text-3xl font-bold text-white'>Sign In</h1>
          <input className='mb-4 px-4 py-2 w-full bg-gray-700 text-white' type='text ' name='text ' placeholder='full name'></input>
          <input className='mb-4 px-4 py-2 w-full bg-gray-700 text-white' type='text' name='text' placeholder='Password'></input>
        </div>
      </form>
      
     
     



      </div>
      
      </div>

  )
}

export default Login