/*伏特专柜*/
var status = 0;
var eff = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";

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
        var selStr = "我这里是有一些简单的物品出售哟\r\n";
        selStr += "#L0#" + eff + "#r杂货店(药/花生/Boss物品/放大镜/潜能卷/灵魂盾)#l\r\n";
        selStr += "#L1#" + eff + "#b双弩装备店#l";
        selStr += "#L2#" + eff + "双刀装备店#l";
        selStr += "#L3#" + eff + "火炮装备店#l\r\n";
        selStr += "#L4#" + eff + "狂龙装备店#l";
        selStr += "#L5#" + eff + "天使装备店#l";
        selStr += "#L6#" + eff + "尖兵装备店#l\r\n";
        selStr += "#L7#" + eff + "夜光装备店#l";
        selStr += "#L8#" + eff + "低级副手店#l";
        selStr += "#L10#" + eff + "其他商店#l\r\n";
        selStr += "#L9#" + eff + "#g冒险家低级装备#l";
        selStr += "#L11#" + eff + "#g各职业装备(70-110)(包括-幻影武器)#l\r\n";

        cm.sendSimpleS(selStr, 2);
    } else if (status == 1) {
        switch (selection) {
        case 10:
            cm.dispose();
            cm.openNpc(1012123,"qitashangdian");
            break;
        case 0:
            cm.dispose();
            cm.openShop(1012123);
            break;
        case 1:
            cm.dispose();
            cm.openShop(1033001);
            break;
        case 2:
            cm.dispose();
            cm.openShop(1012125);
            break;
        case 3:
            cm.dispose();
            cm.openShop(1012124);
            break;
        case 4:
            cm.dispose();
            cm.openShop(1051001);
            break;
        case 5:
            cm.dispose();
            cm.openShop(1012132);
            break;
        case 6:
            cm.dispose();
            cm.openShop(1011101);
            break;
        case 7:
            cm.dispose();
            cm.openShop(1011101);
            break;
        case 8:
            cm.dispose();
            cm.openShop(1011101);
            break;        
        case 9:
            cm.dispose();
            cm.openShop(1051000);
            break;
        case 11:
            cm.dispose();
            cm.openNpc(1013102,"youxishangdian1");
            break;
        case 8:
            cm.dispose();
            //cm.openShop(1011101);
            cm.openShop(9310072);
            break;
        }
    }
}
