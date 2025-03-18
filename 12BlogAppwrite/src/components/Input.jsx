import React, { useId } from 'react'

const Input = React.forwardRef(function anotherInput({
    label,
    type = "text",
    className = "",
    ...props
}, ref) {
    const id = useId()
    return (
        <div className='w-full'>
            {label && <label className='inline-block mb-1 pl-1 text-black dark:text-white font-medium'
                htmlFor={id}>
                {label}
            </label>
            }
            <input
                type={type}
                className={`px-3 py-2 rounded-lg bg-white text-black dark:bg-gray-700 dark:text-white outline-none focus:bg-gray-50 dark:focus:bg-gray-600 duration-200 border border-gray-300 dark:border-gray-600 w-full ${className}`}
                ref={ref}
                {...props}
                id={id}
                style={{
                    color: type === "email" || type === "password" ? "#000" : "", 
                    backgroundColor: type === "email" || type === "password" ? "#fff" : ""
                }}
                data-input-type={type}
            />
        </div>
    )
})

export default Input