import React from 'react'

const HadisItem = ({id, title}) => {
  return (
    <div className='flex flex-row my-2'>
        <span className='bg-lime-600 rounded-md mr-2 px-4 py-2 font-normal text-white'>{id}</span>
        <p className='bg-lime-600 rounded-md ml-2 px-4 py-2 font-medium text-black-600'>{title}</p>
    </div>
  )
}

export default HadisItem