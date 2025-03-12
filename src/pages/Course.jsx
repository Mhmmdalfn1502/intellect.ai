import React from 'react'
import Navbar from '../components/Navbar'

export default function Course() {
  return (
    <div className="bg-white w-screen h-screen">
      <Navbar />
      <div className="flex flex-col h-screen items-center justify-center gap-8">
        <h1 className="text-gray-700">Coming Soon</h1>
        <div className="flex flex-row gap-2 mt-10">
        <div className="relative">
          <div className="w-5 h-5 bg-gradient-to-br from-[#4A3AFF] to-white rounded-full animate-bounce"></div>
          <div className="w-12 h-3 bg-gray-400 opacity-30 rounded-full absolute top-14 left-0 blur-md"></div>
        </div>
        <div className="relative">
          <div className="w-5 h-5 bg-gradient-to-br from-[#4A3AFF] to-white rounded-full animate-bounce"></div>
          <div className="w-12 h-3 bg-gray-400 opacity-30 rounded-full absolute top-14 left-0 blur-md"></div>
        </div>
        <div className="relative">
          <div className="w-5 h-5 bg-gradient-to-br from-[#4A3AFF] to-white rounded-full animate-bounce"></div>
          <div className="w-12 h-3 bg-gray-400 opacity-30 rounded-full absolute top-14 left-0 blur-md"></div>
        </div>
        </div>
      </div>
    </div>
  )
}