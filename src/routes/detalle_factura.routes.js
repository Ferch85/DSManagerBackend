import { Router } from "express";
import {pool} from '../db.js'
import { getDetalles_facturas, postDetalle_factura, putDetalle_factura, deleteDetalle_factura, getDetalle_factura } from '../controllers/detalle_factura.controller.js'

const router = Router()

router.get('/detalle_factura', getDetalles_facturas)

router.get('/detalle_factura', getDetalle_factura)

router.post('/detalle_factura', postDetalle_factura)

router.put('/detalle_factura', putDetalle_factura)

router.delete('/detalle_factura', deleteDetalle_factura)

export default router;