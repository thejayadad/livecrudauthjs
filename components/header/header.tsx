import { auth } from '@/auth'
import React from 'react'
import SignOut from './signout-btn'
import SignIn from './signin-btn'

const Header = async () => {
    const session = await auth()
    const userEmail = session?.user?.email
  return (
    <header className='w-full border-b py-6'>
        <nav className='flex items-center justify-end mx-auto max-w-screen-xl px-4'>
            {
                session ? (
                    <div className='flex items-center space-x-2 cursor-pointer'>
                        <span className='font-light text-gray-600 leading-tight'>{userEmail}</span>
                        <SignOut />
                    </div>
                ) : (
                    <>
                        <SignIn />
                    </>
                )
            }
        </nav>
    </header>
  )
}

export default Header