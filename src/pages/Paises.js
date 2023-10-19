
import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Button, Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
function Paises() {

    const [paises, setPaises] = useState([
        // Ejemplo de datos
        { codigo: 1, nombre: 'Costa Rica', imagen: '/path/to/costa-rica-flag.png' },
        // ... otros países ...
    ]);

    const handleDelete = (index) => {
        let newPaises = [...paises];
        newPaises.splice(index, 1);
        setPaises(newPaises);
    }
    return (
        <>
            <Typography variant="h6">Lista de Países</Typography>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Código</TableCell>
                        <TableCell>Nombre</TableCell>
                        <TableCell>Imagen</TableCell>
                        <TableCell>Acción</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {paises.map((pais, index) => (
                        <TableRow key={pais.codigo}>
                            <TableCell>{pais.codigo}</TableCell>
                            <TableCell>{pais.nombre}</TableCell>
                            <TableCell><img src={pais.imagen} alt={pais.nombre} width="32" height="20" /></TableCell>
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

export default Paises