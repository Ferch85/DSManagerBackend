import { pool } from '../db.js'

export const getFacturas = async (req, res) => {    
    const [rows] = await pool.query('SELECT * FROM facturas')
    res.send(rows)
}

export const getFactura = async (req, res) => {    
    const consecutivo = req.params.consecutivo;
    const [rows] = await pool.query('SELECT * FROM facturas WHERE consecutivo = ?', consecutivo)
    if( rows.length <= 0){
        return res.status(404).json({
            message: 'factura not found'
        })
    }
    res.json(rows[0])
    
}

export const postFactura= async (req, res) => {    
    const {numfactura, fechafactura, generador, cliente } = req.body;
    const [rows] = await pool.query('INSERT INTO facturas (numfactura, fechafactura, generador, cliente) VALUES (?, ?, ?, ?)', [numfactura, fechafactura, generador, cliente])
    res.send({rows})
}

export const putFactura = async (req, res) => {
    const {consecutivo, numfactura, fechafactura, generador, cliente} = req.body;
    const [result] = await pool.query('UPDATE facturas SET numfactura = ?, fechafactura = ?, generador = ?, cliente = ?, estado = ? WHERE consecutivo = ?', [numfactura, fechafactura, generador, cliente, consecutivo]);    
    if(result.affectedRows <= 0) {
        return res.status(404).json({
            message: 'factura not found'
        })
    }
    res.sendStatus(201)
}

export const deleteFactura = async (req, res) => {
    const consecutivo = req.params.consecutivo;    
    const [result] = await pool.query('DELETE FROM facturas WHERE consecutivo = ?', consecutivo);
    if( result.affectedRows <= 0) {
        return res.status(404).json({
            message: 'factura not found'
        })
    }
    res.sendStatus(204)
}