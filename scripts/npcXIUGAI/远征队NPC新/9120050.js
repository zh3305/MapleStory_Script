/*
	NPC Name: 		出入限制装置
	Map(s): 		商贸中心顶楼 2102年 欧碧拉 远征队 入场 (802000820)
	Description: 		Dunas2 Battle starter
*/

var status = -1;

function start() {
    if (cm.getMapId() == 802000820) {
        if (cm.getPlayer().getClient().getChannel() != 1) {
            cm.sendOk(" #e#r欧碧拉#n#k 远征队任务只在 频道 1  进行.");
            cm.dispose();
            return;
        }
        var em = cm.getEventManager("Aufhaven");

        if (em == null) {
            cm.sendOk("配置清单为空，请联系管理员。");
            cm.dispose();
            return;
        }
        var prop = em.getProperty("state");
        if (prop == null || prop.equals("0")) {
            var squadAvailability = cm.getSquadAvailability("Aufheben");
            if (squadAvailability == -1) {
                status = 0;
                cm.sendYesNo("现在可以申请远征队!\r\n你想要成为 #e#r欧碧拉 远征队的队长#n #k么?");

            } else if (squadAvailability == 1) {
                // -1 = Cancelled, 0 = not, 1 = true
                var type = cm.isSquadLeader("Aufheben");
                if (type == -1) {
                    cm.sendOk("已经结束了申请。");
                    cm.dispose();
                } else if (type == 0) {
                    var memberType = cm.isSquadMember("Aufheben");
                    if (memberType == 2) {
                        cm.sendOk("你已经在远征队的制裁名单。");
                        cm.dispose();
                    } else if (memberType == 1) {
                        status = 5;
                        cm.sendSimple("你现在想做什么？\r\n#b#L0#查看远征队成员#l \r\n#b#L1#加入远征队#l \r\n#b#L2#退出远征队#l");
                    } else if (memberType == -1) {
                        cm.sendOk("5分钟结束远征队已经自动注销.请重新注册.");
                        cm.dispose();
                    } else {
                        status = 5;
                        cm.sendSimple("现在想做什么？ \r\n#b#L0#查看远征队成员#l \r\n#b#L1#加入远征队#l \r\n#b#L2#退出远征队#l");
                    }
                } else { // Is leader
                    status = 10;
                    cm.sendSimple("你现在想做什么？\r\n#b#L0#查看远征队成员#l \r\n#b#L1#管理远征队成员#l \r\n#b#L2#编辑限制列表#l \r\n#r#L3#进入地图#l");
                    // TODO viewing!
                }
            } else {
                var eim = cm.getDisconnected("Aufhaven");
                if (eim == null) {
                    var squd = cm.getSquad("Aufheben");
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
            var eim = cm.getDisconnected("Aufhaven");
            if (eim == null) {
                var squd = cm.getSquad("Aufheben");
                if (squd != null) {
                    cm.sendYesNo("远征队的挑战已经开始.\r\n" + squd.getNextPlayer());
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
if (cm.getMapId() == 802000821) {
        cm.sendSimple("你想要放弃 #e#r打败欧碧拉的远征任务#n#k 去寻找#b倒下的少女#k么?");
} else {
        cm.sendSimple("你要离开这里回到#b商贸中心顶楼2102年欧碧拉远征队入场#k么?");
        }
    }
}

function action(mode, type, selection) {
    switch (status) {
    case 0:
        if (mode == 1) {
            if (cm.registerSquad("Aufheben", 5, " 已经成为了 欧碧拉  远征队队长。如果你想加入远征队，请重新打开对话申请加入远征队。")) {
                cm.sendOk("你已经成为了 欧碧拉   远征队队长。接下来的5分钟，请等待队员们的申请。");
            } else {
                cm.sendOk("未知错误.");
            }
        }
        cm.dispose();
        break;
    case 2:
        if (!cm.reAdd("Aufhaven", "Aufheben")) {
            cm.sendOk("由于未知的错误，操作失败。");
        }
        cm.safeDispose();
        break;
    case 3:
        if (mode == 1) {
            var squd = cm.getSquad("Aufheben");
            if (squd != null && !squd.getAllNextPlayer().contains(cm.getPlayer().getName())) {
                squd.setNextPlayer(cm.getPlayer().getName());
                cm.sendOk("副本已经有远征队在进行任务了...");
            }
        }
        cm.dispose();
        break;
    case 5:
        if (selection == 0) {
            if (!cm.getSquadList("Aufheben", 0)) {
                cm.sendOk("由于未知的错误，操作失败。");
            }
        } else if (selection == 1) { // join
            var ba = cm.addMember("Aufheben", true);
            if (ba == 2) {
                cm.sendOk("远征队员已经达到30名，请稍后再试。");
            } else if (ba == 1) {
                cm.sendOk("申请加入远征队成功，请等候队长指示。");
            } else {
                cm.sendOk("你已经参加了远征队，请等候队长指示。");
            }
        } else { // withdraw
            var baa = cm.addMember("Aufheben", false);
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
                if (!cm.getSquadList("Aufheben", 0)) {
                    cm.sendOk("由于未知的错误，操作失败。.");
                }
                cm.dispose();
            } else if (selection == 1) {
                status = 11;
                if (!cm.getSquadList("Aufheben", 1)) {
                    cm.sendOk("由于未知的错误，操作失败。.");
                    cm.dispose();
                }
            } else if (selection == 2) {
                status = 12;
                if (!cm.getSquadList("Aufheben", 2)) {
                    cm.sendOk("由于未知的错误，操作失败。.");
                    cm.dispose();
                }
            } else if (selection == 3) { // get insode
                if (cm.getSquad("Aufheben") != null) {
                    var dd = cm.getEventManager("Aufhaven");
                    dd.startInstance(cm.getSquad("Aufheben"), cm.getMap());
                } else {
                    cm.sendOk("由于未知的错误，操作失败。.");
                }
                cm.dispose();
            }
        } else {
            cm.dispose();
        }
        break;
    case 11:
        cm.banMember("Aufheben", selection);
        cm.dispose();
        break;
    case 12:
        if (selection != -1) {
            cm.acceptMember("Aufheben", selection);
        }
        cm.dispose();
        break;
    case 25:
        cm.warp(cm.getPlayer().getMapId() == 802000821 && cm.getPlayer().getMap().getAllMonstersThreadsafe().size() == 0 ? 802000823 : 802000820, 0);
        cm.dispose();
        break;
    }
}