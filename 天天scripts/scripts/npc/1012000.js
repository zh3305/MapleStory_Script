/* 金银岛中巴 */

var status = 0;
var maps =  [100000000, 101000000, 102000000, 104000000, 105000000, 120000000];
var maps0 = [104000000, 103000000, 105000000, 102000000, 101000000, 120000000]; //射 手 村100000000
var maps1 = [104000000, 100000000, 105000000, 101000000, 103000000, 120000000]; //勇士部落102000000
var maps2 = [104000000, 100000000, 105000000, 102000000, 103000000, 120000000]; //魔法密林101000000
var maps3 = [104000000, 100000000, 105000000, 102000000, 101000000, 120000000]; //废弃都市103000000
var maps4 = [103000000, 100000000, 105000000, 102000000, 101000000, 120000000]; //明 珠 港104000000
var maps5 = [104000000, 100000000, 105000000, 102000000, 101000000, 103000000]; //诺特勒斯120000000

var cost = [1000, 1000, 1000, 1000, 1000, 1000];
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
        cm.sendNext("你好～！我是#p1012000#。你想快速安全地移动到其他村庄吗？那样的话，请乘坐为顾客提供最好服务的#b#p1012000##k吧。我们可以以很便宜的价格，将你送到想去的地方。");
    } else if (status == 1) {
        var selStr = "";
        if (cm.isBeginnerJob()) {
            selStr = "新手玩家可以获得#b90%#k的折扣。请选择目的地。#b";
        } else {
            selStr = "请选择你的目的地吧。按照目的地不同，车费也有所不同。#b";
        }
        if (cm.getMapId() == 100000000) {
            for (var i = 0; i < maps.length; i++) {
                selStr += "\r\n#L" + i + "##m" + maps0[i] + "# (" + (cm.isBeginnerJob() ? cost[i] / 10 : cost[i]) + " 金币)#l";
            }
        } else if (cm.getMapId() == 102000000) {
            for (var i = 0; i < maps.length; i++) {
                selStr += "\r\n#L" + i + "##m" + maps1[i] + "# (" + (cm.isBeginnerJob() ? cost[i] / 10 : cost[i]) + " 金币)#l";
            }
        } else if (cm.getMapId() == 101000000) {
            for (var i = 0; i < maps.length; i++) {
                selStr += "\r\n#L" + i + "##m" + maps2[i] + "# (" + (cm.isBeginnerJob() ? cost[i] / 10 : cost[i]) + " 金币)#l";
            }
        } else if (cm.getMapId() == 103000000) {
            for (var i = 0; i < maps.length; i++) {
                selStr += "\r\n#L" + i + "##m" + maps3[i] + "# (" + (cm.isBeginnerJob() ? cost[i] / 10 : cost[i]) + " 金币)#l";
            }
        } else if (cm.getMapId() == 104000000) {
            for (var i = 0; i < maps.length; i++) {
                selStr += "\r\n#L" + i + "##m" + maps4[i] + "# (" + (cm.isBeginnerJob() ? cost[i] / 10 : cost[i]) + " 金币)#l";
            }
        } else if (cm.getMapId() == 120000000) {
            for (var i = 0; i < maps.length; i++) {
                selStr += "\r\n#L" + i + "##m" + maps5[i] + "# (" + (cm.isBeginnerJob() ? cost[i] / 10 : cost[i]) + " 金币)#l";
            }
        }
        cm.sendSimple(selStr);
    } else if (status == 2) {
        sCost = (cm.isBeginnerJob() ? cost[selection] / 10 : cost[selection]);
        if (cm.getMapId() == 100000000) {
            cm.sendYesNo("看来这里的事情都已经处理完了啊。你真的要移动到 #b#m" + maps0[selection] + "##k 去吗？价格是 #b" + (sCost) + " 金币#k.");
            selectedMap = selection;
        } else if (cm.getMapId() == 102000000) {
            cm.sendYesNo("看来这里的事情都已经处理完了啊。你真的要移动到 #b#m" + maps1[selection] + "##k 去吗？价格是 #b" + (sCost) + " 金币#k.");
            selectedMap = selection;
        } else if (cm.getMapId() == 101000000) {
            cm.sendYesNo("看来这里的事情都已经处理完了啊。你真的要移动到 #b#m" + maps2[selection] + "##k 去吗？价格是 #b" + (sCost) + " 金币#k.");
            selectedMap = selection;
        } else if (cm.getMapId() == 103000000) {
            cm.sendYesNo("看来这里的事情都已经处理完了啊。你真的要移动到 #b#m" + maps3[selection] + "##k 去吗？价格是 #b" + (sCost) + " 金币#k.");
            selectedMap = selection;
        } else if (cm.getMapId() == 104000000) {
            cm.sendYesNo("看来这里的事情都已经处理完了啊。你真的要移动到 #b#m" + maps4[selection] + "##k 去吗？价格是 #b" + (sCost) + " 金币#k.");
            selectedMap = selection;
        } else if (cm.getMapId() == 120000000) {
            cm.sendYesNo("看来这里的事情都已经处理完了啊。你真的要移动到 #b#m" + maps5[selection] + "##k 去吗？价格是 #b" + (sCost) + " 金币#k.");
            selectedMap = selection;
        }
    } else if (status == 3) {
        if (cm.getMeso() < sCost) {
            cm.sendNext("你好象没有足够的金币，这样的话，我不能为你服务。");
        } else {
            cm.gainMeso( - sCost);
            if (cm.getMapId() == 100000000) {
                cm.warp(maps0[selectedMap], 0);
            } else if (cm.getMapId() == 102000000) {
                cm.warp(maps1[selectedMap], 0);
            } else if (cm.getMapId() == 101000000) {
                cm.warp(maps2[selectedMap], 0);
            } else if (cm.getMapId() == 103000000) {
                cm.warp(maps3[selectedMap], 0);
            } else if (cm.getMapId() == 104000000) {
                cm.warp(maps4[selectedMap], 0);
            } else if (cm.getMapId() == 120000000) {
                cm.warp(maps5[selectedMap], 0);
            }
        }
        cm.dispose();
    }
}
