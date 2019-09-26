DROP DATABASE IF EXISTS burgerDB;

-- Created the DB "burgerDB" (only works on local connections)
CREATE DATABASE burgerDB;

-- Use the DB burgerDB for all the rest of the script
USE burgerDB;

-- Created the table "people"
CREATE TABLE burgers (
  id INT AUTO_INCREMENT NOT NULL,
  burgerInfo varchar(255) NOT NULL,
  eaten BOOLEAN DEFAULT 0,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY(id)
);