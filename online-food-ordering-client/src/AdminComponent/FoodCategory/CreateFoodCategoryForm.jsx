import {Button, TextField} from "@mui/material";
import React from "react";
import {useDispatch} from "react-redux";
import {createCategoryAction} from "../../components/State/Restaurant/Action";

const CreateFoodCategoryForm = () => {
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        console.log('submit')
        e.preventDefault();
        const data = {
            name: formData.categoryName,
            restaurantId: {
                id: 1,
            },
        };
        dispatch(createCategoryAction({
            reqData: data,
            jwt: localStorage.getItem("jwt"),
        }))
    };
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const [formData, setFormData] = React.useState({
        categoryName: "",
        restaurantId: "",
    });
    return (
        <div className="">
            <div className="p-5">
                <h1 className="text-gray-400 text-center text-xl pb-10">
                    Create Category
                </h1>
                <form className="space-y-5">
                    <TextField
                        fullWidth
                        id="categoryName"
                        name="categoryName"
                        label="Food Name"
                        variant="outlined"
                        onChange={handleInputChange}
                        value={formData.categoryName}
                    ></TextField>
                    <Button onClick={(e) => handleSubmit(e)} variant="contained" type={'submit'}>Create Category</Button>
                </form>
            </div>
        </div>
    );
};

export default CreateFoodCategoryForm;
