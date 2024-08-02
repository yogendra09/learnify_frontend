import React from 'react'

const Loading = () => {
  return (
    <div className='w-full h-screen flex flex-col items-center justify-center'>
      <h1 className='text-2xl text-[#8B77E8]'>Loading.....</h1>
      <img className='w-[100px] h-[100px] object-cover' src="https://raw.githubusercontent.com/Codelessly/FlutterLoadingGIFs/master/packages/cupertino_activity_indicator_square_large.gif" alt="" />
    </div>
  )
}

export default Loading