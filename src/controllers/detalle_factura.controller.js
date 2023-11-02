import { pool } from '../db.js'

export const getDetalles_facturas = async (req, res) => {    
    const [rows] = await pool.query('SELECT * FROM detalle_factura')
    res.send(rows)
}

export const getDetalle_factura = async (req, res) => {        
    const {linea, consecutivo } = req.body;
    const [rows] = await pool.query('SELECT * FROM detalle_factura WHERE linea = ? AND consecutivo = ?', [linea, consecutivo])
    if( rows.length <= 0){
        return res.status(404).json({
            message: 'detalle de factura not found'
        })
    }
    res.json(rows[0])
    
}

export const postDetalle_factura= async (req, res) => {    
    const { consecutivo, producto, descripcion, cantidad, precio_unitario, valor_total } = req.body;    
    const [rows] = await pool.query('INSERT INTO detalle_factura (consecutivo, producto, descripcion, cantidad, precio_unitario, valor_total) VALUES (?, ?, ?, ?, ?, ?)', [consecutivo, producto, descripcion, cantidad, precio_unitario, valor_total])
    res.send({rows})
}

export const putDetalle_factura = async (req, res) => {
    const { linea, consecutivo, producto, descripcion, cantidad, precio_unitario, valor_total } = req.body;
    const [result] = await pool.query('UPDATE detalle_factura SET producto = ?, descripcion = ?, cantidad = ?, precio_unitario = ?, valor_total = ? WHERE linea = ? AND consecutivo = ?', [producto, descripcion, cantidad, precio_unitario, valor_total, linea, consecutivo]);    
    if(result.affectedRows <= 0) {
        return res.status(404).json({
            message: 'detalle factura not found'
        })
    }
    res.sendStatus(201)
}

export const deleteDetalle_factura = async (req, res) => {
    const {linea, consecutivo} = req.body;    
    const [result] = await pool.query('DELETE FROM detalle_factura WHERE linea = ? AND consecutivo = ?', [linea ,consecutivo]);
    if( result.affectedRows <= 0) {
        return res.status(404).json({
            message: 'detalle factura not found'
        })
    }
    res.sendStatus(204)
}