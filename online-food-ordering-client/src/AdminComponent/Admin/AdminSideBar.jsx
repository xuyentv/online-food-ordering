import React from 'react';
import {
    AdminPanelSettings,
    Category,
    Dashboard,
    Event,
    Fastfood,
    Logout,
    ShoppingBag,
    ShopTwo
} from "@mui/icons-material";
import {Divider, Drawer, useMediaQuery} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {logout} from "../../components/State/Authentication/Action";
import {useDispatch} from "react-redux";

const menu = [
    {title: "Dashboard", icon: <Dashboard/>, path: ''},
    {title: "Orders", icon: <ShoppingBag/>, path: 'orders'},
    {title: "Menu", icon: <ShopTwo/>, path: 'menu'},
    {title: "Food Category", icon: <Category/>, path: 'category'},
    {title: "Ingredients", icon: <Fastfood/>, path: 'ingredients'},
    {title: "Events", icon: <Event/>, path: 'events'},
    {title: "Details", icon: <AdminPanelSettings/>, path: 'details'},
    {title: "Logout", icon: <Logout/>, path: 'logout'},
]
const AdminSideBar = ({handleClose}) => {

    const isSmallScreen = useMediaQuery('(max-width: 1080px)');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleNavigate = (item) => {
        navigate(`/admin/restaurants/${item?.path}`);
        if (item?.title === 'Logout') {
            navigate('/');
            dispatch(logout());
            handleClose();
        }
    }

    return (
        <div>
            <>
                <Drawer onClose={handleClose}
                        open={true}
                        anchor={'left'}
                        sx={{zIndex: 1}}
                        variant={isSmallScreen ? 'temporary' : "permanent"}>
                    <div
                        className={'w-[70vw] lg:w-[20vw] h-screen flex flex-col justify-center text-xl space-y-[1.65rem] '}>
                        {menu.map((item, i) => (<>
                            <div  onClick={()=> handleNavigate(item)} className={'px-5 flex items-center gap-5 cursor-pointer'}>
                                {item.icon}
                                <span>{item.title}</span>
                            </div>
                            {i !== menu.length - 1 && <Divider/>}
                        </>))}

                    </div>
                </Drawer>
            </>
        </div>
    );
};

export default AdminSideBar;