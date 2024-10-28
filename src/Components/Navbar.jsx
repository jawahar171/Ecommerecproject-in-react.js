import React from 'react';

const Navbar = ({cartCount, onCartClick}) =>(
    <nav className='bg-black flex justify-between items-center mb-96 w-screen' >
        <button className='text-red-800'>Home</button>
        <h1 className='text-violet-400 text-xl font-bold' >New Store</h1>
        <button onClick={onCartClick} 
        className='text-violet-700 py-4 px-2 rounded font-semibold bg-lime-500'>
            Cart({cartCount})
            </button>
    </nav>
);

export default Navbar;