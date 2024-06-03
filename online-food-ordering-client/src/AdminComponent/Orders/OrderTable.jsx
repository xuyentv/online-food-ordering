import React, {useEffect, useState} from 'react';
import {
    AvatarGroup,
    Box,
    Button,
    Card,
    CardHeader,
    Chip,
    Fade,
    Menu,
    MenuItem,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {fetchRestaurantsOrder, updateOrderStatus} from "../../components/State/Restaurant_Order/Action";
import Avatar from "@mui/material/Avatar";

const orderStatus = [
    {label: 'Pending', value: 'PENDING'},
    {label: 'Completed', value: 'COMPLETED'},
    {label: 'Out For Delivery', value: 'OUT_FOR_DELIVERY'},
    {label: 'Delivered', value: 'DELIVERED'},
]
const OrderTable = () => {
    const dispatch = useDispatch();
    const jwt = localStorage.getItem("jwt");
    const {restaurant, ingredients, menu, restaurantOrder} = useSelector(store => store)
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    console.log('restaurantOrder: ', restaurantOrder)
    useEffect(() => {
        dispatch(fetchRestaurantsOrder({
            restaurantId: restaurant?.userRestaurant?.id, jwt
        }))
    }, []);
    const handleUpdateOrder = (orderId, orderStatus) => {
        dispatch(updateOrderStatus({
            orderId, orderStatus, jwt
        }))
        handleClose()
    }
    return (
        <Box>
            <Card>
                <CardHeader title={"All Orders"} sx={{pt: 2, alignItems: "center"}}/>
                <TableContainer component={Paper}>
                    <Table sx={{minWidth: 650}} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Id</TableCell>
                                <TableCell align="right">Image</TableCell>
                                <TableCell align="right">Customer</TableCell>
                                <TableCell align="right">Price</TableCell>
                                <TableCell align="right">Name</TableCell>
                                <TableCell align="right">Ingredients</TableCell>
                                <TableCell align="right">Status</TableCell>
                                <TableCell align="right">Update</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {restaurantOrder?.orders.map((item) => (
                                <TableRow
                                    key={item.name}
                                    sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                >
                                    <TableCell component="th" scope="row">
                                        {item?.id}
                                    </TableCell>
                                    <TableCell align="right">
                                        <AvatarGroup>
                                            {item?.items?.map(orderItem => <Avatar
                                                src={orderItem?.food?.images[0]}></Avatar>)}
                                        </AvatarGroup>
                                    </TableCell>
                                    <TableCell align="right">{item?.customer?.fullName}</TableCell>
                                    <TableCell align="right">{item?.totalPrice}</TableCell>
                                    <TableCell align="right">
                                        {item?.items?.map(orderItem => <p>{orderItem?.food?.name}</p>)}
                                    </TableCell>
                                    <TableCell align="right"> {item?.items?.ingredients?.map((orderItem) =>
                                        <div>
                                            {orderItem?.ingredients?.map(ig => <Chip label={ig}></Chip>)}
                                        </div>)}</TableCell>
                                    <TableCell align="right">{item?.orderStatus}</TableCell>
                                    <TableCell align="right">
                                        <Button
                                            id="fade-button"
                                            aria-controls={open ? 'fade-menu' : undefined}
                                            aria-haspopup="true"
                                            aria-expanded={open ? 'true' : undefined}
                                            onClick={handleClick}
                                        >
                                            update
                                        </Button>
                                        <Menu
                                            id="fade-menu"
                                            MenuListProps={{
                                                'aria-labelledby': 'fade-button',
                                            }}
                                            anchorEl={anchorEl}
                                            open={open}
                                            onClose={handleClose}
                                            TransitionComponent={Fade}
                                        >
                                            {orderStatus?.map(status => (
                                                <MenuItem
                                                    onClick={() => handleUpdateOrder(item?.id, status?.value)}>{status?.label}</MenuItem>
                                            ))}

                                        </Menu>

                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Card>
        </Box>
    );
};

export default OrderTable;