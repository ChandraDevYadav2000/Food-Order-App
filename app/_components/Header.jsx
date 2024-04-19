"use client"
import React from 'react'
import Image from 'next/image'
import { Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SignInButton, SignUpButton, useUser, UserButton } from '@clerk/nextjs'

function Header() {

  const {user,isSignedIn}=useUser();

  return (
    <div className='hidden md:flex justify-between items-center px-6 md:px-20 shadow-sm'>
      <Image src='/7309589.jpg' alt='logo' width={80} height={80}/>
      <div className='flex border p-2 rounded-lg bg-gray-200 w-96'>
        <input type='text' className='bg-transparent w-full'/>
        <Search/>
      </div>
      {isSignedIn?
      <UserButton/>
      :<div className='flex gap-5'>
        <SignInButton mode='modal'>
        <Button variant="outline">Login</Button>
        </SignInButton>
        <SignUpButton mode='model'>
        <Button>Sign Up</Button>
        </SignUpButton>
      </div>}
    </div>
  )
}

export default Header
