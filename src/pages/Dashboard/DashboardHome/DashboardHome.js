import { Container, Toolbar, Grid, Typography, Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import dashboard from '../../../images/dashboard.gif';

const DashboardHome = () => {
    return (
        <div>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} >
                        <img style={{ width: '100%' }} src={dashboard} alt="" />
                    </Grid>
                    <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                        <Toolbar />
                        <Typography variant="h3" gutterBottom>
                            Our Dashboard
                        </Typography>
                        <Toolbar />
                        <p>-------------OR--------------</p>
                        <Link to="/home" style={{ textDecoration: 'none' }}><Button variant="contained" color="warning">Back To Home</Button></Link>
                    </Grid>
                </Grid>
            </Container>

            {/* 
            <Toolbar />
             */}
        </div>
    );
};

export default DashboardHome;