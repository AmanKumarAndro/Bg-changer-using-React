import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("lightgreen")

  return (
    <div className="w-full h-screen duration-100" style={{ backgroundColor: color }}>
      <header>
        <div class="relative w-full bg-white">
          <div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
            <div class="inline-flex items-center space-x-2">
              <span class="font-bold">Background Changer</span>
            </div>
            <div class="hidden grow items-start lg:flex">
              <ul class="ml-12 inline-flex space-x-8">
                <li>
                  <a
                    href="#"
                    class="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/AmanKumarAndro"

                    class="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900"
                  >
                    About
                    
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/aman-kumar-671a19244/"

                    class="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900"
                  >
                    Contact
                    
                  </a>
                </li>
              </ul>
            </div>
            <div class="hidden space-x-2 lg:block">
              <button
                type="button"
                class="rounded-md bg-transparent px-3 py-2 text-sm font-semibold text-black hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Sign In
              </button>
              <button
                type="button"
                class="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Log In
              </button>
            </div>
            <div class="lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="h-6 w-6 cursor-pointer"
              >
                <line x1="4" y1="12" x2="20" y2="12"></line>
                <line x1="4" y1="6" x2="20" y2="6"></line>
                <line x1="4" y1="18" x2="20" y2="18"></line>
              </svg>
            </div>
          </div>
        </div>

      </header>
      <div className='fixed flex flex-wrap bottom-8 justify-center px-2 inset-x-2'>
        <div className=' flex flex-wrap bg-white rounded-xl py-2 px-2 shadow-l justify-center gap-3' >
          <button onClick={() => setColor('red')} className={`h-6 w-6 rounded-full shadow-2xl bg-red-500`}></button>
          <button onClick={() => setColor('blue')} className={`h-6 w-6 rounded-full bg-blue-500`}></button>
          <button onClick={() => setColor('lightgreen')} className={`h-6 w-6 rounded-full bg-green-300`}></button>
          <button onClick={() => setColor('yellow')} className={`h-6 w-6 rounded-full bg-yellow-500`}></button>
          <button onClick={() => setColor('orange')} className={`h-6 w-6 rounded-full bg-orange-500`}></button>
          <button onClick={() => setColor('gray')} className={`h-6 w-6 rounded-full bg-gray-500`}></button>
          <button onClick={() => setColor('cyan')} className={`h-6 w-6 rounded-full bg-cyan-500`}></button>
          <button onClick={() => setColor('black')} className={`h-6 w-6 rounded-full bg-black`}></button>

        </div>

      </div>
    </div>
  )
}

export default App
