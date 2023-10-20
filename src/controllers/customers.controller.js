import { pool } from '../db.js'

export const getCustomers = async (req, res) => {    
    const [rows] = await pool.query('SELECT * FROM customers')
    res.send(rows)
}

export const getCustomer = async (req, res) => {    
    const customerId = req.params.id;
    const [rows] = await pool.query('SELECT * FROM customers WHERE id = ?', customerId)
    if( rows.length <= 0){
        return res.status(404).json({
            message: 'customer not found'
        })
    }
    res.json(rows[0])
    
}

export const postCustomer= async (req, res) => {    
    const {customer_Id, name, rfc, streets, numext, cp, colonia, ciudad, estado, pais, telefono, curp} = req.body;
    const [rows] = await pool.query('INSERT INTO customers (customer_Id, name, rfc, streets, numext, cp, colonia, ciudad, estado, pais, telefono, curp) VALUES (?, ?, ?, ?, ?, ?, ? ,? ,? ,? ,? ,?)', [customer_Id ,name, rfc, streets, numext, cp, colonia, ciudad, estado, pais, telefono, curp])
    res.send({rows})
}

export const putCustomer = (req, res) => {
    res.send('actualizando usuarios')
}

export const deleteCustomer = async (req, res) => {
    const customerId = req.params.id;
    const [result] = await pool.query('DELETE FROM customers WHERE id = ?', customerId);
    if( result.affectedRows <= 0) {
        return res.status(404).json({
            message: 'customer not found'
        })
    }
    res.sendStatus(204)
}