import React from "react";
import {Button, Card, CardContent, CardHeader, Grid} from "@mui/material";
import {Facebook, Instagram, LinkedIn, Twitter} from "@mui/icons-material";
import {useDispatch, useSelector} from "react-redux";
import {updateRestaurantStatus} from "../../components/State/Restaurant/Action";

const RestaurantDetail = () => {
    const {restaurant} = useSelector((store) => store);

    const dispatch = useDispatch();
    const handleRestaurantStatus = () => {
        dispatch(updateRestaurantStatus({
            restaurantId: restaurant?.userRestaurant?.id,
            jwt: localStorage.getItem("jwt"),
        }))
    };
    return (
        <div className={"lg:px-20 px-5 pb-10"}>
            <div className={"py-5 flex justify-center items-center gap-5 "}>
                <h1 className={"text-2xl lg:text-7xl text-center font-black p-5"}>
                    {restaurant?.userRestaurant?.name}
                </h1>
                <div className={""}>
                    <Button
                        className={"py-[1rem] px-[2rem]"}
                        variant="contained"
                        color={true ? "primary" : "error"}
                        onClick={handleRestaurantStatus}
                    >
                        {!restaurant?.userRestaurant?.open ? "close" : "open"}
                    </Button>
                </div>
            </div>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Card>
                        <CardHeader
                            title={<span className={"text-gray-300"}>Restaurant</span>}
                        ></CardHeader>
                        <CardContent>
                            <div className={"space-y-4 text-gray-200"}>
                                <div className={"flex"}>
                                    <p className={"w-48"}>Owner</p>
                                    <p className={"text-gray-400"}>
                                        <span className={"pr-5"}>-</span>
                                        {restaurant?.userRestaurant?.owner?.fullName}
                                    </p>
                                </div>
                                <div className={"flex"}>
                                    <p className={"w-48"}>Restaurant Name</p>
                                    <p className={"text-gray-400"}>
                                        <span className={"pr-5"}>-</span>
                                        {restaurant?.userRestaurant?.name}
                                    </p>
                                </div>
                                <div className={"flex"}>
                                    <p className={"w-48"}>Cuisine Type</p>
                                    <p className={"text-gray-400"}>
                                        <span className={"pr-5"}>-</span>
                                        {restaurant?.userRestaurant?.cuisineType}
                                    </p>
                                </div>
                                <div className={"flex"}>
                                    <p className={"w-48"}>Opening Hours</p>
                                    <p className={"text-gray-400"}>
                                        <span className={"pr-5"}>-</span>
                                        {restaurant?.userRestaurant?.openingHours}
                                    </p>
                                </div>
                                <div className={"flex"}>
                                    <p className={"w-48"}>Status</p>
                                    <p className={"text-gray-400"}>
                                        <span className={"pr-5"}>-</span>
                                        {restaurant?.userRestaurant?.open ? (
                                            <span class="px-5 py-2 rounded-full bg-green-400">
                        Open
                      </span>
                                        ) : (
                                            <span class="px-5 py-2 rounded-full bg-red-400 text-gray-950">
                        Closed
                      </span>
                                        )}
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <Card>
                        <CardHeader
                            title={<span className={"text-gray-300"}>Address</span>}
                        ></CardHeader>
                        <CardContent>
                            <div className={"space-y-4 text-gray-200"}>
                                <div className={"flex"}>
                                    <p className={"w-48"}>City</p>
                                    <p className={"text-gray-400"}>
                                        <span className={"pr-5"}>-</span>
                                        {restaurant?.userRestaurant?.address?.city}
                                    </p>
                                </div>
                                <div className={"flex"}>
                                    <p className={"w-48"}>Country</p>
                                    <p className={"text-gray-400"}>
                                        <span className={"pr-5"}>-</span>
                                        {restaurant?.userRestaurant?.address?.country}
                                    </p>
                                </div>
                                <div className={"flex"}>
                                    <p className={"w-48"}>Post Code</p>
                                    <p className={"text-gray-400"}>
                                        <span className={"pr-5"}>-</span>
                                        {restaurant?.userRestaurant?.address?.postalCode}
                                    </p>
                                </div>
                                <div className={"flex"}>
                                    <p className={"w-48"}>Street Address</p>
                                    <p className={"text-gray-400"}>
                                        <span className={"pr-5"}>-</span>
                                        {restaurant?.userRestaurant?.address?.streetAddress}
                                    </p>
                                </div>

                            </div>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <Card>
                        <CardHeader
                            title={<span className={"text-gray-300"}>Contact</span>}
                        ></CardHeader>
                        <CardContent>
                            <div className={"space-y-4 text-gray-200"}>
                                <div className={"flex"}>
                                    <p className={"w-48"}>Email</p>
                                    <p className={"text-gray-400"}>
                                        <span className={"pr-5"}>-</span>
                                        {restaurant?.userRestaurant?.contactInformation?.email}
                                    </p>
                                </div>
                                <div className={"flex"}>
                                    <p className={"w-48"}>Mobile</p>
                                    <p className={"text-gray-400"}>
                                        <span className={"pr-5"}>-</span>
                                        {restaurant?.userRestaurant?.contactInformation?.mobile}
                                    </p>
                                </div>
                                <div className={"flex "}>
                                    <p className={"w-48"}>Social</p>
                                    <div className="flex text-gray-400 items-center pb-3">
                                        <span className="pr-5">-</span>
                                        <a href={restaurant?.userRestaurant?.contactInformation?.instagram}>
                                            <Instagram sx={{fontSize: "3rem"}}></Instagram>
                                        </a>
                                        <a href={restaurant?.userRestaurant?.contactInformation?.twitter}>
                                            <Twitter sx={{fontSize: "3rem"}}></Twitter>
                                        </a>
                                        <a href={restaurant?.userRestaurant?.contactInformation?.twitter}>
                                            <LinkedIn sx={{fontSize: "3rem"}}></LinkedIn>
                                        </a>
                                        <a href={restaurant?.userRestaurant?.contactInformation?.twitter}>
                                            <Facebook sx={{fontSize: "3rem"}}></Facebook>
                                        </a>
                                    </div>

                                </div>

                            </div>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

        </div>
    );
};

export default RestaurantDetail;
