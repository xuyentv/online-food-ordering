import React, {useEffect} from "react";
import {
    Box,
    Card,
    CardHeader,
    Modal,
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
import CreateFoodCategoryForm from "./CreateFoodCategoryForm";
import {useDispatch, useSelector} from "react-redux";
import {getRestaurantsCategory} from "../../components/State/Restaurant/Action";
import {fetchRestaurantsOrder} from "../../components/State/Restaurant_Order/Action";

const foodCategories = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};
const FoodCategoryTable = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const jwt = localStorage.getItem("jwt");
    const {category, restaurant} = useSelector((store) => store)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getRestaurantsCategory({jwt, restaurantId: restaurant?.userRestaurant?.id}))


    }, []);


    return (
        <Box>
            <Card>
                <CardHeader
                    action={
                        <IconButton onClick={handleOpen} aria-label={"settings"}>
                            <Create/>
                        </IconButton>
                    }
                    title={"Food Category"}
                    sx={{pt: 2, alignItems: "center"}}
                />
                <TableContainer component={Paper}>
                    <Table sx={{minWidth: 650}} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">Id</TableCell>
                                <TableCell align="left">Name</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {restaurant?.categories.map((item) => (
                                <TableRow
                                    key={item.name}
                                    sx={{"&:last-child td, &:last-child th": {border: 0}}}
                                >
                                    <TableCell align="left">{1}</TableCell>
                                    <TableCell align="left">{item.name}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Card>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <CreateFoodCategoryForm></CreateFoodCategoryForm>
                </Box>
            </Modal>
        </Box>
    );
};

export default FoodCategoryTable;
