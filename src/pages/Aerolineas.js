import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Button, Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function Aerolineas() {

    const [aerolineas, setAerolineas] = useState([
        // Ejemplo de datos
        { codigo: 1, nombre: 'Air Canada', imagen: '/path/to/air-canada-logo.png' },
        // ... otras aerolíneas ...
    ]);

    const handleDelete = (index) => {
        let newAerolineas = [...aerolineas];
        newAerolineas.splice(index, 1);
        setAerolineas(newAerolineas);
    }

    return (
        <>
            <Typography variant="h6">Lista de Aerolíneas</Typography>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Código</TableCell>
                        <TableCell>Nombre de la Agencia</TableCell>
                        <TableCell>Imagen</TableCell>
                        <TableCell>Acción</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {aerolineas.map((aerolinea, index) => (
                        <TableRow key={aerolinea.codigo}>
                            <TableCell>{aerolinea.codigo}</TableCell>
                            <TableCell>{aerolinea.nombre}</TableCell>
                            <TableCell><img src={aerolinea.imagen} alt={aerolinea.nombre} width="32" height="20" /></TableCell>
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
                Cargar Imagen
            </Button>
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

export default Aerolineas