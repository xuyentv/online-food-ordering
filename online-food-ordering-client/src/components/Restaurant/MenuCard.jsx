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

const ingredients = [
    {
        category: "Nuts & seeds",
        ingredients: "Cashews"
    },
    {
        category: "Protein",
        ingredients: "Protein"
    },
    {
        category: "Protein",
        ingredients: "Bacon strips"
    },
    {
        category: "bread",
        ingredients: "Hamburger buns"
    }
]


const demo = [
    {
        category: "Nuts & seeds",
        ingredients: ["Cashews"]
    },
    {
        category: "Protein",
        ingredients: ["Protein", "Bacon strips"]
    },

]
const MenuCard = () => {
    const handleCheckBoxChange = (item)=> {
        console.log(item)
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
                            src="https://images.pexels.com/photos/7828570/pexels-photo-7828570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt=""/>
                        <div className={'space-y-1 lg:space-y-5 lg:max-w-2xl'}>
                            <p className={'font-semibold text-xl'}>Burger</p>
                            <p>499$</p>
                            <p className={'text-gray-400'}>Nice food</p>
                        </div>
                    </div>
                </div>
            </AccordionSummary>
            <AccordionDetails>
                <form action="">
                    <div className={'flex gap-5 flex-wrap'}>
                        {demo.map((item) => (
                            <div>
                                <p>{item.category}</p>
                                <FormGroup>
                                    {item.ingredients.map((item) => (
                                        <FormControlLabel control={<Checkbox onChange={()=> handleCheckBoxChange(item)}/>} label={item}/>
                                    ))}
                                </FormGroup>
                            </div>
                        ))}
                    </div>
                    <div className={'pt-5'}>
                        <Button
                            variant={'contained'}
                            type={'submit'}
                            disabled={false}
                        >{true ? 'Add to Card' : 'Out Of Stock'}</Button>
                    </div>

                </form>

            </AccordionDetails>
        </Accordion>
    );
};

export default MenuCard;