import React, {useEffect} from "react";
import {
    Box,
    Button,
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
import {Create} from "@mui/icons-material";
import CreateIngredientForm from "./CreateIngredientForm";
import {useDispatch, useSelector} from "react-redux";
import {getIngredientsOfRestaurant, updateStockOfIngredient} from "../../components/State/Ingredients/Action";

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
const IngredientsTable = () => {
    const dispatch = useDispatch();
    const jwt = localStorage.getItem("jwt");
    const {restaurant, ingredients} = useSelector((store) => store);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    useEffect(() => {
        dispatch(getIngredientsOfRestaurant({
            id: restaurant?.userRestaurant?.id, jwt
        }))
    }, []);
    const handleUpdateStock = (id) => {
        dispatch(updateStockOfIngredient({
            id, jwt
        }));

    }

    return (
        <Box>
            <Card>
                <CardHeader
                    action={
                        <IconButton aria-label={"settings"} onClick={handleOpen}>
                            <Create/>
                        </IconButton>
                    }
                    title={"Ingredients"}
                    sx={{pt: 2, alignItems: "center"}}
                />
                <TableContainer component={Paper}>
                    <Table sx={{minWidth: 650}} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">Id</TableCell>
                                <TableCell align="right">Name</TableCell>
                                <TableCell align="right">Category</TableCell>
                                <TableCell align="right">Avaibilty</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {ingredients?.ingredients.map((item) => (
                                <TableRow
                                    key={item.name}
                                    sx={{"&:last-child td, &:last-child th": {border: 0}}}
                                >
                                    <TableCell align="left">{item?.id}</TableCell>
                                    <TableCell align="right">{item?.name}</TableCell>
                                    <TableCell align="right">{item?.category?.name}</TableCell>
                                    <TableCell align="right">
                                        <Button
                                            onClick={() => handleUpdateStock(item?.id)}>{item?.inStoke ? "in_stoke" : "out_of_stoke"}</Button>
                                    </TableCell>
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
                    <CreateIngredientForm></CreateIngredientForm>
                </Box>
            </Modal>
        </Box>
    );
};

export default IngredientsTable;
