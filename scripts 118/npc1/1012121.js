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
        var selStr = "您好，请您选择您需要的功能:\r\n\r\n#b#L0#打开双弩商店#l\r\n#L2#打开杂货店(技能册/挑战物品/宠物食品/恶魔盾牌等.)#l\r\n#L3#打开杂货店2(药水/花生/等..)#l\r\n#L10#打开幻影商店#l\r\n#L4#打开火炮手装备店#l\r\n#L5#打开双刀装备店#l\r\n#L7#打开飞标专卖店#l\r\n#L8#打开骑宠商店#l\r\n#L6#我要购买其它职业装备#l"; //#L9#狮子王道具兑换#r[New]#k#l\r\n
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
	    cm.openShop(1033001);
            break;
        case 2:
            cm.dispose();
            cm.openShop(1012123);
            break;
        case 3:
            cm.dispose();
            cm.openShop(9090000);
            break;
        case 4:
            cm.dispose();
            cm.openShop(1012124);
            break;
        case 5:
            cm.dispose();
            cm.openShop(1012125);
            break;
        case 6:
            cm.dispose();
            cm.sendOk("其它职业的装备请到各个城市的装备商店购买.\r\n高级装备可以靠刷怪/BOSS/抽奖/活动/获得...\r\n祝你游戏愉快!如果有好的建议请联系管理员.");
            break;
        case 7:
            cm.dispose();
            cm.openShop(1033003);
            break;
        case 8:
            cm.dispose();
            cm.openShop(2060003);
            break;
        case 9:
            cm.dispose();
            cm.openShop(2161010);
            break;
        case 10:
            cm.dispose();
            cm.openShop(1400001);
            break;
        }
    }
}