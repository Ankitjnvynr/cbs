import React, { useState, useEffect } from 'react';

export const VerifyForm = ({ setActiveForm,setValue, value,otp,setOtp,verifyOtp,sendOtp }) => {

  const [timer, setTimer] = useState(30);
  const [isResendDisabled, setIsResendDisabled] = useState(true);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setIsResendDisabled(false);
    }
  }, [timer]);

  const changeHandler = (e) => {
    const { name, value } = e.target;
  
    // Allow only numbers and limit to 6 digits
    if (/^\d{0,6}$/.test(value)) {
      setOtp(value)
    }
  };
  

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', value,otp);
    verifyOtp()

  };

  const resendOTP = () => {
    setTimer(30);
    setIsResendDisabled(true);
    console.log('Resending OTP...');
    // Implement OTP resend logic here
    sendOtp()
  };

  const styles = {
    container: { minHeight: '70vh', display: 'flex', justifyContent: 'center', alignItems: 'center' },
    formWrapper: { width: '400px', padding: '20px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', borderRadius: '8px' },
    input: { width: '100%', padding: '7px', marginBottom: '12px', border: '1px solid #ccc', borderRadius: '5px' },
    button: { width: '100%', padding: '7px', background: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', marginBottom: '10px', marginTop: '10px' },
    heading: { textAlign: 'center' },
    resendButton: { textDecoration: 'underline', cursor: isResendDisabled ? 'default' : 'pointer', color: isResendDisabled ? 'gray' : 'blue', border: 'none', background: 'none' }
  };

  return (
    <div style={styles.container}>
      <div style={styles.formWrapper}>
        <h5 style={styles.heading}>ACCOUNT VERIFICATION</h5>
        <p style={styles.heading}>An OTP has been sent to your email {value.email} </p>
        <form onSubmit={submitHandler}>
        <input
  style={styles.input}
  type="text"
  name="otp"
  inputMode="numeric"
  pattern="^\d{4,6}$"
  placeholder="Enter OTP"
  title="Enter a 4 to 6-digit OTP"
  required
  maxLength="6"
  value={otp}
  onChange={changeHandler}
/>

          <button style={styles.button} type="submit">Verify</button>
        </form>
        <p>
          Not received? 
          <button 
            style={styles.resendButton} 
            onClick={resendOTP} 
            disabled={isResendDisabled}
          >
            {isResendDisabled ? `Resend in ${timer}s` : 'Resend'}
          </button>
        </p>
      </div>
    </div>
  );
};
