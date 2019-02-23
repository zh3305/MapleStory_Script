/* global cm */

var status = -1;

function action(mode, type, selection) {
    if (mode === 1) {
        status++;
    } else {
        cm.dispose();
        return;
    }

    if (status === 0) {
        cm.sendSimple("等等!! 要移動到哪個炎魔的祭壇呢?#b\r\n#b#L0#容易炎魔#l\r\n#L1# 一般炎魔#l\r\n#L2# 渾沌炎魔#l");
    } else if (status === 1) {
        var level = cm.getPlayer().getLevel();
        if (selection === 0) {
            if (level < 50) {
                cm.sendNext("你的力量好像不夠啊, 等你等級50再來吧。");
            } else if (!cm.haveItem(4001796)) {
                cm.playerMessage("你沒有需要獻給容易炎魔的祭品，因此無法進行移動。");
            } else {
                cm.playPortalSE();
                cm.warp(211042402, "west00");
            }
        } else if (selection === 1) {
            if (level < 90) {
                cm.sendNext("你的力量好像不夠啊, 等你等級90再來吧。");
            } else if (!cm.haveItem(4001017)) {
                cm.playerMessage("你沒有需要獻給一般炎魔的祭品，因此無法進行移動。");
            } else {
                cm.playPortalSE();
                cm.warp(211042400, "west00");
            }
        } else if (selection === 2) {
            if (level < 90) {
                cm.sendNext("你的力量好像不夠啊, 等你等級90再來吧。");
            } else if (!cm.haveItem(4001017)) {
                cm.playerMessage("你沒有需要獻給渾沌炎魔的祭品，因此無法進行移動。");
            } else {
                cm.playPortalSE();
                cm.warp(211042401, "west00");
            }
        }
        cm.dispose();
    }
}