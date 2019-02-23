
/*      
 
 NPC版权:                追忆冒险岛 	        
 NPC类型: 		        综合NPC
 制作人：故事丶
 
 */

var status = 0;
var typede = 0;


function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        if (status == 0) {
            var zyms = "";
            zyms = "#fMob/1210102.img/move/0##fMob/1210102.img/move/0##b追忆 - MS#fMob/1210102.img/move/0##fMob/1210102.img/move/0#\r\n#k达到指定VIP等级可以领取奖励哦。\r\n\r\nVIP等级: #r" + cm.getVipLevel() + "\r\n";
            zyms += "#L1##b领取VIP1奖励#l    #L2##k查看奖励清单#l \r\n";
            zyms += "#L3##b领取VIP2奖励#l    #L4##k查看奖励清单#l \r\n";
            zyms += "#L5##b领取VIP3奖励#l    #L6##k查看奖励清单#l \r\n";
            zyms += "#L7##b领取VIP4级励#l    #L8##k查看奖励清单#l \r\n";
            zyms += "#L9##b领取VIP5奖励#l    #L10##k查看奖励清单#l \r\n";
            zyms += "#L11##r领取VIP6奖励#l    #L12##k查看奖励清单#l \r\n";
            zyms += "#L13##r领取VIP7奖励#l    #L14##k查看奖励清单#l \r\n";
            cm.sendSimple(zyms);



        } else if (selection == 1) {
            if  (cm.getVipLevel() < 1) {
                cm.sendOk("只有VIP1以上的玩家才可以领取奖励。");
            } else if (cm.getSpace(1) < 1 || cm.getSpace(5) < 3) {
                cm.sendOk("领取失败。\r\n\r\n背包装备栏至少需要1个空位,特殊栏3个以上的空位才可以领取。");
            } else if (cm.getBossLog("VIP1奖励", 1) < 1) {
                cm.setBossLog("VIP1奖励", 1);
                cm.gainItem(1112446, 1);//老公老婆戒指
                cm.gainItem(5390013, 10);//白银VIP喇叭
                cm.gainItemPeriod(5062000, 8,1);//神奇魔方
                cm.gainItemPeriod(5062002, 5,1);//高级神奇魔方
                cm.sendOk("领取成功,祝您游戏开心愉快。");
                cm.worldSpouseMessage(0x20, "玩家 " + cm.getChar().getName() + " 领取VIP1等级奖励,获得了专属礼包。");
            } else {
                cm.sendOk("当前送礼项目只可以领取一次,你已经领取过了!");
            }
            cm.dispose();


        } else if (selection == 2) {
            cm.dispose();
            cm.sendOk("#e<#v3991051# #v3991050# #v3991038# #v3991044#-VIP等级送礼>#n\r\nVIP1奖励清单如下：\r\n#v1112446#x1 #v5390013#x10 #v5062000#x8 #v5062002#x5");

        } else if (selection == 3) {
           if  (cm.getVipLevel() < 2) {
                cm.sendOk("只有VIP2以上的玩家才可以领取奖励。");
            } else if (cm.getSpace(1) < 1 || cm.getSpace(5) < 3) {
                cm.sendOk("领取失败。\r\n\r\n背包装备栏至少需要1个空位,特殊栏3个以上的空位才可以领取。");
            } else if (cm.getBossLog("VIP2奖励", 1) < 1) {
                cm.setBossLog("VIP2奖励", 1);
                cm.gainItem(5390013, 15);//白银VIP喇叭
                cm.gainItemPeriod(5062000, 10,1);//神奇魔方
                cm.gainItemPeriod(5062002, 8,1);//高级神奇魔方
                cm.sendOk("领取成功,祝您游戏开心愉快。");
                cm.worldSpouseMessage(0x20, "玩家 " + cm.getChar().getName() + " 领取VIP2等级奖励,获得了专属礼包。");
            } else {
                cm.sendOk("当前送礼项目只可以领取一次,你已经领取过了!");
            }
            cm.dispose();

        } else if (selection == 4) { 
            cm.dispose();
            cm.sendOk("#e<#v3991051# #v3991050# #v3991038# #v3991044#-VIP等级送礼>#n\r\nVIP2奖励清单如下：\r\n#v5390013#x15 #v5062000#x10 #v5062002#x8");



        } else if (selection == 5) { 
           if  (cm.getVipLevel() < 3) {
                cm.sendOk("只有VIP3以上的玩家才可以领取奖励。");
            } else if (cm.getSpace(2) < 1 || cm.getSpace(5) < 4) {
                cm.sendOk("领取失败。\r\n\r\n背包消耗栏至少需要1个空位,特殊栏4个以上的空位才可以领取。");
            } else if (cm.getBossLog("VIP3奖励", 1) < 1) {
                cm.setBossLog("VIP3奖励", 1);
                cm.gainItem(2340000, 5);//祝福卷轴
                cm.gainItem(5390013, 20);//白银VIP喇叭
                cm.gainItem(5064000, 2);//防爆卷轴
                cm.gainItemPeriod(5062000, 15,1);//神奇魔方
                cm.gainItemPeriod(5062002, 10,1);//高级神奇魔方
                cm.sendOk("领取成功,祝您游戏开心愉快。");
                cm.worldSpouseMessage(0x20, "玩家 " + cm.getChar().getName() + " 领取VIP3等级奖励,获得了专属礼包。");
            } else {
                cm.sendOk("当前送礼项目只可以领取一次,你已经领取过了!");
            }
            cm.dispose();

        } else if (selection == 6) { 
            cm.dispose();
            cm.sendOk("#e<#v3991051# #v3991050# #v3991038# #v3991044#-VIP等级送礼>#n\r\nVIP3奖励清单如下：\r\n#v5390013#x20 #v2340000#x5 #v5064000#x2 #v5062000#x15 #v5062002#x10");


        } else if (selection == 7) { 
           if  (cm.getVipLevel() < 4) {
                cm.sendOk("只有VIP4以上的玩家才可以领取奖励。");
            } else if (cm.getSpace(2) < 1 || cm.getSpace(5) < 4) {
                cm.sendOk("领取失败。\r\n\r\n背包消耗栏至少需要1个空位,特殊栏4个以上的空位才可以领取。");
            } else if (cm.getBossLog("VIP4奖励", 1) < 1) {
                cm.setBossLog("VIP4奖励", 1);
                cm.gainItem(2340000, 10);//祝福卷轴
                cm.gainItem(5390012, 20);//黄金VIP喇叭
                cm.gainItem(5064000, 3);//防爆卷轴
                cm.gainItemPeriod(5062000, 20,1);//神奇魔方
                cm.gainItemPeriod(5062002, 15,1);//高级神奇魔方
                cm.sendOk("领取成功,祝您游戏开心愉快。");
                cm.worldSpouseMessage(0x20, "玩家 " + cm.getChar().getName() + " 领取VIP4等级奖励,获得了专属礼包。");
            } else {
                cm.sendOk("当前送礼项目只可以领取一次,你已经领取过了!");
            }
            cm.dispose();

        } else if (selection == 8) { 
            cm.dispose();
            cm.sendOk("#e<#v3991051# #v3991050# #v3991038# #v3991044#-VIP等级送礼>#n\r\nVIP4奖励清单如下：\r\n#v5390012#x20 #v2340000#x10 #v5064000#x3 #v5062000#x20 #v5062002#x15");

        } else if (selection == 9) { 
            if  (cm.getVipLevel() < 5) {
                cm.sendOk("只有VIP5以上的玩家才可以领取奖励。");
            } else if (cm.getSpace(2) < 1 || cm.getSpace(5) < 4) {
                cm.sendOk("领取失败。\r\n\r\n背包消耗栏至少需要1个空位,特殊栏4个以上的空位才可以领取。");
            } else if (cm.getBossLog("VIP5奖励", 1) < 1) {
                cm.setBossLog("VIP5奖励", 1);
                cm.gainItem(2340000, 15);//祝福卷轴
                cm.gainItem(5390012, 50);//黄金VIP喇叭
                cm.gainItem(5064000, 5);//防爆卷轴
                cm.gainItemPeriod(5062500, 10,1);//大师神奇魔方
                cm.gainItemPeriod(5062006, 15,1);//白金神奇魔方
                cm.sendOk("领取成功,祝您游戏开心愉快。");
                cm.worldSpouseMessage(0x20, "玩家 " + cm.getChar().getName() + " 领取VIP5等级奖励,获得了专属礼包。");
            } else {
                cm.sendOk("当前送礼项目只可以领取一次,你已经领取过了!");
            }
            cm.dispose();

        } else if (selection == 10) { 
            cm.dispose();
            cm.sendOk("#e<#v3991051# #v3991050# #v3991038# #v3991044#-VIP等级送礼>#n\r\nVIP5奖励清单如下：\r\n#v5390012#x50 #v2340000#x15 #v5064000#x5 #v5062500#x10 #v5062006#x15");


        } else if (selection == 11) { //255等级奖励
            if  (cm.getVipLevel() < 6) {
                cm.sendOk("只有VIP6以上的玩家才可以领取奖励。");
            } else if (cm.getSpace(2) < 1 || cm.getSpace(5) < 4) {
                cm.sendOk("领取失败。\r\n\r\n背包消耗栏至少需要1个空位,特殊栏4个以上的空位才可以领取。");
            } else if (cm.getBossLog("VIP6奖励", 1) < 1) {
                cm.setBossLog("VIP6奖励", 1);
                cm.gainItem(2340000, 20);//祝福卷轴
                cm.gainItem(5390011, 20);//钻石VIP喇叭
                cm.gainItem(5064000, 7);//防爆卷轴
                cm.gainItemPeriod(5062500, 15,1);//大师神奇魔方
                cm.gainItemPeriod(5062006, 20,1);//白金神奇魔方
                cm.sendOk("领取成功,祝您游戏开心愉快。");
                cm.worldSpouseMessage(0x20, "玩家 " + cm.getChar().getName() + " 领取VIP6等级奖励,获得了专属礼包。");
            } else {
                cm.sendOk("当前送礼项目只可以领取一次,你已经领取过了!");
            }
            cm.dispose();

        } else if (selection == 12) { 
            cm.dispose();
            cm.sendOk("#e<#v3991051# #v3991050# #v3991038# #v3991044#-VIP等级送礼>#n\r\nVIP6奖励清单如下：\r\n#v5390011#x20 #v2340000#x20 #v5064000#x7 #v5062500#x15 #v5062006#x20");
        
        } else if (selection == 13) { //255等级奖励
            if  (cm.getVipLevel() < 7) {
                cm.sendOk("只有VIP7以上的玩家才可以领取奖励。");
            } else if (cm.getSpace(2) < 1 || cm.getSpace(5) < 4) {
                cm.sendOk("领取失败。\r\n\r\n背包消耗栏至少需要1个空位,特殊栏4个以上的空位才可以领取。");
            } else if (cm.getBossLog("VIP7奖励", 1) < 1) {
                cm.setBossLog("VIP7奖励", 1);
                cm.gainItem(2340000, 30);//祝福卷轴
                cm.gainItem(5390011, 50);//钻石VIP喇叭
                cm.gainItem(5064000, 10);//防爆卷轴
                cm.gainItemPeriod(5062500, 30,1);//大师神奇魔方
                cm.gainItemPeriod(5062006, 50,1);//白金神奇魔方
                cm.sendOk("领取成功,祝您游戏开心愉快。");
                cm.worldSpouseMessage(0x20, "玩家 " + cm.getChar().getName() + " 领取VIP7等级奖励,获得了专属礼包。");
            } else {
                cm.sendOk("当前送礼项目只可以领取一次,你已经领取过了!");
            }
            cm.dispose();

        } else if (selection == 14) { 
            cm.dispose();
            cm.sendOk("#e<#v3991051# #v3991050# #v3991038# #v3991044#-VIP等级送礼>#n\r\nVIP7奖励清单如下：\r\n#v5390011#x50 #v2340000#x30 #v5064000#x10 #v5062500#x30 #v5062006#x50");

        }
    }
}
