import { useState } from 'react';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({ username: '', email: '', password: '' });
    const [errors, setErrors] = usestate({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const validateForm = () => {
        let newErrors = {};
        if (!formData.username.trim()) newErrors.username = "Username is required";
        if (!formData.email.trim()) newErrors.email = "Email is required";
        if (!formData.password.trim()) newErrors.password = "Password is required";
        setErrors(newErrors);
        return object.keys(newErrors).length === 0;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()){
            console.log("Form submitted sucessfully",formData);
        }
        
    };

    return (
        <form onSubmit={handleSubmit} classname="registration-form">
            <div>
                <label>Username:</label>
            <input
                type="text"
                name="username"
                value={formData.name}
                onChange={handleChange}
            />
            {errors.username && <p className="error">{errors.username}</p>}
            </div>
            <div>
                <label>Email:</label>
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div>
                <label>Password:</label>
            <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
            />
            {errors.password && <p className="error">{errors.password}</p>}
            </div>
            
            <button type="submit">Register</button>
        </form>
    );
};

export default RegistrationForm;