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
-- Table structure for table `barrios`
--

DROP TABLE IF EXISTS `barrios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `barrios` (
  `idBarrios` int unsigned NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(100) NOT NULL,
  `activo` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`idBarrios`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `barrios`
--

LOCK TABLES `barrios` WRITE;
/*!40000 ALTER TABLE `barrios` DISABLE KEYS */;
INSERT INTO `barrios` VALUES (1,'Nva Cordoba',NULL),(2,'Alta Cordoba',NULL),(3,'Villa Retiro',NULL),(4,'Patricios',NULL),(5,'Ituzango',NULL),(6,'Nva Cordoba',NULL),(7,'Alta Cordoba',NULL),(8,'Villa Cabrera',NULL),(9,'Patricios',NULL),(10,'Ituzango',NULL),(11,'Nva Cordoba',NULL),(12,'Alta Cordoba',NULL),(13,'Villa Cabrera',NULL),(14,'Patricios',NULL),(15,'Ituzango',NULL),(16,'Puerredon',NULL),(17,'Centro',NULL),(18,'Guemes',NULL),(19,'Empalme',NULL),(20,'Talleres',NULL),(21,'Villa Belgrano',NULL),(22,'Don Bosco',NULL),(23,'Alto Aberdi',NULL),(24,'San Carlos',NULL),(25,'Cabildo',NULL),(26,'Nva Cordoba',1),(27,'Alta Cordoba',1),(28,'Villa Cabrera',1),(29,'Patricios',0),(30,'Ituzango',1),(31,'Puerredon',1),(32,'Centro',1),(33,'Guemes',0),(34,'Empalme',0),(35,'Talleres',0),(36,'Villa Belgrano',1),(37,'Don Bosco',0),(38,'Alto Aberdi',0),(39,'San Carlos',1),(40,'Cabildo',0),(41,'Inaudi',0),(42,'San Antonio',1),(43,'San Telmo',1),(44,'Guemes',1),(45,'nueva',0);
/*!40000 ALTER TABLE `barrios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-11-14 13:10:13
