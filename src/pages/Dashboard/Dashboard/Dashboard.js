import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import { Button } from '@mui/material';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import useAuth from '../../../hooks/useAuth';
import AdminRoute from '../../../Login/AdminRoute/AdminRoute';
import AddProduct from '../AddProduct/AddProduct';
import ManageProducts from '../ManageProducts/ManageProducts';
import MyOrders from '../MyOrders/MyOrders';
import DashboardHome from '../DashboardHome/DashboardHome';
import Payment from '../Payment/Payment';


const drawerWidth = 200;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const { admin } = useAuth();


    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Toolbar />
            <Divider />
            <Divider />
            <Link to='/home' style={{ textDecoration: 'none' }}><Button variant="contained" sx={{ m: 2 }} color="warning">Home</Button></Link>
            {!admin && <Box>
                <Link to={`${url}/pay`} style={{ textDecoration: 'none' }}><Button variant="contained" sx={{ m: 2 }} color="warning">Payment</Button></Link>

                <Link to={`${url}/myOrders`} style={{ textDecoration: 'none' }}><Button variant="contained" sx={{ m: 2 }} color="warning">My Orders</Button></Link>

                <Link to={`${url}/review`} style={{ textDecoration: 'none' }}><Button variant="contained" sx={{ m: 2 }} color="warning">Review</Button></Link>
            </Box>}

            {admin && <Box>
                <Link to={`${url}/manageOrder`} style={{ textDecoration: 'none' }}><Button variant="contained" sx={{ m: 2 }} color="warning">Manage All Orders</Button></Link>

                <Link to={`${url}/addProduct`} style={{ textDecoration: 'none' }}><Button variant="contained" sx={{ m: 2 }} color="warning">Add A Product</Button></Link>

                <Link to={`${url}/makeAdmin`} style={{ textDecoration: 'none' }}><Button variant="contained" sx={{ m: 2 }} color="warning">Make Admin</Button></Link>

                <Link to={`${url}/manageProducts`} style={{ textDecoration: 'none' }}><Button variant="contained" sx={{ m: 2 }} color="warning">Manage Products</Button></Link>

            </Box>}
            <Link to='/home' style={{ textDecoration: 'none' }}><Button variant="contained" sx={{ m: 2 }} color="warning">Logout</Button></Link>
            <Divider />
            <Divider />

        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        variant="contained" color="warning"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
                <Typography variant="h3" noWrap component="div">
                    Dashboard
                </Typography>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Toolbar />
                <Switch>
                    <Route exact path={path}>
                        <DashboardHome></DashboardHome>
                    </Route>
                    <Route path={`${path}/myOrders`}>
                        <MyOrders></MyOrders>
                    </Route>
                    <Route path={`${path}/pay`}>
                        <Payment></Payment>
                    </Route>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addProduct`}>
                        <AddProduct></AddProduct>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageProducts`}>
                        <ManageProducts></ManageProducts>
                    </AdminRoute>
                </Switch>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;