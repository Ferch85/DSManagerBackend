import { pool } from '../db.js'

export const getUsers = async (req, res) => {    
    const [rows] = await pool.query('SELECT * FROM users')
    res.send(rows)
}

export const getUser = async (req, res) => {    
    const userId = req.params.userId;
    const [rows] = await pool.query('SELECT * FROM users WHERE id = ?', userId)
    if( rows.length <= 0){
        return res.status(404).json({
            message: 'user not found'
        })
    }
    res.json(rows[0])
    
}

export const postUsers = async (req, res) => {    
    const {email, name, password} = req.body;
    const [rows] = await pool.query('INSERT INTO users (email, name, password) VALUES (?, ?, ?)', [email, name, password])
    res.send({rows})
}

export const putUsers = (req, res) => {
    res.send('actualizando usuarios')
}

export const deleteUsers = async (req, res) => {
    const userId = req.params.id;
    const [result] = await pool.query('DELETE FROM users WHERE id = ?', userId);
    if( result.affectedRows <= 0) {
        return res.status(404).json({
            message: 'user not found'
        })
    }
    res.sendStatus(204)
}

export const autenticar = async (req, res) => {
    const {email, password} = req.body;
    const [usuario] = await pool.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password]);

    if(usuario.length <= 0) {
        const error = new Error("El usuario no existe");
        return res.status(404).json({msg: error.message});
    }
    res.json({
        _id: usuario[0].id,
        email: usuario[0].email,
        name: usuario[0].name
    })
}