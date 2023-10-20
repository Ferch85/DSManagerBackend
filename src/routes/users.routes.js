import { Router } from "express";
import {pool} from '../db.js'
import {getUsers, autenticar, postUsers, putUsers, deleteUsers, getUser} from '../controllers/users.controller.js'

const router = Router()

router.get('/users', getUsers)

router.get('/users/:userId', getUser)

router.post('/users', postUsers)
router.post('/login', autenticar)

router.put('/users', putUsers)

router.delete('/users/:id', deleteUsers)

export default router;