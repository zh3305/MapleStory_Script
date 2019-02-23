/* 哈拉克 - 创建家族 */

var status = -1;
var sel;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0 && status == 1) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        if (status == 2) {
            cm.sendNext("你觉得还不是时候吗？如果你想创建家族，可以再来找我。");
            cm.dispose();
        }
        status--;
    }
    if (status == 0) {
        if (cm.getPlayerStat("GID") > 0) {
            cm.dispose();
            cm.openNpc(2010007, 1);
        } else {
            cm.sendNext("你……是因为对家族感兴趣，才会来找我的吗？");
        }
    } else if (status == 1) {
        cm.sendSimple("你想要干什么呢？快告诉我吧。\r\n\r\n#b#L0#请告诉我家族是什么#l\r\n#L1#应该如何创建家族？#l\r\n#L2#我想创建家族#l");
    } else if (status == 2) {
        sel = selection;
        if (selection == 0) {
            cm.sendNext("家族……你可以把它理解成一个小的组织。是拥有相同理想的人为了同一个目的而聚集在一起成立的组织。 但是家族是经过家族总部的正式登记，是经过认可的组织。");
        } else if (selection == 1) {
            cm.sendNext("要想创建家族，至少必须达到10级。");
        } else if (selection == 2) {
            if (cm.getPlayerStat("GID") > 0) {
                cm.sendOk("你已经拥有家族了，不能再创建家族.");
                cm.dispose();
            } else {
                cm.sendYesNo("哦！你是来注册家族的吗……要想注册家族，需要支付 #b" + cm.getCreateGuildCost() + " 金币#k。我相信你一定已经准备好了。好了～你想创建家族吗？");
            }
        }
    } else if (status == 3) {
        if (sel == 0) {
            cm.sendNextPrev("通过家族活动，可以获得很多优惠。比如，可以获得家族技能，以及家族专用物品。");
            cm.dispose();
        } else if (sel == 1) {
            cm.sendNextPrev("此外还需要 #b" + cm.getCreateGuildCost() + " 金币#k。这是注册家族所需的手续费。");
        } else if (sel == 2 && cm.getPlayerStat("GID") <= 0) {
            cm.genericGuildMessage(0x03);
            cm.dispose();
        }
    } else if (status == 4) {
        if (sel == 1) {
            cm.sendNextPrev("好了……如果你想注册家族，就来找我吧～\r\n啊！当然，如果你已经加入了其他家族，那就不行了！！");
        }
        cm.dispose();
    }
}