/*
	Hotel Receptionist - Sleepywood Hotel(105040400)
*/

var status = 0;
var regcost = 499;
var vipcost = 999;
var tempvar;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    }
    if (mode == 0 && status == 1) {
        cm.dispose();
        return;
    }
    if (mode == 0 && status == 2) {
        cm.sendNext("我们还可以为你提供其他更多服务。欢迎下次光临.");
        cm.dispose();
        return;
    }
    if (status == 0) {
        cm.sendNext("您好，这里是#m105000000#旅馆。我们酒店会竭诚为您提供最优质的服务。如果您打猎累了的话，可以在我们酒店休息。");
    }
    if (status == 1) {
        cm.sendSimple("我们旅馆有2种房间。请选择您想使用哪种服务。\r\n#b#L0#普通桑拿房 (1次" + regcost + "金币)#l\r\n#L1#高级桑拿房 (1次" + vipcost + "金币)#l");
    } else if (status == 2) {
        tempvar = selection;
        if (tempvar == 0) {
            cm.sendYesNo("你选了普通桑拿房。你可以更快恢复生命值和魔法力，而且也可以购买多种物品。你要使用吗？");
        }
        if (tempvar == 1) {
            cm.sendYesNo("你选了高级桑拿房。比普通桑拿房更快恢复生命值和魔法力，而且在里面可以购买特别的物品，你要使用吗？");
        }
    } else if (status == 3) {
        if (tempvar == 0) {
            if (cm.getMeso() >= regcost) {
                cm.warp(105000011);
                cm.gainMeso( - regcost);
            } else {
                cm.sendNext("I'm sorry. It looks like you don't have enough mesos. It will cost you at least " + regcost + "mesos to stay at our hotel.");
            }
        }
        if (tempvar == 1) {
            if (cm.getMeso() >= vipcost) {
                cm.warp(105000012);
                cm.gainMeso( - vipcost);
            } else {
                cm.sendNext("I'm sorry. It looks like you don't have enough mesos. It will cost you at least " + regcost + "mesos to stay at our hotel.");
            }
        }
        cm.dispose();
    }
}