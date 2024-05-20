import React from 'react';
import {Box, Card, CardHeader} from "@mui/material";

const OrderTable = () => {
    return (
        <Box>
           <Card>
               <CardHeader title={"All Orders"} sx={{pt:2, alignItems:"center"}} />
           </Card>
        </Box>
    );
};

export default OrderTable;