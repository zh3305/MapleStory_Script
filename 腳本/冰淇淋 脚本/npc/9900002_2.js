/* 点卷商店 */

var status = 0;

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
        var selStr = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#亲爱的#r#h ##k您好，请您选择您需要的功能:\r\n\r\n您当前点卷为:#r " + cm.getPlayer().getCSPoints(1) + " #k点\r\n#b#L0#双倍道具(增加双倍经验 练级飞快Go！)#l\r\n#L7#道具卷轴(魔方、邮票、喇叭、卷轴)#l\r\n#L8#玩具商店(超多国服绝版玩具 火爆销售中!!!)#l\r\n#L4#绝版点装1号店((随机更新,超多限量款服饰)[4.25更新])#l\r\n#L14#绝版点装2号店((随机更新,超多限量款服饰)[2.8更新])#l\r\n#L5#各种椅子(绝对保证和官方最新的一致/快来抢购把!!)#l\r\n#L6#各种喇叭(尊享你土豪的身份时刻来啦 刷喇叭吧！)\r\n#L9#炫酷骑宠(超炫骑宠 价格已降到底！)#l";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            cm.dispose();
            cm.openNpc(9900002, 11); //双倍道具
            break;
        case 4:
            cm.dispose();
            cm.openNpc(9900002, 6); //绝版点装
            break;
        case 5:
            cm.dispose();
            cm.openNpc(9900002, 4); //各种椅子
            break;
        case 6:
            cm.dispose();
            cm.openNpc(9900002, 9); //各种喇叭
            break;
        case 7:
            cm.dispose();
            cm.openNpc(9900002, 10); //洗点卷轴
            break;
        case 8:
            cm.dispose();
            cm.openNpc(9900002, 24); //玩具商店
            break;
        case 9:
            cm.dispose();
            cm.openNpc(9900002, 25); //骑宠商店
            break;
	case 10:
            cm.dispose();
            cm.openNpc(9900002, 100); //破攻石头
            break;
	case 11:
            cm.dispose();
            cm.openNpc(9900002, 1301); //装备
            break;
	case 12:
            cm.dispose();
            cm.openNpc(9900002, 1302); //装备
            break;
	case 13:
            cm.dispose();
            cm.openNpc(9900002, 1303); //装备
            break;
	case 14:
            cm.dispose();
            cm.openNpc(9900002, 28); //装备
            break;
        }
    }
}