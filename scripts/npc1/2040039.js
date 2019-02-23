/*
	Lime Balloon - LudiPQ 4th stage NPC
*/

var exp = 3360;

function action(mode, type, selection) {
    var eim = cm.getEventInstance();
    var stage4status = eim.getProperty("stage4status");
    if (stage4status == null) {
        if (cm.isLeader()) { // Leader
            var stage4leader = eim.getProperty("stage4leader");
            if (stage4leader == "done") {
                if (cm.getMap(922010401).getAllMonstersThreadsafe().size() == 0 && cm.getMap(922010402).getAllMonstersThreadsafe().size() == 0 && cm.getMap(922010403).getAllMonstersThreadsafe().size() == 0 && cm.getMap(922010404).getAllMonstersThreadsafe().size() == 0 && cm.getMap(922010405).getAllMonstersThreadsafe().size() == 0) { // Clear stage
		    cm.warpParty(922010600);
                    cm.sendNext("祝贺你，通过第2关卡，成功，进入第3关卡.");
                    cm.removeAll(4001022);
                    clear(4, eim, cm);
                    cm.givePartyExp(exp);
                } else { // Not done yet
                    cm.sendNext("没有收集到足够的通行证，请再确认。");
                }
                cm.safeDispose();
            } else {
                cm.sendOk("欢迎来到第2关卡，在次元洞内杀死黑暗中的怪物收集通行证。让你的队员收集所有的通行证在来与我谈话。");
                eim.setProperty("stage4leader", "done");
                cm.safeDispose();
            }
        } else { // Members
            cm.sendNext("欢迎进入第2关卡，请收集在黑暗地图中怪物的通行证。完成后交给组队队长。");
            cm.safeDispose();
        }
    } else {
        cm.sendNext("祝贺你，通过第2关卡，成功，进入第3关卡.");
        cm.safeDispose();
    }
}

function clear(stage, eim, cm) {
    eim.setProperty("stage" + stage.toString() + "status", "clear");

    cm.showEffect(true, "quest/party/clear");
    cm.playSound(true, "Party1/Clear");
    cm.environmentChange(true, "gate");
}