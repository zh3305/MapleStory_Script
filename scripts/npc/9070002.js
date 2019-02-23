var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.dispose();
        }
        status--;
    }
    if (status == 0) {
        cm.sendSimple("#e#r张飞翼德#n#k\r\n我是张飞翼德，奉大哥之命，在此用BP交换斗神证物。像我这么厉害的将军竟然要在这里做这种事情，真是不爽……（喃喃自语）\r\n 原来你现在的BP是#r" + cm.getPlayer().getBattlePoints() + "点啊！#b\r\n#L3##i4310015##t4310015# x 1 (500BP)#l\r\n#L4##i4310015##t4310015# x 4 (1500BP)#l\r\n#L5##i4310015##t4310015# x 7 (2500BP)#l");
    } else if (status == 1) {
        if (selection == 3) {
            if (cm.getPlayer().getBattlePoints() >= 500 && cm.canHold(4310015, 1)) {
                cm.getPlayer().setBattlePoints(cm.getPlayer().getBattlePoints() - 500);
                cm.gainItem(4310015, 1);
            } else {
                cm.sendOk("Check if you have the correct BP.");
            }
        } else if (selection == 4) {
            if (cm.getPlayer().getBattlePoints() >= 1500 && cm.canHold(4310015, 4)) {
                cm.getPlayer().setBattlePoints(cm.getPlayer().getBattlePoints() - 1500);
                cm.gainItem(4310015, 4);
            } else {
                cm.sendOk("Check if you have the correct BP.");
            }
        } else if (selection == 5) {
            if (cm.getPlayer().getBattlePoints() >= 2500 && cm.canHold(4310015, 7)) {
                cm.getPlayer().setBattlePoints(cm.getPlayer().getBattlePoints() - 2500);
                cm.gainItem(4310015, 7);
            } else {
                cm.sendOk("Check if you have the correct BP.");
            }
        }
        cm.dispose();
    }
}