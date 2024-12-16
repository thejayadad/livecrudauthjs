import React from 'react'
import SideLinks from './side-links'

const SideBar: React.FC= () => {
  return (
    <div className='h-full flex flex-col py-4'>
        <div className='mb-6'>
            <div className='flex items-center px-4 space-x-3'>
                <div className='w-8 h-8 bg-gray-600 rounded-full' />
                <span className='hidden lg:block text-lg font-bold text-gray-800'>Tracker</span>                
            </div>
        </div>
        <SideLinks />   
    </div>
  )
}

export default SideBar