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
import {Create} from "@mui/icons-material";

const IngredientsCategoryTable = () => {
    return (
        <Box>
            <Card>
                <CardHeader action={
                    <IconButton aria-label={'settings'}><Create/></IconButton>
                } title={"Ingredient Category"} sx={{pt: 2, alignItems: "center"}}/>
                <TableContainer component={Paper}>
                    <Table  aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">Id</TableCell>
                                <TableCell align="left">Name</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {[{},{}].map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                >
                                    <TableCell align="left">{1}</TableCell>
                                    <TableCell align="left">{"image"}</TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Card>
        </Box>
    );
};

export default IngredientsCategoryTable;