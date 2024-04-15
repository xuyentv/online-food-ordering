import React, {useState} from 'react';
import {Divider, FormControl, FormControlLabel, Grid, Radio, RadioGroup, Typography} from "@mui/material";
import {CalendarToday, LocationCity} from "@mui/icons-material";
import MenuCard from "./MenuCard";

const categories = [
    "pizza",
    "biryani",
    "burge",
    "chicken",
    "rice"
]
const foodTypes = [
    {label: "All", value: "all"},
    {label: "Vegatarian", value: "vegeratian"},
    {label: "Non-Vegetarian", value: "non_vegeratian"},
    {label: "Seasonal", value: "seasonal"},
]
const menu = [1,2,3,3,5];
const RestaurantDetail = () => {
    const [foodType, setFoodType] = useState("all");
    const handleFilter = (e)=> {
        console.log(e.target.value, e.target.name)
    }
    return (
        <div className={'px-5  lg:px-20'}>
            <section>
                <h3 className={'text-gray-500 py-2 mt-10'}>Home/india/indian fast food/3</h3>
                <div>
                    <Grid container spacing={2}>
                        <Grid item xs={12} lg={6}>
                            <img className={'w-full h-[40vh] object-cover'}
                                 src="https://images.pexels.com/photos/6004758/pexels-photo-6004758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                 alt="img1"/>
                        </Grid>

                        <Grid item xs={12} lg={6}>
                            <img className={'w-full h-[40vh] object-cover'}
                                 src="https://images.pexels.com/photos/3262277/pexels-photo-3262277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                 alt="img1"/>
                        </Grid>

                        <Grid item xs={12} lg={12}>
                            <img className={'w-full h-[40vh] object-cover'}
                                 src="https://images.pexels.com/photos/2313037/pexels-photo-2313037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                 alt="img1"/>
                        </Grid>
                    </Grid>

                </div>
                <div className={'pt-3 pb-5'}>
                    <h1 className={'text-4xl font-semibold'}>Indian Fast Food</h1>
                    <p className={'text-gray-500 mt-1'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                        architecto assumenda dolorum, ea,
                        harum inventore libero maiores maxime odit quisquam temporibus voluptas voluptatum. Ab autem nam
                        necessitatibus nesciunt sunt veritatis.</p>
                    <div className={'space-y-3 mt-3'}>
                        <p className={'text-gray-500 flex items-center gap-3'}>
                            <LocationCity/>
                            <span>
                        Ha Noi, Viet Nam
                    </span>
                        </p>
                        <p className={'text-gray-500 flex items-center gap-3'}>
                            <CalendarToday/>
                            <span>
                        Mon 17:00:00
                    </span>
                        </p>
                    </div>
                </div>
            </section>
            <Divider/>
            <section className={'pt-[2rem] lg:flex relative'}>
                <div className={'space-y-10 lg:w-[20%] filter'}>
                    <div className={'box space-y-5 lg:sticky top-28'}>
                        <div className={''}>
                            <Typography variant={'h5'} sx={{paddingBottom: "1rem"}}>Food Type </Typography>
                            <FormControl className={'py-10 space-y-5 '} component={"fieldset"}>
                                <RadioGroup onClick={handleFilter} name={'food_type'} value={foodType}>
                                    {foodTypes.map(item =>
                                        (<FormControlLabel
                                            control={<Radio/>}
                                            key={item.value}
                                            label={item.label}
                                            value={item.value}/>))}
                                </RadioGroup>
                            </FormControl>
                        </div>
                        <Divider/>
                        <div className={''}>
                            <Typography variant={'h5'} sx={{paddingBottom: "1rem"}}>Food Category </Typography>
                            <FormControl className={'py-10 space-y-5 '} component={"fieldset"}>
                                <RadioGroup onClick={handleFilter} name={'food_type'} value={foodType}>
                                    {categories.map(item =>
                                        (<FormControlLabel
                                            control={<Radio/>}
                                            key={item}
                                            label={item}
                                            value={item}/>))}
                                </RadioGroup>
                            </FormControl>
                        </div>
                    </div>
                </div>

                <div className={'space-y-5 lg:w-[80%] lg:pl-10'}>

                    {menu.map((item)=> <MenuCard/>)}
                </div>

            </section>


        </div>
    );
};

export default RestaurantDetail;