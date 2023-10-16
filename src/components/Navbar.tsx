import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex flex-row pb-2 justify-between items-center border-b'>
        <h2 className='text-4xl underline'>
            Product Api
        </h2>

        <ul className='text-lg flex gap-4 '>
            <li>
                <a href="">Home</a>
            </li>
            <li>
                <a href="">Contacts</a>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar