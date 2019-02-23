/*
	NPC Name: 		Mark of the Squad
	Map(s): 		Entrance to Horned Tail's Cave
	Description: 		Horntail Battle starter
*/
var status = -1;

function start() {
    if (cm.getPlayer().getLevel() < 80) {
        cm.sendOk("你的等级小于80级，不能挑战暗黑龙王。");
        cm.dispose();
        return;
    }
    if (cm.getPlayer().getClient().getChannel() != 4 && cm.getPlayer().getClient().getChannel() != 2) {
        cm.sendOk("普通暗黑龙王只能在2、4频道召唤。");
        cm.dispose();
        return;
    }
    var em = cm.getEventManager("HorntailBattle");
    if (em == null) {
        cm.sendOk("脚本错误,请联系管理员.");
        cm.dispose();
        return;
    }
    var prop = em.getProperty("state");
    var marr = cm.getQuestRecord(160100);
    var data = marr.getCustomData();
    if (data == null) {
        marr.setCustomData("0");
        data = "0";
    }
    var time = parseInt(data);
    if (prop == null || prop.equals("0")) {
        var squadAvailability = cm.getSquadAvailability("Horntail");
        if (squadAvailability == -1) {
            status = 0;
            if (time + (12 * 3600000) >= cm.getCurrentTime() && !cm.getPlayer().isGM()) {
                cm.sendOk("你已经在过去的12小时内进行过远征任务. Time left: " + cm.getReadableMillis(cm.getCurrentTime(), time + (12 * 3600000)));
                cm.dispose();
                return;
            }
            cm.sendYesNo("你要成为暗黑龙王远征队队长吗?");
        } else if (squadAvailability == 1) {
            if (time + (12 * 3600000) >= cm.getCurrentTime() && !cm.getPlayer().isGM()) {
                cm.sendOk("You have already went to Horntail in the past 12 hours. Time left: " + cm.getReadableMillis(cm.getCurrentTime(), time + (12 * 3600000)));
                cm.dispose();
                return;
            }
            // -1 = Cancelled, 0 = not, 1 = true
            var type = cm.isSquadLeader("Horntail");
            if (type == -1) {
                cm.sendOk("The squad has ended, please re-register.");
                cm.dispose();
            } else if (type == 0) {
                var memberType = cm.isSquadMember("Horntail");
                if (memberType == 2) {
                    cm.sendOk("你已经在远征队制裁小组.不能进行远征任务.");
                    cm.dispose();
                } else if (memberType == 1) {
                    status = 5;
                    cm.sendSimple("你想做什么? \r\n#b#L0#查看远征队成员#l \r\n#b#L1#加入远征队#l \r\n#b#L2#退出远征队#l");
                } else if (memberType == -1) {
                    cm.sendOk("5分钟结束远征队已经自动注销.请重新注册");
                    cm.dispose();
                } else {
                    status = 5;
                    cm.sendSimple("你想做什么? \r\n#b#L0#查看远征队成员#l \r\n#b#L1#加入远征队#l \r\n#b#L2#退出远征队#l");
                }
            } else { // Is leader
                status = 10;
                cm.sendSimple("远征队操作: \r\n#b#L0#查看远征队成员#l \r\n#b#L1#逐出远征队成员#l \r\n#b#L2#查看申请名单#l \r\n#r#L3#开始远征任务#l");
                // TODO viewing!
            }
        } else {
            var eim = cm.getDisconnected("HorntailBattle");
            if (eim == null) {
                var squd = cm.getSquad("Horntail");
                if (squd != null) {
                    if (time + (12 * 3600000) >= cm.getCurrentTime() && !cm.getPlayer().isGM()) {
                        cm.sendOk("You have already went to Horntail in the past 12 hours. Time left: " + cm.getReadableMillis(cm.getCurrentTime(), time + (12 * 3600000)));
                        cm.dispose();
                        return;
                    }
                    cm.sendYesNo("The squad's battle against the boss has already begun.\r\n" + squd.getNextPlayer());
                    status = 3;
                } else {
                    cm.sendOk("The squad's battle against the boss has already begun.");
                    cm.safeDispose();
                }
            } else {
                cm.sendYesNo("Ah, you have returned. Would you like to join your squad in the fight again?");
                status = 1;
            }
        }
    } else {
        var eim = cm.getDisconnected("HorntailBattle");
        if (eim == null) {
            var squd = cm.getSquad("Horntail");
            if (squd != null) {
                if (time + (12 * 3600000) >= cm.getCurrentTime() && !cm.getPlayer().isGM()) {
                    cm.sendOk("You have already went to Horntail in the past 12 hours. Time left: " + cm.getReadableMillis(cm.getCurrentTime(), time + (12 * 3600000)));
                    cm.dispose();
                    return;
                }
                cm.sendYesNo("The squad's battle against the boss has already begun.\r\n" + squd.getNextPlayer());
                status = 3;
            } else {
                cm.sendOk("远征已经开始.");
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
            if (cm.registerSquad("Horntail", 5, " 已被任命为暗黑龙王远征队队长（普通）。请各位挑战者在5分钟内报名.")) {
                cm.sendOk("你已经被任命为暗黑龙王远征队队长。在接下来的5分钟内，您可以添加远征队成员.请尽快加好队员.超过5分钟后将会取消远征队队长.");
            } else {
                cm.sendOk("An error has occurred adding your squad.");
            }
        }
        cm.dispose();
        break;
    case 1:
        if (!cm.reAdd("HorntailBattle", "Horntail")) {
            cm.sendOk("Error... please try again.");
        }
        cm.safeDispose();
        break;
    case 3:
        if (mode == 1) {
            var squd = cm.getSquad("Horntail");
            if (squd != null && !squd.getAllNextPlayer().contains(cm.getPlayer().getName())) {
                squd.setNextPlayer(cm.getPlayer().getName());
                cm.sendOk("You have reserved the spot.");
            }
        }
        cm.dispose();
        break;
    case 5:
        if (selection == 0) {
            if (!cm.getSquadList("Horntail", 0)) {
                cm.sendOk("非法操作 - 请求已经返回!");
            }
        } else if (selection == 1) { // join
            var ba = cm.addMember("Horntail", true);
            if (ba == 2) {
                cm.sendOk("远征队目前为满员状态.请稍后再试.");
            } else if (ba == 1) {
                cm.sendOk("你加入了远征队.");
            } else {
                cm.sendOk("你已经是远征队成员了.");
            }
        } else { // withdraw
            var baa = cm.addMember("Horntail", false);
            if (baa == 1) {
                cm.sendOk("你成功退出了远征队.");
            } else {
                cm.sendOk("你还不是远征队成员.不能退出远征队.");
            }
        }
        cm.dispose();
        break;
    case 10:
        if (mode == 1) {
            if (selection == 0) {
                if (!cm.getSquadList("Horntail", 0)) {
                    cm.sendOk("Due to an unknown error, the request for squad has been denied.");
                }
                cm.dispose();
            } else if (selection == 1) {
                status = 11;
                if (!cm.getSquadList("Horntail", 1)) {
                    cm.sendOk("Due to an unknown error, the request for squad has been denied.");
                    cm.dispose();
                }
            } else if (selection == 2) {
                status = 12;
                if (!cm.getSquadList("Horntail", 2)) {
                    cm.sendOk("Due to an unknown error, the request for squad has been denied.");
                    cm.dispose();
                }
            } else if (selection == 3) { // get insode
                if (cm.getSquad("Horntail") != null) {
                    var dd = cm.getEventManager("HorntailBattle");
                    dd.startInstance(cm.getSquad("Horntail"), cm.getMap(), 160100);
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
        cm.banMember("Horntail", selection);
        cm.dispose();
        break;
    case 12:
        if (selection != -1) {
            cm.acceptMember("Horntail", selection);
        }
        cm.dispose();
        break;
    default:
        cm.dispose();
        break;
    }
}