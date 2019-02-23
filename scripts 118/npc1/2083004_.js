var status = -1;

function start() {
    if (cm.getPlayer().getLevel() < 120) {
        cm.sendOk("您的等级小于120级，不能挑战进阶暗黑龙王。");
        cm.dispose();
        return;
    }
    if (cm.getPlayer().getClient().getChannel() != 3) {
        cm.sendOk("进阶暗黑龙王只能在3频道召唤。");
        cm.dispose();
        return;
    }
    var em = cm.getEventManager("ChaosHorntail");
    if (em == null) {
        cm.sendOk("脚本错误，请联系管理员。");
        cm.dispose();
        return;
    }
    var prop = em.getProperty("state");
    var marr = cm.getQuestRecord(160103);
    var data = marr.getCustomData();
    if (data == null) {
        marr.setCustomData("0");
        data = "0";
    }
    var time = parseInt(data);
    if (prop == null || prop.equals("0")) {
        var squadAvailability = cm.getSquadAvailability("ChaosHT");
        if (squadAvailability == -1) {
            status = 0;
            if (time + (12 * 3600000) >= cm.getCurrentTime() && !cm.getPlayer().isGM()) {
                cm.sendOk("You have already went to Chaos Horntail in the past 12 hours. Time left: " + cm.getReadableMillis(cm.getCurrentTime(), time + (12 * 3600000)));
                cm.dispose();
                return;
            }
            cm.sendYesNo("你要成为进阶暗黑龙王远征队队长吗？");
        } else if (squadAvailability == 1) {
            if (time + (12 * 3600000) >= cm.getCurrentTime() && !cm.getPlayer().isGM()) {
                cm.sendOk("You have already went to Chaos Horntail in the past 12 hours. Time left: " + cm.getReadableMillis(cm.getCurrentTime(), time + (12 * 3600000)));
                cm.dispose();
                return;
            }
            // -1 = Cancelled, 0 = not, 1 = true
            var type = cm.isSquadLeader("ChaosHT");
            if (type == -1) {
                cm.sendOk("已经结束了申请。");
                cm.dispose();
            } else if (type == 0) {
                var memberType = cm.isSquadMember("ChaosHT");
                if (memberType == 2) {
                    cm.sendOk("在远征队的制裁名单。");
                    cm.dispose();
                } else if (memberType == 1) {
                    status = 5;
                    cm.sendSimple("你现在想做什么？ \r\n#b#L0#查看远征队成员#l \r\n#b#L1#加入远征队#l \r\n#b#L2#退出远征队#l");
                } else if (memberType == -1) {
                    cm.sendOk("The squad has ended, please re-register.");
                    cm.dispose();
                } else {
                    status = 5;
                    cm.sendSimple("你现在想做什么？ \r\n#b#L0#查看远征队成员#l \r\n#b#L1#加入远征队#l \r\n#b#L2#退出远征队#l");
                }
            } else { // Is leader
                status = 10;
                cm.sendSimple("进阶暗黑龙王远征队操作:  \r\n#b#L0#查看远征队成员#l \r\n#b#L1#逐出远征队成员#l \r\n#b#L2#查看申请名单#l \r\n#r#L3#开始远征任务#l");
                // TODO viewing!
            }
        } else {
            var eim = cm.getDisconnected("ChaosHorntail");
            if (eim == null) {
                var squd = cm.getSquad("ChaosHT");
                if (squd != null) {
                    if (time + (12 * 3600000) >= cm.getCurrentTime() && !cm.getPlayer().isGM()) {
                        cm.sendOk("You have already went to Chaos Horntail in the past 12 hours. Time left: " + cm.getReadableMillis(cm.getCurrentTime(), time + (12 * 3600000)));
                        cm.dispose();
                        return;
                    }
                    cm.sendYesNo("远征队的挑战已经开始。\r\n" + squd.getNextPlayer());
                    status = 3;
                } else {
                    cm.sendOk("远征队的挑战已经开始。");
                    cm.safeDispose();
                }
            } else {
                cm.sendYesNo("Ah, you have returned. Would you like to join your squad in the fight again?");
                status = 1;
            }
        }
    } else {
        var eim = cm.getDisconnected("ChaosHorntail");
        if (eim == null) {
            var squd = cm.getSquad("ChaosHT");
            if (squd != null) {
                if (time + (12 * 3600000) >= cm.getCurrentTime() && !cm.getPlayer().isGM()) {
                    cm.sendOk("You have already went to Chaos Horntail in the past 12 hours. Time left: " + cm.getReadableMillis(cm.getCurrentTime(), time + (12 * 3600000)));
                    cm.dispose();
                    return;
                }
                cm.sendYesNo("远征队的挑战已经开始。\r\n" + squd.getNextPlayer());
                status = 3;
            } else {
                cm.sendOk("远征队的挑战已经开始。");
                cm.safeDispose();
            }
        } else {
            cm.sendYesNo("Ah, you have returned. Would you like to join your squad in the fight again?");
            status = 1;
        }
    }
}

function action(mode, type, selection) {
    switch (status) {
    case 0:
        if (mode == 1) {
            if (cm.registerSquad("ChaosHT", 5, " 已被任命为暗黑龙王远征队队长（进阶）。请各位挑战者在5分钟内报名.")) {
                cm.sendOk("你已经被任命为暗黑龙王远征队队长。在接下来的5分钟内，您可以添加远征队成员.请尽快加好队员.超过5分钟后将会取消远征队队长.");
            } else {
                cm.sendOk("An error has occurred adding your squad.");
            }
        }
        cm.dispose();
        break;
    case 1:
        if (!cm.reAdd("ChaosHorntail", "ChaosHT")) {
            cm.sendOk("Error... please try again.");
        }
        cm.safeDispose();
        break;
    case 3:
        if (mode == 1) {
            var squd = cm.getSquad("ChaosHT");
            if (squd != null && !squd.getAllNextPlayer().contains(cm.getPlayer().getName())) {
                squd.setNextPlayer(cm.getPlayer().getName());
                cm.sendOk("You have reserved the spot.");
            }
        }
        cm.dispose();
        break;
    case 5:
        if (selection == 0) {
            if (!cm.getSquadList("ChaosHT", 0)) {
                cm.sendOk("由于未知的错误，操作失败。");
            }
        } else if (selection == 1) { // join
            var ba = cm.addMember("ChaosHT", true);
            if (ba == 2) {
                cm.sendOk("远征队目前为满员状态.请稍后再试.");
            } else if (ba == 1) {
                cm.sendOk("你加入了远征队.");
            } else {
                cm.sendOk("你已经是远征队成员了.");
            }
        } else { // withdraw
            var baa = cm.addMember("ChaosHT", false);
            if (baa == 1) {
                cm.sendOk("你退出远征队成功.");
            } else {
                cm.sendOk("You are not part of the squad.");
            }
        }
        cm.dispose();
        break;
    case 10:
        if (mode == 1) {
            if (selection == 0) {
                if (!cm.getSquadList("ChaosHT", 0)) {
                    cm.sendOk("Due to an unknown error, the request for squad has been denied.");
                }
                cm.dispose();
            } else if (selection == 1) {
                status = 11;
                if (!cm.getSquadList("ChaosHT", 1)) {
                    cm.sendOk("Due to an unknown error, the request for squad has been denied.");
                    cm.dispose();
                }
            } else if (selection == 2) {
                status = 12;
                if (!cm.getSquadList("ChaosHT", 2)) {
                    cm.sendOk("Due to an unknown error, the request for squad has been denied.");
                    cm.dispose();
                }
            } else if (selection == 3) { // get insode
                if (cm.getSquad("ChaosHT") != null) {
                    var dd = cm.getEventManager("ChaosHorntail");
                    dd.startInstance(cm.getSquad("ChaosHT"), cm.getMap(), 160103);
                } else {
                    cm.sendOk("Due to an unknown error, the request for squad has been denied.");
                }
                cm.dispose();
            }
        } else {
            cm.dispose();
        }
        break;
    case 11:
        cm.banMember("ChaosHT", selection);
        cm.dispose();
        break;
    case 12:
        if (selection != -1) {
            cm.acceptMember("ChaosHT", selection);
        }
        cm.dispose();
        break;
    default:
        cm.dispose();
        break;
    }
}