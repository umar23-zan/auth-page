import React, { useState } from 'react';
import { forgotPassword } from '../api/auth'; // Assume forgotPassword function makes an API call

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [alert, setAlert] = useState(null);

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await forgotPassword({ email });
            setAlert({ type: 'success', message: res.data.msg });
            setEmail(''); // Clear the email input field
        } catch (error) {
            setAlert({ type: 'error', message: error.response.data.msg });
        }
    };

    return (
        <div>
            <h1>Forgot Password</h1>
            {alert && <div className={`alert ${alert.type}`}>{alert.message}</div>}
            <form onSubmit={onSubmit}>
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                />
                <button type="submit">Send Reset Link</button>
            </form>
        </div>
    );
};

export default ForgotPassword;
