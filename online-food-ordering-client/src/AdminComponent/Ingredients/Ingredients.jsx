import React from 'react';
import IngredientsTable from "./IngredientsTable";
import {Grid} from "@mui/material";
import IngredientsCategoryTable from "./IngredientsCategoryTable";

const Ingredients = () => {
    return (
        <div className={'px-2'}>
            <Grid container spacing={2}>
                <Grid item xs={12} lg={8}>
                    <IngredientsTable></IngredientsTable>
                </Grid>
                 <Grid item xs={12} lg={4}>
                <IngredientsCategoryTable></IngredientsCategoryTable>
            </Grid>
            </Grid>
        </div>
    );
};

export default Ingredients;