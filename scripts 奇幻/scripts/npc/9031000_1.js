var status = -1;

function start() {
    status = -1;
    action(1, 0, 0);
}

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
        if (cm.getPlayer().getProfessionLevel(92000000) > 0) {
            cm.sendSimple("你想去哪儿呢？\r\n\r\n#L0##b新手秘密农场#k (银色药草丛、紫色药草丛)#b#l\r\n#L1##b中级秘密农场#k (蓝色药草丛、褐色药草丛)#b#l\r\n#L2#高级秘密农场#k(绿色药草丛、金色药草丛)#b#l\r\n#L3#专家秘密农场#k(海蓝色药草丛、红色药草丛)#l#k");
        } else if (cm.getPlayer().getProfessionLevel(92010000) > 0) {
            cm.sendSimple("你想去哪儿呢？\r\n\r\n#L4##b新手秘密矿山#k(银色矿脉、紫色矿脉)#b#l\r\n#L5#中级秘密矿山#k(蓝色矿脉、褐色矿脉)#b#l\r\n#L6#高级秘密矿山#k(绿色矿脉、金色矿脉)#b#l\r\n#L7#专家秘密矿山#k(海蓝色矿脉、红色矿脉)#l#k");
        } else {
            cm.sendOk("只有学会采矿或采药的人才能使用。");
            cm.dispose();
        }
    } else if (status == 1) {
        switch (selection) {
        case 0:
            if (cm.getBossLog("新手农场") < 5) {
                cm.warp(910001003, 0);
                cm.setBossLog("新手农场");
                cm.playerMessage( - 9, "进入新手秘密农场。中途退出时无法重新进入。");
            } else {
                cm.playerMessage( - 9, "新手秘密农场每人每天限进5次，您今天的进入次数已满。");
            }
            break;
        case 1:
            if (cm.getBossLog("中级农场") < 5) {
                cm.warp(910001004, 0);
                cm.setBossLog("中级农场");
                cm.playerMessage( - 9, "进入中级者秘密秘农场。中途退出时无法重新进入。");
            } else {
                cm.playerMessage( - 9, "中级者秘密农场每人每天限进5次，您今天的进入次数已满。");
            }
            break;
        case 2:
            if (cm.getBossLog("高级农场") < 3) {
                cm.warp(910001007, 0);
                cm.setBossLog("高级农场");
                cm.playerMessage( - 9, "进入高级秘密农场。中途退出时无法重新进入。");
            } else {
                cm.playerMessage( - 9, "高级秘密农场每人每天限进3次，您今天的进入次数已满。");
            }
            break;
        case 3:
            if (cm.getBossLog("专家农场") < 3) {
                cm.warp(910001009, 0);
                cm.setBossLog("专家农场");
                cm.playerMessage( - 9, "进入专家秘密农场。中途退出时无法重新进入。");
            } else {
                cm.playerMessage( - 9, "专家秘密农场每人每天限进3次，您今天的进入次数已满。");
            }
            break;
        case 4:
            if (cm.getBossLog("新手矿山") < 5) {
                cm.warp(910001005, 0);
                cm.setBossLog("新手矿山");
                cm.playerMessage( - 9, "进入新手秘密矿山。中途退出时无法重新进入。");
            } else {
                cm.playerMessage( - 9, "新手秘密矿山每人每天限进5次，您今天的进入次数已满。");
            }
            break;
        case 5:
            if (cm.getBossLog("中级矿山") < 5) {
                cm.warp(910001006, 0);
                cm.setBossLog("中级矿山");
                cm.playerMessage( - 9, "进入中级秘密矿山。中途退出时无法重新进入。");
            } else {
                cm.playerMessage( - 9, "中级秘密矿山每人每天限进5次，您今天的进入次数已满。");
            }
            break;
        case 6:
            if (cm.getBossLog("高级矿山") < 3) {
                cm.warp(910001008, 0);
                cm.setBossLog("高级矿山");
                cm.playerMessage( - 9, "进入高级秘密矿山。中途退出时无法重新进入。");
            } else {
                cm.playerMessage( - 9, "高级秘密矿山每人每天限进3次，您今天的进入次数已满。");
            }
            break;
        case 7:
            if (cm.getBossLog("专家矿山") < 3) {
                cm.warp(910001010, 0);
                cm.setBossLog("专家矿山");
                cm.playerMessage( - 9, "进入专家秘密矿山。中途退出时无法重新进入。");
            } else {
                cm.playerMessage( - 9, "专家秘密矿山每人每天限进3次，您今天的进入次数已满。");
            }
            break;
        }
        cm.dispose();
    }
}