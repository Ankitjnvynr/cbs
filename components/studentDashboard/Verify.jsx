import Link from 'next/link';
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export const VerifyForm = ({setActiveForm}) => {
  const [value, setValue] = useState({
    email: '',
    password: '',
    remember: false,
  });

  const [showPassword, setShowPassword] = useState(false);

  const changeHandler = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const rememberHandler = (e) => {
    setValue({ ...value, remember: e.target.checked });
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', value);
  };

  const styles = {
    container: { minHeight: '70vh', display: 'flex', justifyContent: 'center', alignItems: 'center' },
    formWrapper: { width: '400px', padding: '20px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', borderRadius: '8px' },
    input: { width: '100%', padding: '7px', marginBottom: '12px', border: '1px solid #ccc', borderRadius: '5px' },
    button: { width: '100%', padding: '7px', background: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer',marginBottom: '10px',marginTop: '10px' },
    formAction: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
    checkboxLabel: { marginLeft: '5px' },
    passwordWrapper: { position: 'relative' },
    eyeIcon: { position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }
    ,heading: { textAlign: 'center' }
  };

  return (
    <div style={styles.container}>
      <div style={styles.formWrapper}>
        <h5 style={styles.heading} >ACCOUNT VERIFICATION</h5>
       <p style={styles.heading} >An OTP send to your email </p>
        <form onSubmit={submitHandler}>
          <input
            style={styles.input}
            type="email"
            name="email"
            placeholder="E-mail"
            value={value.email}
            onChange={changeHandler}
          />
         
          <div style={styles.formAction}>
            <label>
              <input type="checkbox" checked={value.remember} onChange={rememberHandler} />
              <span style={styles.checkboxLabel}>Remember Me</span>
            </label>
            <a href="/forgot-password">Forgot Password?</a>
          </div>
          <button style={styles.button} type="submit">Login</button>
        </form>
        <p>No have an account ? <span style={{textDecoration:'underline',cursor:'pointer',color:'blue'}}   onClick={()=>setActiveForm('signup')} >SignUp</span></p>
      </div>
    </div>
  );
};
