-- Active: 1674167397963@@35.226.146.116@3306@jbl-4415826-huan-lima
CREATE TABLE User_Cookenu(
	id VARCHAR(255) PRIMARY KEY, 
    name VARCHAR(255) NOT NULL, 
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);