var exp = 3360;

function action(mode, type, selection) {
    var eim = cm.getEventInstance();
    var stage4status = eim.getProperty("stage4status");

    if (stage4status == null) {
	if (cm.isLeader()) { // Leader
	    var stage4leader = eim.getProperty("stage4leader");
	    if (stage4leader == "done") {

		if (cm.getMap(922010401).getAllMonster().size() == 0 && cm.getMap(922010402).getAllMonster().size() == 0 && cm.getMap(922010403).getAllMonster().size() == 0 && cm.getMap(922010404).getAllMonster().size() == 0 && cm.getMap(922010405).getAllMonster().size() == 0) { // Clear stage
		    cm.sendNext("恭喜你们完成第2阶段。时间已经不多了,赶快进入下一阶段吧。");
		    cm.removeAll(4001022);
		    clear(4,eim,cm);
		    cm.givePartyExp(exp);
		} else { // Not done yet
		    cm.sendNext("次元洞内的怪物没有清理完毕，赶快抓紧时间。");
		}
		cm.safeDispose();
	    } else {
		cm.sendOk("欢迎来到第2阶段，让你的队员在次元洞内杀死所有的怪物并且收集14张通行证在来与我谈话。");
		eim.setProperty("stage4leader","done");
		cm.safeDispose();
	    }
	} else { // Members
	    cm.sendNext("欢迎来到第2阶段，在次元洞内杀死黑暗中的怪物并且收集14张通行证。然后让你们队长来与我谈话。");
	    cm.safeDispose();
	}
    } else {
	cm.sendNext("恭喜你们完成第2阶段。时间已经不多了,赶快进入下一阶段吧。");
	cm.safeDispose();
    }
}

function clear(stage, eim, cm) {
    eim.setProperty("stage" + stage.toString() + "status","clear");

    cm.showEffect(true, "quest/party/clear");
    cm.playSound(true, "Party1/Clear");
    cm.environmentChange(true, "gate");
}
