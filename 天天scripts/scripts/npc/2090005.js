/*
	Hak - Cabin <To Mu Lung>(200000141) / Mu Lung Temple(250000100) / Herb Town(251000000)
*/
var menu = new Array("武陵", "天空之城", "百草堂", "武陵");
var cost = new Array(6000, 6000, 1500, 1500);
var hak;
var display = "";
var btwmsg;
var method;

function start() {
    status = -1;
    hak = cm.getEventManager("Hak");
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0 && status == 0) {
        cm.dispose();
        return;
    } else if (mode == 0) {
        cm.sendNext("改变想法随时跟我搭话吧。");
        cm.dispose();
        return;
    }
    status++;
    if (status == 0) {
        for (var i = 0; i < menu.length; i++) {
            if (cm.getMapId() == 200000141 && i < 1) {
                display += "\r\n#L" + i + "##b" + menu[i] + "(" + cost[i] + " 金币)#k";
            } else if (cm.getMapId() == 250000100 && i > 0 && i < 3) {
                display += "\r\n#L" + i + "##b" + menu[i] + "(" + cost[i] + " 金币)#k";
            }
        }
        if (cm.getMapId() == 200000141 || cm.getMapId() == 251000000) {
            btwmsg = "#b天空之城#k 到 #b武陵#k";
        } else if (cm.getMapId() == 250000100) {
            btwmsg = "#b武陵#k 到 #b天空之城#k";
        }
        if (cm.getMapId() == 200000141 && (hak == null || hak.getProperty("isRiding").equals("true"))) {
            cm.sendNext("Someone else is on the way to Mu Lung right now. Talk to me a little bit more.");
            cm.dispose();
        }
        if (cm.getMapId() == 251000000) {
            cm.sendYesNo("怎么样？我从 " + btwmsg + " 再到现在。我的速度很快的吧，如果你想返回 #b" + menu[3] + "#k ，那么我们就立刻出发，不过还是得给我一些辛苦钱，价格是 #b" + cost[3] + " 金币#k。");
        } else {
            cm.sendSimple("如果想从 " + btwmsg + " 去的话。给我些辛苦钱就送你。我送你比起你走着去快多了。怎么样？\r\n" + display);
        }
    } else if (status == 1) {
        if (selection == 2) {
            cm.sendYesNo("你确定要去 #b" + menu[2] + "#k ？ 那么你要付给我 #b" + cost[2] + " 金币#k。");
        } else {
            if (cm.getMeso() < cost[selection]) {
                cm.sendNext("你确定你有足够的金币？");
                cm.dispose();
            } else {
                if (cm.getMapId() == 251000000) {
                    cm.gainMeso( - cost[3]);
                    cm.warp(250000100);
                    cm.dispose();
                } else {
                    if (hak != null && hak.getProperty("isRiding").equals("false")) {
                        cm.gainMeso( - cost[selection]);
                        hak.newInstance("Hak");
                        hak.setProperty("myRide", selection);
                        hak.getInstance("Hak").registerPlayer(cm.getChar());
                        cm.dispose();
                    } else {
                        cm.sendNext("Someone else is on the way to Orbis right now. Talk to me a little bit more.");
                        cm.dispose();
                    }
                }
            }
        }
    } else if (status == 2) {
        if (cm.getMeso() < cost[2]) {
            cm.sendNext("你确定你有足够的金币？");
            cm.dispose();
        } else {
            cm.gainMeso( - cost[2]);
            cm.warp(251000000);
            cm.dispose();
        }
    }
}