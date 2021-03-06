import { Grid } from "@mui/material";
import { Box } from "@mui/material";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import React, { useState } from "react";
// import { createBrowserHistory } from "react-router-dom";

export default function SignUp() {
    // const history = createBrowserHistory();
    const [username, setUsername] = useState("");
    const [fullname, setFullname] = useState("");
    const [emailId, setEmailId] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    
    const handleSignUp = () => {
        fetch('http://localhost:3002/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Accept": "application/json"
            },
            body: JSON.stringify({
                username,
                fullname,
                emailId,
                phoneNumber,
                dateOfBirth
            })
        }).then((e) => {
            // history.push("/home");
            window.location.href='/home';
            console.log('done');
        })
    }

    return (
        <>
            <h1>SignUp</h1>
            <Grid container>
                <Grid item xs={12} md={6} lg={6}>
                    <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '25ch' }, }} noValidate autoComplete="off" >
                        <TextField id="standard-basic" label="Username" onChange={(e) => setUsername(e.target.value)} variant="standard" />
                        <TextField id="standard-basic" label="Full Name" onChange={(e) => setFullname(e.target.value)} variant="standard" />
                        <TextField id="standard-basic" label="Email Id" onChange={(e) => setEmailId(e.target.value)} type="email" variant="standard" />
                        <TextField id="standard-basic" label="Phone Number" onChange={(e) => setPhoneNumber(e.target.value)} variant="standard" />
                        <TextField id="standard-basic" label="DOB" type="date" onChange={(e) => setDateOfBirth(e.target.value)} variant="standard" />
                    </Box>
                    <Button variant="contained" onClick={handleSignUp}>SignUp</Button>
                </Grid>
            </Grid>
        </>
    )
}

