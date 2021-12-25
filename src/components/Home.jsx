import React from "react";
import { Grid, Box, TextField, Button } from "@mui/material";
import TransactionList from "./TransactionList";

export default function Home() {
    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4} lg={6}>
                    <h1>Add new transaction</h1>
                    <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '25ch' }, }} noValidate autoComplete="off" >
                        <TextField id="standard-basic" label="Payee Name" variant="standard" />
                        <TextField id="standard-basic" label="Total Amount" variant="standard" />
                        <TextField id="standard-basic" label="Category" type="email" variant="standard" />
                        <TextField id="standard-basic" label="Notes" variant="standard" />
                        <TextField id="standard-basic" type="date" variant="standard" />
                    </Box>
                    <Button variant="contained">SignUp</Button>
                </Grid>

                <Grid item xs={12} md={8} lg={6}>
                    <h1>Transactions Record</h1>
                    <TransactionList />
                </Grid>
            </Grid>
        </>
    )
}