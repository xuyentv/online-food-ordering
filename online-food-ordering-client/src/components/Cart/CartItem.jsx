import React from 'react';
import IconButton from "@mui/material/IconButton";
import {AddCircleOutline, RemoveCircleOutline} from "@mui/icons-material";
import {Chip} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {removeCartItem, updateCartItem} from "../State/Cart/Action";

const CartItem = ({item}) => {
    console.log('item cart: ', item)
    const {auth, cart} = useSelector((store) => store)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const jwt = localStorage.getItem("jwt");
    const handleUpdateCartItem = (value) => {
        if (value === -1 && item.quantity === 1) {
            console.log('remove cart: ', value)
            handleRemoveCartItem();
        }
        const data = {
            cartItemId: item.id,
            quantity: item.quantity + value
        }
        dispatch(updateCartItem({data, jwt}))
    }
    const handleRemoveCartItem = () => {
        dispatch(removeCartItem({cartItemId: item.id, jwt: auth.jwt}))
    }
    return (
        <div className={'px-5'}>
            <div className={'lg:flex items-center lg:space-x-5'}>
                <div>
                    <img className={'w-[5rem] h-[5rem] object-cover'}
                         src={item.food?.images[0]}
                         alt=""/>
                </div>
                <div className={'flex items-center justify-between lg:w-[70%]'}>
                    <div className={'space-y-1 lg:space-y-3 w-full'}>
                        <p>{item.food.name}</p>
                        <div className={'flex justify-between items-center'}>
                            <div className={'flex space-x-1 items-center'}>
                                <IconButton onClick={() => handleUpdateCartItem(-1)}>
                                    <RemoveCircleOutline/>
                                </IconButton>
                                <div
                                    className={'w-5 h-5 text-xs flex items-center justify-center'}>{item.quantity}</div>
                                <IconButton onClick={() => handleUpdateCartItem(1)}>
                                    <AddCircleOutline/>
                                </IconButton>
                            </div>
                        </div>
                    </div>
                    <p>${item.totalPrice}</p>
                </div>
            </div>
            <div className={'pt-3 space-x-2'}>
                {item.ingredients.map((ingredient) => (<Chip label={ingredient}/>))}

            </div>

        </div>
    );
};

export default CartItem;