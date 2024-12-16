'use client'
import React from 'react'
import { createClient } from '@/lib/actions/create-client'
import { useActionState } from 'react'
import SubmitButton from './submit-btn';

interface UserEmailProps {
    userEmail: string;
}

interface FieldErrors {
    name?: string[];
    userEmail?: string[];
    status?: string[];
    total?: string[];
}

const CreateForm: React.FC<UserEmailProps> = ({userEmail}) => {
    const [state, formAction] = useActionState(createClient, null)
    const getFieldError = (field: keyof FieldErrors): string | undefined => {
        if(state?.error && 'name' in state.error){
            return state.error[field]?.[0]
        }
        return undefined
    }
  return (
    <form
    action={formAction}
    className='flex flex-col space-y-4'
    >
        <input hidden id='userEmail' name='userEmail' defaultValue={userEmail} />
        <div className='flex flex-col'>
            <span>Name</span>
        <input 
        name='name' 
        id='name' 
        placeholder='Name...' 
        className={`border ${getFieldError('name') ? 'border-red-500' : 'border-gray-500'} rounded p-2`}
        />
        <div id='name-error'
        aria-live='polite'
        >
            {getFieldError('name') && (
                <p className='text-sm text-red-500'>{getFieldError('name')}</p>
            )}
        </div>
        </div>
        <div className='flex flex-col'>
        <span>Status</span>
        <select
        id='status'
        name='status'
        className={`border ${getFieldError('name') ? 'border-red-500' : 'border-gray-500'} rounded p-2`}

        >
            <option value=''>Select Status</option>
            <option value='paid'>Paid</option>
            <option value='unpaid'>Unpaid</option>
        </select>
        <div id='status-error'
        aria-live='polite'
        >
            {getFieldError('status') && (
                <p className='text-sm text-red-500'>{getFieldError('status')}</p>
            )}
        </div>
            </div>
            <div className='flex flex-col'>
            <span>Total:</span>
            <input 
            type='number' 
            id='total' 
            name='total'
             placeholder='Total...'
             className={`border ${getFieldError('name') ? 'border-red-500' : 'border-gray-500'} rounded p-2`}

             />
        <div id='total-error'
        aria-live='polite'
        >
            {getFieldError('total') && (
                <p className='text-sm text-red-500'>{getFieldError('total')}</p>
            )}
        </div>
            </div>
        <SubmitButton defaultText={'Add Client'} pendingText={'Adding...'}        
        />
        {/* {state?.success && (
            <div className='text-green-500' aria-live='polite'>
                <p>Client Added Successfully</p>
            </div>
        )} */}
    </form>
  )
}

export default CreateForm