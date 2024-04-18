import React from 'react';
import ProfileNavigation from "./ProfileNavigation";
import {Route, Routes} from "react-router-dom";
import UserProfile from "./UserProfile";
import Orders from "./Orders";
import Address from "./Address";
import Favorites from "./Favorites";
import Events from "./Events";
import "../Navbar/Navbar.css"
import Payment from "./Payment";
import Notification from "./Notification";

const Profile = () => {
    const [openSideBar, setOpenSideBar] = React.useState(false);
    return (
        <div className={'lg:flex justify-between'}>
            <div className={'sticky h-[80vh] lg:w-[20%]'}>
                <ProfileNavigation open={openSideBar}/>
            </div>
            <div className={'lg:w-[80%]'}>
                <Routes>
                    <Route path={'/'} element={<UserProfile/>}></Route>
                    <Route path={'/orders'} element={<Orders/>}></Route>
                    <Route path={'/favorites'} element={<Favorites/>}></Route>
                    <Route path={'/address'} element={<Address/>}></Route>
                    <Route path={'/payment'} element={<Payment/>}></Route>
                    <Route path={'/notification'} element={<Notification/>}></Route>
                    <Route path={'/events'} element={<Events/>}></Route>
                </Routes>
            </div>

        </div>
    );
};

export default Profile;