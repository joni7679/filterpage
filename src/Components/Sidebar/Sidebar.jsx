import React from 'react';

function Sidebar({ categories, setCatname }) {
    const colors = () => {
        return `rgba(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},0.4)`;

    }

    return (
        <div className="sidebar shadow-lg p-5 rounded lg:w-[30%] sm:w-[50%] w-full flex flex-col items-start justify-start h-screen">
            <button className="py-[15px] px-[25px] border-[1px] rounded border-cyan-400 outline-none hover:bg-cyan-500 hover:text-white duration-200">
                Add New Products
            </button>
            <h1 className="mt-5 font-semibold capitalize border-b border-spacing-1 border-cyan-500">
                Categories
            </h1>
            <ul className="mt-5 w-full">
                {categories.map((category, index) => (
                    <li
                        key={index}
                        onClick={() => setCatname(category)}
                        className="capitalize cursor-pointer mt-2 text-gray-800 hover:font-bold hover:text-cyan-500 flex ga"
                    >
                        <span style={{backgroundColor:colors()}} className='inline-block w-5 h-5 rounded-full'></span>
                        <span className='inline-block'>{category}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Sidebar;
