/*
	Red Balloon - LudiPQ 1st stage NPC
**/

var status;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    var eim = cm.getEventInstance();
    var stage1status = eim.getProperty("stage1status");

    if (stage1status == null) {
	if (cm.isLeader()) { // Leader
	    var stage1leader = eim.getProperty("stage1leader");
	    if (stage1leader == "done") {

		if (cm.haveItem(4001022, 20)) { // Clear stage
		    cm.sendNext("恭喜你！ 你成功通过了第一关！快点，向第二关前进吧！");
		    cm.gainItem(4001022, -20);
		    clear(1, eim, cm);
		    cm.givePartyExp(2100, eim.getPlayers());
		    cm.dispose();
		} else { // Not done yet
		    cm.sendNext("确定你带来了 #r20 张通行证了#k 吗？ 请检查一下你的背包~");
		}
		cm.dispose();
	    } else {
		cm.sendOk("欢迎来到第一个关卡， 看看周围， 是不是有很多老鼠？请打败这些老鼠，带来20张通行证给我。 如果你成功拿到了20张通行证，请交给你们的组长，然后再转交给我。");
		eim.setProperty("stage1leader","done");
		cm.dispose();
	    }
	} else { // Members
	    cm.sendNext("欢迎来到第一个关卡， 看看周围， 是不是有很多老鼠？请打败这些老鼠，带来20张通行证给我。 如果你成功拿到了20张通行证，请交给你们的组长，然后再转交给我。");
	    cm.dispose();
	}
    } else {
	cm.sendNext("恭喜你！ 你成功通过了第一关！快点，向第二关前进吧！");
	cm.dispose();
    }
}

function clear(stage, eim, cm) {
    eim.setProperty("stage" + stage.toString() + "status","clear");
    
    cm.showEffect(true, "quest/party/clear");
    cm.playSound(true, "Party1/Clear");
    cm.environmentChange(true, "gate");
}