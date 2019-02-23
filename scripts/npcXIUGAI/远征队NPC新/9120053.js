/*
	NPC Name: 		出入限制装置
	Map(s): 		商贸中心 2102年（组队入场）  （802000800)
 	Description: 		Core Blaze battle
*/
var status = 0;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    switch (status) {
    case 0:
        if (cm.getMapId() == 802000800) {
            if (cm.getPlayer().getClient().getChannel() != 1) {
                cm.sendOk("这个BOSS只能在  频道1 召唤.");
                cm.dispose();
                return;
            }
            var em = cm.getEventManager("CoreBlaze");

            if (em == null) {
                cm.sendOk("配置清单为空，请联系管理员。");
                cm.safeDispose();
                return;
            }
            var prop = em.getProperty("state");
            if (prop == null || prop.equals("0")) {
                var squadAvailability = cm.getSquadAvailability("Core_Blaze");
                if (squadAvailability == -1) {
                    status = 1;
                    cm.sendYesNo("现在可以申请远征队!\r\n你想要成为   #e#r未来机器远征队的队长 #n #k么?");
                } else if (squadAvailability == 1) {
                    // -1 = Cancelled, 0 = not, 1 = true
                    var type = cm.isSquadLeader("Core_Blaze");
                    if (type == -1) {
                        cm.sendOk("已经结束了申请。");
                        cm.safeDispose();
                    } else if (type == 0) {
                        var memberType = cm.isSquadMember("Core_Blaze");
                        if (memberType == 2) {
                            cm.sendOk("在远征队的制裁名单。");
                            cm.safeDispose();
                        } else if (memberType == 1) {
                            status = 5;
                            cm.sendSimple("你现在想做什么？\r\n#b#L0#查看远征队成员。#l \r\n#b#L1#加入远征队。#l \r\n#b#L2#退出远征队。#l");
                        } else if (memberType == -1) {
                            cm.sendOk("5分钟结束远征队已经自动注销.请重新注册.");
                            cm.safeDispose();
                        } else {
                            status = 5;
                            cm.sendSimple("现在想做什么？ \r\n#b#L0#查看远征队成员。#l \r\n#b#L1#加入远征队。#l \r\n#b#L2#退出远征队。#l");
                        }
                    } else { // Is leader
                        status = 10;
                        cm.sendSimple("你现在想做什么？\r\n#b#L0#查看远征队成员。#l \r\n#b#L1#管理远征队成员。#l \r\n#b#L2#编辑限制列表。#l \r\n#r#L3#进入地图。#l");
                        // TODO viewing!
                    }
                } else {
                    var eim = cm.getDisconnected("CoreBlaze");
                    if (eim == null) {
                        var squd = cm.getSquad("Core_Blaze");
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
                var eim = cm.getDisconnected("CoreBlaze");
                if (eim == null) {
                    var squd = cm.getSquad("Core_Blaze");
                    if (squd != null) {
                        cm.sendYesNo("征队的挑战已经开始.\r\n" + squd.getNextPlayer());
                        status = 3;
                    } else {
                        cm.sendOk("远征队的挑战已经开始.");
                        cm.safeDispose();
                    }
                } else {
                    cm.sendYesNo("你要继续进行远征任务吗？");
                    status = 2;
                }
            }
        } else {
            status = 25;
            cm.sendNext("你想要放弃远征任务离开么 ？");
        }
        break;
    case 1:
        if (mode == 1) {
            if (cm.registerSquad("Core_Blaze", 5, " 已经成为了远征队队长。如果你想加入远征队，请重新打开对话申请加入远征队。")) {
                cm.sendOk("你已经成为了远征队队长。接下来的5分钟，请等待队员们的申请。");
            } else {
                cm.sendOk("未知错误.");
            }
        } else {
            cm.sendOk("如果你想申请远征队的话，那么就来找我吧。");
        }
        cm.safeDispose();
        break;
    case 2:
        if (!cm.reAdd("CoreBlaze", "Core_Blaze")) {
            cm.sendOk("由于未知的错误，操作失败。");
        }
        cm.safeDispose();
        break;
    case 3:
        if (mode == 1) {
            var squd = cm.getSquad("Core_Blaze");
            if (squd != null && !squd.getAllNextPlayer().contains(cm.getPlayer().getName())) {
                squd.setNextPlayer(cm.getPlayer().getName());
                cm.sendOk("副本已经有远征队在进行任务了...");
            }
        }
        cm.dispose();
        break;
    case 5:
        if (selection == 0) {
            if (!cm.getSquadList("Core_Blaze", 0)) {
                cm.sendOk("由于未知的错误，操作失败。");
                cm.safeDispose();
            } else {
                cm.dispose();
            }
        } else if (selection == 1) { // join
            var ba = cm.addMember("Core_Blaze", true);
            if (ba == 2) {
                cm.sendOk("远征队员已经达到30名，请稍后再试。");
                cm.safeDispose();
            } else if (ba == 1) {
                cm.sendOk("申请加入远征队成功，请等候队长指示。");
                cm.safeDispose();
            } else {
                cm.sendOk("你已经参加了远征队，请等候队长指示。");
                cm.safeDispose();
            }
        } else { // withdraw
            var baa = cm.addMember("Core_Blaze", false);
            if (baa == 1) {
                cm.sendOk("制裁指定的成员成功。");
                cm.safeDispose();
            } else {
                cm.sendOk("你没有参加远征队。");
                cm.safeDispose();
            }
        }
        break;
    case 10:
        if (selection == 0) {
            if (!cm.getSquadList("Core_Blaze", 0)) {
                cm.sendOk("由于未知的错误，操作失败。.");
            }
            cm.safeDispose();
        } else if (selection == 1) {
            status = 11;
            if (!cm.getSquadList("Core_Blaze", 1)) {
                cm.sendOk("由于未知的错误，操作失败。");
            }
        } else if (selection == 2) {
            status = 12;
            if (!cm.getSquadList("Core_Blaze", 2)) {
                cm.sendOk("由于未知的错误，操作失败。");
            }
        } else if (selection == 3) { // get insode
            if (cm.getSquad("Core_Blaze") != null) {
                var dd = cm.getEventManager("CoreBlaze");
                dd.startInstance(cm.getSquad("Core_Blaze"), cm.getMap());
                cm.dispose();
            } else {
                cm.sendOk("由于未知的错误，操作失败。");
                cm.safeDispose();
            }
        }
        break;
    case 11:
        cm.banMember("Core_Blaze", selection);
        cm.dispose();
        break;
    case 12:
        if (selection != -1) {
            cm.acceptMember("Core_Blaze", selection);
        }
        cm.dispose();
        break;
    case 25:
        cm.warp(802000800, 0);
        cm.dispose();
        break;
    }
}