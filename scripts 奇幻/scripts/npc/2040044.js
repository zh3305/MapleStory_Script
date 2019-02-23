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
            cm.sendNext("历尽千辛万苦，终于来到了最后一个关卡。这个关卡将测试你的实力。 打败怪物，给我 #r次元的钥匙#k 你就会通过这个关卡，祝你好运！");
            
            
            cm.dispose();
        } else {
            if (cm.haveItem(4001023)) {
                status = 0;
                cm.sendNext("恭喜你，你打败了大怪物！你想移动到奖励关卡吗？");
            } else {
                cm.sendNext("我没有看到 #b次元的钥匙#k，请打败怪物后给我。");
                cm.dispose();
            }
        }
    } else if (status == -1 && !cm.isLeader()) {
        cm.sendNext("请让你的队长和我说话，并带来怪物掉落的#b次元的钥匙#k，祝你好运！");
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