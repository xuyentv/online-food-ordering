import React from 'react';
import {
    AccountBalanceWallet,
    AddReaction,
    Event,
    Favorite,
    Logout,
    NotificationsActive,
    ShoppingBag
} from "@mui/icons-material";
import {Divider, Drawer, useMediaQuery} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {logout} from "../State/Authentication/Action";

const menu = [
    {title: 'Orders', icon: <ShoppingBag/>},
    {title: 'Favorites', icon: <Favorite/>},
    {title: 'Address', icon: <AddReaction/>},
    {title: 'Payment', icon: <AccountBalanceWallet/>},
    {title: 'Notification', icon: <NotificationsActive/>},
    {title: 'Events', icon: <Event/>},
    {title: 'Logout', icon: <Logout/>},
]
const ProfileNavigation = ({open, handleClose}) => {
    const isSmallScreen = useMediaQuery('(max-width: 900px)');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleNavigation = (item) => {
        if(item.title === 'Logout'){
            dispatch(logout())
            navigate('/')
        }
        navigate(`/my-profile/${item.title.toLowerCase()}`)
    }
    return (
        <div>
            <Drawer variant={isSmallScreen ? 'temporary' : "permanent"} onClose={handleClose}
                    sx={{zIndex: -1, position: 'sticky'}}
                    anchor={'left'} open={isSmallScreen ? open : true}>

                <div className={'w-[50vw] lg:w-[20vw] h-[100vh] flex flex-col justify-center text-xl gap-8 '}>
                    {menu.map((item, i) => (<>
                                <div onClick={() => handleNavigation(item)}
                                     className={'px-5 flex items-center space-x-5 cursor-pointer'}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </div>
                                {i !== menu.length - 1 && <Divider/>}
                            </>
                        )
                    )}
                </div>
            </Drawer>
        </div>
    );
};

export default ProfileNavigation;