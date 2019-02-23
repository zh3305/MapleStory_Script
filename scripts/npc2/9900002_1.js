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
        var selStr = "您好，我可以送你去挑战副本的地方(每次20W):\r\n\r\n#b#L0#扎昆#l\r\n#L1#暗黑龙王#l\r\n#L2#闹钟#l\r\n#L3#狮子王#l\r\n#L4#品克缤#l\r\n#L5#蝙蝠怪#l\r\n#L6#冒险岛骑士团#l";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            if (cm.getMeso() >= 200000) {
                cm.gainMeso( - 200000);
                cm.warp(211042200);
                cm.sendOk("2线和4线挑战普通扎昆\r\n3线挑战进阶扎昆.请你注意!\r\n祝你游戏愉快!");
            } else {
                cm.sendOk("你没有20W金币,我不能传送你过去");
            }
            break;
        case 1:
            if (cm.getMeso() >= 200000) {
                cm.gainMeso( - 200000);
                cm.warp(240040600);
                cm.sendOk("你已经到达目的地.(挑战暗黑龙王需要到商场购买入场卷哦!)\r\n祝你游戏愉快!");
            } else {
                cm.sendOk("你没有20W金币,我不能传送你过去");
            }
            break;
        case 2:
            if (cm.getMeso() >= 200000) {
                cm.gainMeso( - 200000);
                cm.warp(220080000);
                cm.sendOk("你已经到达目的地.(挑战闹钟需要到杂货商店购买D片哦!)\r\n祝你游戏愉快!");
            } else {
                cm.sendOk("你没有20W金币,我不能传送你过去");
            }
            break;
        case 3:
            if (cm.getMeso() >= 200000) {
                cm.gainMeso( - 200000);
                cm.warp(211070000);
                cm.sendOk("你已经到达目的地.(狮子王爆高级装备哦!)\r\n祝你游戏愉快!");
            } else {
                cm.sendOk("你没有20W金币,我不能传送你过去");
            }
            break;
        case 4:
            if (cm.getMeso() >= 200000) {
                cm.gainMeso( - 200000);
                cm.warp(270050000);
                cm.sendOk("你已经到达目的地.(品克缤爆永恒装备和30勇士哦!)\r\n祝你游戏愉快!");
            } else {
                cm.sendOk("你没有20W金币,我不能传送你过去");
            }
            break;
        case 5:
            if (cm.getMeso() >= 200000) {
                cm.gainMeso( - 200000);
                cm.warp(105100100);
                cm.sendOk("你已经到达目的地.\r\n祝你游戏愉快!");
            } else {
                cm.sendOk("你没有20W金币,我不能传送你过去");
            }
            break;
        case 6:
            if (cm.getMeso() >= 200000) {
                cm.gainMeso( - 200000);
                cm.warp(271040000);
                cm.sendOk("你已经到达目的地.\r\n祝你游戏愉快!");
            } else {
                cm.sendOk("你没有20W金币,我不能传送你过去");
            }
            break;
        }
        cm.dispose();
    }
}