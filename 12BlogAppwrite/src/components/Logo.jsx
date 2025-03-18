import React from 'react'

function Logo({width = '100px'}) {
    return (
        <div className="text-gray-800 dark:text-blue-400 font-bold text-xl">
            <img 
                src="https://cdn-icons-png.flaticon.com/512/3959/3959542.png" 
                alt="Milan-Blog" 
                className="max-w-full h-auto"
                style={{width: width}}
            />
        </div>
    )
}

export default Logo
