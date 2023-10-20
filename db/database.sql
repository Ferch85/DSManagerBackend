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
    (4, 'test@test.com', 'test', 'soluciones');,

INSERT INTO customers VALUES
    (1, 'TPI', 'TPI', 'TPI123456', 'calle','numero ex', 'cp', 'colonia', 'ciudad', 'estado', 'pais', 'tel', 'curp'),
    (2, 'TECMA', 'TECMA', 'TOP123456', 'calle','numero ex', 'cp', 'colonia', 'ciudad', 'estado', 'pais', 'tel', 'curp'),
    (3, 'REOBERTSHAW', 'ROB', 'ROB123456', 'calle','numero ex', 'cp', 'colonia', 'ciudad', 'estado', 'pais', 'tel', 'curp'),
    (4, 'EG', 'EGROUP', 'EGO123456', 'calle','numero ex', 'cp', 'colonia', 'ciudad', 'estado', 'pais', 'tel', 'curp');,