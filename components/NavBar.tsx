"use client"

import { useChatStore } from '@/zustand/store/chatStore';
import React from 'react'

import { CiChat1 } from "react-icons/ci";
const NavBar = () => {
  const {clearChat} = useChatStore()


  return (
    <div className=' w-full h-18 flex justify-between lg:justify-around px-4  items-center absolute top-0 left-0 '>
         <h1 className="text-3xl font-bold flex  justify-center items-center ">
        🤖<span className="text-pink-600">Kaos</span>.ai
      </h1>

    <button onClick={clearChat} className='text-sm flex items-center justify-center gap-2 rounded-xl cursor-pointer   bg-pink-700 text-pink-50 py-2 px-4'>clear chat<CiChat1 className='text-lg '/></button>
    </div>
  )
}

export default NavBar