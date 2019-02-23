   //-----------------//
  //　Careless 制作  //
 // qq 50009219     //
//-----------------//
var status = 0;
var random = java.lang.Math.floor(Math.random() * 4);
var a = "#fEffect/CharacterEff/1082565/0/0#";  //饼干兔子
var b = "#fEffect/CharacterEff/1112904/0/0#"; //彩色星星
var c = "#fEffect/CharacterEff/1003271/0/0#";  //红色心心
var d = "#fEffect/CharacterEff/1112946/4/1#";  //钻石
var e = "#fEffect/CharacterEff/1082229/0/0#";  //红心
var f = "#fUI/Basic/LevelNo/0#"; //[1]+1
var j = "#fUI/Basic/LevelNo/1#"; //[1]+1
var h = "#fUI/Basic/LevelNo/2#"; //[1]+1
var i1 = "#fUI/Basic/LevelNo/3#"; //[1]+1
var g = "#fUI/Basic/LevelNo/4#"; //[1]+1
var k = "#fUI/Basic/LevelNo/5#"; //[1]+1
var l1 = "#fUI/Basic/LevelNo/6#"; //[1]+1
var xbydn = "";
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (cm.getEventCount("西班牙斗牛") == 0) {
        xbydn = "#d0#k";
    } else {
        xbydn = "#r" + cm.getEventCount("西班牙斗牛") + "#k";
    }
    if (status == 0 && mode == 0) {
        cm.dispose();
        //cm.openNpc(2470018);
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (cm.getMapId() == 180000001) {
        cm.sendOk("很遗憾，您因为违反用户守则被禁止游戏活动，如有异议请联系管理员.")
        cm.dispose();
    } else if (status == 0) {
        cm.sendNext("#e#d尊敬的[#r#h ##d]　 已驱赶牛牛：[ #r" + xbydn + "#d ]次\r\n这里是给您准备的驱赶礼物 通过驱赶次数来进行兑换\r\n" + e + e + e + e + e + e + e + e + e + e + e + e + e + e + e + e + e + e + e + e + e + e + e + e + e + e + e + e + e + "\r\n\r\n#n#L0##i2431742# #z2431742#   #i2431481#x1  [#r驱赶-10-回#d  ]#l\r\n#L1##i2340000# 　说明：数量五个　 #i2431481#x3  [#r驱赶-20-回#d  ]#l\r\n#L2##i5062002# 　说明：数量15个　 #i2431481#x6  [#r驱赶-40-回#d  ]#l\r\n#L3##i1182006#　 说明：全属性20　 #i2431481#x9  [#r驱赶-80-回#d  ]#l\r\n#L4##i1182006#　 说明：全属性50　#i2431481#x13 [#r驱赶-150-回#d ]#l\r\n#L5##i2433247#　 说明：卷轴系列 　#i2431481#x20 [#r驱赶-250-回#d ]#l\r\n#L6##i2432069#　 说明：暴君系列 　#i2431481#x30 [#r驱赶-500-回#d ]#l\r\n#L7##i1003752#　 说明：#z1003752# 　#i2431481#x40 [#r驱赶-600-回#d ]#l\r\n");
    } else if (status == 1) {
        if (selection == 0) {
            if (cm.getEventCount("西班牙斗牛") >= 10) {
                if (cm.getEventCount("斗牛奖品")<= 0) {
                    cm.gainItem(2431742, 1)//4000抵用卷
                    cm.gainItem(2431481, 1)//巨大福袋
                    cm.setEventCount("斗牛奖品");
                    cm.sendOk("#r#e\r\n\r\n恭喜您 ！您兑换了斗牛奖励\r\n请继续加油 ！！");
                    cm.dispose();
                } else {
                    cm.sendOk("#r#e\r\n\r\n抱歉！领取失败！请按照流程来");
                    cm.dispose();
                }
            } else {
                cm.sendOk("#r#e\r\n\r\n抱歉！您驱赶次数不够！");
                cm.dispose();
            }

        } else if (selection == 1) {
            if (cm.getEventCount("西班牙斗牛") >= 20) {
                if (cm.getEventCount("斗牛奖品") == 1) {
                    cm.gainItem(2340000, 5)//祝福卷轴
                    cm.gainItem(2431481, 3)//巨大福袋
                    cm.setEventCount("斗牛奖品");
                    cm.sendOk("#r#e\r\n\r\n恭喜您 ！您兑换了斗牛奖励\r\n请继续加油 ！！");
                    cm.dispose();
                } else {
                    cm.sendOk("#r#e\r\n\r\n抱歉！领取失败！请按照流程来");
                    cm.dispose();
                }
            } else {
                cm.sendOk("#r#e\r\n\r\n抱歉！您驱赶次数不够！");
                cm.dispose();
            }

        } else if (selection == 2) {
            if (cm.getEventCount("西班牙斗牛") >= 40) {
                if (cm.getEventCount("斗牛奖品") == 2) {
                    cm.gainItem(5062002, 15)//高级神奇魔方
                    cm.gainItem(2431481, 3)//巨大福袋
                    cm.setEventCount("斗牛奖品");
                    cm.sendOk("#r#e\r\n\r\n恭喜您 ！您兑换了斗牛奖励\r\n请继续加油 ！！");
                    cm.dispose();
                } else {
                    cm.sendOk("#r#e\r\n\r\n抱歉！领取失败！请按照流程来");
                    cm.dispose();
                }
            } else {
                cm.sendOk("#r#e\r\n\r\n抱歉！您驱赶次数不够！");
                cm.dispose();
            }

        } else if (selection == 3) {
            if (cm.getEventCount("西班牙斗牛") >= 80) {
                if (cm.getEventCount("斗牛奖品") == 3) {
                    cm.gainItem(2431481, 9)//巨大福袋
                    var ii = cm.getItemInfo();
                    var timeStamp = java.lang.System.currentTimeMillis();
                    var expirationDate = timeStamp + 604800000;// 七天
                    var toDrop = ii.randomizeStats(ii.getEquipById(1182006)).copy(); // 生成一个Equip类 
                    toDrop.setExpiration(expirationDate);//时间
                    toDrop.setStr(20); //装备力量
                    toDrop.setDex(20); //装备敏捷
                    toDrop.setInt(20); //装备智力
                    toDrop.setLuk(20); //装备运气
                    toDrop.setAcc(20); //命中率
                    toDrop.setMatk(20); //魔法攻击
                    toDrop.setWatk(20); //攻击攻击 
                    toDrop.setEnhance(5); //星级
                    toDrop.setOwner("斗牛勇士");//签名
                    toDrop.setBossDamage(10);//Boss 攻击百分比%
                    toDrop.setIgnorePDR(10);//无视怪物防御
                    toDrop.setTotalDamage(10);//总伤害
                    toDrop.setAllStat(10);//所有属性
                    //toDrop.setLimitBreak(100000000);//伤害上限
                    cm.addFromDrop(cm.getC(), toDrop, false);
                    cm.dispose();
                    cm.setEventCount("斗牛奖品");
                    cm.sendOk("#r#e\r\n\r\n恭喜您 ！您兑换了斗牛奖励\r\n请继续加油 ！！");
                    cm.dispose();
                } else {
                    cm.sendOk("#r#e\r\n\r\n抱歉！领取失败！请按照流程来");
                    cm.dispose();
                }
            } else {
                cm.sendOk("#r#e\r\n\r\n抱歉！您驱赶次数不够！");
                cm.dispose();
            }

        } else if (selection ==4) {
            if (cm.getEventCount("西班牙斗牛") >= 150) {
                if (cm.getEventCount("斗牛奖品") == 4) {
                    cm.gainItem(2431481, 13)//巨大福袋
                    var ii = cm.getItemInfo();
                    var timeStamp = java.lang.System.currentTimeMillis();
                    var expirationDate = timeStamp + 604800000;// 七天
                    var toDrop = ii.randomizeStats(ii.getEquipById(1182006)).copy(); // 生成一个Equip类 
                    toDrop.setExpiration(expirationDate);//时间
                    toDrop.setStr(50); //装备力量
                    toDrop.setDex(50); //装备敏捷
                    toDrop.setInt(50); //装备智力
                    toDrop.setLuk(50); //装备运气
                    toDrop.setAcc(50); //命中率
                    toDrop.setMatk(50); //魔法攻击
                    toDrop.setWatk(50); //攻击攻击 
                    toDrop.setEnhance(15); //星级
                    toDrop.setOwner("斗牛勇士");//签名
                    toDrop.setBossDamage(20);//Boss 攻击百分比%
                    toDrop.setIgnorePDR(20);//无视怪物防御
                    toDrop.setTotalDamage(20);//总伤害
                    toDrop.setAllStat(20);//所有属性
                    //toDrop.setLimitBreak(1000000);//伤害上限
                    cm.addFromDrop(cm.getC(), toDrop, false);
                    cm.dispose();
                    cm.setEventCount("斗牛奖品");
                    cm.sendOk("#r#e\r\n\r\n恭喜您 ！您兑换了斗牛奖励\r\n请继续加油 ！！");
                    cm.dispose();
                } else {
                    cm.sendOk("#r#e\r\n\r\n抱歉！领取失败！请按照流程来");
                    cm.dispose();
                }
            } else {
                cm.sendOk("#r#e\r\n\r\n抱歉！您驱赶次数不够！");
                cm.dispose();
            }

        } else if (selection == 5) {
            if (cm.getEventCount("西班牙斗牛") >= 250) {
                if (cm.getEventCount("斗牛奖品") == 5) {
                    cm.gainItem(2431481, 20)//巨大福袋
                    cm.gainItem(2433247, 3)//卷轴系列
                    cm.setEventCount("斗牛奖品");
                    cm.sendOk("#r#e\r\n\r\n恭喜您 ！您兑换了斗牛奖励\r\n请继续加油 ！！");
                    cm.dispose();
                } else {
                    cm.sendOk("#r#e\r\n\r\n抱歉！领取失败！请按照流程来");
                    cm.dispose();
                }
            } else {
                cm.sendOk("#r#e\r\n\r\n抱歉！您驱赶次数不够！");
                cm.dispose();
            }

        } else if (selection == 6) {
            if (cm.getEventCount("西班牙斗牛") >= 500) {
                if (cm.getEventCount("斗牛奖品") == 6) {
                    cm.gainItem(2431481, 30)//巨大福袋
                    cm.gainItem(2432069, 1)//暴君箱子
                    cm.setEventCount("斗牛奖品");
                    cm.sendOk("#r#e\r\n\r\n恭喜您 ！您兑换了斗牛奖励\r\n请继续加油 ！！");
                    cm.dispose();
                } else {
                    cm.sendOk("#r#e\r\n\r\n抱歉！领取失败！请按照流程来");
                    cm.dispose();
                }
            } else {
                cm.sendOk("#r#e\r\n\r\n抱歉！您驱赶次数不够！");
                cm.dispose();
            }

        } else if (selection == 7) {
            if (cm.getEventCount("西班牙斗牛") >= 600) {
                if (cm.getEventCount("斗牛奖品") == 7) {
                    cm.gainItem(2431481, 40)//巨大福袋
                    var ii = cm.getItemInfo();
                    var toDrop = ii.randomizeStats(ii.getEquipById(1003752)).copy(); // 生成一个Equip类 
                    var timeStamp = java.lang.System.currentTimeMillis();
                    var expirationDate = timeStamp + 604800000;// 七天
                    cm.setLock(toDrop);//封印
                    toDrop.setStr(50); //装备力量
                    toDrop.setDex(50); //装备敏捷
                    toDrop.setInt(50); //装备智力
                    toDrop.setLuk(50); //装备运气
                    toDrop.setAcc(50); //命中率
                    toDrop.setMatk(50); //魔法攻击
                    toDrop.setWatk(50); //攻击攻击 
                    //toDrop.setEnhance(15); //星级
                    toDrop.setWdef(100);//物理防御
                    toDrop.setMdef(100);//魔攻防御
                    toDrop.setAvoid(100);//回避率
                    //toDrop.setHands(4);//手技
                    toDrop.setSpeed(20);//移动速度
                    toDrop.setJump(10);//跳跃
                    toDrop.setOwner("斗牛勇士");//签名
                    toDrop.setBossDamage(20);//Boss 攻击百分比%
                    toDrop.setIgnorePDR(20);//无视怪物防御
                    toDrop.setTotalDamage(20);//总伤害
                    toDrop.setAllStat(20);//所有属性
                    toDrop.setExpiration(expirationDate);
                    //toDrop.setLimitBreak(1000000);//伤害上限
                    cm.addFromDrop(cm.getC(), toDrop, false);
                    cm.dispose();
                    cm.setEventCount("斗牛奖品");
                    cm.sendOk("#r#e\r\n\r\n恭喜您 ！您兑换了斗牛奖励\r\n请继续加油 ！！");
                    cm.dispose();
                } else {
                    cm.sendOk("#r#e\r\n\r\n抱歉！领取失败！请按照流程来");
                    cm.dispose();
                }
            } else {
                cm.sendOk("#r#e\r\n\r\n抱歉！您驱赶次数不够！");
                cm.dispose();
            }

        }
    }
}