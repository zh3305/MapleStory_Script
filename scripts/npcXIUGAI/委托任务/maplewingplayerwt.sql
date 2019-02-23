/*
MySQL Data Transfer
Source Host: localhost
Source Database: 104maplewing
Target Host: localhost
Target Database: 104maplewing
Date: 2013/10/2 17:15:57
*/

SET FOREIGN_KEY_CHECKS=0;
-- ----------------------------
-- Table structure for maplewingplayerwt
-- ----------------------------
CREATE TABLE `maplewingplayerwt` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(13) CHARACTER SET gbk COLLATE gbk_bin NOT NULL DEFAULT '',
  `renwu1` int(11) NOT NULL DEFAULT '0',
  `mobid1` int(11) NOT NULL DEFAULT '0',
  `mob1` int(11) NOT NULL DEFAULT '0',
  `renwu2` int(11) NOT NULL DEFAULT '0',
  `mobid2` int(11) NOT NULL DEFAULT '0',
  `mob2` int(11) NOT NULL DEFAULT '0',
  `renwu3` int(11) NOT NULL DEFAULT '0',
  `mobid3` int(11) NOT NULL DEFAULT '0',
  `mob3` int(11) NOT NULL DEFAULT '0',
  `renwu4` int(11) NOT NULL DEFAULT '-1',
  `mobid4` int(11) NOT NULL DEFAULT '0',
  `mob4` int(11) NOT NULL DEFAULT '0',
  `renwu5` int(11) NOT NULL DEFAULT '-1',
  `mobid5` int(11) NOT NULL DEFAULT '0',
  `mob5` int(11) NOT NULL DEFAULT '0',
  `renwu6` int(11) NOT NULL DEFAULT '-1',
  `mobid6` int(11) NOT NULL DEFAULT '0',
  `mob6` int(11) NOT NULL DEFAULT '0',
  `renwu7` int(11) NOT NULL DEFAULT '-1',
  `mobid7` int(11) NOT NULL DEFAULT '0',
  `mob7` int(11) NOT NULL DEFAULT '0',
  `renwu8` int(11) NOT NULL DEFAULT '-1',
  `mobid8` int(11) NOT NULL DEFAULT '0',
  `mob8` int(11) NOT NULL DEFAULT '0',
  `renwu9` int(11) NOT NULL DEFAULT '-1',
  `mobid9` int(11) NOT NULL DEFAULT '0',
  `mob9` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=96 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records 
-- ----------------------------
INSERT INTO `maplewingplayerwt` VALUES ('68', 'Da爷思密达丶', '0', '0', '0', '0', '0', '0', '0', '0', '0', '-1', '0', '0', '-1', '0', '0', '-1', '0', '0', '-1', '0', '0', '-1', '0', '0', '-1', '0', '0');
INSERT INTO `maplewingplayerwt` VALUES ('72', '无言翼', '5', '100100', '12', '0', '0', '0', '0', '0', '0', '0', '0', '0', '-1', '0', '0', '-1', '0', '0', '-1', '0', '0', '-1', '0', '0', '-1', '0', '0');
INSERT INTO `maplewingplayerwt` VALUES ('73', '幻灵', '0', '1210102', '10', '0', '0', '0', '4', '0', '0', '8', '120100', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '-1', '0', '0', '-1', '0', '0');
INSERT INTO `maplewingplayerwt` VALUES ('74', '丶咖啡', '8', '120100', '0', '0', '0', '0', '6', '100101', '0', '5', '100100', '0', '1', '1210102', '0', '0', '0', '0', '-1', '0', '0', '-1', '0', '0', '-1', '0', '0');
INSERT INTO `maplewingplayerwt` VALUES ('78', '不败神话', '0', '0', '0', '1', '1210102', '0', '0', '0', '0', '0', '0', '0', '-1', '0', '0', '-1', '0', '0', '-1', '0', '0', '-1', '0', '0', '-1', '0', '0');
INSERT INTO `maplewingplayerwt` VALUES ('80', 'FQ村长', '0', '0', '0', '0', '0', '0', '0', '0', '0', '-1', '0', '0', '-1', '0', '0', '-1', '0', '0', '-1', '0', '0', '-1', '0', '0', '-1', '0', '0');
INSERT INTO `maplewingplayerwt` VALUES ('92', '神话', '0', '0', '0', '0', '0', '0', '0', '0', '0', '-1', '0', '0', '-1', '0', '0', '-1', '0', '0', '-1', '0', '0', '-1', '0', '0', '-1', '0', '0');
INSERT INTO `maplewingplayerwt` VALUES ('93', '丶末卡', '0', '0', '0', '0', '0', '0', '0', '8850012', '0', '-1', '0', '0', '-1', '0', '0', '-1', '0', '0', '-1', '0', '0', '-1', '0', '0', '-1', '0', '0');
INSERT INTO `maplewingplayerwt` VALUES ('94', '啊丶咖啡', '2', '8850012', '0', '0', '8850012', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '-1', '0', '0', '-1', '0', '0', '-1', '0', '0', '-1', '0', '0');
INSERT INTO `maplewingplayerwt` VALUES ('95', '神o话', '2', '8850012', '0', '6', '100101', '0', '7', '130101', '0', '0', '1210102', '10', '8', '120100', '0', '-1', '0', '0', '-1', '0', '0', '-1', '0', '0', '-1', '0', '0');
