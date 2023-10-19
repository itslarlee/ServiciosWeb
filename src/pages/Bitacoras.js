import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';

function Bitacoras() {


    const [logs, setLogs] = useState([
        // Ejemplo de datos en la bitácora
        {
            usuario: "admin",
            fechaHora: new Date().toISOString(),
            codigoRegistro: "AE-001",
            tipo: "Agregar",
            descripcion: "Inserción de una nueva aerolínea",
            detalle: "Código=AE-001|Nombre=AirCanada|Ilustración=aircanada.JPEG"
        },
        // ... otros registros ...
    ]);

    return (
        <>
            <Typography variant="h6">Bitácora</Typography>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Usuario</TableCell>
                        <TableCell>Fecha y Hora</TableCell>
                        <TableCell>Código del Registro</TableCell>
                        <TableCell>Tipo</TableCell>
                        <TableCell>Descripción</TableCell>
                        <TableCell>Registro en Detalle</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {logs.map((log, index) => (
                        <TableRow key={index}>
                            <TableCell>{log.usuario}</TableCell>
                            <TableCell>{log.fechaHora}</TableCell>
                            <TableCell>{log.codigoRegistro}</TableCell>
                            <TableCell>{log.tipo}</TableCell>
                            <TableCell>{log.descripcion}</TableCell>
                            <TableCell>{log.detalle}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    )
}

export default Bitacoras