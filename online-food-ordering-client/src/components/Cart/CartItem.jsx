import React from 'react';
import IconButton from "@mui/material/IconButton";
import {AddCircleOutline, RemoveCircleOutline} from "@mui/icons-material";
import {Chip} from "@mui/material";

const items = [
    1, 2, 3,4
]
const CartItem = () => {
    return (
        <div className={'px-5'}>
            <div className={'lg:flex items-center lg:space-x-5'}>
                <div>
                    <img className={'w-[5rem] h-[5rem] object-cover'}
                         src="https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                         alt=""/>
                </div>
                <div className={'flex items-center justify-between lg:w-[70%]'}>
                    <div className={'space-y-1 lg:space-y-3 w-full'}>
                        <p>Biryani</p>
                        <div className={'flex justify-between items-center'}>
                            <div className={'flex space-x-1 items-center'}>
                                <IconButton>
                                    <RemoveCircleOutline/>
                                </IconButton>
                                <div className={'w-5 h-5 text-xs flex items-center justify-center'}>{5}</div>
                                <IconButton>
                                    <AddCircleOutline/>
                                </IconButton>
                            </div>
                        </div>
                    </div>
                    <p>$1998</p>
                </div>
            </div>
            <div className={'pt-3 space-x-2'}>
                {items.map((item) => (<Chip label={'bread'}/>))}

            </div>

        </div>
    );
};

export default CartItem;