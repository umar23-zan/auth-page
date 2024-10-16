import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { login} from '../api/auth';
import '../App.css'

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const { email, password } = formData;
    const [alert, setAlert] = useState(null); // For showing alerts

    const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await login(formData);
            setAlert({ type: 'success', message: 'Login successful!' });
            console.log(res);
            // Clear the form
            setFormData({ email: '', password: '' });
        } catch (error) {
            setAlert({ type: 'error', message: 'Login failed. Please try again.' });
            console.error(error.response.data);
        }
    };

    

    return (
        <div>
            <h1>Login</h1>
            {alert && <div className={`alert ${alert.type}`}>{alert.message}</div>} {/* Show alert */}
            <form onSubmit={onSubmit}>
                <input type="email" name="email" value={email} onChange={onChange} placeholder="Email" required />
                <input type="password" name="password" value={password} onChange={onChange} placeholder="Password" required />
                <button type="submit">Login</button>
            </form>
            <p><Link to="/forgot-password">Forgot Password?</Link></p>
            <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
        </div>
    );
};

export default Login;
