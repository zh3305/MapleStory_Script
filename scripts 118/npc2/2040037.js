/**
	Orange Balloon - LudiPQ 2nd stage NPC
**/

var status;
var exp = 2520;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    var eim = cm.getEventInstance();
    var stage2status = eim.getProperty("stage2status");
    if (stage2status == null) {
        if (cm.isLeader()) { // Leader
            var stage2leader = eim.getProperty("stage2leader");
            if (stage2leader == "done") {
                if (eim.getProperty("stage2").equals("10")) { // Clear stage
                    cm.removeAll(4001022);
                    clear(2, eim, cm);
                    cm.givePartyExp(2520);
		    cm.warpParty(922010400);
                    cm.sendNext("恭喜你！你成功通过了第二个关卡。请快点！向第三个关卡移动吧！");
                    cm.dispose();
                } else { // Not done yet
                    cm.sendNext("确定你带来了 #r10 个通行证 #k了吗？请再检查一下你的背包。");
                }
                cm.dispose();
            } else {
                cm.sendOk("欢迎来到第二个关卡。请在周围收集10张通行证给我。注意，其中有一个箱子将会带你去一个陷进。如果你完成了这个任务，请叫你的组队成员把通行证交给你，之后再转交给我。即可通过。");
                eim.setProperty("stage2leader", "done");
                cm.dispose();
            }
        } else { // Members
            cm.sendNext("欢迎来到第二个关卡。请在周围收集10张通行证给我。注意，其中有一个箱子将会带你去一个陷进。如果你完成了这个任务，请叫你的组队成员把通行证交给你，之后再转交给我。即可通过。");
            cm.dispose();
        }
    } else {
        cm.sendNext("恭喜你！你成功通过了第二个关卡。请快点！向第三个关卡移动吧！");
        cm.dispose();
    }
}

function clear(stage, eim, cm) {
    eim.setProperty("stage" + stage.toString() + "status", "clear");
    cm.showEffect(true, "quest/party/clear");
    cm.playSound(true, "Party1/Clear");
    cm.environmentChange(true, "gate");
}