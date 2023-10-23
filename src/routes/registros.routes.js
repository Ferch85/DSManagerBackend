import { Router } from "express";
import {pool} from '../db.js'
import { postRegistros } from "../controllers/registros.controller.js";


const router = Router();

router.post('/registros', postRegistros)

export default router;