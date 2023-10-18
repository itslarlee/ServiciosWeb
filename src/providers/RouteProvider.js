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

const AuthElement = ({ children, roles }) => {
    const { user } = useIdentity();
    // const userRoles = user ? user.roles : [];
    const userRoles = ['Administrador']; // Solo para simulación
    const isAuthorized = roles.some(role => userRoles.includes(role));
    return isAuthorized ? children : <Navigate to="/signin" replace />;
};

function MainLayout({ children }) {
    return (
        <div style={{ display: 'flex' }}>
            <AppNav />
            <div style={{ marginLeft: 240, flexGrow: 1 }}>
                {children}
            </div>
        </div>
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
                            <Outlet />
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
