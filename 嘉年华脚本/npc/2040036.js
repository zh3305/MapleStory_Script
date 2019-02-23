/*
 玩具城组队任务NPC
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
        if (cm.isLeader()) { // 队长开始阶段
            var stage1leader = eim.getProperty("stage1leader");
            if (stage1leader == "done") {

                if (cm.getMap().getAllMonster().size() == 0 && cm.haveItem(4001022, 20)) { // 判断怪物是否全部消灭。
                    cm.sendNext("你们已经成功完成了第一阶段,赶快向第二阶段前进吧。");
                    cm.removeAll(4001022);
                    clear(1, eim, cm);
                    cm.givePartyExp(2100, eim.getPlayers());
                    cm.dispose();
                } else {
                    cm.sendNext("消灭了所有的老鼠并且带来#b20#k张通行证才可以进入第二阶段。请检查一下你的背包~");
                }
                cm.dispose();
            } else {
                cm.sendOk("欢迎来到第1阶段,看看周围,是不是有很多#r老鼠#k请消灭它们并且带来20张#b通行证给我#k,如果你成功拿到了1张通行证，请交给你们的组长，然后再转交给我。");
                eim.setProperty("stage1leader", "done");
                cm.dispose();
            }
        } else { // 开始阶段
            cm.sendNext("欢迎来到第1阶段,看看周围,是不是有很多#r老鼠#k请消灭它们并且带来20张#b通行证给我#k,如果你成功拿到了1张通行证，请交给你们的组长，然后再转交给我。");
            cm.dispose();
        }
    } else {
        cm.sendNext("你们已经成功完成了第一阶段,赶快向第二阶段前进吧。");
        cm.dispose();
    }
}

function clear(stage, eim, cm) {
    eim.setProperty("stage" + stage.toString() + "status", "clear");

    cm.showEffect(true, "quest/party/clear");
    cm.playSound(true, "Party1/Clear");
    cm.environmentChange(true, "gate");
}
