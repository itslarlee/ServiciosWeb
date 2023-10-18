import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Collapse } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandMore';
import ExpandMore from '@mui/icons-material/ExpandLess';
import SecurityIcon from '@mui/icons-material/Security';
import AdminIcon from '@mui/icons-material/AdminPanelSettings';
import SearchIcon from '@mui/icons-material/Search';

function AppNav() {
    const [openSeguridad, setOpenSeguridad] = useState(false);
    const [openAdministracion, setOpenAdministracion] = useState(false);
    const [openConsultas, setOpenConsultas] = useState(false);
    const [openUsuarios, setOpenUsuarios] = useState(false);


    return (
        <Drawer variant="permanent" open >
            <List>
                {/* Sección Seguridad */}
                <ListItem button onClick={() => setOpenSeguridad(!openSeguridad)}>
                    <ListItemIcon>
                        <SecurityIcon />
                    </ListItemIcon>
                    <ListItemText primary="Seguridad" />
                    {!openSeguridad ? <ExpandLess /> : <ExpandMore />}
                </ListItem>

                <Collapse in={openSeguridad} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button onClick={() => setOpenUsuarios(!openUsuarios)} style={{ paddingLeft: 32 }}>

                            <ListItemText primary="Usuarios" />
                            {!openUsuarios ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>

                        <Collapse in={openUsuarios} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItem button component={Link} to="/seguridad/usuarios/crear" style={{ paddingLeft: 64 }}>
                                    <ListItemText primary="Crear Usuarios" />
                                </ListItem>
                                <ListItem button component={Link} to="/seguridad/usuarios/asignar-roles" style={{ paddingLeft: 64 }}>
                                    <ListItemText primary="Asignar Roles" />
                                </ListItem>
                            </List>
                        </Collapse>

                        <ListItem button component={Link} to="/seguridad/cambiar-contrasena" style={{ paddingLeft: 32 }}>
                            <ListItemText primary="Cambiar Contraseña" />
                        </ListItem>
                    </List>
                </Collapse>



                {/* Sección Administración */}
                <ListItem button onClick={() => setOpenAdministracion(!openAdministracion)}>
                    <ListItemIcon>
                        <AdminIcon />
                    </ListItemIcon>
                    <ListItemText primary="Administración" />
                    {!openAdministracion ? <ExpandLess /> : <ExpandMore />}
                </ListItem>

                <Collapse in={openAdministracion} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button component={Link} to="/administracion/consecutivos" style={{ paddingLeft: 32 }}>
                            <ListItemText primary="Consecutivos" />
                        </ListItem>
                        <ListItem button component={Link} to="/administracion/paises" style={{ paddingLeft: 32 }}>
                            <ListItemText primary="Países" />
                        </ListItem>
                        <ListItem button component={Link} to="/administracion/aerolineas" style={{ paddingLeft: 32 }}>
                            <ListItemText primary="Aerolíneas" />
                        </ListItem>
                        <ListItem button component={Link} to="/administracion/puertas" style={{ paddingLeft: 32 }}>
                            <ListItemText primary="Puertas" />
                        </ListItem>
                    </List>
                </Collapse>


                {/* Sección Consultas */}

                <ListItem button onClick={() => setOpenConsultas(!openConsultas)}>
                    <ListItemIcon>
                        <SearchIcon />
                    </ListItemIcon>
                    <ListItemText primary="Consultas" />
                    {!openConsultas ? <ExpandLess /> : <ExpandMore />}
                </ListItem>

                <Collapse in={openConsultas} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button component={Link} to="/consultas/bitacora" style={{ paddingLeft: 32 }}>
                            <ListItemText primary="Bitácora" />
                        </ListItem>
                        <ListItem button component={Link} to="/consultas/errores" style={{ paddingLeft: 32 }}>
                            <ListItemText primary="Errores" />
                        </ListItem>
                        <ListItem button component={Link} to="/consultas/descargas" style={{ paddingLeft: 32 }}>
                            <ListItemText primary="Descargas" />
                        </ListItem>
                        <ListItem button component={Link} to="/consultas/aerolineas" style={{ paddingLeft: 32 }}>
                            <ListItemText primary="Aerolíneas" />
                        </ListItem>
                        <ListItem button component={Link} to="/consultas/puertas" style={{ paddingLeft: 32 }}>
                            <ListItemText primary="Puertas" />
                        </ListItem>
                    </List>
                </Collapse>

            </List>
        </Drawer>
    );
}

export default AppNav;
