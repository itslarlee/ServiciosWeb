import React from 'react';
import { Button, TextField, Typography, Table, TableHead, TableRow, TableCell, TableBody, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

function ConsultaAerolineas() {
    const [selectedCountry, setSelectedCountry] = React.useState('');

    const handleCountryChange = (event) => {
        setSelectedCountry(event.target.value);
    }

    return (
        <>
            <Typography variant="h6">Aerolíneas por País</Typography>

            <FormControl fullWidth margin="normal">
                <InputLabel id="country-label">País</InputLabel>
                <Select
                    labelId="country-label"
                    value={selectedCountry}
                    onChange={handleCountryChange}
                >
                    {/* Aquí puedes agregar más países según necesidad */}
                    <MenuItem value={'Italia'}>Italia</MenuItem>
                    <MenuItem value={'Francia'}>Francia</MenuItem>
                    {/* ... otros países ... */}
                </Select>
            </FormControl>

            <Button variant="contained" color="primary" style={{ marginBottom: '20px' }}>
                Filtrar
            </Button>

            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Código de la Agencia</TableCell>
                        <TableCell>Nombre de la Agencia</TableCell>
                        <TableCell>Imagen Representativa</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {/* Aquí irían los resultados de la búsqueda */}
                    {/* Por ejemplo: */}
                    <TableRow>
                        <TableCell>AG-001</TableCell>
                        <TableCell>Air Italia</TableCell>
                        <TableCell>
                            <img src="/path/to/image.jpg" alt="Imagen de Air Italia" width="50" />
                        </TableCell>
                    </TableRow>
                    {/* ... otros registros de agencias ... */}
                </TableBody>
            </Table>
        </>
    )
}

export default ConsultaAerolineas