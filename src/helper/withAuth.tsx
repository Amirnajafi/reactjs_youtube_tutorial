import React from 'react'
import Login from '../pages/login'

const WithAuth = (Component : React.FC) => {
    let user = localStorage.getItem("user")
    if (user){
        user = JSON.parse(user)
    }
    return (props:any) =>{
        if (!user){
            return <Login/>
        }else{
            return <Component {...props} />
        }
    }
}


export default WithAuth;