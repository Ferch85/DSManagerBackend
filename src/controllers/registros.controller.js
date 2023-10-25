import { pool } from "../db.js";

export const postRegistros = async (req, res) => {
    //const {id, clavecliente, identificador,pedimento_completo ,patente ,pedimento ,seccion ,tipo_operacion ,clave_documento ,seccion_entrada,curp_contribuyente ,rfc ,curp_aa ,tipo_cambio ,fletes ,total_seguros ,total_embalajes ,total_incrementables ,total_deducibles ,peso_bruto_mercancia ,medio_transporte_salida ,medio_transporte_arribo,medio_transporte_entrada_salida,destino_mercancia ,nombre_contribuyente ,calle_contribuyente ,num_interior_contribuyente ,num_exterior_contribuyente ,cp_contribuyente ,municipio_contribuyente ,entidad_fed_contribuyente ,pais_contribuyente ,tipo_pedimento ,fecha_recepcion_pedmiento ,fecha_pago} = req.body;
    const { regGlobal } = req.body;

    const valores501 = regGlobal.registros501.map((reg) => {
        return [
            reg.clavecliente,
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
    });

    const valores502 = regGlobal.registros502.map((reg) => {
        return [
            0,
            reg.clavecliente,
            reg.identificador,
            reg.pedimento_completo,
            reg.patente,
            reg.pedimento,
            reg.seccion,
            reg.rfcTrans,
            reg.curpTrans,
            reg.nombreTrans,
            reg.paisTransporte,
            reg.idTransporte,
            reg.fechaPagoReal
        ];
    });

    const valores503 = regGlobal.registros503.map((reg) => {
        return [
            0,            
            reg.clavecliente,
            reg.identificador,
            reg.pedimento_completo,
            reg.patente,
            reg.pedimento,
            reg.seccion,
            reg.numerGuia,
            reg.tipoGuia,
            reg.fechaPagoReal
        ];
    });

    const valores504 = regGlobal.registros504.map((reg) => {
        return [
            0,
            reg.clavecliente,
            reg.identificador,
            reg.pedimento_completo,  
            reg.patente,
            reg.pedimento,
            reg.seccion,
            reg.tipo,
            reg.clave,
            reg.secEntrada
        ];
    });

    const valores505 = regGlobal.registros505.map((reg) => {
        return [
            0,
            reg.clavecliente,
            reg.identificador,
            reg.pedimento_completo,  
            reg.patente,
            reg.pedimento,
            reg.seccion,
            reg.fechaFacturacion,
            reg.numFactura,
            reg.terminoFacturacion,
            reg.monedaFacturacion,
            reg.valorDolares,
            reg.valorMonedaExtranjera,
            reg.paisFacturacion,
            reg.entidadFedFact,
            reg.identFiscalProv,
            reg.proovedorMerca,
            reg.calleProv,
            reg.numIntProv,
            reg.numExteriorProv,
            reg.cpProv,
            reg.municipioProv,
            reg.fechaPagoReal
        ];
    });


    const sql501 =
        "INSERT INTO registros501 (clavecliente, identificador,pedimento_completo ,patente ,pedimento ,seccion ,tipo_operacion ,clave_documento ,seccion_entrada,curp_contribuyente ,rfc ,curp_aa ,tipo_cambio ,fletes ,total_seguros ,total_embalajes ,total_incrementables ,total_deducibles ,peso_bruto_mercancia ,medio_transporte_salida ,medio_transporte_arribo,medio_transporte_entrada_salida,destino_mercancia ,nombre_contribuyente ,calle_contribuyente ,num_interior_contribuyente ,num_exterior_contribuyente ,cp_contribuyente ,municipio_contribuyente ,entidad_fed_contribuyente ,pais_contribuyente ,tipo_pedimento ,fecha_recepcion_pedmiento ,fecha_pago) VALUES ?";

    const sql502 =    
        "INSERT INTO registros502 (id , clave_cliente ,identificador ,pedimento_completo ,patente,pedimento,seccion,rfc_transportista,curp_tranportista,nombre_transportista,pais_transporte,identificador_transporte,fecha_pago) VALUES ?";

    const sql503 =
        "INSERT INTO registros503 (id,clave_cliente,identificador,pedimento_completo,patente,pedimento,seccion,guia,identificador_guia,fecha_pago) VALUES ?";        

    const sql504 =
        "INSERT INTO registros504 (id,clave_cliente,identificador,pedimento_completo,patente,pedimento,seccion,num_contenedor,tipo,fecha_pago) VALUES ?";        

    const sql505 =
        "INSERT INTO registros505 (id,clave_cliente,identificador,pedimento_completo,patente,pedimento,seccion,fecha_facturacion,numero_factura,termino_facturacion,moneda_facturacion,valor_dolares,valor_moneda_extranjera,pais_facturacion,entidad_facturacion,id_fiscal_proveedor,proveedor_mercancia,calle_proveedor,num_interior_proveedor,num_exterior_proveedor,cp_proveedor,municipio_proveedor,fecha_pago) VALUES ?";        

    if(valores501.length > 0){
        const [rows501] = await pool.query(sql501, [valores501]);
        if (rows501.length === 0) {
            console.error(error);
            return res.status(500).json({ msg: "Error en la inserción masiva 501" });
        }
    }

    if(valores502.length > 0){
        const [rows502] = await pool.query(sql502, [valores502]);
        if (rows502.length === 0) {
            console.error(error);
            return res.status(500).json({ msg: "Error en la inserción masiva 502" });
        }
    }
   
    if(valores503.length > 0){
        const [rows503] = await pool.query(sql503, [valores503]);
        if (rows503.length === 0) {
            console.error(error);
            return res.status(500).json({ msg: "Error en la inserción masiva 503" });
        }
    }

    if(valores504.length > 0){
        const [rows504] = await pool.query(sql504, [valores504]);
        if (rows504.length === 0) {
            console.error(error);
            return res.status(500).json({ msg: "Error en la inserción masiva 504" });
        }
    }

    if(valores505.length > 0){
        const [rows505] = await pool.query(sql505, [valores505]);
        if (rows505.length === 0) {
            console.error(error);
            return res.status(500).json({ msg: "Error en la inserción masiva 505" });
        }
    }
    return res.status(200).json({ msg: "Se agregaron registros exitosamente" });
};



