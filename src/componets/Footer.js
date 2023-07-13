import React from 'react'

function Footer() {
  return (
    <div className='px-32 py-10 text-xl  font-medium '>
        <div className='flex justify-between items-center'>
            <div>
      <p className=''>   <span>{new Date().getFullYear()}</span> @ All Rights Reserved.</p>
            </div>
            <div>
            Built  with ❤️  by <a href='#' className=' underline'>Asrat Adane</a>
                </div>
                <div>
                <a href='#' > Say hello</a>
                </div>

        </div>

    </div>
  )
}

export default Footer