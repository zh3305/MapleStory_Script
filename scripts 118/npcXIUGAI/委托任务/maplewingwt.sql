/*
MySQL Data Transfer
Source Host: localhost
Source Database: 104maplewing
Target Host: localhost
Target Database: 104maplewing
Date: 2013/10/2 17:16:04
*/

SET FOREIGN_KEY_CHECKS=0;
-- ----------------------------
-- Table structure for maplewingwt
-- ----------------------------
CREATE TABLE `maplewingwt` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(13) CHARACTER SET gbk COLLATE gbk_bin NOT NULL DEFAULT '',
  `neirong` varchar(50) CHARACTER SET gbk COLLATE gbk_bin NOT NULL DEFAULT '',
  `fnpc` int(11) NOT NULL DEFAULT '9000086',
  `nid` int(11) NOT NULL DEFAULT '0',
  `nlevel` int(11) NOT NULL DEFAULT '0',
  `njob` int(11) NOT NULL DEFAULT '0',
  `nchongxiu` int(11) NOT NULL DEFAULT '0',
  `nguild` int(11) NOT NULL DEFAULT '0',
  `mob` int(11) NOT NULL DEFAULT '0',
  `nmob` int(11) NOT NULL DEFAULT '0',
  `item` int(11) NOT NULL DEFAULT '0',
  `nitem` int(11) NOT NULL DEFAULT '0',
  `npc` int(11) NOT NULL DEFAULT '9000086',
  `map` int(11) NOT NULL DEFAULT '0',
  `reward1maple` int(11) NOT NULL DEFAULT '0',
  `reward2mapley` int(11) NOT NULL DEFAULT '0',
  `reward3wmose` int(11) NOT NULL DEFAULT '0',
  `reward4emose` int(11) NOT NULL DEFAULT '0',
  `reward5nx` int(11) NOT NULL DEFAULT '0',
  `rewarditem` int(11) NOT NULL DEFAULT '0',
  `itemsl` int(11) NOT NULL DEFAULT '1',
  `meso` int(11) NOT NULL DEFAULT '0',
  `exp` int(11) NOT NULL DEFAULT '0',
  `maxcishu` int(11) NOT NULL DEFAULT '1',
  `level` int(11) NOT NULL DEFAULT '0',
  `hastrue` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records 
-- ----------------------------
INSERT INTO `maplewingwt` VALUES ('1', '狩猎花蘑菇', '打猎10只花蘑菇！', '9000086', '0', '0', '0', '0', '0', '1210102', '10', '4001126', '1', '9000086', '0', '1', '1', '1', '0', '100', '4001126', '10', '1000', '10000', '87', '0', '0');
INSERT INTO `maplewingwt` VALUES ('2', '黑暗希纳斯', '阻止未来之门后面的恶梦中黑暗希纳斯！', '9000086', '0', '0', '0', '0', '0', '8850012', '1', '0', '0', '9000086', '271040210', '800', '100', '10000', '5', '10000', '4001126', '10', '0', '1000000000', '9', '1', '0');
INSERT INTO `maplewingwt` VALUES ('3', '国庆大礼包', '限量领取哦！只有5份！来晚了就没有了！', '73', '0', '0', '0', '0', '0', '0', '0', '0', '0', '9000086', '0', '1010', '10101', '10101', '2', '10101', '4001126', '10', '10101', '1010101010', '0', '0', '0');
INSERT INTO `maplewingwt` VALUES ('4', '庆祝大礼包', '庆祝委托任务系统完美实现！鼓掌！！欢呼吧！！！', '73', '0', '0', '0', '0', '0', '0', '0', '0', '0', '9000086', '0', '555', '55', '55555', '5', '55555', '4001126', '10', '55555', '55555', '0', '0', '0');
INSERT INTO `maplewingwt` VALUES ('5', '狩猎蜗牛', '打猎50只蜗牛！！', '73', '0', '0', '0', '0', '0', '100100', '50', '0', '0', '9000086', '0', '10', '1', '1', '0', '100', '4001126', '10', '100000', '1000000', '97', '0', '0');
INSERT INTO `maplewingwt` VALUES ('6', '狩猎蓝蜗牛', '打猎100只蓝蜗牛！', '73', '0', '0', '0', '0', '0', '100101', '100', '0', '0', '9000086', '0', '30', '2', '10', '0', '1000', '4001126', '10', '1000000', '5000000', '97', '0', '0');
INSERT INTO `maplewingwt` VALUES ('7', '狩猎红蜗牛', '打猎100只红蜗牛！', '73', '0', '0', '0', '0', '0', '130101', '100', '0', '0', '9000086', '0', '50', '5', '50', '0', '5000', '4001126', '50', '5000000', '10000000', '50', '0', '0');
INSERT INTO `maplewingwt` VALUES ('8', '打猎蘑菇仔', '打猎200只蘑菇仔！', '1', '0', '0', '0', '0', '0', '120100', '200', '0', '0', '9000086', '0', '100', '10', '100', '0', '10000', '4001126', '100', '10000000', '50000000', '96', '0', '0');
INSERT INTO `maplewingwt` VALUES ('9', '狩猎紫色毒蘑菇', '蘑菇城出现了大问题！需要支援请去消灭紫色毒蘑菇50只！', '9000086', '0', '0', '0', '0', '0', '3300001', '50', '0', '0', '9000086', '0', '0', '0', '0', '0', '0', '4001126', '100', '1000000', '10000000', '99', '0', '0');
INSERT INTO `maplewingwt` VALUES ('10', '永恒真爱戒指！', '祝福Maplewing世界的所有玩家们！永恒！真爱MaplWing！！！！', '9000086', '95', '0', '0', '0', '0', '0', '0', '0', '0', '9000086', '0', '0', '0', '0', '0', '0', '1112312', '1', '0', '0', '0', '0', '0');
