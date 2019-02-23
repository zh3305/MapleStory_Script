/* 金银岛中巴 */

var status = 0;
var maps = Array(100000000, 101000000, 102000000, 103000000, 104000000, 105000000, 120000100);
var cost = Array(1000, 1000, 1000, 1000, 1000, 1000, 1000);
var selectedMap = -1;
var sCost;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 1 && mode == 0) {
        cm.dispose();
        return;
    } else if (status >= 2 && mode == 0) {
        cm.sendNext("这里有很多好玩的东西。如果你想到其他村子去，欢迎随时来乘坐出租车～");
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        cm.sendNext("你好～！我是#p" + cm.getNpc() + "#。你想快速安全地移动到其他村庄吗？那样的话，请乘坐为顾客提供最好服务的#b#p" + cm.getNpc() + "##k吧。我们可以以很便宜的价格，将你送到想去的地方。");
    } else if (status == 1) {
        var selStr = "";
        if (cm.isBeginnerJob()) {
            selStr = "新手玩家可以获得#b90%#k的折扣。请选择目的地。#b";
        } else {
            selStr = "请选择你的目的地吧。按照目的地不同，车费也有所不同。#b";
        }
        for (var i = 0; i < maps.length; i++) {
            if (cm.getMapId() != maps[i]) {
                selStr += "\r\n#L" + i + "##m" + maps[i] + "# (" + (cm.isBeginnerJob() ? cost[i] / 10 : cost[i]) + " 金币)#l";
            }
        }
        cm.sendSimple(selStr);
    } else if (status == 2) {
        sCost = (cm.isBeginnerJob() ? cost[selection] / 10 : cost[selection]);
        cm.sendYesNo("看来这里的事情都已经处理完了啊。你真的要移动到 #b#m" + maps[selection] + "##k 去吗？价格是 #b" + (sCost) + " 金币#k.");
        selectedMap = selection;
    } else if (status == 3) {
        if (cm.getMeso() < sCost) {
            cm.sendNext("你好象没有足够的金币，这样的话，我不能为你服务。");
        } else {
            cm.gainMeso( - sCost);
            cm.warp(maps[selectedMap], 0);
        }
        cm.dispose();
    }
}