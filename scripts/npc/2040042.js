/*
	Sky-Blue Balloon - LudiPQ 7th stage NPC
**/

var status;
var exp = 4620;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    var eim = cm.getEventInstance();
    var stage7status = eim.getProperty("stage7status");

    if (stage7status == null) {
        if (cm.isLeader()) { // Leader
            var stage7leader = eim.getProperty("stage7leader");
            if (stage7leader == "done") {

                if (cm.getMap().getAllMonstersThreadsafe().size() == 0) { // Clear stage
		    cm.warpParty(922010800);
                    cm.sendNext("祝贺你，通过第4关卡，成功，进入第5关卡。");
                    cm.removeAll(4001022);
                    clear(7, eim, cm);
                    cm.givePartyExp(exp, eim.getPlayers());
                    cm.dispose();
                } else { // Not done yet
                    cm.sendNext("请确认你杀死所有的怪物吗.");
                }
                cm.dispose();
            } else {
                cm.sendOk("欢迎来到第4关卡，杀死所有的怪物，把成员收集到的通行证交给你，然后在和我谈话。");
                eim.setProperty("stage7leader", "done");
                cm.dispose();
            }
        } else { // Members
            cm.sendNext("欢迎来到第4阶段，收集杀死怪物并收集所有通行证，交给组队队长。");
            cm.dispose();
        }
    } else {
        cm.sendNext("祝贺你，通过第4关卡，成功，进入第5关卡。");
        cm.dispose();
    }
}

function clear(stage, eim, cm) {
    eim.setProperty("stage" + stage.toString() + "status", "clear");

    cm.showEffect(true, "quest/party/clear");
    cm.playSound(true, "Party1/Clear");
    cm.environmentChange(true, "gate");
}