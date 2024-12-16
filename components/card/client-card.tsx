import React from 'react'

interface Client {
    id: string;
    name: string;
    status: 'paid' | 'unpaid';
    total: number;
}
interface Props {
    client: Client;
}

const ClientCard: React.FC<Props>= ({client}) => {
  return (
    <div className='p-6 rounded shadow-md hover:shadow-lg mt-6'>
        <div className='flex justify-between items-center w-full'>
            <div>{client.name}</div>
            <div className='flex items-center space-x-1'>
                <span>{client.status}</span>
                <span>${client.total}</span>
            </div>
        </div>
    </div>
  )
}

export default ClientCard