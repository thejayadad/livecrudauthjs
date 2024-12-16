import Header from '@/components/header/header';
import SideBar from '@/components/sidebar/sidebar';
import React from 'react'

const layout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <div className='h-full'>
      <div className='grid grid-cols-8 lg:grid-cols-12 h-full'>
        <div className='col-span-1 lg:col-span-1 border-r-[1px]'>
          <SideBar />
        </div>

        <div className='w-full col-span-7 lg:col-span-11'>
          <Header />
        {children}
        </div>
      </div>
    </div>
  )
}

export default layout