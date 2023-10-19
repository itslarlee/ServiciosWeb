import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, IconButton, InputLabel, MenuItem, Select, Switch, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';

function Consecutivos({ initialData }) {

    const [openEdit, setOpenEdit] = useState(false);
    const [openNew, setOpenNew] = useState(false);
    const [currentConsecutivo, setCurrentConsecutivo] = useState(null);

    const consecutivos = [
        { codigo: 1, descripcion: 'Tarifas', consecutivo: 1 },
        { codigo: 2, descripcion: 'Productos y Servicios', consecutivo: 2 },
        { codigo: 3, descripcion: 'Anuncios', consecutivo: 5 }
    ];

    const handleEditClick = (consecutivo) => {
        setCurrentConsecutivo(consecutivo);
        setOpenEdit(true);

    };

    const [data, setData] = useState(initialData || {
        descripcion: '',
        consecutivo: '',
        poseePrefijo: false,
        prefijo: '',
        poseeRango: false,
        rangoInicial: '',
        rangoFinal: '',
    });

    const handleChange = (event) => {
        const { name, value, checked, type } = event.target;
        setData({
            ...data,
            [name]: type === 'checkbox' ? checked : value,
        });
    };


    return (
        <>
            <Typography variant="h6">Lista de Consecutivos</Typography>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Código</TableCell>
                        <TableCell>Descripción</TableCell>
                        <TableCell>Consecutivo</TableCell>
                        <TableCell>Acción</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {consecutivos.map((consecutivo) => (
                        <TableRow key={consecutivo.codigo}>
                            <TableCell>{consecutivo.codigo}</TableCell>
                            <TableCell>{consecutivo.descripcion}</TableCell>
                            <TableCell>{consecutivo.consecutivo}</TableCell>
                            <TableCell>
                                <IconButton onClick={() => handleEditClick(consecutivo)}>
                                    <EditIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <br />
            <Button variant='contained' onClick={() => setOpenNew(true)}>
                Nuevo Consecutivo
            </Button>

            {/* Editar Modal */}
            <Dialog open={openEdit} onClose={() => setOpenEdit(false)}>
                <DialogTitle>Editar Consecutivo</DialogTitle>
                <DialogContent>
                    <FormControl fullWidth margin="dense">
                        <InputLabel>Descripción</InputLabel>
                        <Select
                            name="descripcion"
                            value={data.descripcion}
                            onChange={handleChange}
                        >
                            {/* Añade tus opciones aquí, por ejemplo: */}
                            <MenuItem value="Aerolinea">Aerolinea</MenuItem>
                            {/* ... otras opciones ... */}
                        </Select>
                    </FormControl>

                    <TextField
                        fullWidth
                        margin="dense"
                        label="Consecutivo"
                        name="consecutivo"
                        value={data.consecutivo}
                        onChange={handleChange}
                        type="number"
                    />

                    <FormControlLabel
                        control={
                            <Switch
                                name="poseePrefijo"
                                checked={data.poseePrefijo}
                                onChange={handleChange}
                            />
                        }
                        label="Posee Prefijo"
                    />

                    <TextField
                        fullWidth
                        margin="dense"
                        label="Prefijo"
                        name="prefijo"
                        value={data.prefijo}
                        onChange={handleChange}
                    />

                    <FormControlLabel
                        control={
                            <Switch
                                name="poseeRango"
                                checked={data.poseeRango}
                                onChange={handleChange}
                            />
                        }
                        label="Posee Rango"
                    />

                    <TextField
                        fullWidth
                        margin="dense"
                        label="Rango Inicial"
                        name="rangoInicial"
                        value={data.rangoInicial}
                        onChange={handleChange}
                        type="number"
                    />

                    <TextField
                        fullWidth
                        margin="dense"
                        label="Rango Final"
                        name="rangoFinal"
                        value={data.rangoFinal}
                        onChange={handleChange}
                        type="number"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenEdit(false)}>Cancelar</Button>
                    <Button /*onClick={tuFuncionParaGuardar}*/>Guardar</Button>
                </DialogActions>
            </Dialog>


            {/* Crear Modal */}
            <Dialog open={openNew} onClose={() => setOpenNew(false)}>
                <DialogTitle>Crear Consecutivo</DialogTitle>
                <DialogContent>
                    <FormControl fullWidth margin="dense">
                        <InputLabel>Descripción</InputLabel>
                        <Select
                            name="descripcion"
                            value={data.descripcion}
                            onChange={handleChange}
                        >
                            {/* Añade tus opciones aquí, por ejemplo: */}
                            <MenuItem value="Aerolinea">Aerolinea</MenuItem>
                            {/* ... otras opciones ... */}
                        </Select>
                    </FormControl>

                    <TextField
                        fullWidth
                        margin="dense"
                        label="Consecutivo"
                        name="consecutivo"
                        value={data.consecutivo}
                        onChange={handleChange}
                        type="number"
                    />

                    <FormControlLabel
                        control={
                            <Switch
                                name="poseePrefijo"
                                checked={data.poseePrefijo}
                                onChange={handleChange}
                            />
                        }
                        label="Posee Prefijo"
                    />

                    <TextField
                        fullWidth
                        margin="dense"
                        label="Prefijo"
                        name="prefijo"
                        value={data.prefijo}
                        onChange={handleChange}
                    />

                    <FormControlLabel
                        control={
                            <Switch
                                name="poseeRango"
                                checked={data.poseeRango}
                                onChange={handleChange}
                            />
                        }
                        label="Posee Rango"
                    />

                    <TextField
                        fullWidth
                        margin="dense"
                        label="Rango Inicial"
                        name="rangoInicial"
                        value={data.rangoInicial}
                        onChange={handleChange}
                        type="number"
                    />

                    <TextField
                        fullWidth
                        margin="dense"
                        label="Rango Final"
                        name="rangoFinal"
                        value={data.rangoFinal}
                        onChange={handleChange}
                        type="number"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenNew(false)}>Cancelar</Button>
                    <Button /*onClick={tuFuncionParaGuardar}*/>Guardar</Button>
                </DialogActions>
            </Dialog>


        </>
    )
}

export default Consecutivos