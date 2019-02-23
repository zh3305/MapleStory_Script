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

		if (cm.getMap().getAllMonster().size() == 0) { // Clear stage
		    cm.sendNext("恭喜你们通过第4阶段,赶快进入下一阶段吧。");
		    cm.removeAll(4001022);
		    clear(7, eim, cm);
		    cm.givePartyExp(exp, eim.getPlayers());
		    cm.dispose();
		} else { // Not done yet
		    cm.sendNext("消灭地图上所有的怪物才可以通关,赶快和你的队友抓紧时间吧。");
		}
		cm.dispose();
	    } else {
		cm.sendOk("欢迎来到第4阶段,请和你的队友消灭地图上所有的怪物并且收集4张通行证在来和我说话吧。");
		eim.setProperty("stage7leader","done");
		cm.dispose();
	    }
	} else { // Members
	    cm.sendNext("欢迎来到第4阶段,消灭地图上所有的怪物并且收集4张通行证后,交给你们的队长让他来和我说话吧。");
	    cm.dispose();
	}
    } else {
	cm.sendNext("恭喜你们通过第4阶段,赶快进入下一阶段吧。");
	cm.dispose();
    }
}

function clear(stage, eim, cm) {
    eim.setProperty("stage" + stage.toString() + "status","clear");
    
    cm.showEffect(true, "quest/party/clear");
    cm.playSound(true, "Party1/Clear");
    cm.environmentChange(true, "gate");
}
