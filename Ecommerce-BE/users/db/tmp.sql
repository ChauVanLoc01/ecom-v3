-- Adminer 4.8.1 MySQL 9.0.0 dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

DROP TABLE IF EXISTS `DeliveryInformation`;
CREATE TABLE `DeliveryInformation` (
  `id` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `full_name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(12) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `isPrimary` tinyint(1) NOT NULL DEFAULT '0',
  `userId` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `isDelete` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  CONSTRAINT `DeliveryInformation_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `User` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `DeliveryInformation` (`id`, `full_name`, `phone`, `address`, `isPrimary`, `userId`, `createdAt`, `isDelete`) VALUES
('0281b824-530b-4a03-9525-489b93ee77b2',	'CHAU VAN LOC',	'0346128692',	'TpHCM\nThu Duc',	0,	'a226f227-c629-4c75-98ca-e56a3dab016e',	'2024-04-13 05:42:40',	0),
('2bd0af3d-4bc2-4555-bcdb-35dd1af02813',	'CHAU VAN LOC',	'0346128692',	'TpHCM\nThu Duc',	0,	'3206fa68-bd29-4fec-8174-c067ed4beb79',	NULL,	0),
('2ccd205f-2a99-44fd-b1a6-630a61114774',	'CHAU VAN LOC',	'0346128692',	'TpHCM\nThu Duc',	0,	'40d22896-4727-4831-96fa-c9b41a3e04c0',	NULL,	0),
('3ea3385f-16f7-477e-b54c-c5a9eb685b3c',	'Tu',	'1234123423',	'HCM',	0,	'187af660-ad6c-4256-a90f-e463dc9081de',	NULL,	0),
('41ce2ed7-2a53-431c-ae10-ba5cd1c6b501',	'Tan Loc',	'1234123123',	'lkasjdfl',	0,	'a3816a2a-93c2-49a9-b5af-16e25615b2c1',	NULL,	0),
('46bacd30-6737-4620-b6f6-e639bee8f984',	'qewrqwer qưẻweqr',	'115226352',	'〒064-0809 北海道札幌市中央区 南九条西３丁目１０－９７　札幌ＫＳビル４Ｆ',	0,	'ad597a58-ef3f-4ee8-9552-74d4668d9b2b',	NULL,	0),
('59f17b81-bf3e-4a61-a84d-ed4e819d776c',	'qewrqwer qưẻweqr',	'115226352',	'〒064-0809 北海道札幌市中央区 南九条西３丁目１０－９７　札幌ＫＳビル４Ｆ',	0,	'ad597a58-ef3f-4ee8-9552-74d4668d9b2b',	NULL,	0),
('5fe2b94c-8024-46ec-88e5-c3a69d523260',	'Châu Van Lộc',	'087922972',	'14 ap My Thanh xa My Phong, TP My Tho',	0,	'7d4a0ef3-5ab0-45ab-b4c1-c049596e2749',	NULL,	0),
('619fc3a8-861d-4e2e-b362-c52e061b68d8',	'Vanloc',	'0346128692',	'Tan Binh HCM',	0,	'a3816a2a-93c2-49a9-b5af-16e25615b2c1',	NULL,	0),
('654a8448-c882-4788-ab2e-65ba50eda340',	'Tan Loc',	'1234123123',	'lkasjdfl',	1,	'3206fa68-bd29-4fec-8174-c067ed4beb79',	NULL,	0),
('815dd997-0b27-4b4b-892a-bde6be482d34',	'CHAU VAN LOC',	'0346128692',	'TpHCM\nThu Duc',	0,	'bc119302-99fb-44b3-b07f-64eef34454cd',	NULL,	0),
('8bdb9d18-4994-4a79-a800-026376d49256',	'CHAU VAN LOC',	'0346128692',	'TpHCM\nThu Duc',	1,	'187af660-ad6c-4256-a90f-e463dc9081de',	'2024-04-30 10:53:19',	0),
('98faeeac-7ce3-4346-a4d6-a8b34697143b',	'CHAU VAN LOC',	'0346128692',	'TpHCM\nThu Duc',	0,	'a3816a2a-93c2-49a9-b5af-16e25615b2c1',	NULL,	0),
('c32cfc25-17e5-488c-99ce-e58d143272dd',	'CHAU VAN LOC',	'0346128692',	'TpHCM\nTan Binh',	0,	'bc119302-99fb-44b3-b07f-64eef34454cd',	NULL,	0),
('cfb52030-4642-4df3-8f1c-fdc45abb3ed7',	'CHAU VAN LOC',	'0346128692',	'Tien Giang',	0,	'a226f227-c629-4c75-98ca-e56a3dab016e',	NULL,	0),
('f894b550-45cc-45fa-aa3d-b1448dd662b8',	'Hien',	'123412334324',	'HCM',	0,	'187af660-ad6c-4256-a90f-e463dc9081de',	NULL,	0),
('fd89b89b-b2aa-416b-b8b6-3bffca1ee221',	'Vanloc',	'1231231312',	'123',	0,	'a226f227-c629-4c75-98ca-e56a3dab016e',	NULL,	0);

-- 2024-08-13 19:45:45