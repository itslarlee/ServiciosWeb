import React from 'react';
import { Route, Routes, Navigate, Outlet } from 'react-router-dom';
import { useIdentity } from './IdentityProvider';
import AppNav from '../components/AppNav';
import CrearUsuarios from '../pages/CrearUsuarios';
import AsignarRoles from '../pages/AsignarRoles';
import CambiarContrasena from '../pages/CambiarContrasena';
import ConsultaBitacora from '../pages/ConsultaBitacora';
import ConsultaErrores from '../pages/ConsultaErrores';
import ConsultaDescargas from '../pages/ConsultaDescargas';
import ConsultaAerolineas from '../pages/ConsultaAerolineas';
import ConsultaPuertas from '../pages/ConsultaPuertas';
import Paises from '../pages/Paises';
import Aerolineas from '../pages/Aerolineas';
import PuertasAeropuerto from '../pages/PuertasAeropuerto';
import { Card, CardContent, Grid } from '@mui/material';
import Consecutivos from '../pages/Consecutivos';
import Header from '../components/Header';
import styled from '@emotion/styled';

export const MainContainer = styled.div`
  display: flex;
  height: 100vh;
`;

export const MainContent = styled.div`
  flex-grow: 1;
  width: 100%;
`;

export const StyledCard = styled.div`
  margin-top: 16px;
  margin-right: 16px;
  margin-bottom: 16px;
  padding: 24px;
  /* ...otros estilos que necesites para tu Card... */
`;


const AuthElement = ({ children, roles }) => {
    const { user } = useIdentity();
    // const userRoles = user ? user.roles : [];
    const userRoles = ['Administrador']; // Solo para simulación
    const isAuthorized = roles.some(role => userRoles.includes(role));
    return isAuthorized ? children : <Navigate to="/signin" replace />;
};

function MainLayout({ children }) {
    return (
        <Grid container style={{ height: '100vh' }}>
            <Grid item xs={1.5}>
                <AppNav />
            </Grid>
            <Grid item xs={10.5} container direction="column">
                <Grid item>
                    <Header />
                </Grid>
                <Grid item xs container>
                    <Card
                        sx={{
                            mt: 2,
                            mr: 2,
                            mb: 2,
                            p: 3,
                            width: '100%',
                            height: '100%',
                        }}
                    >
                        <CardContent>
                            {children}
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Grid>
    );
}


function RouteProvider() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout><Outlet /></MainLayout>} />
            <Route
                path="/seguridad/usuarios"
                element={
                    <AuthElement roles={['Administrador', 'Seguridad']}>
                        <MainLayout>
                            <Outlet />
                        </MainLayout>
                    </AuthElement>
                }
            >
                <Route index element={<Navigate to="crear" />} />
                <Route path="crear" element={<CrearUsuarios />} />
                <Route path="asignar-roles" element={<AsignarRoles />} />
            </Route>

            <Route
                path="/seguridad"
                element={
                    <AuthElement roles={['Administrador', 'Seguridad']}>
                        <MainLayout>
                            <Outlet />
                        </MainLayout>
                    </AuthElement>
                }
            >
                <Route index element={<Navigate to="cambiar-contrasena" />} />
                <Route path="cambiar-contrasena" element={<CambiarContrasena />} />
            </Route>

            <Route
                path="/administracion/consecutivos"
                element={
                    <AuthElement roles={['Administrador', 'Consecutivo', 'Mantenimiento']}>
                        <MainLayout>
                            <Consecutivos />
                        </MainLayout>
                    </AuthElement>
                }
            />

            <Route
                path="/administracion"
                element={
                    <AuthElement roles={['Administrador', 'Mantenimiento']}>
                        <MainLayout>
                            <Outlet />
                        </MainLayout>
                    </AuthElement>
                }
            >
                <Route path="paises" element={<Paises />} />
                <Route path="aerolineas" element={<Aerolineas />} />
                <Route path="puertas" element={<PuertasAeropuerto />} />
            </Route>

            <Route
                path="/consultas"
                element={
                    <AuthElement roles={['Administrador', 'Consulta']}>
                        <MainLayout>
                            <Outlet />
                        </MainLayout>
                    </AuthElement>
                }
            >
                <Route path="bitacora" element={<ConsultaBitacora />} />
                <Route path="errores" element={<ConsultaErrores />} />
                <Route path="descargas" element={<ConsultaDescargas />} />
                <Route path="aerolineas" element={<ConsultaAerolineas />} />
                <Route path="puertas" element={<ConsultaPuertas />} />
            </Route>
        </Routes>
    );
}


export default RouteProvider;
