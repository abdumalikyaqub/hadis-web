import React from 'react'
import { Header } from '../components/common/Header'

export const Layout = ( {children} ) => {
  return (
    <div className='flex flex-col h-full'>
        <Header/>
        <div className='container mx-auto p-4'>
          {children}
        </div>
    </div>
  )
}
