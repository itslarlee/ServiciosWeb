import React from 'react';
import { Button, TextField, Select, InputLabel, MenuItem, FormControl, Typography, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

function ConsultaBitacora() {
    return (
        <>
            <Typography variant="h6">Consulta Bitácora</Typography>

            <FormControl fullWidth margin="normal">
                <InputLabel>Usuario</InputLabel>
                <Select>
                    {/* Aquí deberías agregar los usuarios disponibles en tu sistema */}
                    <MenuItem value="admin">admin</MenuItem>
                    {/* ... otros usuarios ... */}
                </Select>
            </FormControl>

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

            <FormControl fullWidth margin="normal">
                <InputLabel>Tipo</InputLabel>
                <Select>
                    <MenuItem value="Agregar">Agregar</MenuItem>
                    <MenuItem value="Eliminar">Eliminar</MenuItem>
                    <MenuItem value="Modificar">Modificar</MenuItem>
                    <MenuItem value="Todas">Todas</MenuItem>
                </Select>
            </FormControl>

            <Button variant="contained" color="primary" style={{ marginBottom: '20px' }}>
                Buscar
            </Button>

            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Código del Registro</TableCell>
                        <TableCell>Fecha y Hora</TableCell>
                        <TableCell>Descripción</TableCell>
                        <TableCell>Detalle</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {/* Aquí irían los resultados de la búsqueda */}
                    {/* Por ejemplo: */}
                    <TableRow>
                        <TableCell>AE-001</TableCell>
                        <TableCell>2023-10-19 12:30:00</TableCell>
                        <TableCell>Inserción de una nueva aerolínea</TableCell>
                        <TableCell>
                            <Button variant="outlined" color="primary">
                                Ver Detalle
                            </Button>
                        </TableCell>
                    </TableRow>
                    {/* ... otros registros ... */}
                </TableBody>
            </Table>
        </>
    )
}

export default ConsultaBitacora