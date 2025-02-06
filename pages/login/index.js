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
import conf from '../../lib/conf';
import authService from '../../services/auth';

const LoginPage = () => {
    const router = useRouter();

    const [value, setValue] = useState({
        email: '',
        password: '',
        remember: false,
    });

    const [showPassword, setShowPassword] = useState(false); // State to manage password visibility
    const [validator] = useState(new SimpleReactValidator({ className: 'errorMessage' }));

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (token) {
            router.push('/dashboard'); // Redirect if authenticated
        }
    }, [router]);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword); // Toggle visibility state
    };

    const changeHandler = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value });
        validator.showMessages();
    };

    const rememberHandler = () => {
        setValue({ ...value, remember: !value.remember });
    };

    const submitForm = async (e) => {
        e.preventDefault();
        if (validator.allValid()) {
            const { email, password } = value;
            
            const res = await authService.login(email,password)
            // user = await JSON.parse(res)
            if(res.data){
                toast.success('Successfully logged in to CBS College!');
                localStorage.setItem('authToken', res.data.token)
                localStorage.setItem('user',JSON.stringify(res.data))
                router.push('/dashboard')
            }else{
                toast.error('Invalid email or password!');
            }
            
            
            
            
            
            
            // if (email === 'cbs@gmail.com' && password === '1234' || email === 'ankitbkana@outlook.com' && password === 'ankit') {
            //     toast.success('Successfully logged in to CBS College!');
            //     localStorage.setItem('authToken', 'mockToken123');
            //     router.push('/dashboard'); // Redirect to dashboard
            // } else {
            //     toast.error('Invalid email or password!');
            // }
        } else {
            validator.showMessages();
            toast.error('Please fill all required fields!');
        }
    };

    return (
        <Grid className="loginWrapper">
            <Grid className="loginForm">
                <h2>CBS GROUP OF INSTITUTION</h2>
                <p>Admin Login</p>
                <form onSubmit={submitForm}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                                className="inputOutline"
                                fullWidth
                                placeholder="E-mail"
                                value={value.email}
                                variant="outlined"
                                name="email"
                                label="E-mail"
                                InputLabelProps={{ shrink: true }}
                                onBlur={changeHandler}
                                onChange={changeHandler}
                            />
                            {validator.message('email', value.email, 'required|email')}
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                className="inputOutline"
                                fullWidth
                                placeholder="Password"
                                value={value.password}
                                variant="outlined"
                                name="password"
                                type={showPassword ? 'text' : 'password'} // Toggle type based on visibility
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
                            />
                            {validator.message('password', value.password, 'required')}
                        </Grid>
                        <Grid item xs={12}>
                            <Grid className="formAction">
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
                            <Grid className="formFooter">
                                <Button fullWidth className="cBtnTheme" type="submit">Login</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </form>
            </Grid>
        </Grid>
    );
};

export default LoginPage;
