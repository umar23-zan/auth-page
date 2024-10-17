import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../api/auth';
import '../App.css'

const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const { name, email, password, confirmPassword } = formData;
    const [alert, setAlert] = useState(null); // For showing alerts

    const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setAlert({ type: 'error', message: 'Passwords do not match!' });
            return;
        }
        try {
            const res = await signup(formData);
            setAlert({ type: 'success', message: 'Signup successful!' });
            console.log(res);
            // Clear the form
            setFormData({
                name: '',
                email: '',
                password: '',
                confirmPassword: '',
            });
        } catch (error) {
            setAlert({ type: 'error', message: 'Signup failed. Please try again.' });
            console.error(error.response.data);
        }
    };

    return (
        <div>
            <div className='header-section'>
                <h1>ShariaStock</h1>
            </div>
            <div className='form-container'>
                <h1>Sign Up</h1>
                {alert && <div className={`alert ${alert.type}`}>{alert.message}</div>} {/* Show alert */}
                <form onSubmit={onSubmit}>
                    <input type="text" name="name" value={name} onChange={onChange} placeholder="Name" required />
                    <input type="email" name="email" value={email} onChange={onChange} placeholder="Email" required />
                    <input type="password" name="password" value={password} onChange={onChange} placeholder="Password" required />
                    <input type="password" name="confirmPassword" value={confirmPassword} onChange={onChange} placeholder="Confirm Password" required />
                    <button type="submit">Sign Up</button>
                </form>
                <p>Already have an account? <Link to="/">Login</Link></p>
            </div>
            
        </div>
    );
};

export default Signup;
