import React from 'react'
import {IconType} from "react-icons"
import clsx from "clsx"
import Link from 'next/link'

interface LinkItemProps {
    href: string;
    icon: IconType;
    label: string;
    isActive: boolean;
}

const LinkItem: React.FC<LinkItemProps> = ({href, icon: Icon, label, isActive}) => {
  return (
    <Link
    href={href}
    className={clsx(
        'flex items-center gap-3 px-4 py-2  transition-all relative',
        isActive ? 'bg-gray-600 text-white' : 'hover:bg-gray-200 text-gray-800'
    )}
    >
        <Icon className='text-xl' />
        <span className='hidden lg:block text-sm font-medium'>{label}</span>
        {isActive && <div className='absolute right-0 top-0 bottom-0 w-2 bg-yellow-600' />}
    </Link>
  )
}

export default LinkItem