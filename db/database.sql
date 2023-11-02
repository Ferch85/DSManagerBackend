CREATE DATABASE IF NOT EXISTS dsmanagement;

USE dsmanagement;

CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL,
    name VARCHAR(255) DEFAULT NULL,
    password VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE customers (
    id INT NOT NULL AUTO_INCREMENT,
    customer_id VARCHAR(255) NOT NULL,
    name VARCHAR(255) DEFAULT NULL,
    rfc VARCHAR(255) NOT NULL,
    streets VARCHAR(255),
    numext VARCHAR(7),
    cp VARCHAR(10),
    colonia VARCHAR(100),
    ciudad VARCHAR(100),
    estado VARCHAR(100),
    pais VARCHAR(50),
    telefono VARCHAR(50),
    curp VARCHAR(100),
    PRIMARY KEY (id)
);


INSERT INTO users VALUES
    (1, 'test@test.com', 'test', 'soluciones'),
    (2, 'test@test.com', 'test', 'soluciones'),
    (3, 'test@test.com', 'test', 'soluciones'),
    (4, 'test@test.com', 'test', 'soluciones');

INSERT INTO customers VALUES
    (1, 'TPI', 'TPI', 'TPI123456', 'calle','numero ex', 'cp', 'colonia', 'ciudad', 'estado', 'pais', 'tel', 'curp'),
    (2, 'TECMA', 'TECMA', 'TOP123456', 'calle','numero ex', 'cp', 'colonia', 'ciudad', 'estado', 'pais', 'tel', 'curp'),
    (3, 'REOBERTSHAW', 'ROB', 'ROB123456', 'calle','numero ex', 'cp', 'colonia', 'ciudad', 'estado', 'pais', 'tel', 'curp'),
    (4, 'EG', 'EGROUP', 'EGO123456', 'calle','numero ex', 'cp', 'colonia', 'ciudad', 'estado', 'pais', 'tel', 'curp');

CREATE TABLE registros501 (
    id INT NOT NULL AUTO_INCREMENT,
    clavecliente VARCHAR(255) NOT NULL,
    identificador VARCHAR(255) DEFAULT NULL,
    pedimento_completo VARCHAR(255) NOT NULL,
    patente VARCHAR(4),
    pedimento VARCHAR(7),
    seccion VARCHAR(3),
    tipo_operacion VARCHAR(1),
    clave_documento VARCHAR(2),
    seccion_entrada VARCHAR(3),
    curp_contribuyente VARCHAR(21),
    rfc VARCHAR(13),
    curp_aa VARCHAR(21),
    tipo_cambio DECIMAL(9, 5),
    fletes DECIMAL(13, 2),
    total_seguros DECIMAL(13, 2),
    total_embalajes DECIMAL(13, 2),
    total_incrementables DECIMAL(13, 2),
    total_deducibles DECIMAL(13, 2),
    peso_bruto_mercancia DECIMAL(19, 3),
    medio_transporte_salida VARCHAR(2),
    medio_transporte_arribo VARCHAR(2),
    medio_transporte_entrada_salida VARCHAR(2),
    destino_mercancia VARCHAR(2),
    nombre_contribuyente VARCHAR(256),
    calle_contribuyente VARCHAR(80),
    num_interior_contribuyente VARCHAR(10),
	num_exterior_contribuyente VARCHAR(10),
	cp_contribuyente VARCHAR(10),
	municipio_contribuyente VARCHAR(80),
	entidad_fed_contribuyente VARCHAR(30),
	pais_contribuyente VARCHAR(3),
	tipo_pedimento int,
	fecha_recepcion_pedmiento VARCHAR(30),	
	fecha_pago VARCHAR(30),	
    PRIMARY KEY (id)
);

CREATE TABLE registros502 (
    linea int AUTO_INCREMENT,
    id INT ,    
    clave_cliente VARCHAR(255) NOT NULL,
    identificador VARCHAR(255) NOT NULL,
    pedimento_completo VARCHAR(255) NOT NULL,
    patente VARCHAR(4),
    pedimento VARCHAR(7),
    seccion VARCHAR(3),
    rfc_transportista VARCHAR(12),
    curp_tranportista VARCHAR(21),
    nombre_transportista VARCHAR(256),
    pais_transporte VARCHAR(3),
    identificador_transporte VARCHAR(70),
    fecha_pago VARCHAR(30),
    PRIMARY KEY (linea, id)
);

CREATE TABLE registros503 (
    linea int AUTO_INCREMENT,
    id INT NOT NULL ,    
    clave_cliente VARCHAR(255) NOT NULL,
    identificador VARCHAR(255) NOT NULL,
    pedimento_completo VARCHAR(255) NOT NULL,
    patente VARCHAR(4),
    pedimento VARCHAR(7),
    seccion VARCHAR(3),
    guia VARCHAR(20),
    identificador_guia VARCHAR(1),
    fecha_pago VARCHAR(30),
    PRIMARY KEY (linea, id)
);

CREATE TABLE registros504 (
    linea int AUTO_INCREMENT,
    id INT NOT NULL ,    
    clave_cliente VARCHAR(255) NOT NULL,
    identificador VARCHAR(255) NOT NULL,
    pedimento_completo VARCHAR(255) NOT NULL,
    patente VARCHAR(4),
    pedimento VARCHAR(7),
    seccion VARCHAR(3),
    num_contenedor VARCHAR(20),
    tipo VARCHAR(2),
    fecha_pago VARCHAR(30),
    PRIMARY KEY (linea, id)
);

CREATE TABLE registros505 (
    linea int AUTO_INCREMENT,
    id INT NOT NULL ,    
    clave_cliente VARCHAR(255) NOT NULL,
    identificador VARCHAR(255) NOT NULL,
    pedimento_completo VARCHAR(255) NOT NULL,
    patente VARCHAR(4),
    pedimento VARCHAR(7),
    seccion VARCHAR(3),
    fecha_facturacion VARCHAR(30),
    numero_factura VARCHAR(49),
    termino_facturacion VARCHAR(3),
    moneda_facturacion VARCHAR(3),
    valor_dolares DECIMAL(17, 6),
    valor_moneda_extranjera DECIMAL(17, 6),
    pais_facturacion VARCHAR(3),
    entidad_facturacion VARCHAR(30),
    id_fiscal_proveedor VARCHAR(17),
    proveedor_mercancia VARCHAR(120),
    calle_proveedor VARCHAR(200), 
    num_interior_proveedor VARCHAR(10),
    num_exterior_proveedor VARCHAR(10),
    cp_proveedor VARCHAR(10),
    municipio_proveedor VARCHAR(80),    
    fecha_pago VARCHAR(30),
    PRIMARY KEY (linea, id)
);

CREATE TABLE registros506 (
    linea int AUTO_INCREMENT,
    id INT NOT NULL ,    
    clave_cliente VARCHAR(255) NOT NULL,
    identificador VARCHAR(255) NOT NULL,
    pedimento_completo VARCHAR(255) NOT NULL,
    patente VARCHAR(4),
    pedimento VARCHAR(7),
    seccion VARCHAR(3),
    tipo_fecha VARCHAR(2),
    fecha_operacion VARCHAR(30),
    fecha_validacion_pago VARCHAR(30),    
    PRIMARY KEY (linea, id)
);

CREATE TABLE registros507 (
    linea int AUTO_INCREMENT,
    id INT NOT NULL ,    
    clave_cliente VARCHAR(255) NOT NULL,
    identificador VARCHAR(255) NOT NULL,
    pedimento_completo VARCHAR(255) NOT NULL,
    patente VARCHAR(4),
    pedimento VARCHAR(7),
    seccion VARCHAR(3),
    clave_caso VARCHAR(2),
    id_caso VARCHAR(20),
    tipo_pedimento INT,
    complemento_caso TEXT,    
    fecha_pago VARCHAR(30),    
    PRIMARY KEY (linea, id)
);

CREATE TABLE registros508 (
    linea int AUTO_INCREMENT,
    id INT NOT NULL ,    
    clave_cliente VARCHAR(255) NOT NULL,
    identificador VARCHAR(255) NOT NULL,
    pedimento_completo VARCHAR(255) NOT NULL,
    patente VARCHAR(4),
    pedimento VARCHAR(7),
    seccion VARCHAR(3),
    institucion_emisora VARCHAR(2),
    num_cuenta VARCHAR(17),
    folio_constancia VARCHAR(17),    
    fecha_constancia VARCHAR(30),
    tipo_cuenta VARCHAR(2),
    clave_garantia VARCHAR(2),
    valor_unitario_titulo DECIMAL(17, 6),
    total_garantia DECIMAL(17, 6),
    cantidad_unidades DECIMAL(17, 6),
    titulos_asignados DECIMAL(17, 6),    
    fecha_pago VARCHAR(30),    
    PRIMARY KEY (linea, id)
);

CREATE TABLE registros509 (
    linea int AUTO_INCREMENT,
    id INT NOT NULL ,    
    clave_cliente VARCHAR(255) NOT NULL,
    identificador VARCHAR(255) NOT NULL,
    pedimento_completo VARCHAR(255) NOT NULL,
    patente VARCHAR(4),
    pedimento VARCHAR(7),
    seccion VARCHAR(3),
    clave_contribucion VARCHAR(2),
    tasa_contribucion DECIMAL(17, 6),
    tipo_tasa VARCHAR(2),
    tipo_pedimento INT,    
    fecha_pago VARCHAR(30),    
    PRIMARY KEY (linea, id)
);

CREATE TABLE registros510 (
    linea int AUTO_INCREMENT,
    id INT NOT NULL ,    
    clave_cliente VARCHAR(255) NOT NULL,
    identificador VARCHAR(255) NOT NULL,
    pedimento_completo VARCHAR(255) NOT NULL,
    patente VARCHAR(4),
    pedimento VARCHAR(7),
    seccion VARCHAR(3),
    clave_contribucion VARCHAR(2),
    forma_pago VARCHAR(2),
    importe_pago DECIMAL(13, 0),    
    tipo_pedimento INT,    
    fecha_pago VARCHAR(30),    
    PRIMARY KEY (linea, id)
);

CREATE TABLE registros511 (
    linea int AUTO_INCREMENT,
    id INT NOT NULL ,    
    clave_cliente VARCHAR(255) NOT NULL,
    identificador VARCHAR(255) NOT NULL,
    pedimento_completo VARCHAR(255) NOT NULL,
    patente VARCHAR(4),
    pedimento VARCHAR(7),
    seccion VARCHAR(3),
    secuencia_observacion int,
    observaciones VARCHAR(120),    
    tipo_pedimento INT,    
    fecha_pago VARCHAR(30),    
    PRIMARY KEY (linea, id)
);

CREATE TABLE registros512 (
    linea int AUTO_INCREMENT,
    id INT NOT NULL ,    
    clave_cliente VARCHAR(255) NOT NULL,
    identificador VARCHAR(255) NOT NULL,
    pedimento_completo VARCHAR(255) NOT NULL,
    patente VARCHAR(4),
    pedimento VARCHAR(7),
    seccion VARCHAR(3),
    patente_original VARCHAR(4),
    pedimento_original VARCHAR(7),    
    seccion_orig VARCHAR(3),    
    documento_original VARCHAR(4),
    fecha_operacion_original VARCHAR(30),
    fraccion_original VARCHAR(8),
    unidad_medida VARCHAR(2),
    mercancia_descargada DECIMAL(17, 6),
    tipo_pedimento INT,
    fecha_pago VARCHAR(30),    
    PRIMARY KEY (linea, id)
);

CREATE TABLE registros520 (
    linea int AUTO_INCREMENT,
    id INT NOT NULL ,    
    clave_cliente VARCHAR(255) NOT NULL,
    identificador VARCHAR(255) NOT NULL,
    pedimento_completo VARCHAR(255) NOT NULL,
    patente VARCHAR(4),
    pedimento VARCHAR(7),
    seccion VARCHAR(3),
    id_fiscal_destinatario VARCHAR(17),
    nombre_destino_mercancia VARCHAR(120),    
    calle_destinatario VARCHAR(1000),    
    num_interior_destinatario VARCHAR(10),
    num_exterior_destinatario VARCHAR(10),
    cp_destinatario VARCHAR(14),
    municipio_destinatario VARCHAR(80),
    clave_pais VARCHAR(3),
    pais_destinatario VARCHAR(3),
    fecha_pago VARCHAR(30),    
    PRIMARY KEY (linea, id)
);

CREATE TABLE registros551 (
    linea int AUTO_INCREMENT,
    id INT NOT NULL ,    
    clave_cliente VARCHAR(255) NOT NULL,
    identificador VARCHAR(255) NOT NULL,
    pedimento_completo VARCHAR(255) NOT NULL,
    patente VARCHAR(4),
    pedimento VARCHAR(7),
    seccion VARCHAR(3),
    fraccion VARCHAR(8),
    secuencia_fraccion INT,
    subdivision_fraccion VARCHAR(5),    
    descripcion_mercancia VARCHAR(299),
    precio_unitario DECIMAL(17, 6),
    valor_aduana DECIMAL(17, 5),
    valor_comercial DECIMAL(17, 6),
    valor_dolares DECIMAL(17, 6),
    cantidad_um_comercial DECIMAL(15, 3),
    unidad_medida_comercial VARCHAR(2),
    cantidad_um_tarifa DECIMAL(15, 3),
    unidad_medida_tarifa VARCHAR(2),
    valor_agregado DECIMAL(15, 2),
    clave_vinculacion int,
    metodo_valorizacion VARCHAR(2),
    codigo_mercancia_producto VARCHAR(20),
    mercancia_producto VARCHAR(80),
    modelo_mercancia_producto VARCHAR(80),
    pais_origen_destino VARCHAR(3),
    pais_comprador_vendedor VARCHAR(3),
    entidad_fed_orgien VARCHAR(30),
    entidad_fed_destino VARCHAR(30),
    entidad_fed_comprador VARCHAR(30),
    entidad_fed_vendedor VARCHAR(30),
    tipo_operacion VARCHAR(1),
    clave_documento VARCHAR(2),   
    fecha_pago VARCHAR(30),    
    PRIMARY KEY (linea, id)
);

CREATE TABLE registros552 (
    linea int AUTO_INCREMENT,
    id INT NOT NULL ,    
    clave_cliente VARCHAR(255) NOT NULL,
    identificador VARCHAR(255) NOT NULL,
    pedimento_completo VARCHAR(255) NOT NULL,
    patente VARCHAR(4),
    pedimento VARCHAR(7),
    seccion VARCHAR(3),
    fraccion VARCHAR(8),
    secuencia_fraccion INT,
    vin_numero_serie VARCHAR(17),    
    kilometraje_vehiculo DECIMAL(13, 0), 
    fecha_pago VARCHAR(30),    
    PRIMARY KEY (linea, id)
);

CREATE TABLE registros553 (
    linea int AUTO_INCREMENT,
    id INT NOT NULL ,    
    clave_cliente VARCHAR(255) NOT NULL,
    identificador VARCHAR(255) NOT NULL,
    pedimento_completo VARCHAR(255) NOT NULL,
    patente VARCHAR(4),
    pedimento VARCHAR(7),
    seccion VARCHAR(3),
    fraccion VARCHAR(8),
    secuencia_fraccion INT,
    clave_permiso VARCHAR(2),    
    firma_descargo VARCHAR(17), 
    numero_permiso VARCHAR(17),
    valor_comercial_dolares DECIMAL(17, 6),
    cantidad_um_tarifa DECIMAL(17, 6),
    fecha_pago VARCHAR(30),    
    PRIMARY KEY (linea, id)
);

CREATE TABLE registros554 (
    linea int AUTO_INCREMENT,
    id INT NOT NULL ,    
    clave_cliente VARCHAR(255) NOT NULL,
    identificador VARCHAR(255) NOT NULL,
    pedimento_completo VARCHAR(255) NOT NULL,
    patente VARCHAR(4),
    pedimento VARCHAR(7),
    seccion VARCHAR(3),
    fraccion VARCHAR(8),
    secuencia_fraccion INT,
    clave_caso VARCHAR(2),
    identificador_caso VARCHAR(20), 
    complemento_caso TEXT,    
    fecha_pago VARCHAR(30),    
    PRIMARY KEY (linea, id)
);

CREATE TABLE registros555 (
    linea int AUTO_INCREMENT,
    id INT NOT NULL ,    
    clave_cliente VARCHAR(255) NOT NULL,
    identificador VARCHAR(255) NOT NULL,
    pedimento_completo VARCHAR(255) NOT NULL,
    patente VARCHAR(4),
    pedimento VARCHAR(7),
    seccion VARCHAR(3),
    fraccion VARCHAR(8),
    secuencia_fraccion INT,
    institucion_emisora VARCHAR(2),
    numero_cuenta VARCHAR(17), 
    folio_constancia VARCHAR(17),    
    fecha_constancia VARCHAR(30),
    clave_garantia VARCHAR(2),
    valor_unitario_titulo DECIMAL(17, 6),
    total_garantia DECIMAL(17, 6),
    cantidad_unidades DECIMAL(17, 6),
    titulos_asignados DECIMAL(17, 6),
    fecha_pago VARCHAR(30),    
    PRIMARY KEY (linea, id)
);

CREATE TABLE registros556 (
    linea int AUTO_INCREMENT,
    id INT NOT NULL ,    
    clave_cliente VARCHAR(255) NOT NULL,
    identificador VARCHAR(255) NOT NULL,
    pedimento_completo VARCHAR(255) NOT NULL,
    patente VARCHAR(4),
    pedimento VARCHAR(7),
    seccion VARCHAR(3),
    fraccion VARCHAR(8),
    secuencia_fraccion INT,
    clave_contribucion VARCHAR(2),
    tasa_contribucion DECIMAL(17, 6), 
    tipo_tasa VARCHAR(2),   
    fecha_pago VARCHAR(30),    
    PRIMARY KEY (linea, id)
);

CREATE TABLE registros557 (
    linea int AUTO_INCREMENT,
    id INT NOT NULL ,    
    clave_cliente VARCHAR(255) NOT NULL,
    identificador VARCHAR(255) NOT NULL,
    pedimento_completo VARCHAR(255) NOT NULL,
    patente VARCHAR(4),
    pedimento VARCHAR(7),
    seccion VARCHAR(3),
    fraccion VARCHAR(8),
    secuencia_fraccion INT,
    clave_contribucion VARCHAR(2),
    forma_pago VARCHAR(3), 
    importe_pago DECIMAL(13, 0),   
    fecha_pago VARCHAR(30),    
    PRIMARY KEY (linea, id)
);

CREATE TABLE registros558 (
    linea int AUTO_INCREMENT,
    id INT NOT NULL ,    
    clave_cliente VARCHAR(255) NOT NULL,
    identificador VARCHAR(255) NOT NULL,
    pedimento_completo VARCHAR(255) NOT NULL,
    patente VARCHAR(4),
    pedimento VARCHAR(7),
    seccion VARCHAR(3),
    fraccion VARCHAR(8),
    secuencia_fraccion INT,
    secuencia_observacion INT,
    observaciones VARCHAR(120),     
    fecha_pago VARCHAR(30),    
    PRIMARY KEY (linea, id)
);

CREATE TABLE registros701 (
    linea int AUTO_INCREMENT,
    id INT NOT NULL ,    
    clave_cliente VARCHAR(255) NOT NULL,
    identificador VARCHAR(255) NOT NULL,
    pedimento_completo VARCHAR(255) NOT NULL,
    patente VARCHAR(4),
    pedimento VARCHAR(7),
    seccion VARCHAR(3),    
    clave_documento VARCHAR(2),
    fecha_pago_ped VARCHAR(30),
    pedimento_anterior VARCHAR(7),     
    patente_anterior VARCHAR(4),
    seccion_anterior VARCHAR(3),
    documento_anterior VARCHAR(50),
    fecha_operacion_anterior VARCHAR(29),
    pedimento_original VARCHAR(7),
    patente_original VARCHAR(4),
    seccion_original VARCHAR(3),    
    fecha_pago VARCHAR(30),    
    PRIMARY KEY (linea, id)
);

CREATE TABLE registros702 (
    linea int AUTO_INCREMENT,
    id INT NOT NULL ,    
    clave_cliente VARCHAR(255) NOT NULL,
    identificador VARCHAR(255) NOT NULL,
    pedimento_completo VARCHAR(255) NOT NULL,
    patente VARCHAR(4),
    pedimento VARCHAR(7),
    seccion VARCHAR(3),    
    clave_contribucion VARCHAR(2),
    forma_pago VARCHAR(3),
    importe_pago DECIMAL(13, 0),     
    tipo_pedimento INT,        
    fecha_pago VARCHAR(30),    
    PRIMARY KEY (linea, id)
);

CREATE TABLE facturas (
    consecutivo int AUTO_INCREMENT,
    numfactura VARCHAR(50) NOT NULL ,    
    fechafactura DATETIME NOT NULL,
    generador VARCHAR(255) NOT NULL,
    cliente VARCHAR(255) NOT NULL,        
    PRIMARY KEY (consecutivo)
);

CREATE TABLE detalle_factura (
    linea int AUTO_INCREMENT,
    consecutivo int NOT NULL,
    producto VARCHAR(150) NOT NULL,
    descripcion VARCHAR(500) NOT NULL,
    cantidad DECIMAL(18, 8) NOT NULL,
    precio_unitario DECIMAL(18, 8) NOT NULL,
    valor_total DECIMAL(18, 8) NOT NULL,
    PRIMARY KEY(linea, consecutivo)
)