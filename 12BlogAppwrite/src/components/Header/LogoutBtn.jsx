import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth_service'
import { logout } from '../../store/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })
    }
    return (
        <button 
            className='inline-block px-6 py-2 bg-blue-600 dark:bg-gray-700 text-white font-medium rounded-md hover:bg-blue-700 dark:hover:bg-gray-600 transition-colors duration-200'
            onClick={logoutHandler}
        >
            Logout
        </button>
    )
}

export default LogoutBtn
