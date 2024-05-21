import React from 'react';
import {
    Box,
    Card,
    CardHeader,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import {Create, Delete} from "@mui/icons-material";
const ingredients = [{},{},]
const c = () => {
    return (
        <Box>
            <Card>
                <CardHeader action={
                    <IconButton aria-label={'settings'}><Create/></IconButton>
                } title={"Menu"} sx={{pt: 2, alignItems: "center"}}/>
                <TableContainer component={Paper}>
                    <Table sx={{minWidth: 650}} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">Id</TableCell>
                                <TableCell align="right">Name</TableCell>
                                <TableCell align="right">Category</TableCell>
                                <TableCell align="right">Price</TableCell>
                                <TableCell align="right">Avaibilty</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {ingredients.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                >
                                    <TableCell align="left">{1}</TableCell>
                                    <TableCell align="right">{"image"}</TableCell>
                                    <TableCell align="right">{"price"}</TableCell>
                                    <TableCell align="right">{"pizza"}</TableCell>
                                    <TableCell align="right">{"avaibilty"}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Card>
        </Box>
    );
};

export default c;