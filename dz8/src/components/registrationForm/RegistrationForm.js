import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import './RegistrationForm.css';

function RegistrationForm() {
    const { handleSubmit, control, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="page-container">
        <form onSubmit={handleSubmit(onSubmit)} className="form-container">
            <div>
                <h2 className="form-header">Register with</h2>
            </div>
            <div className="input-group">
                <label className="label">Name</label>
                <Controller
                    name=""
                    control={control}
                    defaultValue=""
                    rules={{ required: 'Name is required' }}
                    render={({ field }) => <input {...field} className="input-field" />}
                />
                {errors.name && <span className="error-message">{errors.name.message}</span>}
            </div>
            <div className="input-group">
                <label className="label">Email</label>
                <Controller
                    name="email"
                    control={control}
                    defaultValue=""
                    rules={{ required: 'Email is required' }}
                    render={({ field }) => <input {...field} className="input-field" />}
                />
                {errors.email && <span className="error-message">{errors.email.message}</span>}
            </div>
            <div className="input-group">
                <label className="label">Password</label>
                <Controller
                    name="password"
                    control={control}
                    defaultValue=""
                    rules={{ required: 'Password is required' }}
                    render={({ field }) => <input type="password" {...field} className="input-field" />}
                />
                {errors.password && <span className="error-message">{errors.password.message}</span>}
            </div>
            <div className="input-group">
                <label className="label">Re-enter Password</label>
                <Controller
                    name="reenterPassword"
                    control={control}
                    defaultValue=""
                    rules={{ required: 'Please re-enter your password' }}
                    render={({ field }) => <input type="password" {...field} className="input-field" />}
                />
                {errors.reenterPassword && <span className="error-message">{errors.reenterPassword.message}</span>}
            </div>
            <button type="submit" className="submit-button">Continue</button>
        </form>
        </div>
    );
}

export default RegistrationForm;

