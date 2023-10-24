import { pool } from "../db.js";

export const postRegistros = async (req, res) => {
    //const {id, clavecliente, identificador,pedimento_completo ,patente ,pedimento ,seccion ,tipo_operacion ,clave_documento ,seccion_entrada,curp_contribuyente ,rfc ,curp_aa ,tipo_cambio ,fletes ,total_seguros ,total_embalajes ,total_incrementables ,total_deducibles ,peso_bruto_mercancia ,medio_transporte_salida ,medio_transporte_arribo,medio_transporte_entrada_salida,destino_mercancia ,nombre_contribuyente ,calle_contribuyente ,num_interior_contribuyente ,num_exterior_contribuyente ,cp_contribuyente ,municipio_contribuyente ,entidad_fed_contribuyente ,pais_contribuyente ,tipo_pedimento ,fecha_recepcion_pedmiento ,fecha_pago} = req.body;
    const {regGlobal} = req.body;

    const valores = regGlobal.registros501.map(reg => {
        return [reg.clavecliente,
            reg.identificador,
            reg.pedimento_completo,
            reg.patente,
            reg.pedimento,
            reg.seccion,
            reg.tipo,
            reg.clave,
            reg.secEntrada,
            reg.curpContribuyente,
            reg.rfc,
            reg.curpAA,
            reg.tipoCambio,
            reg.totalFletes,
            reg.totalSeguros,
            reg.totalEmbalaje,
            reg.totalIncre,
            reg.totalDeducible,
            reg.pesoBruto,
            reg.medioTranS,
            reg.medioTranA,
            reg.medioTranEntrada,
            reg.destinoMerca,
            reg.nombreContribuyente,
            reg.calleContribuyente,
            reg.numInteriorContribuyente,
            reg.numExteriorContribuyente,
            reg.cpContribuyente,
            reg.municipioContribuyente,
            reg.entidadFContribuyente,
            reg.paisContribuyente,
            reg.tipoPedimento,
            reg.fechaRecepcionPed,
            reg.fechaPagoReal
        ];
    })

    const sql501 =
        "INSERT INTO registros501 (clavecliente, identificador,pedimento_completo ,patente ,pedimento ,seccion ,tipo_operacion ,clave_documento ,seccion_entrada,curp_contribuyente ,rfc ,curp_aa ,tipo_cambio ,fletes ,total_seguros ,total_embalajes ,total_incrementables ,total_deducibles ,peso_bruto_mercancia ,medio_transporte_salida ,medio_transporte_arribo,medio_transporte_entrada_salida,destino_mercancia ,nombre_contribuyente ,calle_contribuyente ,num_interior_contribuyente ,num_exterior_contribuyente ,cp_contribuyente ,municipio_contribuyente ,entidad_fed_contribuyente ,pais_contribuyente ,tipo_pedimento ,fecha_recepcion_pedmiento ,fecha_pago) VALUES ?";

    const [rows] = await pool.query(sql501, [valores]);
    if(rows === 0) {
        console.error(error);        
        return res.status(500).json({ msg: 'Error en la inserción masiva' });
    }
    
    
    return res.status(200).json({ msg: 'Se agregaron registros exitosamente' });

    /*db.query(sql, [dataToInsert], (error, results) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error en la inserción masiva' });
      }
      return res.status(200).json({ message: 'Inserción masiva exitosa' });
    })*/
};
