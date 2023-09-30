import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ConnectAccount from './ConnectAccount'

const FormLogin = ({ email, error ,pass,setPass,setEmail, handleForm, handleRegister }) => {
    return(
        <>
        <form className='form-login' onSubmit={handleForm}>

            <div className="input-type">
                <input 
                    type="email" 
                    name='Email' 
                    placeholder='Email' 
                    value={email} 
                    onChange={e => setEmail(e.target.value)}
                />
            </div>
            <div className="input-type">
                <input 
                    type='password' 
                    name='password' 
                    placeholder='Password' 
                    value={pass} 
                    onChange={e => setPass(e.target.value)}
                />
                <p style={{color:"red"}}>
                    {error}
                </p>
            </div>

            <div className="sign-in-button">
                <div className="check-in" onClick={handleRegister}>
                    {/* <input type="checkbox" id='signin' name='signin' value={''} placeholder='Keep Sign In'/> */}
                    <p>
                        Register
                    </p>
                </div>
                <Link to={'/forgot'}>
                    <p>
                        Forgot Password?
                    </p>
                </Link>
            </div>

            <button className='bt-sign-final'>
                Login
            </button>
        </form>
        </>
    )
}

const Login = ({ user, setUser}) => {

    const navigate = useNavigate()
    const [email,setEmail] = useState('')
    const [pass,setPass] = useState('')
    const [error,setError] = useState('')

    const handleForm = async (e) => {
        e.preventDefault();
    
        const userCredentials = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: pass,
            }),
        };
    
        try {
            // const response = await fetch('http://localhost:7777/auth/register', userCredentials);
            const response = await fetch('http://localhost:7777/auth/login', userCredentials);
            const responseData = await response.json();
            console.log(responseData.user);
            console.log(responseData);

            // Check if registration was successful
            if (responseData.message === 'Login successful') {
                setUser(responseData.user)
            } else {
                setError(responseData.message)
            }
        } catch (error) {
            console.error('Error registering user:', error);
        }
    };

    const handleRegister = async(e) => {
        e.preventDefault();
        navigate('/register');
    }
    

    return (
        <div className='main-component'>
            <div className="auth-component">
                <div className="logo">
                    <img src="./img/logo.png" alt="" />
                </div>
                <div className="form-component">
                    <FormLogin 
                        email={email} 
                        setEmail={setEmail}
                        pass={pass}
                        setPass={setPass}
                        error={error}
                        handleForm={handleForm}
                        handleRegister={handleRegister}
                    />
                </div>
                {/* <button className='bt-sign-register'> Register </button> */}
                <div className="connect-component">
                    <ConnectAccount/>
                </div>
            </div>
            <footer>
                <div className="contact-support">
                    <div className="item-cs">
                        <h5> 0950-771-2301 </h5>
                    </div>
                    <div className="item-cs">                        
                        <h5> finessedpangasinan </h5>
                    </div>
                    <div className="item-cs">
                        
                        <h5> finessedpangasinan@gmail.com </h5>
                    </div>
                    <div className="item-cs">
                        
                        <h5> Laoac, Philippines </h5>
                    </div>
                </div>
                <div className="credits">
                    <div className="item-cs">
                        <h5>
                        Sneakers, also known as athletic shoes or trainers, are a type of footwear designed primarily for sports and physical activities. Over the years, they have evolved from being functional sportswear to a fashion staple, worn by people of all ages for various purposes.
                        </h5>
                    </div>
                    <div className="item-cs">
                        <h5>
                            © 2023 Finessed Pangasinan. All Rights Reserved
                        </h5>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Login