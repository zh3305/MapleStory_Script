/*
	Green Balloon - LudiPQ 5th stage NPC
**/

var exp = 3770;

function action(mode, type, selection) {
    var eim = cm.getEventInstance();
    var stage5status = eim.getProperty("stage5status");

    if (stage5status == null) {
        if (cm.isLeader()) { // Leader
            var stage5leader = eim.getProperty("stage5leader");
            if (stage5leader == "done") {

                if (cm.haveItem(4001022, 24)) { // Clear stage
		    cm.warpParty(922010600);
                    cm.sendNext("祝贺你，通过第5关卡，成功，进入第6关卡。");
                    cm.removeAll(4001022);
                    clear(5, eim, cm);
                    cm.givePartyExp(exp, eim.getPlayers());
                } else { // Not done yet
                    cm.sendNext("请确定背包是否有24张通行证。.");
                }
                cm.safeDispose();
            } else {
                cm.sendOk("欢迎来到第5关卡，从彩色管道中的盒子里收集通行证，收集完后把队员手上的通行证交给你，然后再和我谈话。");
                eim.setProperty("stage5leader", "done");
                cm.safeDispose();
            }
        } else { // Members
            cm.sendNext("欢迎来到第5关卡，从彩色管道中的盒子里收集通行证，收集完后把交合组队队长。");
            cm.safeDispose();
        }
    } else {
        cm.sendNext("祝贺你，通过第5关卡，成功，进入第6关。卡");
        cm.safeDispose();
    }
}

function clear(stage, eim, cm) {
    eim.setProperty("stage" + stage.toString() + "status", "clear");

    cm.showEffect(true, "quest/party/clear");
    cm.playSound(true, "Party1/Clear");
    cm.environmentChange(true, "gate");
}