import React from 'react';
import {Button, TextField, Typography} from "@mui/material";
import {Field, Form, Formik} from "formik";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {loginUser} from "../State/Authentication/Action";

const initalValues = {
    email: '',
    password: '',

}
const LoginForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleSubmit = (values) => {
        console.log('form login: ', values)
        dispatch(loginUser({userData: values, navigate}))
    }
    return (
        <div>
            <Typography variant={'h5'} className={'text-center'}>
                Login

            </Typography>
            <Formik initialValues={initalValues} onSubmit={handleSubmit}>
                <Form>
                    <Field as={TextField}
                           label="email"
                           name={"email"}
                           fullWidth
                           variant="outlined"
                           margin={'normal'}
                           id={'email'}
                    />
                    <Field as={TextField}
                           label="password"
                           name={"password"}
                           fullWidth
                           variant="outlined"
                           margin={'normal'}
                           id={'password'}
                           type="password"
                    />
                    <Button sx={{mt: 2, padding: '1rem'}} fullWidth type={'submit'} variant={'contained'}>Login</Button>
                </Form>
            </Formik>
            <Typography variant={'body2'} align={'center'} sx={{mt: 3}}>
                Don't have an account?
                <Button size={'small'} onClick={() => navigate('/account/register')}>
                    register
                </Button>
            </Typography>

        </div>
    );
};

export default LoginForm;