/*
	NPC Name: 		Dida
	Map(s): 		2095 Park
	Description: 		Battle starter
 */
var status = -1;

function start() {
    if (cm.getMapId() == 802000310) {
        if (cm.getPlayer().getClient().getChannel() != 1) {
            cm.sendOk(" #e#r破坏未来战士能量#n#k 远征队任务只在 频道 1  进行. .");
            cm.dispose();
            return;
        }
        var em = cm.getEventManager("2095_tokyo");

        if (em == null) {
            cm.sendOk("配置清单为空，请联系管理员。");
            cm.dispose();
            return;
        }
        var prop = em.getProperty("state");
        if (prop == null || prop.equals("0")) {
            var squadAvailability = cm.getSquadAvailability("tokyo_2095");
            if (squadAvailability == -1) {
                status = 0;
                cm.sendYesNo("现在可以申请远征队!\r\n你想要成为 #e#r破坏未来战士能量 远征队的队长#n #k么?");

            } else if (squadAvailability == 1) {
                // -1 = Cancelled, 0 = not, 1 = true
                var type = cm.isSquadLeader("tokyo_2095");
                if (type == -1) {
                    cm.sendOk("The squad has ended, please re-register.");
                    cm.dispose();
                } else if (type == 0) {
                    var memberType = cm.isSquadMember("tokyo_2095");
                    if (memberType == 2) {
                        cm.sendOk("You been banned from the squad.");
                        cm.dispose();
                    } else if (memberType == 1) {
                        status = 5;
                        cm.sendSimple("现在想做什么？\r\n#b#L0#查看远征队成员#l \r\n#b#L1#加入远征队#l \r\n#b#L2#退出远征队#l");
                    } else if (memberType == -1) {
                        cm.sendOk("5分钟结束远征队已经自动注销.请重新注册..");
                        cm.dispose();
                    } else {
                        status = 5;
                        cm.sendSimple("现在想做什么？\r\n#b#L0#查看远征队成员#l \r\n#b#L1#加入远征队#l \r\n#b#L2#退出远征队#l");
                    }
                } else { // Is leader
                    status = 10;
                    cm.sendSimple("你现在想做什么？\r\n#b#L0#查看远征队成员#l \r\n#b#L1#管理远征队成员#l \r\n#b#L2#编辑限制列表#l \r\n#r#L3#进入地图#l \r\n#b#L4#我需要 简易电磁波脉冲发讯机 #l");
                }
            } else {
                var eim = cm.getDisconnected("2095_tokyo");
                if (eim == null) {
                    var squd = cm.getSquad("tokyo_2095");
                    if (squd != null) {
                        cm.sendYesNo("远征队的挑战已经开始.\r\n" + squd.getNextPlayer());
                        status = 3;
                    } else {
                        cm.sendOk("远征队的挑战已经开始.");
                        cm.safeDispose();
                    }
                } else {
                    cm.sendYesNo("你要继续进行远征任务吗?");
                    status = 2;
                }
            }
        } else {
            var eim = cm.getDisconnected("2095_tokyo");
            if (eim == null) {
                var squd = cm.getSquad("tokyo_2095");
                if (squd != null) {
                    cm.sendYesNo("远征队的挑战已经开始.\r\n" + squd.getNextPlayer());
                    status = 3;
                } else {
                    cm.sendOk("远征队的挑战已经开始.");
                    cm.safeDispose();
                }
            } else {
                cm.sendYesNo("你要继续进行远征任务吗?");
                status = 2;
            }
        }

    } else {
        status = 25;
        cm.sendNext("你要离开这里回到#b公园 2095年 （远征队）等待 #k么?");
    }
}

function action(mode, type, selection) {
    switch (status) {
    case 0:
        if (mode == 1) {
            if (cm.registerSquad("tokyo_2095", 5, " 经成为了 破坏未来战士能量  远征队队长。如果你想加入远征队，请重新打开对话申请加入远征队.")) {
                cm.sendOk("你已经成为了 破坏未来战士能量   远征队队长。接下来的5分钟，请等待队员们的申请.");
            } else {
                cm.sendOk("未知错误.");
            }
        }
        cm.dispose();
        break;
    case 2:
        if (!cm.reAdd("2095_tokyo", "tokyo_2095")) {
            cm.sendOk("由于未知的错误，操作失败.");
        }
        cm.safeDispose();
        break;
    case 3:
        if (mode == 1) {
            var squd = cm.getSquad("tokyo_2095");
            if (squd != null && !squd.getAllNextPlayer().contains(cm.getPlayer().getName())) {
                squd.setNextPlayer(cm.getPlayer().getName());
                cm.sendOk("副本已经有远征队在进行任务了..");
            }
        }
        cm.dispose();
        break;
    case 5:
        if (selection == 0) {
            if (!cm.getSquadList("tokyo_2095", 0)) {
                cm.sendOk("由于未知的错误，操作失败.");
            }
        } else if (selection == 1) { // join
            var ba = cm.addMember("tokyo_2095", true);
            if (ba == 2) {
                cm.sendOk("远征队员已经达到30名，请稍后再试.");
            } else if (ba == 1) {
                cm.sendOk("申请加入远征队成功，请等候队长指示");
            } else {
                cm.sendOk("你已经参加了远征队，请等候队长指示.");
            }
        } else { // withdraw
            var baa = cm.addMember("tokyo_2095", false);
            if (baa == 1) {
                cm.sendOk("制裁指定的成员成功");
            } else {
                cm.sendOk("你没有参加远征队.");
            }
        }
        cm.dispose();
        break;
    case 10:
        if (mode == 1) {
            if (selection == 0) {
                if (!cm.getSquadList("tokyo_2095", 0)) {
                    cm.sendOk("由于未知的错误，操作失败.");
                }
                cm.dispose();
            } else if (selection == 1) {
                status = 11;
                if (!cm.getSquadList("tokyo_2095", 1)) {
                    cm.sendOk("由于未知的错误，操作失败.");
                    cm.dispose();
                }
            } else if (selection == 2) {
                status = 12;
                if (!cm.getSquadList("tokyo_2095", 2)) {
                    cm.sendOk("由于未知的错误，操作失败.");
                    cm.dispose();
                }
            } else if (selection == 3) { // get insode
                status = 13;
                cm.sendNext("#b#t4032202##k, 这个东西不要忘了把它放在 马鲁  旁边.")
            } else if (selection == 4) { // Transmitter
                status = 17;
                cm.sendNext("拿着它，它可以帮助你赶走那些战士！你进入任务之后可以 把它 放在 马鲁 旁边，那样我就会出现帮助你！  ");
            }
        } else {
            cm.dispose();
        }
        break;
    case 11:
        cm.banMember("tokyo_2095", selection);
        cm.dispose();
        break;
    case 12:
        if (selection != -1) {
            cm.acceptMember("tokyo_2095", selection);
        }
        cm.dispose();
        break;
    case 13:
        status = 14;
        cm.sendNextPrev("The opponent you are facing is using #b#t4032192##k as the driving force. You'll need to elliminate the enermies and gather up of them, then immediately send them to Marr, so she can run away.");
        break;
    case 14:
        status = 15;
        cm.sendNextPrev("That should be no more than enough for 20 minutes. I suggest you run away within 20 minutes!");
        break;
    case 15:
        status = 16;
        cm.sendNextPrev("The #b#t4032192##k you've gathered up should be handed to Marr by the Leader of the Squad!");
        break;
    case 16:
        if (cm.getSquad("tokyo_2095") != null) {
            var dd = cm.getEventManager("2095_tokyo");
            dd.startInstance(cm.getSquad("tokyo_2095"), cm.getMap());
        } else {
            cm.sendOk("Due to an unknown error, the request for squad has been denied.");
        }
        cm.dispose();
        break;
    case 17:
        cm.gainItem(4032202, 1);
        cm.sendNextPrev("Be careful. Please the item in front of marr in 6 minutes, or the mission is a failure.");
        cm.dispose();
        break;
    case 25:
        cm.warp(802000210, 0);
        cm.dispose();
        break;
    default:
        cm.dispose();
        break;
    }
}