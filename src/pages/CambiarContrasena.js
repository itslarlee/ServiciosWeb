import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'


function CambiarContrasena() {


    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    maxWidth: 300,
                    m: 'auto',
                    p: 2,
                    border: '1px solid rgba(0, 0, 0, 0.12)',
                    borderRadius: 1
                }}
            >
                <Typography variant="h6">Cambiar Contraseña</Typography>

                <Typography variant="subtitle1">Cambio de Contraseña</Typography>

                <TextField label="Contraseña" type="password" variant="outlined" size="small" fullWidth />
                <TextField label="Nueva Contraseña" type="password" variant="outlined" size="small" fullWidth />
                <TextField label="Confirmar Contraseña" type="password" variant="outlined" size="small" fullWidth />

                <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
                    <Button variant="contained" fullWidth>
                        Cambiar Contraseña
                    </Button>
                    <Button variant="outlined" fullWidth>
                        Cancelar
                    </Button>
                </Box>
            </Box>
        </>
    )
}

export default CambiarContrasena