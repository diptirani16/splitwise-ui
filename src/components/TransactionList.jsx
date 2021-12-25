import React, { useState, useEffect } from 'react';
import { List, ListItem, ListItemText, Typography, Divider } from "@mui/material";

export default function TransactionList() {
    const [details, setDetails] = useState([]);

    useEffect(() => {
        getDetails()
    }, [])

    const getDetails = () => {
        fetch('http://localhost:3002/transactions')
            .then(res => res.json())
            .then((data) => {
                console.log(data)
                setDetails(data);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <>
            <List>
                <Divider variant="inset" component="li" />
                { details.map((detail) => (
                <ListItem>
                    <ListItemText
                        primary={detail.totalAmount}
                        secondary={
                            <React.Fragment>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    {detail.payee} 
                                </Typography>
                                - {detail.category}
                            </React.Fragment>
                        }
                    />
                </ListItem>
                ))}
            </List>
        </>
    )
}