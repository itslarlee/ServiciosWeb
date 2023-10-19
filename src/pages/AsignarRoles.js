import React, { useState } from 'react'
import {
    Typography,
    List,
    ListItem,
    FormControl,
    FormLabel,
    FormGroup,
    FormControlLabel,
    Checkbox,
    Button,
    Box,
    Paper
} from '@mui/material';


function AsignarRoles() {
    const [roles, setRoles] = useState({
        administrador: false,
        seguridad: false,
        mantenimiento: false,
        consultas: false
    });

    const [selectedUser, setSelectedUser] = useState(null);

    // Ejemplo de roles por usuario, puedes adaptarlo según tus necesidades
    const userRoles = {
        adidas: { administrador: true, seguridad: true, mantenimiento: false, consultas: true },
        churna77: { administrador: false, seguridad: false, mantenimiento: false, consultas: false },
        test123: { administrador: true, seguridad: false, mantenimiento: true, consultas: false },
        abc1450: { administrador: false, seguridad: true, mantenimiento: false, consultas: false }
    };

    const handleListItemClick = (user) => {
        setSelectedUser(user);
        setRoles(userRoles[user]);
    };

    const handleChange = (event) => {
        setRoles({ ...roles, [event.target.name]: event.target.checked });
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 300, m: 'auto' }}>
            <Typography variant="h6">Lista de Usuarios</Typography>

            <Paper elevation={3}>
                <List>
                    {['adidas', 'churna77', 'test123', 'abc1450'].map((user) => (
                        <ListItem button key={user} onClick={() => handleListItemClick(user)}>
                            {user}
                        </ListItem>
                    ))}
                </List>
            </Paper>

            <FormControl component="fieldset">
                <FormLabel component="legend">Lista de Roles ({selectedUser || 'Selecciona un usuario'})</FormLabel>
                <FormGroup>
                    {['administrador', 'seguridad', 'mantenimiento', 'consultas'].map((role) => (
                        <FormControlLabel
                            key={role}
                            control={
                                <Checkbox checked={roles[role]} onChange={handleChange} name={role} />
                            }
                            label={role.charAt(0).toUpperCase() + role.slice(1)}  // Capitalizar el nombre del role
                        />
                    ))}
                </FormGroup>
            </FormControl>

            <Button variant="contained" color="primary">
                Actualizar Roles
            </Button>
        </Box>
    )
}

export default AsignarRoles