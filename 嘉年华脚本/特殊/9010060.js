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
        var selStr = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#亲爱的#r#h ##k您好!#k)\r\n#b#L0#杂货商店#l    #L1#RED 商店#l    #L2#11周年装备#l\r\n#b#L3#BOSS币店#l    #b#L4#漩涡商店#l     #b#L5#副手装备#l\r\n#b#L6#真棒图腾#l    #L7#外星人币#l     #L8#低级武器#l\r\n#b#L9#组队点数#l    #L10#喇叭专卖#l     #L11#结婚礼服#l ";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0://杂货商店
            cm.dispose();
            cm.openShop(61);
            break;
        case 1://RED商店
            cm.dispose();
            cm.openShop(69);
            break;
        case 2://11周年装备
            cm.dispose();
            cm.openShop(9071001);
            break;
        case 3://BOSS币店
            cm.dispose();
            cm.openShop(68);
            break;
        case 4://征服币店
            cm.dispose();
            cm.openShop(66);
            break;
        case 5://副手装备
            cm.dispose();
            cm.openShop(63);
            break;
        case 6://漩涡装备
            cm.dispose();
            cm.openShop(74);
            break;
        case 7://外星人币
            cm.dispose();
            cm.openShop(322);
            break;
        case 8://低级武器
            cm.dispose();
            cm.openShop(73);
            break;
        case 9://组队点数
            cm.dispose();
            cm.openShop(72);
            break;
        case 10://金币魔方
            cm.dispose();
            cm.openShop(328);
            break;
        case 11://西服婚纱
            cm.dispose();
            cm.openShop(32);
            break;

        }
    }
}