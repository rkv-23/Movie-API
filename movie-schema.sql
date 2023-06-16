CREATE DATABASE IF NOT EXISTS `testdata`;

use `testdata`;

--
-- Table structure for table `movie`
--
DROP TABLE IF EXISTS `movie`;

/*!40101 SET @saved_cs_client     = @@character_set_client */
;

/*!50503 SET character_set_client = utf8mb4 */
;

CREATE TABLE `movie` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `actor` varchar(255) NOT NULL,
  `language` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `created_by` varchar(255) DEFAULT NULL,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_by` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 5 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

/*!40101 SET character_set_client = @saved_cs_client */
;

--
-- Dumping data for table `movie`
--
LOCK TABLES `movie` WRITE;

/*!40000 ALTER TABLE `movie` DISABLE KEYS */
;

INSERT INTO
  `movie`
VALUES
  (
    2,
    'Bhubali',
    'Rajamauli',
    'HIndi',
    '2023-03-05 23:59:39',
    NULL,
    '2023-03-05 23:59:39',
    NULL
  ),
  (
    3,
    'PK',
    'Amir',
    'Hindi',
    '2023-03-06 00:17:48',
    NULL,
    '2023-03-06 00:17:48',
    NULL
  ),
  (
    4,
    'Bhola',
    'Ajay',
    'Hindi',
    '2023-03-06 00:55:35',
    NULL,
    '2023-03-06 00:55:35',
    NULL
  );

/*!40000 ALTER TABLE `movie` ENABLE KEYS */
;

UNLOCK TABLES;

--
-- Dumping routines for database 'testdata'
--