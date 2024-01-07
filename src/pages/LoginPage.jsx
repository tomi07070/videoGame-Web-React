import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

 export function LoginPage() {
  
  const [formData, setFormData] = useState({
    userName: '',
    password: ''
  });

  const { userName, password } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const isFormFilled = userName.trim() !== ''  && password.trim() !== '';

  return (
    <>
      <form className='form-r'>
        <h1 className='h1-r'>Login</h1>
        <div className='div-r'>
          <input
            className='input-r'
            type="text"
            placeholder="User Name"
            name="userName"
            id="userName"
            value={userName}
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
            id="password"
            value={password}
            onChange={handleChange}
            required
          />
        </div>
        <div className='div-1-r'>
          Don't have an account? <NavLink className='a-r' to={'/register'}>Register</NavLink>
        </div>
        <NavLink className='a-1-r' to={'/games'}><button className='btn-r' type="submit" disabled={!isFormFilled}>Submit</button></NavLink>
      </form>
    </>
  );
}



