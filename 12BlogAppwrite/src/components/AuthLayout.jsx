import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


export default function Protected({ children, authentication = true }) { // file name and function name can be different
    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.status)

    useEffect(() => {

        // easy way 
        // if (authStatus === true) {
        //     navigate('/')
        // } else if (authStatus === false) {
        //     navigate("/login")
        // }


        // let authValue = authStatus === true ? true : false

        //TODO : Rewrite  
        //HardWay 
        // true && if false !==true => final result true cus true and false is false so its correct its true
        if (authentication && authStatus !== authentication) {
            navigate('/login');
            // false && true != true => final is false so 
        } else if (!authentication && authStatus !== authentication) {
            navigate("/")
        }
        setLoader(false)

    }, [authStatus, navigate, authentication]) // [] Is dependancy array
    return loader ? <h1>Loading..</h1> : <>{children}</>


}

