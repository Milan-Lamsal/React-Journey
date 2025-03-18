import React, { useId } from 'react'

function Select({
    options,
    label,
    className = "",
    ...props
}, ref) {
    const id = useId()
    return (
        <div className='w-full mb-4'>
            {label && <label htmlFor={id} className='mb-2 block text-black dark:text-white font-medium'>{label}</label>}
            <select
                {...props}
                id={id}
                ref={ref}
                className={`px-3 py-2 rounded-lg bg-white text-black dark:bg-gray-800 dark:text-white outline-none focus:bg-gray-50 dark:focus:bg-gray-700 duration-200 border border-gray-300 dark:border-gray-600 w-full ${className}`}
            >
                {options?.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}

            </select>
        </div>
    )
}

export default React.forwardRef(Select)