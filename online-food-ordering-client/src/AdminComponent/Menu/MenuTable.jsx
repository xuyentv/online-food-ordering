import React from 'react';
import {
    Box,
    Card, CardActions,
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
const menus = [{},{},{},];
const MenuTable = () => {
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
                                <TableCell align="left">Image</TableCell>
                                <TableCell align="right">Title</TableCell>
                                <TableCell align="right">Ingredients</TableCell>
                                <TableCell align="right">Price</TableCell>
                                <TableCell align="right">Avaibilty</TableCell>
                                <TableCell align="right">Delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {menus.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                >
                                    <TableCell align="left">{"image"}</TableCell>
                                    <TableCell align="right">{"xuyentv@onepay.vn"}</TableCell>
                                    <TableCell align="right">{"price"}</TableCell>
                                    <TableCell align="right">{"pizza"}</TableCell>
                                    <TableCell align="right">{"ingredients"}</TableCell>
                                    <TableCell align="right"><IconButton><Delete></Delete></IconButton></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Card>
        </Box>
    );
};

export default MenuTable;