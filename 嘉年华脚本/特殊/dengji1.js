var status = 0;
var eff ="#fUI/UIWindow/Quest/icon6/7#";

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        var selStr = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#亲爱的#r#h ##k您好，请您选择您需要的功能:\r\n#b#L0#" + eff + "领取50级等级奖励#l\r\n#L1#" + eff + "领取100级等级奖励#l\r\n#L2#" + eff + "领取120级等级奖励#l\r\n#L3#" + eff + "领取140级等级奖励#l\r\n#L4#" + eff + "领取160级等级奖励#l\r\n#L5#" + eff + "领取180级等级奖励#l\r\n#L6#" + eff + "领取200级等级奖励#l\r\n#L7#" + eff + "领取250级等级奖励#l";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
if(cm.getPQLog("50级奖励",1) < 1 && (cm.getPlayer().getLevel() > 49 && cm.getPlayer().getLevel() < 255) && (cm.getSpace(5)>1 && cm.getSpace(1)>2)){
cm.gainItem(4032521,1);//
cm.gainItem(4001714,1);//
//cm.gainItem(1102039,1,10);//
//cm.gainItem(1082102,1,10);//
//cm.gainItem(1092064,1,10);//
//cm.gainItem(1072153,1,10);//
//cm.gainItem(1702224,1,10);//
//cm.gainItem(1022048,1,10);//
//cm.gainItem(1032024,1,10);
//cm.gainMeso(+200000);
//cm.gainItem(5072000,10);
cm.setPQLog("50级奖励");
cm.setPQLog("50级奖励",1);
cm.sendOk("你成功领取奖励");
cm.worldSpouseMessage(0x20,"" + cm.getChar().getName() + "玩家成功领取50级奖励.");
cm.dispose();
} else {
cm.sendOk("你的等级不满足条件，或没有足够的背包空间\r\n#b(装备栏2个空位以上).\r\n注:等级奖励只能领取一次.");
cm.dispose();
}
            break;
        case 1:
if(cm.getPQLog("100级奖励",1) < 1 && (cm.getPlayer().getLevel() > 99 && cm.getPlayer().getLevel() < 255) && (cm.getSpace(5)>1 && cm.getSpace(1)>4)){
	cm.gainItem(2615002, 1); //低级贝勒德卷轴
	cm.gainItem(2431098, 1); //低级贝勒德随机
	cm.gainItem(2431097, 1); //伤害皮肤箱子
	cm.gainItem(5062000, 2); //神奇魔方
cm.setPQLog("100级奖励");
cm.setPQLog("100级奖励",1);
cm.sendOk("你成功领取奖励");
cm.worldSpouseMessage(0x20,"" + cm.getChar().getName() + "玩家成功领取100级奖励.");
cm.dispose();
} else {
cm.sendOk("你的等级不满足条件，或没有足够的背包空间\r\n#b(特殊栏3个空位以上).\r\n注:等级奖励只能领取一次.");
cm.dispose();
}
            break;
        case 2:
if(cm.getPQLog("120级奖励",1) < 1 && (cm.getPlayer().getLevel() > 119 && cm.getPlayer().getLevel() < 255) && (cm.getSpace(5)>1 && cm.getSpace(1)>4)){
	cm.gainItem(5150040, 3); //皇家理发卷
	cm.gainItem(5152053, 3); //皇家整容卷
	cm.gainItem(2431741, 1); //抵用券3000
	cm.gainItem(5062000, 5); //神奇魔方
cm.setPQLog("120级奖励");
cm.setPQLog("120级奖励",1);
cm.sendOk("你成功领取奖励");
cm.worldSpouseMessage(0x20,"" + cm.getChar().getName() + "玩家成功领取120级奖励.");
cm.dispose();
} else {
cm.sendOk("你的等级不满足条件，或没有足够的背包空间\r\n#b(特殊栏2个空位以上).\r\n注:等级奖励只能领取一次.");
cm.dispose();
}
            break;
        case 3:
if(cm.getPQLog("140级奖励",1) < 1 && (cm.getPlayer().getLevel() > 139 && cm.getPlayer().getLevel() < 255) && (cm.getSpace(5)>1 && cm.getSpace(1)>5)){
	cm.gainItem(2431944, 1); //140级武器箱子
	cm.gainItem(2430226, 1); //乱斗翅膀
	cm.gainItem(5062000, 5);
	cm.gainItem(2049124, 10); //正向
	cm.gainItem(2049135, 2); //惊人正义20%2340000
	cm.gainItem(2431741, 1); //抵用券3000
	cm.gainItem(4310030, 200); //运动会币
	cm.gainItem(4000082, 30); //僵尸金牙
	cm.gainItem(4021012, 3); //强烈灵魂的净水
	cm.gainItem(4021011, 3); //春节灵魂的火花
	cm.gainItem(4021010, 3); //时间之石
cm.setPQLog("140级奖励");
cm.setPQLog("140级奖励",1);
cm.sendOk("你成功领取奖励");
cm.worldSpouseMessage(0x20,"" + cm.getChar().getName() + "玩家成功领取140级奖励.");
cm.dispose();
} else {
cm.sendOk("你的等级不满足条件，或没有足够的背包空间\r\n#b(所有栏留5个空位以上).\r\n注:等级奖励只能领取一次.");
cm.dispose();
}
            break;
        case 4:
if(cm.getPQLog("160级奖励",1) < 1 && (cm.getPlayer().getLevel() > 159 && cm.getPlayer().getLevel() < 255) && (cm.getSpace(5)>1 && cm.getSpace(1)>5)){
	cm.gainItem(2431741, 1); //抵用券3000
	cm.gainItem(4310129, 10); //冬季限量硬币
	cm.gainItem(5062002, 5); //高级魔方
	cm.gainItem(5064000, 5); //防爆
	cm.gainItem(2049116, 10); //强化
	cm.gainItem(2049135, 2); //惊人正义20%2340000
	cm.gainItem(4002000, 1); //蜗牛邮票，兑换点卷使用
	cm.gainItem(4033356, 5); //正义火种1
	cm.gainItem(4000124, 5); //战甲泡泡鱼内存卡
	cm.gainItem(4310030, 200); //运动会币
	cm.gainItem(4000082, 30); //僵尸金牙
	cm.gainItem(4021012, 3); //强烈灵魂的净水
	cm.gainItem(4021011, 3); //春节灵魂的火花
	cm.gainItem(4021010, 3); //时间之石
cm.setPQLog("160级奖励");
cm.setPQLog("160级奖励",1);
cm.sendOk("你成功领取奖励");
cm.worldSpouseMessage(0x20,"" + cm.getChar().getName() + "玩家成功领取160级奖励.");
cm.dispose();
} else {
cm.sendOk("你的等级不满足条件，或没有足够的背包空间\r\n#b(其他栏9个空位以上,设置栏4个空位以上,特殊栏1个空位以上).#b\r\n注:等级奖励只能领取一次.");
cm.dispose();
}
            break;
        case 5:
if(cm.getPQLog("180级奖励",1) < 1 && (cm.getPlayer().getLevel() > 179 && cm.getPlayer().getLevel() < 255) && (cm.getSpace(5)>1 && cm.getSpace(1)>7)){
	cm.gainItem(2431945, 1); //140防具箱子
	cm.gainItem(2431741, 1); //抵用券3000
	cm.gainItem(4310129, 10); //冬季限量硬币
	cm.gainItem(4000517, 1); //黄金鱼，提升15%
	cm.gainItem(4033924, 2); //神话耳环蓝图
	cm.gainItem(4033356, 5); //正义火种1
	cm.gainItem(4000124, 5); //战甲泡泡鱼内存卡
	cm.gainItem(4310030, 300); //运动会币
	cm.gainItem(4000082, 40); //僵尸金牙
	cm.gainItem(4021012, 3); //强烈灵魂的净水
	cm.gainItem(4021011, 3); //春节灵魂的火花
	cm.gainItem(4021010, 3); //时间之石
cm.setPQLog("180级奖励");
cm.setPQLog("180级奖励",1);
cm.sendOk("你成功领取奖励");
cm.worldSpouseMessage(0x20,"" + cm.getChar().getName() + "玩家成功领取180级奖励.");
cm.dispose();
} else {
cm.sendOk("你的等级不满足条件，或没有足够的背包空间\r\n#b(所有栏留7个空位以上).#b\r\n注:等级奖励只能领取一次.");
cm.dispose();
}
            break;
        case 6:
if(cm.getPQLog("200级奖励",1) < 1 && (cm.getPlayer().getLevel() > 199 && cm.getPlayer().getLevel() < 255) && (cm.getSpace(5)>1 && cm.getSpace(1)>7)){
	cm.gainItem(2431741, 1); //抵用券3000
	cm.gainItem(4310129, 10); //冬季限量硬币
	cm.gainItem(5062002, 5); //高级魔方
	cm.gainItem(5064000, 5); //防爆
	cm.gainItem(2049116, 10); //强化
	cm.gainItem(2049135, 2); //惊人正义20%2340000
	cm.gainItem(4002000, 1); //蜗牛邮票，兑换点卷使用
	cm.gainItem(4033356, 5); //正义火种1
	cm.gainItem(4000124, 5); //战甲泡泡鱼内存卡
	cm.gainItem(4310030, 200); //运动会币
	cm.gainItem(4000082, 30); //僵尸金牙
	cm.gainItem(4021012, 3); //强烈灵魂的净水
	cm.gainItem(4021011, 3); //春节灵魂的火花
	cm.gainItem(4021010, 3); //时间之石
cm.setPQLog("200级奖励");
cm.setPQLog("200级奖励",1);
cm.sendOk("你成功领取奖励");
cm.worldSpouseMessage(0x20,"" + cm.getChar().getName() + "玩家成功领取200级奖励.");
cm.dispose();
} else {
cm.sendOk("你的等级不满足条件，或没有足够的背包空间\r\n#b(所有栏留7个空位以上).#b\r\n注:等级奖励只能领取一次.");
cm.dispose();
}
            break;
        case 7:
if(cm.getPQLog("250级奖励",1) < 1 && (cm.getPlayer().getLevel() > 249 && cm.getPlayer().getLevel() < 255) && (cm.getSpace(5)>1 && cm.getSpace(1)>7)){
	cm.gainItem(5062000, 10);
	cm.gainItem(5062002, 10);
	cm.gainItem(5062500, 10);
	cm.gainItem(5064000, 10);
	cm.gainItem(2431995, 1); //惊人卷轴箱子
	cm.gainItem(2431725, 1); //热力四射蜡笔箱子
	cm.gainItem(4310036, 3000); //征服者
	cm.gainItem(4033356, 10); //正义火种1
	cm.gainItem(4000124, 10); //战甲泡泡鱼内存卡
	cm.gainItem(4000082, 50); //僵尸金牙
	cm.gainItem(4021012, 3); //强烈灵魂的净水
	cm.gainItem(4021011, 3); //春节灵魂的火花
	cm.gainItem(4021010, 3); //时间之石
	cm.gainItem(4310015, 2) //斗神证物
cm.setPQLog("250级奖励");
cm.setPQLog("250级奖励",1);
cm.sendOk("你成功领取奖励");
cm.worldSpouseMessage(0x20,"" + cm.getChar().getName() + "玩家成功领取250级奖励.");
cm.dispose();
} else {
cm.sendOk("你的等级不满足条件，或没有足够的背包空间\r\n#b(所有栏留7个空位以上).#b\r\n注:等级奖励只能领取一次.");
cm.dispose();
}
            break;
        }
    }
}