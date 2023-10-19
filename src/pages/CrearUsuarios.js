import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'

function CrearUsuarios() {
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    maxWidth: 300,
                    m: 'auto'
                }}
            >
                <Typography variant="h6">Usuarios</Typography>
                <Typography variant="subtitle1">Crear nueva cuenta</Typography>

                <TextField label="Usuario" variant="outlined" size="small" fullWidth />
                <TextField label="Contraseña" variant="outlined" size="small" fullWidth type="password" />
                <TextField label="Confirmar Contraseña" variant="outlined" size="small" fullWidth type="password" />
                <TextField label="E-mail" variant="outlined" size="small" fullWidth type="email" />
                <TextField label="Pregunta de Seguridad" variant="outlined" size="small" fullWidth />
                <TextField label="Respuesta de Seguridad" variant="outlined" size="small" fullWidth />

                <Button variant="contained" color="primary">
                    Crear Usuario
                </Button>
            </Box>
        </>
    )
}

export default CrearUsuarios