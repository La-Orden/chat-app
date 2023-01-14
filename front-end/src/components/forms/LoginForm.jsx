import React, { useState } from 'react';
import { TextField, Button, Paper, Typography } from '@mui/material';

const formStyles = {
    display: "flex",
    gap: "1em",
    padding: "2rem",
    flexDirection: "column",
}

const LoginForm = (props) => {

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
    };

    return (
        <Paper 
            elevation={3}
            sx={{
                display: "flex",
                flexDirection: "column",
                padding: "2rem",
                width: "45%",
            }}
        >
            <Typography variant="h5">
                Login
            </Typography>

            <form 
                onSubmit={handleSubmit}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    marginTop: "2rem",
                    gap: "1rem",
                    marginTop: "2rem",
                }}
            >
                <TextField
                    label="Username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    fullWidth
                />
                <TextField
                    label="Password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    fullWidth
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                >
                Log-in
                </Button>
            </form>
        </Paper>
    )
}

export default LoginForm;