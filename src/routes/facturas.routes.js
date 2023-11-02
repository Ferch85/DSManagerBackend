import { Router } from "express";
import {pool} from '../db.js'
import { getFacturas, postFactura, putFactura, deleteFactura, getFactura } from '../controllers/facturas.controller.js'

const router = Router()

router.get('/factura', getFacturas)

router.get('/factura/:consecutivo', getFactura)

router.post('/factura', postFactura)

router.put('/factura', putFactura)

router.delete('/factura/:consecutivo', deleteFactura)

export default router;