import React, { FormEvent, useContext, useState } from "react"
import { Button, Input } from "../components"
import { Link , useNavigate } from "react-router-dom"
import { login } from "../service/auth"
import { Context } from "../contexts/mainContext"
import useCountDown from "../hook/useCountDown"

const Login = () =>{
    const {dispatch} = useContext(Context)
    const navigate = useNavigate()
    const [errors , setErrors] = useState<{}>({})
    const usernameRef = React.useRef<HTMLInputElement>(null)
    const passwordRef = React.useRef<HTMLInputElement>(null)
    const {counter , resetTimer} = useCountDown(5)
    console.log("my count down timer is " , counter)


    const handleSubmitForm  = (e : FormEvent) =>{
        e.preventDefault()
        const data = {
            "username":usernameRef.current?.value,
            "password" : passwordRef.current?.value,
        }
        const errors = {}

        for (let [key, value] of Object.entries(data)) {
            if (!value){
                errors[key] = `${key} is required`
            }
        }

        if (Object.keys(errors).length > 0){
            setErrors(errors)
            return
        }else{
            setErrors({})
        }

        
        login(data).then(res => {
            if (res.status === 200){
                const data = res.data
                localStorage.setItem("token", data.token)
                dispatch("user" , data)
                localStorage.setItem("user", JSON.stringify(data))
                console.log(window.location.pathname)
                if (window.location.pathname === "/login"){
                    navigate("/")
                }else{
                    // reload
                    window.location.reload()
                    // navigate(window.location.pathname)
                }
            }
        })


    }
    return (
        <div className="form" style={{
            display : "flex",
            flex : 1,
            flexDirection : "column",
            justifyContent : "center",
            alignItems : "center"
        }}>
            <form onSubmit={handleSubmitForm} className="form">
                <span>Welcome Back</span>
                <span>Enter your credentials to access your account</span>
                <Input
                    ref={usernameRef}
                    lable="Email Address"
                    placeholder="Enter your Email"
                    icon={
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                    }
                    error={errors["username"]}
                />
                <Input 
                    ref={passwordRef}
                    lable="Password"
                    placeholder="Enter your Password"
                    type="password"
                    icon={
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                      </svg>    
                    }
                    error={errors["password"]}

                />
                <Link style={{fontSize:"6px"}} to={"/register"}>Not user ? go to register</Link>
                {/* <button
                onClick={()=>{
                    resetTimer()
                }}
                type="button"
                disabled={counter > 0}>
                    <span>Send code</span>
                    {counter > 0 && 
                    <span> {counter}</span>
                }
                </button> */}
                <Button>
                    <span>Login</span>
                </Button>
            </form>
        </div>
    )
}

export default Login