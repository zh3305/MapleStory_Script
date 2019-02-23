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
    if (cm.getPlayer().getLevel() < 0 && cm.getPlayer().getJob() != 200) {
	cm.warp(50000);
        cm.sendOk("等级达到 8 级才能使用此功能.请你在这里升到 8 级吧.\r\n8 级前因为职业问题可能经验不是200倍.\r\n8 级后经验将会恢复当前倍数.8 级后可以在我这里领取新人奖励哦!\r\n最后祝你游戏愉快!");
        cm.dispose();
        return;
    }
        if (!cm.isQuestFinished(29003) && !cm.haveItem(1142184, 1, true, true)) {
            if (!cm.haveItem(1002419, 1, true, true) && cm.canHold(1002419, 1)) {
                cm.gainItem(1002419, 1); //枫叶帽
            }
            if (cm.canHold(1142184, 1)) {
                cm.gainItem(1142184, 1); //荣誉冒险家
                cm.gainMeso(200000); //yo shit who the hell added this
                cm.forceCompleteQuest(29003);
                cm.sendOk("欢迎光临，作为新玩家，系统特送你几样礼物！希望您在游戏中玩的愉快！");
            } else {
                cm.sendOk("请将背包留一定的空间.");
            }
            cm.dispose();
            return;
        }
        var selStr = "您好，请您选择您需要的功能:\r\n\r\n#b#L0#打开商店(出售药水/装备/召唤物品/等...)#l\r\n#L1#打开万能NPC(传送功能/等...)#l\r\n#L3#打开转职NPC#l\r\n#L2#整理外观(发型/脸型/发色/肤色/等...)#l\r\n#L4#副本传送#l";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            cm.dispose();
	    cm.openNpc(1012121);
            break;
        case 1:
            cm.dispose();
            cm.openNpc(9270035);
            break;
        case 2:
            cm.dispose();
            cm.warp(100000104);
            break;
        case 3:
            cm.dispose();
            cm.openNpc(9300011);
            break;
        case 4:
            cm.dispose();
	    cm.openNpc(9900002,1);
            break;
        }
    }
}