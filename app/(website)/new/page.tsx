import React from 'react'
import CreateForm from '@/components/form/create-form'
import { auth } from '@/auth'


const NewClientPage = async () => {
  const session = await auth()
  const userEmail = session?.user?.email
  return (
    <div className='w-full'>
      <div className='mx-auto max-w-screen-xl p-4'>
        <h1 className='font-bold text-xl text-gray-800'>New CLient Page</h1>
        <CreateForm
        userEmail={userEmail || ''}
        />
      </div>
    </div>
  )
}

export default NewClientPage