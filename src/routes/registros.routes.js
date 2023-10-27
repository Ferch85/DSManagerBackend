import { Router } from "express";
import {pool} from '../db.js'
import { postRegistros, getIdsReg } from "../controllers/registros.controller.js";


const router = Router();

router.post('/registros', postRegistros)

router.get('/regids', getIdsReg)

export default router;