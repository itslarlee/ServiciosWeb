import React from 'react';
import { Button, TextField, Typography, Table, TableHead, TableRow, TableCell, TableBody, FormControl } from '@mui/material';


function ConsultaErrores() {
    return (
        <>
            <Typography variant="h6">Consulta de Errores</Typography>

            <FormControl fullWidth margin="normal">
                <TextField
                    label="Fecha de Inicio"
                    type="date"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </FormControl>

            <FormControl fullWidth margin="normal">
                <TextField
                    label="Fecha Final"
                    type="date"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </FormControl>

            <Button variant="contained" color="primary" style={{ marginBottom: '20px' }}>
                Filtrar
            </Button>

            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Fecha y Hora</TableCell>
                        <TableCell>Número de Error</TableCell>
                        <TableCell>Mensaje de Error</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {/* Aquí irían los resultados de la búsqueda */}
                    {/* Por ejemplo: */}
                    <TableRow>
                        <TableCell>2023-10-19 13:45:00</TableCell>
                        <TableCell>E-001</TableCell>
                        <TableCell>Error al conectar con la base de datos</TableCell>
                    </TableRow>
                    {/* ... otros registros de errores ... */}
                </TableBody>
            </Table>
        </>
    )
}

export default ConsultaErrores