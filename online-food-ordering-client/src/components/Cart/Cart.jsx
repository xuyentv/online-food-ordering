import React from 'react';
import {Box, Button, Card, Divider, Grid, Modal, TextField} from "@mui/material";
import CartItem from "./CartItem";
import AddressCart from "./AddressCart";
import {AddLocation} from "@mui/icons-material";
import {ErrorMessage, Field, Formik} from "formik";
// import * as Yup from "yup"

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
// const validationSchema = Yup.object.shape({
//     streetAddress: Yup.string().required("Street address is required"),
//     state: Yup.string().required("State address is required"),
//     pinCode: Yup.string().required("PinCode address is required"),
//     city: Yup.string().required("City address is required"),
// })

const items = [
    1, 2, 3
]
const Cart = () => {
    const createOrderUsingSelectedAddress = () => {

    }
    const [open, setOpen] = React.useState(false);
    const handleOpenAddressModel = () => {
        setOpen(true)

    }
    const handleClose = () => setOpen(false)
    const handleSubmit = () => {

    }
    return (
        <div>
            <main className={'lg:flex justify-between'}>
                <section className={'lg:w-[30%] space-y-6 lg:min-h-screen pt-10'}>
                    {items.map(item => (<CartItem/>))}
                    <Divider/>
                    <div className={'billDetails px-5 text-sm'}>
                        <p className={'font-extralight py-5 '}>Bill Details</p>
                        <div className={'space-y-3'}>
                            <div className={'flex justify-between text-gray-400'}>
                                <p>Item total</p>
                                <p>$599</p>
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
                            <p>$1234</p>

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
                            {[1, 1, 1, 1, 1, 1].map(item => (
                                <AddressCart handleSelectAddress={createOrderUsingSelectedAddress} item={item}
                                             showButton={true}/>))}
                            <Card className={'flex gap-5 w-64 p-5'}>
                                <AddLocation></AddLocation>
                                <div className={'space-y-3 text-gray-500'}>
                                    <h1 className={'font-semibold text-lg text-white'}>
                                        Add New Address
                                    </h1>
                                    <p className={''}>
                                        219 Nguyen Ngoc Vu, Cau Giay, Ha Noi
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

                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Field as={TextField}
                                       label="Street Address"
                                       component={TextField}
                                       name={"streetAddress"}
                                       fullWidth
                                       variant="outlined"
                                       // error={!ErrorMessage("streetAddress")}
                                       // helperText={
                                       //     <ErrorMessage>
                                       //         {(msg)=> <span className={'text-red-400'}>{msg}</span>}
                                       //     </ErrorMessage>
                                       // }
                                />

                            </Grid>

                        </Grid>

                    </Formik>
                </Box>
            </Modal>
        </div>
    );
};

export default Cart;
