-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: pintureria
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `empleado`
--

DROP TABLE IF EXISTS `empleado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `empleado` (
  `idEmpleado` int unsigned NOT NULL AUTO_INCREMENT,
  `idTipoEmpleado` int unsigned NOT NULL,
  `legajo` varchar(45) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `apellido` varchar(100) NOT NULL,
  `dni` varchar(45) NOT NULL,
  `telefono` varchar(45) NOT NULL,
  `mail` varchar(45) NOT NULL,
  `usuario` varchar(100) NOT NULL,
  `contrasena` varchar(100) NOT NULL,
  `activo` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`idEmpleado`),
  KEY `fk_Empleado_Tipo_Empleado_idx` (`idTipoEmpleado`),
  KEY `fk_Empleado_Tipo_Empleado` (`idTipoEmpleado`),
  CONSTRAINT `fk_Empleado_Tipo_Empleado` FOREIGN KEY (`idTipoEmpleado`) REFERENCES `tipo_empleado` (`idTipo_Empleado`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `empleado`
--

LOCK TABLES `empleado` WRITE;
/*!40000 ALTER TABLE `empleado` DISABLE KEYS */;
INSERT INTO `empleado` VALUES (1,5,'113449','Ignacio','Cima','43693015','3512554905','ignaciocima@gmail.com','nacho1','2548',1),(2,9,'1234','ciro','martinez','123456','12345678','ciro@mail.com','string','string',0),(3,8,'6','juan','pedro','12345678','3512554905','113449@tecnicatura.frc.utn.edu.ar',' ',' ',0),(4,7,'123456','Juan','Zorza','48965217','3512554905','113449@tecnicatura.frc.utn.edu.ar',' ',' ',0),(5,7,'1232455','Juant','Zorzat','123456723','3512554905','113449@tecnicatura.frc.utn.edu.ar',' ',' ',0),(6,8,'123455','Ciro','Martinez','12345678','3512554905','cMartinez@gmail.com',' ',' ',0),(7,8,'12333','Juan','Zorza','48965217','3512554905','113449@tecnicatura.frc.utn.edu.ar',' ',' ',0),(8,6,'1123221','juan','pedro','12345678','3512554905','113449@tecnicatura.frc.utn.edu.ar',' ',' ',0),(9,9,'2345643','Ciro','Martinez','48965217','3512554905','cMartinez@gmail.com','ciro','1234',1),(10,7,'1234567','Juan','Cima','12244588','3512554905','nacho.cimacac@gmail.com',' ',' ',0),(11,6,'115661','Piti','Fernandez','26945378','3512554905','pti@gmail.com',' ',' ',0),(12,6,'114672','Pity','Alvarez','25846372','3512554905','pityA@gmail.com',' pity','alvarez',0),(13,6,'1155874','Tomas','Perez','43693225','3512554905','tPerez@gmail.com',' tPerez','1234',1),(14,7,'1155863','Sofia','Lopez','32693225','3512554905','sLopez@gmail.com','sLopez','1234',1);
/*!40000 ALTER TABLE `empleado` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-11-14 13:10:12
