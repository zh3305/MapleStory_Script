/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50617
Source Host           : localhost:3306
Source Database       : qhms

Target Server Type    : MYSQL
Target Server Version : 50617
File Encoding         : 65001

Date: 2015-05-05 13:48:06
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `memory_fighting`
-- ----------------------------
DROP TABLE IF EXISTS `memory_fighting`;
CREATE TABLE `memory_fighting` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `charid` int(11) DEFAULT NULL,
  `fighting` int(11) DEFAULT NULL,
  `ranking` int(11) DEFAULT NULL,
  `time` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of memory_fighting
-- ----------------------------

-- ----------------------------
-- Table structure for `memory_flowerpot`
-- ----------------------------
DROP TABLE IF EXISTS `memory_flowerpot`;
CREATE TABLE `memory_flowerpot` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `charid` int(11) NOT NULL,
  `seedid` int(11) DEFAULT NULL,
  `expiration` bigint(20) DEFAULT '-1',
  PRIMARY KEY (`id`),
  KEY `fk_charid2` (`charid`),
  CONSTRAINT `fk_charid2` FOREIGN KEY (`charid`) REFERENCES `characters` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=432 DEFAULT CHARSET=latin1;



-- ----------------------------
-- Table structure for `memory_garden`
-- ----------------------------
DROP TABLE IF EXISTS `memory_garden`;
CREATE TABLE `memory_garden` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `charid` int(11) DEFAULT NULL,
  `level` smallint(5) DEFAULT NULL,
  `exp` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_charid` (`charid`),
  CONSTRAINT `fk_charid` FOREIGN KEY (`charid`) REFERENCES `characters` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=402 DEFAULT CHARSET=latin1;


-- ----------------------------
-- Table structure for `memory_hsc`
-- ----------------------------
DROP TABLE IF EXISTS `memory_hsc`;
CREATE TABLE `memory_hsc` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `sponsor` int(11) NOT NULL,
  `spunchway` int(1) NOT NULL,
  `challenger` int(11) DEFAULT '-1',
  `cpunchway` int(1) DEFAULT '-1',
  `postedtime` bigint(20) NOT NULL,
  `points` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=100 DEFAULT CHARSET=latin1;


-- ----------------------------
-- Table structure for `memory_mysteryshop`
-- ----------------------------
DROP TABLE IF EXISTS `memory_mysteryshop`;
CREATE TABLE `memory_mysteryshop` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `itemid` int(11) NOT NULL,
  `price` int(11) NOT NULL DEFAULT '0',
  `stock` int(11) NOT NULL DEFAULT '0',
  `limited` int(11) NOT NULL DEFAULT '-1',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uniqueitemid` (`itemid`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;



-- ----------------------------
-- Table structure for `memory_seedpackage`
-- ----------------------------
DROP TABLE IF EXISTS `memory_seedpackage`;
CREATE TABLE `memory_seedpackage` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `charid` int(11) NOT NULL,
  `seedid` int(11) NOT NULL,
  `quantity` int(11) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `fk_charid3` (`charid`),
  CONSTRAINT `fk_charid3` FOREIGN KEY (`charid`) REFERENCES `characters` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=398 DEFAULT CHARSET=latin1;
