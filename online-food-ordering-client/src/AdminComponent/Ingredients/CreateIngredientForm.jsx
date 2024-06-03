import {
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
} from "@mui/material";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {createIngredient, createIngredientCategory} from "../../components/State/Ingredients/Action";

const CreateIngredientForm = () => {
    const {restaurant, ingredients} = useSelector(store => store)
    const dispatch = useDispatch();
    const jwt = localStorage.getItem("jwt");
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            ...formData,
            restaurantId: restaurant?.userRestaurant?.id
        };
        console.log(data);
        dispatch(createIngredient({reqData: data, jwt}))
    };
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const [formData, setFormData] = React.useState({
        name: "",
        categoryId: "",
    });
    return (
        <div className="">
            <div className="p-5">
                <h1 className="text-gray-400 text-center text-xl pb-10">
                    Create Ingredient
                </h1>
                <form className="space-y-5" onSubmit={(event => handleSubmit(event))}>
                    <TextField
                        fullWidth
                        id="name"
                        name="name"
                        label="Name"
                        variant="outlined"
                        onChange={handleInputChange}
                        value={formData.name}
                    ></TextField>
                    <FormControl fullWidth>
                        <InputLabel id="demo-multiple-chip-label">Category</InputLabel>
                        <Select
                            labelId="demo-multiple-chip-label"
                            id="demo-multiple-chip"
                            name="categoryId"
                            label="Category"
                            value={formData.ingredientCategoryId}
                            onChange={handleInputChange}
                        >
                            {ingredients?.category?.map(item => <MenuItem value={item.id}>{item?.name}</MenuItem>)}

                        </Select>
                    </FormControl>
                    <Button variant="contained" type={'submit'}>Create Ingredient</Button>
                </form>
            </div>
        </div>
    );
};

export default CreateIngredientForm;
