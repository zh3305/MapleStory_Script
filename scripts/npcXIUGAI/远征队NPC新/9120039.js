/*
	NPC Name: 		天空大战舰支援AI
	Map(s): 		天空大战舰甲板 2102年(远征队) 等待  (802000610)
	Description: 		Nibergen Battle starter
*/
var status = -1;

function start() {

    if (cm.getMapId() == 802000610) {
        if (cm.getPlayer().getClient().getChannel() != 1) {
            cm.sendOk("#e#r天空大战舰#n#k 远征队任务只在 频道 1  进行.");
            cm.dispose();
            return;
        }
        var em = cm.getEventManager("Nibergen");

        if (em == null) {
            cm.sendOk("配置清单为空，请联系管理员。.");
            cm.dispose();
            return;
        }
        //	var prop = em.getProperty("DunasSummoned");

        //	if (((prop.equals("PQCleared") || (prop.equals("1")) && cm.getPlayerCount(802000211) == 0)) || prop.equals("0") || prop == null) {
        var prop = em.getProperty("state");
        if (prop == null || prop.equals("0")) {
            var squadAvailability = cm.getSquadAvailability("Nibergen_squad");
            if (squadAvailability == -1) {
                status = 0;
                cm.sendYesNo("现在可以申请远征队!\r\n你想要成为 #e#r天空战舰 远征队的队长#n #k么?");

            } else if (squadAvailability == 1) {
                // -1 = Cancelled, 0 = not, 1 = true
                var type = cm.isSquadLeader("Nibergen_squad");
                if (type == -1) {
                    cm.sendOk("已经结束了申请。.");
                    cm.dispose();
                } else if (type == 0) {
                    var memberType = cm.isSquadMember("Nibergen_squad");
                    if (memberType == 2) {
                        cm.sendOk("你已经在远征队的制裁名单。.");
                        cm.dispose();
                    } else if (memberType == 1) {
                        status = 5;
                        cm.sendSimple("你现在想做什么？\r\n#b#L0#查看远征队成员。#l \r\n#b#L1#加入远征队。#l \r\n#b#L2#退出远征队。#l");
                    } else if (memberType == -1) {
                        cm.sendOk("远征队员已经达到30名，请稍后再试。.");
                        cm.dispose();
                    } else {
                        status = 5;
                        cm.sendSimple("你现在想做什么？\r\n#b#L0#查看远征队成员。#l \r\n#b#L1#加入远征队。#l \r\n#b#L2#退出远征队。#l");
                    }
                } else { // Is leader
                    status = 10;
                    cm.sendSimple("你现在想做什么？\r\n#b#L0#查看远征队成员#l \r\n#b#L1#管理远征队成员#l \r\n#b#L2#编辑限制列表#l \r\n#r#L3#进入地图#l");
                    // TODO viewing!
                }
            } else {
                var eim = cm.getDisconnected("Nibergen");
                if (eim == null) {
                    var squd = cm.getSquad("Nibergen_squad");
                    if (squd != null) {
                        cm.sendYesNo("远征队的挑战已经开始..\r\n" + squd.getNextPlayer());
                        status = 3;
                    } else {
                        cm.sendOk("远征队的挑战已经开始..");
                        cm.safeDispose();
                    }
                } else {
                    cm.sendYesNo("你要继续进行远征任务吗?");
                    status = 2;
                }
            }
        } else {
            var eim = cm.getDisconnected("Nibergen");
            if (eim == null) {
                var squd = cm.getSquad("Nibergen_squad");
                if (squd != null) {
                    cm.sendYesNo("远征队的挑战已经开始..\r\n" + squd.getNextPlayer());
                    status = 3;
                } else {
                    cm.sendOk("远征队的挑战已经开始..");
                    cm.safeDispose();
                }
            } else {
                cm.sendYesNo("你要继续进行远征任务吗？");
                status = 2;
            }
        }
    } else {
        status = 25;
        cm.sendNext("Do you want to get out now?");
    }
}

function action(mode, type, selection) {
    switch (status) {
    case 0:
        if (mode == 1) {
            if (cm.registerSquad("Nibergen_squad", 5, " 已经成为了 天空大战舰  远征队队长。如果你想加入远征队，请重新打开对话申请加入远征队.")) {
                cm.sendOk("你已经成为了  天空大战舰  远征队队长。接下来的5分钟，请等待队员们的申请。");
            } else {
                cm.sendOk("未知错误.");
            }
        }
        cm.dispose();
        break;
    case 2:
        if (!cm.reAdd("Nibergen", "Nibergen_squad")) {
            cm.sendOk("由于未知的错误，操作失败。");
        }
        cm.safeDispose();
        break;
    case 3:
        if (mode == 1) {
            var squd = cm.getSquad("Nibergen_squad");
            if (squd != null && !squd.getAllNextPlayer().contains(cm.getPlayer().getName())) {
                squd.setNextPlayer(cm.getPlayer().getName());
                cm.sendOk("副本已经有远征队在进行任务了....");
            }
        }
        cm.dispose();
        break;
    case 5:
        if (selection == 0) {
            if (!cm.getSquadList("Nibergen_squad", 0)) {
                cm.sendOk("Due to an unknown error, the request for squad has been denied.");
            }
        } else if (selection == 1) { // join
            var ba = cm.addMember("Nibergen_squad", true);
            if (ba == 2) {
                cm.sendOk("远征队员已经达到30名，请稍后再试。.");
            } else if (ba == 1) {
                cm.sendOk("申请加入远征队成功，请等候队长指示。");
            } else {
                cm.sendOk("你已经参加了远征队，请等候队长指示。");
            }
        } else { // withdraw
            var baa = cm.addMember("Nibergen_squad", false);
            if (baa == 1) {
                cm.sendOk("制裁指定的成员成功。");
            } else {
                cm.sendOk("你没有参加远征队。");
            }
        }
        cm.dispose();
        break;
    case 10:
        if (mode == 1) {
            if (selection == 0) {
                if (!cm.getSquadList("Nibergen_squad", 0)) {
                    cm.sendOk("由于未知的错误，操作失败。");
                }
                cm.dispose();
            } else if (selection == 1) {
                status = 11;
                if (!cm.getSquadList("Nibergen_squad", 1)) {
                    cm.sendOk("由于未知的错误，操作失败。");
                    cm.dispose();
                }
            } else if (selection == 2) {
                status = 12;
                if (!cm.getSquadList("Nibergen_squad", 2)) {
                    cm.sendOk("由于未知的错误，操作失败。");
                    cm.dispose();
                }
            } else if (selection == 3) { // get insode
                if (cm.getSquad("Nibergen_squad") != null) {
                    var dd = cm.getEventManager("Nibergen");
                    dd.startInstance(cm.getSquad("Nibergen_squad"), cm.getMap());
                } else {
                    cm.sendOk("由于未知的错误，操作失败。");
                }
                cm.dispose();
            }
        } else {
            cm.dispose();
        }
        break;
    case 11:
        cm.banMember("Nibergen_squad", selection);
        cm.dispose();
        break;
    case 12:
        if (selection != -1) {
            cm.acceptMember("Nibergen_squad", selection);
        }
        cm.dispose();
        break;
    case 25:
        cm.warp(802000610, 0);
        cm.dispose();
        break;
    }
}