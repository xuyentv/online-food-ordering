import React from 'react';
import {Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography} from "@mui/material";
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
    const handleSubmit = (values) => {
        console.log('form value: ', values);
    }

    return (
        <div>
            <Typography variant={'h5'} className={'text-center'}>
                Register
            </Typography>
            <Formik initialValues={initalValues} onSubmit={handleSubmit}>
                <Form>
                    <Field as={TextField}
                           label="fullName"
                           name={"fullName"}
                           fullWidth
                           variant="outlined"
                           margin={'normal'}
                           id={'fullName'}
                    /> <Field as={TextField}
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

                    <InputLabel id="role-simple-select-label">Role</InputLabel>
                    <Field
                        as={Select}
                        fullWidth
                        margin={'normal'}
                        name={'role'}
                        labelId="role-simple-select-label"
                        id="role-simple-select"
                        label="Role"
                    >
                        <MenuItem value={'ROLE_CUSTOMER'}>Customer</MenuItem>
                        <MenuItem value={'ROLE_RESTAURANT_OWNER'}>Restaurant</MenuItem>
                    </Field>
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