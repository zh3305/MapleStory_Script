/*
	Yellow Balloon - LudiPQ 3rd stage NPC
*/

var status = -1;
var exp = 2940;

function action(mode, type, selection) {
    var eim = cm.getEventInstance();
    var stage3status = eim.getProperty("stage3status");
    if (stage3status == null) {
        if (cm.isLeader()) { // Leader
            var stage3leader = eim.getProperty("stage3leader");
            if (stage3leader == "done") {

                if (cm.haveItem(4001022, 24)) { // Clear stage
		    cm.warpParty(922010400);
                    cm.sendNext("恭喜你！你成功通过了第三个关卡。请快点！向第四个关卡移动吧！");
                    cm.removeAll(4001022);
                    clear(3, eim, cm);
                    cm.givePartyExp(exp, eim.getPlayers());
                } else { // Not done yet
                    cm.sendNext("确定你带来了 #r24 个通行证 #k了吗？请再检查一下你的背包。");
                }
            } else {
                cm.sendOk("欢迎来到第三个关卡。请在周围收集24张通行证给我。注意，其中有一个箱子将会带你去一个陷进。如果你完成了这个任务，请叫你的组队成员把通行证交给你，之后再转交给我。即可通过。");
                eim.setProperty("stage3leader", "done");
            }
        } else { // Members
            cm.sendNext("欢迎来到第三个关卡。请在周围收集24张通行证给我。注意，其中有一个箱子将会带你去一个陷进。如果你完成了这个任务，请叫你的组队成员把通行证交给你，之后再转交给我。即可通过。");
        }
    } else {
        cm.sendNext("恭喜你！你成功通过了第三个关卡。请快点！向第四个关卡移动吧！");
    }
    cm.safeDispose();
}

function clear(stage, eim, cm) {
    eim.setProperty("stage" + stage.toString() + "status", "clear");
    cm.showEffect(true, "quest/party/clear");
    cm.playSound(true, "Party1/Clear");
    cm.environmentChange(true, "gate");
}