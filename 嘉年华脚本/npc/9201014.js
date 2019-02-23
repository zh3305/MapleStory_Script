var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        cm.dispose();
        return;
    }
    if (status == 0) {
        cm.sendSimple("看你一脸惆怅，找我有什么事？#b\r\n\r\n#L0# 我想离婚。#l\r\n#L2# 取下结婚戒指#l\r\n#L1# 没有…没事啊。#k#l");
    } else if (status == 1) {
        if (selection == 1) {
            cm.dispose();
            return;
        } else if (selection == 0) {
            cm.sendYesNo("离婚? 你确定么? 你想要离婚? 这可不是开玩笑的！");
        } else {
            var selStr = "取下戒指,你的戒指...";
            var found = false;
            for (var i = 1112300; i < 1112312; i++) {
                if (cm.haveItem(i)) {
                    found = true;
                    selStr += "\r\n#L" + i + "##v" + i + "##t" + i + "##l";
                }
            }
            for (var i = 2240004; i < 2240016; i++) {
                if (cm.haveItem(i)) {
                    found = true;
                    selStr += "\r\n#L" + i + "##v" + i + "##t" + i + "##l";
                }
            }
            if (!found) {
                cm.sendOk("你并没有戒指.");
                cm.dispose();
            } else {
                cm.sendSimple(selStr);
            }
        }
    } else if (status == 2) {
        if (selection == -1) {
            cm.handleDivorce();
        } else {
            if (selection >= 1112300 && selection < 1112312) {
                cm.gainItem(selection, -1);
                cm.sendOk("Your equip ring has been removed.");
            } else if (selection >= 2240004 && selection < 2240016) {
                cm.gainItem(selection, -1);
                cm.sendOk("移除订婚戒指.");
            }
        }
        cm.dispose();
    }
}
