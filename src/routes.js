import RegisterPage from "./pages/RegisterPage";

export const routes = [
    {
        path: '/seguridad',
        label: 'Seguridad',
        roles: ['Administrador', 'Seguridad'],
        children: [
            {
                path: 'usuarios',
                label: 'Usuarios',
                roles: ['Administrador', 'Seguridad'],
                children: [
                    { path: 'crear', label: 'Crear Usuarios', roles: ['Administrador', 'Seguridad'] },
                    { path: 'roles', label: 'Asignar Roles', roles: ['Administrador'] }
                ]
            }
        ]
    },
    {
        path: '/administracion',
        label: 'Administración',
        roles: ['Administrador', 'Mantenimiento'],
        children: [
            { path: 'consecutivos', label: 'Consecutivos', roles: ['Administrador', 'Consecutivo'] },
            { path: 'paises', label: 'Países', roles: ['Administrador', 'Mantenimiento'] },
            { path: 'aerolineas', label: 'Aerolíneas', roles: ['Administrador', 'Mantenimiento'] },
            { path: 'puertas', label: 'Puertas del Aeropuerto', roles: ['Administrador', 'Mantenimiento'] }
        ]
    },
    {
        path: '/consultas',
        label: 'Consultas',
        roles: ['Administrador', 'Consulta'],
        children: [
            { path: 'bitacora', label: 'Bitácora', roles: ['Administrador', 'Consulta'] },
            { path: 'errores', label: 'Errores', roles: ['Administrador', 'Consulta'] },
            { path: 'descargas', label: 'Descargas', roles: ['Administrador', 'Consulta'] },
            { path: 'aerolineas', label: 'Aerolíneas', roles: ['Administrador', 'Consulta'] },
            { path: 'puertas', label: 'Puertas', roles: ['Administrador', 'Consulta'] }
        ]
    },
    {
        path: '/login',
        label: 'Iniciar Sesión',
    },
    {
        path: '/register',
        label: 'Registrarse',
        element: <RegisterPage />,
    }
];

