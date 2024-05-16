import React from 'react';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Button,
    Checkbox,
    FormControlLabel,
    FormGroup
} from "@mui/material";
import {ExpandMore} from "@mui/icons-material";
import {categorizeIngredients} from "../util/CategorizeIngredients";
import {useDispatch} from "react-redux";
import {addItemToCart} from "../State/Cart/Action";

const MenuCard = ({item}) => {
    const [selectedIngredients, setSelectedIngredients] = React.useState([])
    const dispatch = useDispatch()
    const handleAddItemToCart = (e) => {
        e.preventDefault()
        const reqData = {
            token: localStorage.getItem("jwt"),
            cartItem: {
                foodId: item.id,
                quantity: 1,
                ingredients: selectedIngredients
            }
        }
        dispatch(addItemToCart(reqData))
        console.log('data: ', reqData)

    }
    const handleCheckBoxChange = (itemName) => {
        if (selectedIngredients.includes(itemName)) {
            setSelectedIngredients(selectedIngredients.filter(item => item !== itemName))
        } else {
            setSelectedIngredients([...selectedIngredients, itemName])
        }
    }
    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMore/>}
                aria-controls={'pannel1-content'}
                id={'pannel1-header'}
            >
                <div className={'lg:flex items-center justify-between'}>
                    <div className={'lg:flex items-center lg:gap-5'}>
                        <img
                            className={'w-[7rem] h-[7rem] object-cover'}
                            src={item.images[0]}
                            alt=""/>
                        <div className={'space-y-1 lg:space-y-5 lg:max-w-2xl'}>
                            <p className={'font-semibold text-xl'}>{item.name}</p>
                            <p>{item.price}$</p>
                            <p className={'text-gray-400'}>{item.description}</p>
                        </div>
                    </div>
                </div>
            </AccordionSummary>
            <AccordionDetails>
                <form action="">
                    <div className={'flex gap-5 flex-wrap'}>
                        {Object.keys(categorizeIngredients(item.ingredients)).map((category) => (
                            <div>
                                <p>{category}</p>
                                <FormGroup>
                                    {categorizeIngredients(item.ingredients)[category].map(
                                        (item2) => (
                                            <FormControlLabel key={item2.name} control={<Checkbox
                                                onChange={() => handleCheckBoxChange(item2.name)}/>}
                                                              label={item2.name}/>
                                        ))
                                    }
                                </FormGroup>
                            </div>
                        ))}
                    </div>
                    <div className={'pt-5'}>
                        <Button
                            variant={'contained'}
                            type={'button'}
                            disabled={false}
                            onClick={handleAddItemToCart}
                        >{true ? 'Add to Card' : 'Out Of Stock'}</Button>
                    </div>

                </form>

            </AccordionDetails>
        </Accordion>
    );
};

export default MenuCard;