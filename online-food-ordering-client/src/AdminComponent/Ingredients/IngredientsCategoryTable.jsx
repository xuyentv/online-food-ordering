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
import {Create} from "@mui/icons-material";
import CreateIngredientCategoryForm from "./CreateIngredientCategoryForm";
import {useDispatch, useSelector} from "react-redux";
import {getIngredientCategory} from "../../components/State/Ingredients/Action";

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
const IngredientsCategoryTable = () => {
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch();
    const jwt = localStorage.getItem("jwt");
    const {restaurant, ingredients} = useSelector((store) => store);

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        dispatch(getIngredientCategory({
            id: restaurant?.userRestaurant?.id,
            jwt
        }))
    }, []);
    return (
        <Box>
            <Card>
                <CardHeader
                    action={
                        <IconButton aria-label={"settings"} onClick={handleOpen}>
                            <Create/>
                        </IconButton>
                    }
                    title={"Ingredient Category"}
                    sx={{pt: 2, alignItems: "center"}}
                />
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">Id</TableCell>
                                <TableCell align="left">Name</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {ingredients.category.map((item) => (
                                <TableRow
                                    key={item.name}
                                    sx={{"&:last-child td, &:last-child th": {border: 0}}}
                                >
                                    <TableCell align="left">{item?.id}</TableCell>
                                    <TableCell align="left">{item?.name}</TableCell>
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
                    <CreateIngredientCategoryForm></CreateIngredientCategoryForm>
                </Box>
            </Modal>
        </Box>
    );
};

export default IngredientsCategoryTable;
