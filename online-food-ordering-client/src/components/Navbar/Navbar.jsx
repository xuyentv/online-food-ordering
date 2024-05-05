import React from "react";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import {pink} from "@mui/material/colors";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import "./Navbar.css"
import {Box} from "@mui/material";
import {Person} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {store} from "../State/store";

export const Navbar = () => {
    const navigate = useNavigate();
    const {auth} = useSelector(store => store)
    const handleAvatarClick = ()=>{
        if(auth.user?.role === "ROLE_CUSTOMER"){
            navigate('/my-profile');
        }else {
            navigate('/admin/restaurant')
        }
    }
    return (
        <Box sx={{zIndex: 100,}} className="sticky px-5 z-[100] py-[.8rem] bg-[#e91e63] lg:px-20 flex justify-between">
            <div className="lg:mr-10 cursor-pointer flex items-center space-x-4">
                <li onClick={()=> navigate("/")} className="logo font-semibold text-gray-300 text2xl">Zosh food</li>
            </div>
            <div className="flex items-center space-x-2 lg:space-x-10">
                <div className="">
                    <IconButton>
                        <SearchIcon sx={{fontSize: "1.5rem"}}></SearchIcon>
                    </IconButton>
                </div>
                <div className="">
                    {auth.user?.fullName ? < Avatar
                        onClick={handleAvatarClick}
                            sx={{bgcolor: "white", color: pink.A400}}>{auth.user?.fullName[0].toUpperCase()}</Avatar> :
                        <IconButton onClick={() => navigate("/account/login")}>
                            <Person></Person>
                        </IconButton>}
                </div>

                <div className="">
                    <IconButton>
                        <Badge color="primary" badgeContent={3}>
                            <ShoppingCartIcon sx={{fontSize: "1.5rem"}}></ShoppingCartIcon>
                        </Badge>

                    </IconButton>
                </div>
            </div>
        </Box>
    );
};
