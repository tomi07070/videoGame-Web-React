import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

 export const RegisterPage = () => {
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    password: ''
  });

  const { userName, email, password } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const isFormFilled = userName.trim() !== '' && email.trim() !== '' && password.trim() !== '';


  

  return (
    <>
      <form className='form-r'>
        <h1 className='h1-r'>Register</h1>
        <div className='div-r'>
          <input
            className='input-r'
            type="text"
            placeholder="User Name"
            name="userName"
            value={userName}
            onChange={handleChange}
            required
          />
        </div>
        <div className='div-r'>
          <input
            className='input-r'
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
        </div>
        <div className='div-r'>
          <input
            className='input-r'
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={handleChange}
            required
          />
        </div>
        <div className='div-1-r'>
          Already have an account? <NavLink className='a-r' to={'/login'}>Login</NavLink>
        </div>
        <NavLink className='a-1-r' to={'/games'}><button className='btn-r' type="submit" disabled={!isFormFilled}>Submit</button></NavLink>
      </form>
    </>
  );
};


