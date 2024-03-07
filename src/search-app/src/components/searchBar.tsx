'use client';

import React, { useState } from 'react';

export default function SearchBar(props :any){
    
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event: any) => {
        setSearchTerm(event.target.value);
    };

    const handleFormSubmit = (event: any) => {
        event.preventDefault();
        props.onSearch(searchTerm);
    };

    return (
    
        <div className="z-10 items-center justify-between font-mono text-sm w-full lg:flex grow-0">
            <form onSubmit={handleFormSubmit} className='w-full'>
                <div className="flex rounded-md border-zinc-100/50 w-1/2 border border-solid mx-auto p-3">
                <input type="text" 
                        className="outline-none w-full p-2 bg-transparent" 
                        placeholder="Search for articles" 
                        value={searchTerm}
                        onChange={handleInputChange}
                    />
                <button type="submit" className="bg-zinc-100/50 text-white p-2 rounded-md"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m16 16-3.464-3.464m0 0a5 5 0 1 0-7.072-7.072 5 5 0 0 0 7.072 7.072v0Z"></path></svg></button>
                </div>
            </form>
        </div>
       
    );
}