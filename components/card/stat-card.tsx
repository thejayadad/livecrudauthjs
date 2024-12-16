import React from 'react'

interface StatCardProps {
    title: string;
    amount: number;
}

const StatCard: React.FC<StatCardProps>= ({title, amount}) => {
  return (
    <div className='col-span-1 p-4 border rounded-lg shadow-sm hover:shadow-md text-center'>
        <h2 className='text-md font-bold text-gray-600'>{title}</h2>
        <p className='text-xl'>{amount}</p>
    </div>  
  )
}

export default StatCard