import React, { useState, useEffect } from 'react';
import Grid from "@mui/material/Grid";
import SimpleReactValidator from "simple-react-validator";
import { toast } from "react-toastify";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // React Icons for eye
import { useRouter } from 'next/router';
import Link from "next/link";
import Image from 'next/image'; // Import Image from Next.js

const LoginPage = () => {
    const router = useRouter();

    const [value, setValue] = useState({
        email: '',
        password: '',
        remember: false,
    });

    const [showPassword, setShowPassword] = useState(false);
    const [validator] = useState(new SimpleReactValidator({ className: 'errorMessage' }));

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (token) {
            router.push('/dashboard');
        }
    }, [router]);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const changeHandler = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value });
        validator.showMessages();
    };

    const rememberHandler = () => {
        setValue({ ...value, remember: !value.remember });
    };

    const submitForm = (e) => {
        e.preventDefault();
        if (validator.allValid()) {
            const { email, password } = value;
            if (email === 'cbs@gmail.com' && password === '1234') {
                toast.success('Successfully logged in to CBS College!');
                localStorage.setItem('authToken', 'mockToken123');
                router.push('/dashboard');
            } else {
                toast.error('Invalid email or password!');
            }
        } else {
            validator.showMessages();
            toast.error('Please fill all required fields!');
        }
    };

    return (
        <Grid 
            container 
            justifyContent="center" 
            alignItems="center" 
            style={{
                minHeight: '100vh',
                backgroundImage: "url('/images/bgdash.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <Grid 
                item 
                xs={10} 
                sm={8} 
                md={5} 
                lg={4} 
                style={{
                    padding: '30px',
                    borderRadius: '16px',
                    background: 'rgba(255, 255, 255, 0.2)',
                    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)', // Safari support
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    textAlign: 'center',
                }}
            >
                <Image 
                    src="/images/cbslogo.png" 
                    alt="CBS Logo" 
                    width={300} 
                    height={100} 
                    style={{ marginBottom: '20px' }} 
                />
                <h2 style={{ color: '#fff', marginBottom: '5px' }}>CBS GROUP OF INSTITUTION</h2>
                <p style={{  marginBottom: '20px' }}>ADMIN LOGIN</p>
                <form onSubmit={submitForm}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                placeholder="E-mail"
                                value={value.email}
                                variant="outlined"
                                name="email"
                                label="E-mail"
                                InputLabelProps={{ shrink: true }}
                                onBlur={changeHandler}
                                onChange={changeHandler}
                                style={{ marginBottom: '10px' }}
                            />
                            {validator.message('email', value.email, 'required|email')}
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                placeholder="Password"
                                value={value.password}
                                variant="outlined"
                                name="password"
                                type={showPassword ? 'text' : 'password'}
                                label="Password"
                                InputLabelProps={{ shrink: true }}
                                onBlur={changeHandler}
                                onChange={changeHandler}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton onClick={togglePasswordVisibility} edge="end">
                                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                                style={{ marginBottom: '10px' }}
                            />
                            {validator.message('password', value.password, 'required')}
                        </Grid>
                        <Grid item xs={12}>
                            <Grid 
                                container 
                                justifyContent="space-between" 
                                alignItems="center" 
                                style={{ marginTop: '10px' }}
                            >
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={value.remember}
                                            onChange={rememberHandler}
                                        />
                                    }
                                    label="Remember Me"
                                />
                                <Link href="/forgot-password">Forgot Password?</Link>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Button 
                                fullWidth 
                                type="submit" 
                                style={{
                                    backgroundColor: '#6200ea',
                                    color: '#fff',
                                    padding: '10px',
                                    borderRadius: '8px',
                                    textTransform: 'none',
                                    marginTop: '20px',
                                }}
                            >
                                Login
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Grid>
        </Grid>
    );
};

export default LoginPage;
