import React, { useEffect, useState } from "react";
import {
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { CalendarToday, LocationCity } from "@mui/icons-material";
import MenuCard from "./MenuCard";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getRestaurantById,
  getRestaurantsCategory,
} from "../State/Restaurant/Action";
import { getMenuItemsByRestaurantId } from "../State/Menu/Action";

const foodTypes = [
  { label: "All", value: "all" },
  { label: "Vegatarian", value: "vegetarian" },
  { label: "Non-Vegetarian", value: "non_vegetarian" },
  { label: "Seasonal", value: "seasonal" },
];
const RestaurantDetail = () => {
  const [foodType, setFoodType] = useState("all");
  const handleFilter = (e) => {
    console.log("handleFilter: ", e.target.value);
    setFoodType(e.target.value);
  };
  const handleFilterCategory = (e) => {
    console.log("handleFilterCategory:", e.target.value);
    setSelectedCategory(e.target.value);
  };
  const { id, city } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { auth, restaurant, menu } = useSelector((store) => store);
  const [selectedCategory, setSelectedCategory] = useState("");
  useEffect(() => {
    dispatch(getRestaurantById({ jwt, restaurantId: id }));
    dispatch(getRestaurantsCategory({ jwt, restaurantId: id }));
  }, []);

  useEffect(() => {
    dispatch(
        getMenuItemsByRestaurantId({
          jwt,
          restaurantId: id,
          vegetarian: foodType === "vegetarian",
          nonveg: foodType === "non_vegetarian",
          seasonal: foodType === "seasonal",
          foodCategory: selectedCategory,
        })
    );
  }, [selectedCategory, foodType]);
  console.log("restaurant detail", restaurant);
  return (
    <div className={"px-5  lg:px-20"}>
      <section>
        <h3 className={"text-gray-500 py-2 mt-10"}>
        </h3>
        <div>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={6}>
              <img
                className={"w-full h-[40vh] object-cover"}
                src={restaurant.restaurant?.images[0]}
                alt="img1"
              />
            </Grid>

            <Grid item xs={12} lg={6}>
              <img
                className={"w-full h-[40vh] object-cover"}
                src={restaurant.restaurant?.images[1]}
                alt="img2"
              />
            </Grid>

            <Grid item xs={12} lg={12}>
              <img
                className={"w-full h-[40vh] object-cover"}
                src={restaurant.restaurant?.images[2]}
                alt="img3"
              />
            </Grid>
          </Grid>
        </div>
        <div className={"pt-3 pb-5"}>
          <h1 className={"text-4xl font-semibold"}>
            {restaurant.restaurant?.name}
          </h1>
          <p className={"text-gray-500 mt-1"}>
            {restaurant.restaurant?.description}
          </p>
          <div className={"space-y-3 mt-3"}>
            <p className={"text-gray-500 flex items-center gap-3"}>
              <LocationCity />
              <span>Ha Noi, Viet Nam</span>
            </p>
            <p className={"text-gray-500 flex items-center gap-3"}>
              <CalendarToday />
              <span>Mon 17:00:00</span>
            </p>
          </div>
        </div>
      </section>
      <Divider />
      <section className={"pt-[2rem] lg:flex relative"}>
        <div className={"space-y-10 lg:w-[20%] filter"}>
          <div className={"box space-y-5 lg:sticky top-28"}>
            <div className={""}>
              <Typography variant={"h5"} sx={{ paddingBottom: "1rem" }}>
                Food Type{" "}
              </Typography>
              <FormControl
                className={"py-10 space-y-5 "}
                component={"fieldset"}
              >
                <RadioGroup
                  onClick={handleFilter}
                  name={"food_type"}
                  value={foodType}
                >
                  {foodTypes.map((item) => (
                    <FormControlLabel
                      control={<Radio />}
                      key={item.value}
                      label={item.label}
                      value={item.value}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>
            <Divider />
            <div className={""}>
              <Typography variant={"h5"} sx={{ paddingBottom: "1rem" }}>
                Food Category{" "}
              </Typography>
              <FormControl
                className={"py-10 space-y-5 "}
                component={"fieldset"}
              >
                <RadioGroup
                  onClick={handleFilterCategory}
                  name={"food_type"}
                  value={foodType}
                >
                  {restaurant.categories.map((item) => (
                    <FormControlLabel
                      control={<Radio />}
                      key={item.id}
                      label={item.name}
                      value={item.name}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>
          </div>
        </div>

        <div className={"space-y-5 lg:w-[80%] lg:pl-10"}>
          {Array.isArray(menu.menuItems) ? (
            menu.menuItems.map((item) => <MenuCard item={item} />)
          ) : (
            <Divider />
          )}
        </div>
      </section>
    </div>
  );
};

export default RestaurantDetail;
