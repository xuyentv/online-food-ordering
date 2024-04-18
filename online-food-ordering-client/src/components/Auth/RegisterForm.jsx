import React from 'react';
import {Button, TextField, Typography} from "@mui/material";
import {Field, Form, Formik} from "formik";
import {useNavigate} from "react-router-dom";

const initalValues = {
    fullName: '',
    email: '',
    password: '',
    role: 'ROLE_CUSTOMER'

}
const RegisterForm = () => {
    const navigate = useNavigate();
    const handleSubmit = () => {

    }

    return (
        <div>
            <Typography variant={'h5'} className={'text-center'}>
                Register
            </Typography>
            <Formik initialValues={initalValues} onSubmit={handleSubmit}>
                <Form >
                    <Field as={TextField}
                           label="fullName"
                           component={TextField}
                           name={"fullName"}
                           fullWidth
                           variant="outlined"
                           margin={'normal'}
                    /> <Field as={TextField}
                              label="email"
                              component={TextField}
                              name={"email"}
                              fullWidth
                              variant="outlined"
                              margin={'normal'}
                />
                    <Field as={TextField}
                           label="password"
                           component={TextField}
                           name={"password"}
                           fullWidth
                           variant="outlined"
                           margin={'normal'}
                    />
                    <Button sx={{mt: 2, padding: '1rem'}} fullWidth type={'submit'} variant={'contained'}>Login</Button>
                </Form>
            </Formik>
            <Typography variant={'body2'} align={'center'} sx={{mt: 3}}>
                if have an account already?
                <Button size={'small'} onClick={() => navigate('/account/login')}>
                    login
                </Button>
            </Typography>

        </div>
    );
};

export default RegisterForm;