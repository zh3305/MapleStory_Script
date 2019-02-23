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
        var selStr = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#亲爱的#r#h ##k您好，想兑换什么:\r\n#b#L0##v4000004#绿液球x100 兑换 #v5062000##l\r\n#L1##v4000273#陈年老骨头x100 兑换 #v5062000##l\r\n#L2##v4009121#忘却之头盔x100 兑换 #v5062000##l\r\n#L3##v4000004#绿液球x300 兑换 #v5062002##l\r\n#L4##v4000273#陈年老骨头x300 兑换 #v5062002##l\r\n#L5##v4009121#忘却之头盔x300 兑换 #v5062002##l";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            if (cm.getMeso() >= 500000 && cm.haveItem(4000004,100)) {
                cm.gainMeso( - 500000);
		cm.gainItem(4000004, -100);
                cm.gainItem(5062000,1);
                cm.sendOk("兑换成功\r\n祝你游戏愉快!");
            } else {
                cm.sendOk("你没有50W金币和绿液球x100,我不能与你兑换");
            }
            break;
        case 1:
            if (cm.getMeso() >= 500000 && cm.haveItem(4000273,100)) {
                cm.gainMeso( - 500000);
		cm.gainItem(4000273, -100);
                cm.gainItem(5062000,1);
                cm.sendOk("兑换成功\r\n祝你游戏愉快!");
            } else {
                cm.sendOk("你没有50W金币和陈年老骨头x100,我不能与你兑换");
            }
            break;
        case 2:
            if (cm.getMeso() >= 500000 && cm.haveItem(4009121,100)) {
                cm.gainMeso( - 500000);
		cm.gainItem(4009121, -100);
                cm.gainItem(5062000,1);
                cm.sendOk("兑换成功\r\n祝你游戏愉快!");
            } else {
                cm.sendOk("你没有50W金币和忘却之头盔x100,我不能与你兑换");
            }
            break;
        case 3:
            if (cm.getMeso() >= 500000 && cm.haveItem(4000004,300)) {
                cm.gainMeso( - 500000);
		cm.gainItem(4000004, -300);
                cm.gainItem(5062002,1);
                cm.sendOk("兑换成功\r\n祝你游戏愉快!");
            } else {
                cm.sendOk("你没有50W金币和绿液球x300,我不能与你兑换");
            }
            break;
        case 4:
            if (cm.getMeso() >= 500000 && cm.haveItem(4000273,300)) {
                cm.gainMeso( - 500000);
		cm.gainItem(4000273, -300);
                cm.gainItem(5062002,1);
                cm.sendOk("兑换成功\r\n祝你游戏愉快!");
            } else {
                cm.sendOk("你没有50W金币和陈年老骨头x300,我不能与你兑换");
            }
            break;
        case 5:
            if (cm.getMeso() >= 500000 && cm.haveItem(4009121,300)) {
                cm.gainMeso( - 500000);
		cm.gainItem(4009121, -300);
                cm.gainItem(5062002,1);
                cm.sendOk("兑换成功\r\n祝你游戏愉快!");
            } else {
                cm.sendOk("你没有50W金币和忘却之头盔x300,我不能与你兑换");
            }
            break;
        }
        cm.dispose();
    }
}