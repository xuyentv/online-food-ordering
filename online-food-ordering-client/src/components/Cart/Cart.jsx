import React from 'react';
import {Box, Button, Card, Divider, Grid, Modal, TextField} from "@mui/material";
import CartItem from "./CartItem";
import AddressCart from "./AddressCart";
import {AddLocation} from "@mui/icons-material";
import {Field, Form, Formik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {createOrder} from "../State/Order/Action";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const initialValues = {
    streetAddress: "",
    state: "",
    pinCode: "",
    city: "",
}

const items = [
    1, 2, 3, 4
]
const Cart = () => {
    const createOrderUsingSelectedAddress = () => {

    }
    const [open, setOpen] = React.useState(false);
    const handleOpenAddressModel = () => {
        setOpen(true)

    }
    const dispatch = useDispatch();
    const {cart, auth} = useSelector(store => store);

    const handleClose = () => setOpen(false)
    const handleSubmit = (value) => {
        console.log('form value', value)

        const data = {

            jwt: localStorage.getItem('jwt'),
            order: {
                restaurantId: cart.cartItems[0].food?.restaurant.id,
                deliveryAddress: {
                    fullName: auth.user?.fullName,
                    streetAddress: value.streetAddress,
                    city: value.city,
                    state: value.state,
                    postalCode: value.postalCode,
                    country: "vietnam",

                }
            }
        }
        dispatch(createOrder(data))
    }
    console.log('cart parent: ', cart)
    return (
        <div>
            <main className={'lg:flex justify-between'}>
                <section className={'lg:w-[30%] space-y-6 lg:min-h-screen pt-10'}>
                    {cart.cartItems.map(item => (<CartItem item={item}/>))}
                    <Divider/>
                    <div className={'billDetails px-5 text-sm'}>
                        <p className={'font-extralight py-5 '}>Bill Details</p>
                        <div className={'space-y-3'}>
                            <div className={'flex justify-between text-gray-400'}>
                                <p>Item total</p>
                                <p>${cart?.cart?.total}</p>
                            </div>
                            <div className={'flex justify-between text-gray-400'}>
                                <p>Deliver Fee</p>
                                <p>$10</p>
                            </div>
                            <div className={'flex justify-between text-gray-400'}>
                                <p>GST and Restaurant Change</p>
                                <p>$8</p>
                            </div>
                            <Divider/>
                        </div>
                        <div className={'flex justify-between text-gray-400'}>
                            <p>Total pay</p>
                            <p>${cart?.cart?.total + 8 + 10}</p>

                        </div>
                    </div>
                </section>
                <Divider orientation="vertical" flexItem/>
                <section className={'lg:w-[70%] flex justify-center px-5 pb-10 lg:pb-0'}>
                    <div>
                        <h1 className={'text-center font-semibold text-2xl py-10'}>
                            Choose Delivery Address
                        </h1>
                        <div className={'flex gap-5 flex-wrap justify-center'}>
                            <Card className={'flex gap-5 w-64 p-5'}>
                                <AddLocation></AddLocation>
                                <div className={'space-y-3 text-gray-500'}>
                                    <h1 className={'font-semibold text-lg text-white'}>
                                        Add New Address
                                    </h1>
                                    <p className={''}>

                                    </p>
                                    <Button variant={'outlined'} fullWidth onClick={handleOpenAddressModel}>Add</Button>
                                </div>
                            </Card>
                        </div>
                    </div>
                </section>

            </main>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Formik initialValues={initialValues}
                        // validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                    >
                        <Form>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Field as={TextField}
                                           label="Street Address"
                                           component={TextField}
                                           name={"streetAddress"}
                                           fullWidth
                                           variant="outlined"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Field as={TextField}
                                           label="state"
                                           component={TextField}
                                           name={"state"}
                                           fullWidth
                                           variant="outlined"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Field as={TextField}
                                           label="pincode"
                                           component={TextField}
                                           name={"pinCode"}
                                           fullWidth
                                           variant="outlined"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Field as={TextField}
                                           label="city"
                                           component={TextField}
                                           name={"city"}
                                           fullWidth
                                           variant="outlined"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button fullWidth variant={'contained'} type={'submit'} color={'primary'}>Deliver
                                        Here</Button>
                                </Grid>

                            </Grid>
                        </Form>
                    </Formik>
                </Box>
            </Modal>
        </div>
    );
};

export default Cart;
