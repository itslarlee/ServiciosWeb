// src/pages/RegisterPage.js
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Container, Typography } from '@mui/material';

const validationSchema = Yup.object({
    username: Yup.string().required('Required'),
    password: Yup.string().required('Required'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Required'),
    email: Yup.string().email('Invalid email format').required('Required'),
    securityQuestion: Yup.string().required('Required'),
    securityAnswer: Yup.string().required('Required'),
});

function RegisterPage() {
    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
            confirmPassword: '',
            email: '',
            securityQuestion: '',
            securityAnswer: '',
        },
        validationSchema,
        onSubmit: (values) => {
            // Simulate a registration request to the server
            console.log('Form data submitted:', values);
        },
    });

    return (
        <Container maxWidth="xs">
            <Typography variant="h5" align="center" gutterBottom>
                Register
            </Typography>
            <form onSubmit={formik.handleSubmit}>
                <TextField
                    fullWidth
                    margin="normal"
                    name="username"
                    label="Username"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    error={formik.touched.username && Boolean(formik.errors.username)}
                    helperText={formik.touched.username && formik.errors.username}
                />
                <TextField
                    fullWidth
                    margin="normal"
                    type="password"
                    name="password"
                    label="Password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                />
                <TextField
                    fullWidth
                    margin="normal"
                    type="password"
                    name="confirmPassword"
                    label="Confirm Password"
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                    error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                    helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                />
                <TextField
                    fullWidth
                    margin="normal"
                    name="email"
                    label="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                />
                <TextField
                    fullWidth
                    margin="normal"
                    name="securityQuestion"
                    label="Security Question"
                    value={formik.values.securityQuestion}
                    onChange={formik.handleChange}
                    error={formik.touched.securityQuestion && Boolean(formik.errors.securityQuestion)}
                    helperText={formik.touched.securityQuestion && formik.errors.securityQuestion}
                />
                <TextField
                    fullWidth
                    margin="normal"
                    name="securityAnswer"
                    label="Security Answer"
                    value={formik.values.securityAnswer}
                    onChange={formik.handleChange}
                    error={formik.touched.securityAnswer && Boolean(formik.errors.securityAnswer)}
                    helperText={formik.touched.securityAnswer && formik.errors.securityAnswer}
                />
                <Button color="primary" variant="contained" fullWidth type="submit">
                    Register
                </Button>
            </form>
        </Container>
    );
}

export default RegisterPage;
