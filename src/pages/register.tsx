import React, { FormEvent, useState } from "react"
import { Button, Input } from "../components"
import { error } from "console"
import { register } from "../service/auth"
import { Link , useNavigate  } from "react-router-dom"

const Register = () =>{
    const navigate = useNavigate()
    const [errors , setErrors] = useState<{}>({})
    const usernameRef = React.useRef<HTMLInputElement>(null)
    const nameRef = React.useRef<HTMLInputElement>(null)
    const familyRef = React.useRef<HTMLInputElement>(null)
    const passwordRef = React.useRef<HTMLInputElement>(null)

    const handleSubmitForm  = (e : FormEvent) =>{
        e.preventDefault()
        const data = {
            "username":usernameRef.current?.value,
            "password" : passwordRef.current?.value,
            "name" : nameRef.current?.value,
            "family" : familyRef.current?.value
        }
        const errors = {}

        for (let [key, value] of Object.entries(data)) {
            if (!value){
                errors[key] = `${key} is required`
            }
        }
        if (data.password && data.password.length < 8){
            errors["password"] = `Password is week`
        }

        if (Object.keys(errors).length > 0){
            setErrors(errors)
            return
        }else{
            setErrors({})
        }

        
        register(data).then(res => {
            if (res.status === 200){
                console.log("success")
                navigate("/login")
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
                    ref={nameRef}
                    lable="Name"
                    placeholder="Enter your first name"
                    icon={
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                        </svg>
                    }
                    error={errors["name"]}

                />
                <Input 
                    ref={familyRef}
                    lable="Last name"
                    placeholder="Enter your Last name"
                    icon={
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                        </svg>
                    }
                    error={errors["family"]}

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
                <Link style={{fontSize:"6px"}} to={"/login"}>Already user? go to login</Link>
                <Button>
                    <span>Register</span>
                </Button>
            </form>
        </div>
    )
}

export default Register