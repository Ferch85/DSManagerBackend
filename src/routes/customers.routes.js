import { Router } from "express";
import {pool} from '../db.js'
import {getCustomers, postCustomer, putCustomer, deleteCustomer, getCustomer} from '../controllers/customers.controller.js'

const router = Router()

router.get('/customers', getCustomers)

router.get('/customers/:id', getCustomer)

router.post('/customers', postCustomer)

router.put('/customers/:id', putCustomer)

router.delete('/customers/:id', deleteCustomer)

export default router;