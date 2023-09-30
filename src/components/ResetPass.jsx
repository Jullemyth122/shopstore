import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const ResetPass = () => {

    const [newPassword,setNewPassword] = useState("")
    const [resetPasswordToken,setTokenInput] = useState("")
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")
    
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:7777/auth/change-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ newPassword, resetPasswordToken }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message);
            }

            const responseData = await response.json();
            setMessage(responseData.message);
            setError(''); // Clear any previous error message
        } catch (error) {
            setError(error.message);
            setMessage(''); // Clear any previous success message
        }
    };


    return (
        <div className='main-component'>
            <div className="auth-component">
                <div className='forgot form-component'>
                    <form 
                        action="" 
                        className="form-login"
                        onSubmit={handleSubmit}
                    >
                        <div className="input-type">
                            <input 
                                type="text" 
                                name='token' 
                                placeholder='Token' 
                                value={resetPasswordToken} 
                                onChange={e => setTokenInput(e.target.value)}
                            />
                        </div>
                        <div className="input-type">
                            <input 
                                type="text" 
                                name='password' 
                                placeholder='Reset Password' 
                                value={newPassword} 
                                onChange={e => setNewPassword(e.target.value)}
                            />
                        </div>
                        <p className={`class-out ${ error ? 'red' : 'green'}`}>
                            {error} {message}
                        </p>
                        <button className='bt-sign-final'>
                            Send New Password
                        </button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default ResetPass