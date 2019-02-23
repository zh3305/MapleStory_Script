/*
 Violet Balloon - LudiPQ Crack on the Wall NPC
 **/

var status;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == -1 && cm.isLeader()) {
        var eim = cm.getEventInstance();

        if (eim.getProperty("crackLeaderPreamble") == null) {
            eim.setProperty("crackLeaderPreamble", "done");
            cm.sendNext("这里是最后一个阶段; 消灭#b阿丽莎乐#k获得#b次元的钥匙#k,就能通过考验,祝你好运!!");
            cm.dispose();
        } else {
            if (cm.haveItem(4001023)) {
                status = 0;
                cm.sendNext("恭喜你打败了#b阿丽莎乐#k.现在就进入奖励阶段么?");
            } else {
                cm.sendNext("请击败#b阿丽莎乐#k,并把#b次元的钥匙#k交给我.");
                cm.dispose();
            }
        }
    } else if (status == -1 && !cm.isLeader()) {
        cm.sendNext("请击败#b阿丽莎乐#k,并把#b次元的钥匙#k交给组队长让他带给我!.!");
        cm.dispose();
    } else if (status == 0 && cm.isLeader()) {
        var eim = cm.getEventInstance();
        clear(9, eim, cm);
        cm.gainItem(4001023, -1);
        var players = eim.getPlayers();
        cm.givePartyExp_PQ(70, 1.0, players);
        eim.setProperty("cleared", "true"); //set determine
        eim.restartEventTimer(60000);
        var bonusmap = cm.getMap(922011100);
        for (var i = 0; i < players.size(); i++) {
            players.get(i).changeMap(bonusmap, bonusmap.getPortal(0));
        }
        cm.dispose();
    } else {
        cm.dispose();
    }
}

function clear(stage, eim) {
    eim.setProperty("stage" + stage.toString() + "status", "clear");
    cm.showEffect(true, "quest/party/clear");
    cm.playSound(true, "Party1/Clear");
}
