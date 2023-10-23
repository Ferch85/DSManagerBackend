import { pool } from "../db.js";

export const postRegistros = async (req, res) => {
    //const {id, clavecliente, identificador,pedimento_completo ,patente ,pedimento ,seccion ,tipo_operacion ,clave_documento ,seccion_entrada,curp_contribuyente ,rfc ,curp_aa ,tipo_cambio ,fletes ,total_seguros ,total_embalajes ,total_incrementables ,total_deducibles ,peso_bruto_mercancia ,medio_transporte_salida ,medio_transporte_arribo,medio_transporte_entrada_salida,destino_mercancia ,nombre_contribuyente ,calle_contribuyente ,num_interior_contribuyente ,num_exterior_contribuyente ,cp_contribuyente ,municipio_contribuyente ,entidad_fed_contribuyente ,pais_contribuyente ,tipo_pedimento ,fecha_recepcion_pedmiento ,fecha_pago} = req.body;
    const {
        registros501,
        registros502,
        registros503,
        registros504,
        registros505,
        registros506,
        registros507,
        registros508,
        registros509,
        registros510,
        registros511,
        registros512,
        registros520,
        registros551,
        registros552,
        registros553,
        registros554,
        registros555,
        registros556,
        registros557,
        registros558,
        registros701,
        registros702
    } = req.body;

    const sql501 =
        "INSERT INTO registros501 ('', clavecliente, identificador,pedimento_completo ,patente ,pedimento ,seccion ,tipo_operacion ,clave_documento ,seccion_entrada,curp_contribuyente ,rfc ,curp_aa ,tipo_cambio ,fletes ,total_seguros ,total_embalajes ,total_incrementables ,total_deducibles ,peso_bruto_mercancia ,medio_transporte_salida ,medio_transporte_arribo,medio_transporte_entrada_salida,destino_mercancia ,nombre_contribuyente ,calle_contribuyente ,num_interior_contribuyente ,num_exterior_contribuyente ,cp_contribuyente ,municipio_contribuyente ,entidad_fed_contribuyente ,pais_contribuyente ,tipo_pedimento ,fecha_recepcion_pedmiento ,fecha_pago) VALUES ?";

    /*const [rows] = await pool.query(sql501, [email, name, password])
    
    res.send({rows})*/
    res.sendStatus(200);

    /*db.query(sql, [dataToInsert], (error, results) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error en la inserción masiva' });
      }
      return res.status(200).json({ message: 'Inserción masiva exitosa' });
    })*/
};
