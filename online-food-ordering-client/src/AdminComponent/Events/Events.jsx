import {Box, Button, Grid, Modal, TextField} from "@mui/material";
import {DateTimePicker, LocalizationProvider} from "@mui/x-date-pickers";
import dayjs from "dayjs";
import React from "react";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {useDispatch, useSelector} from "react-redux";
import {createEventAction} from "../../components/State/Restaurant/Action";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

const initValues = {
    image: "",
    location: "",
    name: "",
    startedAt: null,
    endsAt: null,
};

const Events = () => {
    const [formValues, setFormValues] = React.useState(initValues);
    const [open, setOpen] = React.useState(false);

    const dispatch = useDispatch();
    const jwt = localStorage.getItem("jwt");
    const {restaurant} = useSelector(store => store)
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const {startedAt, endsAt} = formValues;
        if (startedAt && !dayjs(startedAt).isValid()) {
            console.error('startedAt không hợp lệ');
            return;
        }
        if (endsAt && !dayjs(endsAt).isValid()) {
            console.error('endsAt không hợp lệ');
            return;
        }
        console.log("form submitted", formValues);
        dispatch(createEventAction({data: formValues, restaurantId: restaurant?.userRestaurant?.id, jwt}))
        setFormValues(initValues);
    };

    const handleFormChange = (e) => {
        setFormValues({...formValues, [e.target.name]: e.target.value});
    };

    const handleDateChange = (date, dateType) => {
        setFormValues({
            ...formValues,
            [dateType]: date,
        });
    };

    return (
        <div className="p-5">
            <Button onClick={handleOpen} variant="contained">
                Create New Event
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
                <Box sx={{...style}}>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <TextField
                                    name="image"
                                    label="image url"
                                    variant="outlined"
                                    fullWidth
                                    value={formValues.image}
                                    onChange={handleFormChange}
                                ></TextField>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    name="location"
                                    label="location"
                                    variant="outlined"
                                    fullWidth
                                    value={formValues.location}
                                    onChange={handleFormChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    name="name"
                                    label="Event Name"
                                    variant="outlined"
                                    fullWidth
                                    value={formValues.name}
                                    onChange={handleFormChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DateTimePicker
                                        renderInput={(props) => <TextField {...props} />}
                                        label={'Start Date and Time'}
                                        value={formValues.startedAt}
                                        onChange={(newValue) =>
                                            handleDateChange(newValue, "startedAt")}
                                        inputFormat={'MM/dd/yyyy hh:mm a'}
                                        className={'w-full'}
                                        sx={{width: '100%'}}
                                    />
                                </LocalizationProvider>
                            </Grid>
                            <Grid item xs={12}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DateTimePicker
                                        renderInput={(props) => <TextField {...props} />}
                                        label={'End Date and Time'}
                                        value={formValues.endsAt}
                                        onChange={(newValue) =>
                                            handleDateChange(newValue, "endsAt")}
                                        inputFormat={'MM/dd/yyyy hh:mm a'}
                                        className={'w-full'}
                                        sx={{width: '100%'}}
                                    />
                                </LocalizationProvider>
                            </Grid>
                        </Grid>
                        <Button type="submit" variant="contained" color="primary" fullWidth>
                            Submit
                        </Button>
                    </form>
                </Box>
            </Modal>
        </div>
    );
};

export default Events;
