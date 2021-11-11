import { Alert, Button, TextField, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import admin from '../../../images/admin.gif';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleAdminSubmit = e => {
        const user = { email };
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setEmail('');
                    setSuccess(true);
                }
            })
        e.preventDefault()
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={admin} alt="" />
                </Grid>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>

                    <Typography variant="h2" gutterBottom>Please Make an Admin</Typography>

                    <form onSubmit={handleAdminSubmit}>
                        <TextField
                            sx={{ width: '50%' }}
                            label="Email"
                            type="email"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <Button type="submit" variant="contained" color="warning">Make Admin</Button>
                    </form>
                    {success && <Alert severity="success">Made Admin successfully!</Alert>}

                </Grid>
            </Grid>
        </Container>
    );
};

export default MakeAdmin;