import React, {useEffect, useState} from "react";
import {useFormik} from "formik";
import {
    Box,
    Button,
    Chip,
    CircularProgress,
    FormControl,
    Grid,
    IconButton,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Select,
    TextField,
} from "@mui/material";
import {AddPhotoAlternate, Close} from "@mui/icons-material";
import {uploadImageToCloudiany} from "../../components/util/UploadToCloudinary";
import {useDispatch, useSelector} from "react-redux";
import {createMenuItem} from "../../components/State/Menu/Action";
import {getIngredientsOfRestaurant} from "../../components/State/Ingredients/Action";

const initialValues = {
    name: "",
    description: "",
    price: "",
    category: "",
    restaurantId: "",
    vegetarian: true,
    seasonal: false,
    ingredients: [],
    images: [],
};

const CreateMenuForm = () => {

    const {restaurant, ingredients} = useSelector(store => store)
    useEffect(() => {
        dispatch(getIngredientsOfRestaurant({
            id: restaurant?.userRestaurant?.id, jwt
        }))
    }, []);
    const dispatch = useDispatch();
    const jwt = localStorage.getItem("jwt");
    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: (values) => {
            values.restaurantId = 2;
            dispatch(createMenuItem({menu: values, jwt}))
        },
    });
    const handleImageChange = async (e) => {
        const file = e.target.files[0];
        setUploadImage(true);
        const image = await uploadImageToCloudiany(file);
        formik.setFieldValue("images", [...formik.values.images, image]);
        setUploadImage(false);
    };
    const [uploadImage, setUploadImage] = useState(false);
    const handleRemoveImage = (index) => {
        const images = [...formik.values.images];
        images.splice(index, 1);
        formik.setFieldValue("images", images);
    };
    return (
        <div className="py-10 px-5 lg:flex items-center justify-center min-h-screen">
            <div className="lg:max-w-4xl">
                <h1 className="font-bold text-2xl text-center py-2">
                    Add New Menu
                </h1>
                <form onSubmit={formik.handleSubmit} className="">
                    <Grid container spacing={2}>
                        <Grid className="flex flex-wrap gap-5" item xs={12}>
                            <input
                                accept="image/*"
                                id="fileInput"
                                style={{display: "none"}}
                                onChange={handleImageChange}
                                type="file"
                            />
                            <label htmlFor="fileInput" className="relative">
                <span
                    className="w-24 h-24 cursor-pointer flex items-center justify-center p-3 border rounded-md border-gray-600">
                  <AddPhotoAlternate className="text-white"></AddPhotoAlternate>
                  <span>
                    {uploadImage && (
                        <div
                            className="absolute left-0 right-0 top-0 bottom-0 w-24 h-24 flex justify-center items-center">
                            <CircularProgress></CircularProgress>
                        </div>
                    )}
                  </span>
                </span>
                            </label>
                            <div className="flex flex-wrap gap-2">
                                {formik.values.images.map((image, index) => (
                                    <div class="relative">
                                        <img
                                            class="w-24 h-24 object-cover"
                                            key={index}
                                            src={image}
                                            alt=""
                                        />
                                        <IconButton
                                            size="small"
                                            sx={{
                                                position: "absolute",
                                                top: 0,
                                                right: 0,
                                                outline: "none",
                                            }}
                                            onClick={() => handleRemoveImage(index)}
                                        >
                                            <Close sx={{fontSize: "1rem"}}></Close>
                                        </IconButton>
                                    </div>
                                ))}
                            </div>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                id="name"
                                name="name"
                                label="Name"
                                variant="outlined"
                                onChange={formik.handleChange}
                                value={formik.values.name}
                            ></TextField>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                id="description"
                                name="description"
                                label="Description"
                                variant="outlined"
                                onChange={formik.handleChange}
                                value={formik.values.description}
                            ></TextField>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <TextField
                                fullWidth
                                id="price"
                                name="price"
                                label="Price"
                                variant="outlined"
                                onChange={formik.handleChange}
                                value={formik.values.price}
                            ></TextField>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-multiple-chip-label">Category</InputLabel>
                                <Select
                                    labelId="demo-multiple-chip-label"
                                    id="demo-multiple-chip"
                                    name="category"
                                    value={formik.values.category}
                                    onChange={formik.handleChange}
                                >
                                    {restaurant?.categories?.map(item => <MenuItem
                                        value={item}>{item?.name}</MenuItem>)}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-multiple-chip-label">
                                    Ingredients
                                </InputLabel>
                                <Select
                                    labelId="demo-multiple-chip-label"
                                    id="demo-multiple-chip"
                                    multiple
                                    name="ingredients"
                                    value={formik.values.ingredients}
                                    onChange={formik.handleChange}
                                    input={
                                        <OutlinedInput
                                            id="se;ect-multiple-chip"
                                            label="Ingredients"
                                        ></OutlinedInput>
                                    }
                                    renderValue={(selected) => (
                                        <Box sx={{display: "flex", flexWrap: "wrap", gap: 0.5}}>
                                            {selected.map((value) => (
                                                <Chip key={value.id} label={value?.name}/>
                                            ))}
                                        </Box>
                                    )}
                                >
                                    {ingredients?.ingredients?.map((item, index) => (
                                        <MenuItem key={item?.id} value={item}>
                                            {item?.name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-multiple-chip-label">
                                    is Seasional
                                </InputLabel>
                                <Select
                                    labelId="demo-multiple-chip-label"
                                    id="demo-multiple-chip"
                                    name="seasonal"
                                    value={formik.values.seasonal}
                                    label="Is Seasional"
                                    onChange={formik.handleChange}
                                >
                                    <MenuItem value={true}>Yes</MenuItem>
                                    <MenuItem value={false}>No</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-multiple-chip-label">
                                    Is Vegetarian
                                </InputLabel>
                                <Select
                                    labelId="demo-multiple-chip-label"
                                    id="vegetarian"
                                    name="vegetarian"
                                    value={formik.values.vegetarian}
                                    label="Is Vegetarian"
                                    onChange={formik.handleChange}
                                >
                                    <MenuItem value={true}>Yes</MenuItem>
                                    <MenuItem value={false}>No</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item xs={12}>
                            <Button variant="contained" color="primary" type="submit">
                                Create Menu
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </div>
    );
};

export default CreateMenuForm;
