import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Button, Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function PuertasAeropuerto() {

    const [puertas, setPuertas] = useState([
        // Ejemplo de datos
        { codigo: 1, numero: 'A01', detalle: 'Abierta' },
        // ... otras puertas ...
    ]);

    const handleDelete = (index) => {
        let newPuertas = [...puertas];
        newPuertas.splice(index, 1);
        setPuertas(newPuertas);
    }

    return (
        <>
            <Typography variant="h6">Lista de Puertas del Aeropuerto</Typography>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Código</TableCell>
                        <TableCell>Número de Puerta</TableCell>
                        <TableCell>Detalle</TableCell>
                        <TableCell>Acción</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {puertas.map((puerta, index) => (
                        <TableRow key={puerta.codigo}>
                            <TableCell>{puerta.codigo}</TableCell>
                            <TableCell>{puerta.numero}</TableCell>
                            <TableCell>{puerta.detalle}</TableCell>
                            <TableCell>
                                <IconButton onClick={() => handleDelete(index)}>
                                    <DeleteIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <br />
            <Button variant='contained'>
                Borrar
            </Button>
            <Button variant='contained'>
                Aceptar
            </Button>
            <Button variant='contained'>
                Cerrar
            </Button>
        </>
    )
}

export default PuertasAeropuerto