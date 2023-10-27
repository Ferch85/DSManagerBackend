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

    const valores506 = regGlobal.registros506.map((reg) => {
        return [
            0,
            reg.clavecliente,
            reg.identificador,
            reg.pedimento_completo,  
            reg.patente,
            reg.pedimento,
            reg.seccion,
            reg.tipoFecha,
            reg.fechaOperacion,
            reg.fechaValidacion
        ];
    });

    const valores507 = regGlobal.registros507.map((reg) => {
        return [
            0,            
            reg.clavecliente,
            reg.identificador,
            reg.pedimento_completo,  
            reg.patente,
            reg.pedimento,
            reg.seccion,
            reg.claveCaso,
            reg.idCaso,
            reg.tipoPed,
            reg.complementoCaso,
            reg.fechaValidacion
        ];
    });    
    
    const valores508 = regGlobal.registros508.map((reg) => {
        return [
            0,            
            reg.clavecliente,
            reg.identificador,
            reg.pedimento_completo,  
            reg.patente,
            reg.pedimento,
            reg.seccion,
            reg.institucionEmisora,
            reg.numCuenta,
            reg.folioConstancia,
            reg.fechaConstancia,
            reg.tipoCuenta,
            reg.claveGarantia,
            reg.valorUnitarioTitulo,
            reg.totalGarantia,
            reg.cantidadUnidades,
            reg.titulosAsignados,
            reg.fechaPagoReal
        ];
    });  

    const valores509 = regGlobal.registros509.map((reg) => {
        return [
            0,            
            reg.clavecliente,
            reg.identificador,
            reg.pedimento_completo,  
            reg.patente,
            reg.pedimento,
            reg.seccion,
            reg.calveContribucion,
            reg.tasaContribucion,
            reg.tipoTasa,
            reg.tipoPedimento,
            reg.fechaPagoReal
        ];
    });  

    const valores510 = regGlobal.registros510.map((reg) => {
        return [
            0,            
            reg.clavecliente,
            reg.identificador,
            reg.pedimento_completo,  
            reg.patente,
            reg.pedimento,
            reg.seccion,
            reg.claveContribucion,
            reg.formaPago,
            reg.importePago,
            reg.tipoPedimento,
            reg.fechaPagoReal
        ];
    });

    const valores511 = regGlobal.registros511.map((reg) => {
        return [
            0,            
            reg.clavecliente,
            reg.identificador,
            reg.pedimento_completo,  
            reg.patente,
            reg.pedimento,
            reg.seccion,
            reg.secuenciaObs,
            reg.observaciones,
            reg.tipoPedimento,
            reg.fechaValidacion
        ];
    });  

    const valores512 = regGlobal.registros512.map((reg) => {
        return [
            0,            
            reg.clavecliente,
            reg.identificador,
            reg.pedimento_completo,  
            reg.patente,
            reg.pedimento,
            reg.seccion,
            reg.patenteAduanaOriginal,
            reg.pedimentoOriginal,
            reg.secAduaneraDespO,
            reg.documentoOriginal,
            reg.fechaOperacionOrig,
            reg.fraccionOriginal,
            reg.unidadMedida,
            reg.mercanciaDes,
            reg.tipoPedimento,
            reg.fechaPagoReal
        ];
    });  

    const valores520 = regGlobal.registros520.map((reg) => {
        return [
            0,            
            reg.clavecliente,
            reg.identificador,
            reg.pedimento_completo,  
            reg.patente,
            reg.pedimento,
            reg.seccion,
            reg.identFiscalDest,
            reg.nombreDesMerca,
            reg.calleDest,
            reg.numInteriorDest,
            reg.numExterior,
            reg.cpDest,
            reg.municipioDest,
            reg.clavePaisDest,
            reg.paisDest,
            reg.fechaPagoReal
        ];
    });  

    const valores551 = regGlobal.registros551.map((reg) => {
        return [
            0,            
            reg.clavecliente,
            reg.identificador,
            reg.pedimento_completo,  
            reg.patente,
            reg.pedimento,
            reg.seccion,
            reg.fraccion,
            reg.secuenciaFraccion,
            reg.subdivisionFraccion,
            reg.descripcionMercancia,
            reg.precioUnitario,
            reg.valorAduana,
            reg.valorComercial,
            reg.valorDolares,
            reg.cantidadComercial,
            reg.unidadMedidaCometcial,
            reg.cantidadTarifa,
            reg.unidadTarifa,
            reg.valorAgregado,
            reg.claveVinculacion,
            reg.metodoValoracion,
            reg.codigoMercanciaP,
            reg.marcaMercanciaP,
            reg.modeloMercanciaP,
            reg.paisOrigenDest,
            reg.paisCompradorVendedor,
            reg.entidadFedOrigen,
            reg.entidadFedDestino,
            reg.entidadFedComprador,
            reg.entidadFedVendedor,
            reg.tipoOperacion,
            reg.claveDocumento,
            reg.fechaPagoReal
        ];
    }); 

    const valores552 = regGlobal.registros552.map((reg) => {
        return [
            0,            
            reg.clavecliente,
            reg.identificador,
            reg.pedimento_completo,  
            reg.patente,
            reg.pedimento,
            reg.seccion,
            reg.fraccion,
            reg.secuenciaFrac,
            reg.vinNumeroSerie,
            reg.kilometrajeVehi,
            reg.fechaPagoReal
        ];
    }); 

    const valores553 = regGlobal.registros553.map((reg) => {
        return [
            0,            
            reg.clavecliente,
            reg.identificador,
            reg.pedimento_completo,  
            reg.patente,
            reg.pedimento,
            reg.seccion,
            reg.fraccion,
            reg.secuenciaFrac,
            reg.clavePermiso,
            reg.firmaDescargo,
            reg.numPermiso,
            reg.valorComercialDolares,
            reg.cantidadMUMTarifa,
            reg.fechaPagoReal
        ];
    }); 

    const valores554 = regGlobal.registros554.map((reg) => {
        return [
            0,            
            reg.clavecliente,
            reg.identificador,
            reg.pedimento_completo,  
            reg.patente,
            reg.pedimento,
            reg.seccion,
            reg.fraccion,
            reg.secuenciaFraccion,
            reg.claveCaso,
            reg.identificadorCaso,
            reg.complementoCaso,
            reg.fechaPagoReal
        ];
    }); 

    const valores555 = regGlobal.registros555.map((reg) => {
        return [
            0,            
            reg.clavecliente,
            reg.identificador,
            reg.pedimento_completo,  
            reg.patente,
            reg.pedimento,
            reg.seccion,
            reg.fraccion,
            reg.secuenciaFrac,
            reg.institucionEmisora,
            reg.numCuenta,
            reg.folioConstancia,
            reg.fechaConstancia,
            reg.claveGarantia,
            reg.valorUnitarioTitulo,
            reg.totalGarantia,
            reg.cantidadUM,
            reg.titulosAsignados,
            reg.fechaPagoReal
        ];
    }); 

    const valores556 = regGlobal.registros556.map((reg) => {
        return [
            0,            
            reg.clavecliente,
            reg.identificador,
            reg.pedimento_completo,  
            reg.patente,
            reg.pedimento,
            reg.seccion,
            reg.fraccion,
            reg.secuenciaFrac,
            reg.claveContribucion,
            reg.tasaContribucion,
            reg.tipoTasa,
            reg.fechaPagoReal
        ];
    }); 

    const valores557 = regGlobal.registros557.map((reg) => {
        return [
            0,            
            reg.clavecliente,
            reg.identificador,
            reg.pedimento_completo,  
            reg.patente,
            reg.pedimento,
            reg.seccion,
            reg.fraccion,
            reg.secuenciaFrac,
            reg.claveContribucion,
            reg.formaPago,
            reg.importePago,
            reg.fechaPagoReal
        ];
    }); 

    const valores558 = regGlobal.registros558.map((reg) => {
        return [
            0,            
            reg.clavecliente,
            reg.identificador,
            reg.pedimento_completo,  
            reg.patente,
            reg.pedimento,
            reg.seccion,
            reg.fraccion,
            reg.secuenciaFrac,
            reg.secuenciaObs,
            reg.observaciones,
            reg.fechaPagoReal
        ];
    }); 

    const valores701 = regGlobal.registros701.map((reg) => {
        return [
            0,            
            reg.clavecliente,
            reg.identificador,
            reg.pedimento_completo,  
            reg.patente,
            reg.pedimento,
            reg.seccion,
            reg.claveDoc,
            reg.fechaPago,
            reg.pedimentoAnterior,
            reg.patenteAnterior,
            reg.seccionAduaneraAnterior,
            reg.docAnterior,
            reg.fechaOperacionAnterior,
            reg.pedimentoOriginal,
            reg.patenteOrig,
            reg.seccionOrig,
            reg.fechaPagoReal
        ];
    }); 

    const valores702 = regGlobal.registros702.map((reg) => {
        return [
            0,            
            reg.clavecliente,
            reg.identificador,
            reg.pedimento_completo,  
            reg.patente,
            reg.pedimento,
            reg.seccion,
            reg.tipo,
            reg.claveContribucion,
            reg.formaPago,
            reg.importePago,
            reg.tipoPedimento,
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

    const sql506 =
        "INSERT INTO registros506 (id,clave_cliente,identificador,pedimento_completo,patente,pedimento,seccion,tipo_fecha,fecha_operacion,fecha_validacion_pago) VALUES ?";        

    const sql507 =
        "INSERT INTO registros507 (id,clave_cliente,identificador,pedimento_completo, patente, pedimento,seccion,clave_caso,id_caso,tipo_pedimento,complemento_caso,fecha_pago) VALUES ?";        

    const sql508 =
        "INSERT INTO registros508 (id,clave_cliente,identificador,pedimento_completo,patente,pedimento,seccion,institucion_emisora,num_cuenta,folio_constancia,fecha_constancia,tipo_cuenta,clave_garantia,valor_unitario_titulo,total_garantia,cantidad_unidades,titulos_asignados,fecha_pago) VALUES ?";            

    const sql509 =
        "INSERT INTO registros509 (id,clave_cliente,identificador,pedimento_completo,patente,pedimento,seccion,clave_contribucion,tasa_contribucion,tipo_tasa,tipo_pedimento,fecha_pago) VALUES ?";                

    const sql510 =
        "INSERT INTO registros510 (id,clave_cliente,identificador,pedimento_completo,patente,pedimento,seccion,clave_contribucion,forma_pago,importe_pago,tipo_pedimento,fecha_pago) VALUES ?";                

    const sql511 =
        "INSERT INTO registros511 (id,clave_cliente,identificador,pedimento_completo,patente,pedimento,seccion,secuencia_observacion,observaciones,tipo_pedimento,fecha_pago) VALUES ?";

    const sql512 =
        "INSERT INTO registros512 (id,clave_cliente,identificador,pedimento_completo,patente,pedimento,seccion,patente_original,pedimento_original,seccion_orig,documento_original,fecha_operacion_original,fraccion_original,unidad_medida,mercancia_descargada,tipo_pedimento,fecha_pago) VALUES ?";        

    const sql520 =
        "INSERT INTO registros520 (id,clave_cliente,identificador,pedimento_completo,patente,pedimento,seccion,id_fiscal_destinatario,nombre_destino_mercancia,calle_destinatario,num_interior_destinatario,num_exterior_destinatario,cp_destinatario,municipio_destinatario,clave_pais,pais_destinatario,fecha_pago) VALUES ?";        

    const sql551 =
        "INSERT INTO registros551 (id,clave_cliente,identificador,pedimento_completo,patente,pedimento,seccion,fraccion,secuencia_fraccion,subdivision_fraccion,descripcion_mercancia,precio_unitario,valor_aduana,valor_comercial,valor_dolares,cantidad_um_comercial,unidad_medida_comercial,cantidad_um_tarifa,unidad_medida_tarifa,valor_agregado,clave_vinculacion,metodo_valorizacion,codigo_mercancia_producto,mercancia_producto,modelo_mercancia_producto,pais_origen_destino,pais_comprador_vendedor,entidad_fed_orgien,entidad_fed_destino,entidad_fed_comprador,entidad_fed_vendedor,tipo_operacion,clave_documento,fecha_pago) VALUES ?";        
        
    const sql552 =
        "INSERT INTO registros552 (id,clave_cliente,identificador,pedimento_completo,patente,pedimento,seccion,fraccion,secuencia_fraccion,vin_numero_serie,kilometraje_vehiculo,fecha_pago) VALUES ?";        

    const sql553 =
        "INSERT INTO registros553 (id,clave_cliente,identificador,pedimento_completo,patente,pedimento,seccion,fraccion,secuencia_fraccion,clave_permiso,firma_descargo,numero_permiso,valor_comercial_dolares,cantidad_um_tarifa,fecha_pago) VALUES ?";
        
    const sql554 =
        "INSERT INTO registros554 (id,clave_cliente,identificador,pedimento_completo,patente,pedimento,seccion,fraccion,secuencia_fraccion,clave_caso,identificador_caso,complemento_caso,fecha_pago) VALUES ?";
        
    const sql555 =
        "INSERT INTO registros555 (id,clave_cliente,identificador,pedimento_completo,patente,pedimento,seccion,fraccion,secuencia_fraccion,institucion_emisora,numero_cuenta,folio_constancia,fecha_constancia,clave_garantia,valor_unitario_titulo,total_garantia,cantidad_unidades,titulos_asignados,fecha_pago) VALUES ?";                
        
    const sql556 =
        "INSERT INTO registros556 (id,clave_cliente,identificador,pedimento_completo,patente,pedimento,seccion,fraccion,secuencia_fraccion,clave_contribucion,tasa_contribucion,tipo_tasa,fecha_pago) VALUES ?";        
        
    const sql557 =
        "INSERT INTO registros557 (id,clave_cliente,identificador,pedimento_completo,patente,pedimento,seccion,fraccion,secuencia_fraccion,clave_contribucion,forma_pago,importe_pago,fecha_pago) VALUES ?";        
        
    const sql558 =
        "INSERT INTO registros558 (id,clave_cliente,identificador,pedimento_completo,patente,pedimento,seccion,fraccion,secuencia_fraccion,secuencia_observacion,observaciones,fecha_pago) VALUES ?";
        
    const sql701 =
        "INSERT INTO registros701 (id,clave_cliente,identificador,pedimento_completo,patente,pedimento,seccion,clave_documento,fecha_pago_ped,pedimento_anterior,patente_anterior,seccion_anterior,documento_anterior,fecha_operacion_anterior,pedimento_original,patente_original,seccion_original,fecha_pago) VALUES ?";        
        
    const sql702 =
        "INSERT INTO registros702 (id,clave_cliente,identificador,pedimento_completo,patente,pedimento,seccion,clave_contribucion,forma_pago,importe_pago,tipo_pedimento,fecha_pago) VALUES ?";        
        

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

    if(valores506.length > 0){
        const [rows506] = await pool.query(sql506, [valores506]);
        if (rows506.length === 0) {
            console.error(error);
            return res.status(500).json({ msg: "Error en la inserción masiva 506" });
        }
    }
    if(valores507.length > 0){
        const [rows507] = await pool.query(sql507, [valores507]);
        if (rows507.length === 0) {
            console.error(error);
            return res.status(500).json({ msg: "Error en la inserción masiva 507" });
        }
    }

    if(valores508.length > 0){
        const [rows508] = await pool.query(sql508, [valores508]);
        if (rows508.length === 0) {
            console.error(error);
            return res.status(500).json({ msg: "Error en la inserción masiva 508" });
        }
    }

    if(valores509.length > 0){
        const [rows509] = await pool.query(sql509, [valores509]);
        if (rows509.length === 0) {
            console.error(error);
            return res.status(500).json({ msg: "Error en la inserción masiva 509" });
        }
    }

    if(valores510.length > 0){
        const [rows510] = await pool.query(sql510, [valores510]);
        if (rows510.length === 0) {
            console.error(error);
            return res.status(500).json({ msg: "Error en la inserción masiva 510" });
        }
    }

    if(valores511.length > 0){
        const [rows511] = await pool.query(sql511, [valores511]);
        if (rows511.length === 0) {
            console.error(error);
            return res.status(500).json({ msg: "Error en la inserción masiva 511" });
        }
    }

    if(valores512.length > 0){
        const [rows512] = await pool.query(sql512, [valores512]);
        if (rows512.length === 0) {
            console.error(error);
            return res.status(500).json({ msg: "Error en la inserción masiva 512" });
        }
    }

    if(valores520.length > 0){
        const [rows520] = await pool.query(sql520, [valores520]);
        if (rows520.length === 0) {
            console.error(error);
            return res.status(500).json({ msg: "Error en la inserción masiva 520" });
        }
    }

    if(valores551.length > 0){
        const [rows551] = await pool.query(sql551, [valores551]);
        if (rows551.length === 0) {
            console.error(error);
            return res.status(500).json({ msg: "Error en la inserción masiva 551" });
        }
    }

    if(valores552.length > 0){
        const [rows552] = await pool.query(sql552, [valores552]);
        if (rows552.length === 0) {
            console.error(error);
            return res.status(500).json({ msg: "Error en la inserción masiva 552" });
        }
    }

    if(valores553.length > 0){
        const [rows553] = await pool.query(sql553, [valores553]);
        if (rows553.length === 0) {
            console.error(error);
            return res.status(500).json({ msg: "Error en la inserción masiva 553" });
        }
    }

    if(valores554.length > 0){
        const [rows554] = await pool.query(sql554, [valores554]);
        if (rows554.length === 0) {
            console.error(error);
            return res.status(500).json({ msg: "Error en la inserción masiva 554" });
        }
    }

    if(valores555.length > 0){
        const [rows555] = await pool.query(sql555, [valores555]);
        if (rows555.length === 0) {
            console.error(error);
            return res.status(500).json({ msg: "Error en la inserción masiva 555" });
        }
    }

    if(valores556.length > 0){
        const [rows556] = await pool.query(sql556, [valores556]);
        if (rows556.length === 0) {
            console.error(error);
            return res.status(500).json({ msg: "Error en la inserción masiva 556" });
        }
    }

    if(valores557.length > 0){
        const [rows557] = await pool.query(sql557, [valores557]);
        if (rows557.length === 0) {
            console.error(error);
            return res.status(500).json({ msg: "Error en la inserción masiva 557" });
        }
    }

    if(valores558.length > 0){
        const [rows558] = await pool.query(sql558, [valores558]);
        if (rows558.length === 0) {
            console.error(error);
            return res.status(500).json({ msg: "Error en la inserción masiva 558" });
        }
    }

    if(valores701.length > 0){
        const [rows701] = await pool.query(sql701, [valores701]);
        if (rows701.length === 0) {
            console.error(error);
            return res.status(500).json({ msg: "Error en la inserción masiva 701" });
        }
    }

    if(valores702.length > 0){
        const [rows702] = await pool.query(sql702, [valores702]);
        if (rows702.length === 0) {
            console.error(error);
            return res.status(500).json({ msg: "Error en la inserción masiva 702" });
        }
    }
    return res.status(200).json({ msg: "Se agregaron registros exitosamente" });
};

export const getIdsReg  = async (req, res) => {
    const [rows] = await pool.query('SELECT DISTINCT identificador FROM registros501')
    const result = rows.map(item => {
        return item.identificador
    })    
    res.send(result)
}