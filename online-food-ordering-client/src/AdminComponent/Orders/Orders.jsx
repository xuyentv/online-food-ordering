import React from 'react';
import {Card, FormControl, FormControlLabel, Radio, RadioGroup, Typography} from "@mui/material";
import OrderTable from "./OrderTable";

const orderStatus = [
    {label: 'Pending', value: 'PENDING'},
    {label: 'Completed', value: 'COMPLETED'},
    {label: 'Out For Delivery', value: 'OUT_FOR_DELIVERY'},
    {label: 'Delivered', value: 'DELIVERED'},
]
const Orders = () => {
    const [filterValue, setFilterValue] = React.useState("");
    const handlerFilter = (e, value) => {
        setFilterValue(value);

    }
    return (
        <div className={'px-2'}>
            <Card className={'p-5'}>
                <Typography variant="h5" sx={{paddingBottom: "1rem"}}>Orders Status</Typography>
                <FormControl>
                    <RadioGroup onChange={handlerFilter} row name={'category'} value={filterValue || 'all'}>
                        {orderStatus.map((item) => <FormControlLabel key={item.label} value={item.value}
                                                                     label={item.label}
                                                                     sx={{color:"gray"}}
                                                                     control={<Radio/>}/>)}
                    </RadioGroup>
                </FormControl>
                <OrderTable/>
            </Card>
        </div>
    );
};

export default Orders;