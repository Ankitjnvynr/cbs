import React, { useState, useEffect } from 'react';

export const VerifyForm = ({ setActiveForm,setValue, value, }) => {

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
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', value);
  };

  const resendOTP = () => {
    setTimer(30);
    setIsResendDisabled(true);
    console.log('Resending OTP...');
    // Implement OTP resend logic here
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
        <p style={styles.heading}>An OTP has been sent to your email</p>
        <form onSubmit={submitHandler}>
          <input
            style={styles.input}
            type="number"
            name="otp"
            placeholder="Enter OTP"
            value={value.otp}
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
