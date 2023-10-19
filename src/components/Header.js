import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Breadcrumbs, Link, Typography, Button, Box } from '@mui/material';
import { useIdentity } from '../providers/IdentityProvider';

function Header() {
    const navigate = useNavigate();
    const location = useLocation();
    const { user, logout } = useIdentity();

    const handleLogout = () => {
        // logout();
        navigate('/signin');
    };

    const createBreadcrumbs = () => {
        const paths = location.pathname.split('/').filter(Boolean);
        return paths.map((path, index) => (
            <Link
                key={index}
                underline="hover"
                color="inherit"
                href={`/${paths.slice(0, index + 1).join('/')}`}
            >
                {path.charAt(0).toUpperCase() + path.slice(1)}
            </Link>
        ));
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 16px', background: '#f5f5f5', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>

            <Breadcrumbs aria-label="breadcrumb">
                {createBreadcrumbs()}
            </Breadcrumbs>


            <Typography variant="h6">
                Bienvenido, {user ? user.name : 'Usuario'}
            </Typography>

            <Button variant="contained" color="primary" onClick={handleLogout}>
                Logout
            </Button>
        </div>
    );
}

export default Header;
