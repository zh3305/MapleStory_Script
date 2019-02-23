/*
	NPC Name: 		The Forgotten Temple Manager
	Map(s): 		Deep in the Shrine - Forgotten Twilight
	Description: 		Pink Bean battle starter
*/
var status = -1;

function start() {
    if (cm.getPlayer().getLevel() < 120) {
        cm.sendOk("你的等级小于120,不能挑战品克缤!");
        cm.dispose();
        return;
    }
    if (cm.getPlayer().getClient().getChannel() != 1) {
        cm.sendOk("挑战品克缤请到1频道!");
        cm.dispose();
        return;
    }
    var em = cm.getEventManager("PinkBeanBattle");

    if (em == null) {
        cm.sendOk("The event isn't started, please contact a GM.");
        cm.dispose();
        return;
    }
    var eim_status = em.getProperty("state");
    var marr = cm.getQuestRecord(160104);
    var data = marr.getCustomData();
    if (data == null) {
        marr.setCustomData("0");
        data = "0";
    }
    var time = parseInt(data);
    if (eim_status == null || eim_status.equals("0")) {

        var squadAvailability = cm.getSquadAvailability("PinkBean");
        if (squadAvailability == -1) {
            status = 0;
            if (time + (12 * 3600000) >= cm.getCurrentTime() && !cm.getPlayer().isGM()) {
                cm.sendOk("You have already went to PinkBean in the past 12 hours. Time left: " + cm.getReadableMillis(cm.getCurrentTime(), time + (12 * 3600000)));
                cm.dispose();
                return;
            }
            cm.sendYesNo("你要成为品克缤远征队队长吗?");

        } else if (squadAvailability == 1) {
            if (time + (12 * 3600000) >= cm.getCurrentTime() && !cm.getPlayer().isGM()) {
                cm.sendOk("You have already went to PinkBean in the past 12 hours. Time left: " + cm.getReadableMillis(cm.getCurrentTime(), time + (12 * 3600000)));
                cm.dispose();
                return;
            }
            // -1 = Cancelled, 0 = not, 1 = true
            var type = cm.isSquadLeader("PinkBean");
            if (type == -1) {
                cm.sendOk("The squad has ended, please re-register.");
                cm.dispose();
            } else if (type == 0) {
                var memberType = cm.isSquadMember("PinkBean");
                if (memberType == 2) {
                    cm.sendOk("你在远征队制裁名单不能进行远征任务.");
                    cm.dispose();
                } else if (memberType == 1) {
                    status = 5;
                    cm.sendSimple("你想做什么? \r\n#b#L0#加入远征队#l \r\n#b#L1#退出远征队#l \r\n#b#L2#查看远征队成员#l");
                } else if (memberType == -1) {
                    cm.sendOk("你已经是远征队成员了.");
                    cm.dispose();
                } else {
                    status = 5;
                    cm.sendSimple("你想做什么? \r\n#b#L0#加入远征队#l \r\n#b#L1#退出远征队#l \r\n#b#L2#查看远征队成员#l");
                }
            } else { // Is leader
                status = 10;
                cm.sendSimple("你想做什么? \r\n#b#L0#查看远征队#l \r\n#b#L1#制裁远征队成员#l \r\n#b#L2#管理制裁名单#l \r\n#r#L3#开始远征任务#l");
                // TODO viewing!
            }
        } else {
            var eim = cm.getDisconnected("PinkBeanBattle");
            if (eim == null) {
                var squd = cm.getSquad("PinkBean");
                if (squd != null) {
                    if (time + (12 * 3600000) >= cm.getCurrentTime() && !cm.getPlayer().isGM()) {
                        cm.sendOk("You have already went to PinkBean in the past 12 hours. Time left: " + cm.getReadableMillis(cm.getCurrentTime(), time + (12 * 3600000)));
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
                status = 2;
            }
        }
    } else {
        var eim = cm.getDisconnected("PinkBeanBattle");
        if (eim == null) {
            var squd = cm.getSquad("PinkBean");
            if (squd != null) {
                if (time + (12 * 3600000) >= cm.getCurrentTime() && !cm.getPlayer().isGM()) {
                    cm.sendOk("You have already went to PinkBean in the past 12 hours. Time left: " + cm.getReadableMillis(cm.getCurrentTime(), time + (12 * 3600000)));
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
            status = 2;
        }
    }
}

function action(mode, type, selection) {
    switch (status) {
    case 0:
        if (mode == 1) {
            if (cm.registerSquad("PinkBean", 5, " 已经成为品克缤远征队队长.请各位英雄在5分钟内加入远征队.否则你将不能进入远征任务.如果远征队5分钟内没有进入远征任务.将会自动注销远征队.")) {
                cm.sendOk("你已经成为了远征队队长.请在5分钟内召集远征队员参加远征任务.否则将会自动注销你的远征队.");
            } else {
                cm.sendOk("An error has occurred adding your squad.");
            }
        }
        cm.dispose();
        break;
    case 2:
        if (!cm.reAdd("PinkBeanBattle", "PinkBean")) {
            cm.sendOk("Error... please try again.");
        }
        cm.safeDispose();
        break;
    case 3:
        if (mode == 1) {
            var squd = cm.getSquad("PinkBean");
            if (squd != null && !squd.getAllNextPlayer().contains(cm.getPlayer().getName())) {
                squd.setNextPlayer(cm.getPlayer().getName());
                cm.sendOk("You have reserved the spot.");
            }
        }
        cm.dispose();
        break;
    case 5:
        if (selection == 0) { // join
            var ba = cm.addMember("PinkBean", true);
            if (ba == 2) {
                cm.sendOk("The squad is currently full, please try again later.");
            } else if (ba == 1) {
                cm.sendOk("你成功加入远征队.");
            } else {
                cm.sendOk("You are already part of the squad.");
            }
        } else if (selection == 1) { // withdraw
            var baa = cm.addMember("PinkBean", false);
            if (baa == 1) {
                cm.sendOk("你成功退出远征队.");
            } else {
                cm.sendOk("你已经是远征队成员.");
            }
        } else if (selection == 2) {
            if (!cm.getSquadList("PinkBean", 0)) {
                cm.sendOk("Due to an unknown error, the request for squad has been denied.");
            }
        }
        cm.dispose();
        break;
    case 10:
        if (mode == 1) {
            if (selection == 0) {
                if (!cm.getSquadList("PinkBean", 0)) {
                    cm.sendOk("Due to an unknown error, the request for squad has been denied.");
                }
                cm.dispose();
            } else if (selection == 1) {
                status = 11;
                if (!cm.getSquadList("PinkBean", 1)) {
                    cm.sendOk("Due to an unknown error, the request for squad has been denied.");
                    cm.dispose();
                }
            } else if (selection == 2) {
                status = 12;
                if (!cm.getSquadList("PinkBean", 2)) {
                    cm.sendOk("Due to an unknown error, the request for squad has been denied.");
                    cm.dispose();
                }
            } else if (selection == 3) { // get insode
                if (cm.getSquad("PinkBean") != null) {
                    var dd = cm.getEventManager("PinkBeanBattle");
                    dd.startInstance(cm.getSquad("PinkBean"), cm.getMap(), 160104);
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
        cm.banMember("PinkBean", selection);
        cm.dispose();
        break;
    case 12:
        if (selection != -1) {
            cm.acceptMember("PinkBean", selection);
        }
        cm.dispose();
        break;
    }
}