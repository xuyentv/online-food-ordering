import React, {useEffect} from "react";
import {
    Box,
    Card,
    CardHeader,
    Chip,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import {Create, Delete} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {deleteFoodAction, getMenuItemsByRestaurantId} from "../../components/State/Menu/Action";
import Avatar from "@mui/material/Avatar";

const MenuTable = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const jwt = localStorage.getItem("jwt");
    const {restaurant, ingredients, menu} = useSelector(store => store)
    useEffect(() => {
        dispatch(getMenuItemsByRestaurantId({
            restaurantId: restaurant?.userRestaurant?.id,
            jwt,
            vegetarian: false,
            seasonal: false,
            nonveg: false,
            foodCategory: ""
        }))
    }, []);

    const createMenu = () => {
        navigate("/admin/restaurants/add-menu");
    };
    const handleDeleteFood= (foodId)=> {
        dispatch(deleteFoodAction({foodId, jwt}))
    }
    return (
        <Box>
            <Card>
                <CardHeader
                    action={
                        <IconButton onClick={createMenu} aria-label={"settings"}>
                            <Create/>
                        </IconButton>
                    }
                    title={"Menu"}
                    sx={{pt: 2, alignItems: "center"}}
                />
                <TableContainer component={Paper}>
                    <Table sx={{minWidth: 650}} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">ID</TableCell>
                                <TableCell align="center">Image</TableCell>
                                <TableCell align="right">Title</TableCell>
                                <TableCell align="right">Ingredients</TableCell>
                                <TableCell align="right">Price</TableCell>
                                <TableCell align="right">Avaibilty</TableCell>
                                <TableCell align="right">Delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {menu?.menuItems?.map((item) => (
                                <TableRow
                                    key={item.name}
                                    sx={{"&:last-child td, &:last-child th": {border: 0}}}
                                >
                                    <TableCell align="left">{item?.id}</TableCell>
                                    <TableCell align="left"><Avatar src={item?.images[0]}/></TableCell>
                                    <TableCell align="right">{item?.name}</TableCell>
                                    <TableCell align="right">
                                        {item?.ingredients?.map((ig) => <Chip label={ig?.name}></Chip>)}
                                        </TableCell>
                                    <TableCell align="right">{item?.price}</TableCell>
                                    <TableCell align="right">{item?.available ? "in_stoke": "out_of_stoke"}</TableCell>
                                    <TableCell align="right">
                                        <IconButton onClick={()=> handleDeleteFood(item?.id)}>
                                            <Delete></Delete>
                                        </IconButton>
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

export default MenuTable;
