import React from 'react'
import { FaUserGraduate } from 'react-icons/fa'

export default function Header() {
  return (
    <div className="m-5 flex flex-row  " >
        <FaUserGraduate className="mr-2 text-7xl" />
        <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Student Manager</span></h1>
    </div>
  )
}
