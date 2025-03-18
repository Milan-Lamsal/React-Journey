import React from 'react'

function Container({ children }) {
    return (
        <div className='w-full max-w-full mx-auto px-1 sm:px-2'>
            {children}
        </div>
    )
}

export default Container
