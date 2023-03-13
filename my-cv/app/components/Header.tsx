import React from 'react';

export const Header = () => {
    return (
        <section className='bg-gray-700 text-white'>
            <div className='flex justify-between'>
                <h1 className='m-7'>Ijaz Ullah</h1>
                <ul className='m-7 flex'>
                    <li className='mx-5 text-2xl'>Home</li>
                    <li className='mx-5 text-2xl'>About</li>
                    <li className='mx-5 text-2xl'>Portfolio</li>
                    <li className='mx-5 text-2xl'>SKills</li>
                    <li className='mx-5 text-2xl'>Contact</li>
                </ul>

            </div>
        </section>
    )
}