import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const FormLogin = ({ email,pass,setPass,setEmail, handleForm, name,setName }) => {
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
                    type="text" 
                    name='displayName' 
                    placeholder='Username' 
                    value={name} 
                    onChange={e => setName(e.target.value)}
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
            </div>

            <button className='bt-sign-final'>
                Register
            </button>
        </form>
        </>
    )
}

const Register = () => {

    const navigate = useNavigate()
    const [email,setEmail] = useState('')
    const [pass,setPass] = useState('')
    const [name,setName] = useState('')
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
                displayName: name
            }),
        };
    
        try {
            const response = await fetch('http://localhost:7777/auth/register', userCredentials);
            const responseData = await response.json();
            console.log(responseData);    
            // Check if registration was successful
            if (responseData.message === "User registered and logged in successfully") {
                // Redirect to a specific page
                navigate('/'); // Replace '/dashboard' with the desired URL
            }
        } catch (error) {
            console.error('Error registering user:', error);
        }
    };

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
                        name={name}
                        setName={setName}
                        setPass={setPass}
                        handleForm={handleForm}
                    />
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

export default Register