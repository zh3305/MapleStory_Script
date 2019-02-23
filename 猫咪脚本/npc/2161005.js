var status = -1;
var maxVonLeon =2;

function start() {
	if (cm.getPlayer().getMapId() == 211070100 || cm.getPlayer().getMapId() == 211070101 || cm.getPlayer().getMapId() == 211070110) {
		cm.sendYesNo("你想离开这里吗?");
		status = 1;
		return;
	}
		if (cm.getPlayer().getLevel() < 120) {
			cm.sendOk("你的等级小于120级不能进行狮王远征任务.");
			cm.dispose();
			return;
		}
		if (cm.getPlayer().getClient().getChannel() != 2 && cm.getPlayer().getClient().getChannel() != 3 && cm.getPlayer().getClient().getChannel() != 4) {
			cm.sendOk("参加狮王远征队只能在2,3,4频道进行.");
			cm.dispose();
			return;
		}
    var em = cm.getEventManager("VonLeonBattle");

    if (em == null) {
	cm.sendOk("脚本错误,请联系管理员.");
	cm.dispose();
	return;
    }
    var eim_status = em.getProperty("state");
            var data = cm.getBossLog("狮子王");
	if (eim_status == null || eim_status.equals("0")) {
    var squadAvailability = cm.getSquadAvailability("VonLeon");
    if (squadAvailability == -1) {
	status = 0;
                    if (data >= maxVonLeon && !cm.getPlayer().isGM()) {
                        cm.sendOk("您今天挑战狮子王·班雷昂的次数已经用完，请明天在来挑战吧！");
                        cm.dispose();
                        return;
                    }
                    cm.sendYesNo("现在可以申请远征队，你想成为远征队队长吗？");
                } else if (squadAvailability == 1) {
                    if (data >= maxVonLeon && !cm.getPlayer().isGM()) {
                        cm.sendOk("您今天挑战狮子王·班雷昂的次数已经用完，请明天在来挑战吧！");
                        cm.dispose();
                        return;
                    }
	// -1 = Cancelled, 0 = not, 1 = true
	var type = cm.isSquadLeader("VonLeon");
	if (type == -1) {
	    cm.sendOk("远征队已经结束.请重新注册.");
	    cm.dispose();
	} else if (type == 0) {
	    var memberType = cm.isSquadMember("VonLeon");
	    if (memberType == 2) {
		cm.sendOk("你在制裁名单,不能进行远征任务.");
		cm.dispose();
	    } else if (memberType == 1) {
		status = 5;
		cm.sendSimple("你想干什么? \r\n#b#L0#加入远征队#l \r\n#b#L1#离开远征队#l \r\n#b#L2#查询远征队#l");
	    } else if (memberType == -1) {
		cm.sendOk("远征队已经结束.请重新注册.");
		cm.dispose();
	    } else {
		status = 5;
		cm.sendSimple("你想干什么? \r\n#b#L0#加入远征队#l \r\n#b#L1#离开远征队#l \r\n#b#L2#查看远征队#l");
	    }
	} else { // Is leader
	    status = 10;
	    cm.sendSimple("你想做什么操作? \r\n#b#L0#查看远征队#l \r\n#b#L1#制裁远征队队员#l \r\n#b#L2#管理制裁名单#l \r\n#r#L3#开始远征任务#l");
	// TODO viewing!
	}
	    } else {
			var eim = cm.getDisconnected("VonLeonBattle");
			if (eim == null) {
				var squd = cm.getSquad("VonLeon");
				if (squd != null) {
                            if (data >= maxVonLeon && !cm.getPlayer().isGM()) {
                                cm.sendOk("您今天挑战狮子王·班雷昂的次数已经用完，请明天在来挑战吧！");
                                cm.dispose();
                                return;
                            }
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
			var eim = cm.getDisconnected("VonLeonBattle");
			if (eim == null) {
				var squd = cm.getSquad("VonLeon");
				if (squd != null) {
                        if (data >= maxVonLeon && !cm.getPlayer().isGM()) {
                            cm.sendOk("您今天挑战狮子王·班雷昂的次数已经用完，请明天在来挑战吧！");
                            cm.dispose();
                            return;
                        }
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
}

function action(mode, type, selection) {
    switch (status) {
	case 0:
	    if (mode == 1) {
			if (cm.registerSquad("VonLeon", 5, " 已经成为狮王远征队长.请各位勇士在5分钟内加入远征队并且开始远征任务.否则将会注销远征队.")) {
				cm.sendOk("你已经成为狮王远征队队长.请在5分钟内召集好远征队队员进行远征任务.否则将会自动注销远征队.");
			} else {
				cm.sendOk("发生错误，加入你的队伍。");
			}
	    }
	    cm.dispose();
	    break;
	case 1:
	    if (mode == 1) {
		cm.warp(910000000, 0);
	    }
	    cm.dispose();
	    break;
	case 2:
		if (!cm.reAdd("VonLeonBattle", "VonLeon")) {
			cm.sendOk("脚本出错.请联系管理员.");
		}
		cm.safeDispose();
		break;
	case 3:
		if (mode == 1) {
			var squd = cm.getSquad("VonLeon");
			if (squd != null && !squd.getAllNextPlayer().contains(cm.getPlayer().getName())) {
				squd.setNextPlayer(cm.getPlayer().getName());
				cm.sendOk("以上为你的组队信息.");
			}
		}
		cm.dispose();
		break;
	case 5:
	    if (selection == 0) { // join
		var ba = cm.addMember("VonLeon", true);
		if (ba == 2) {
		    cm.sendOk("远征队人数已经足够.请等待远征队长制裁人员或下次挑战.");
		} else if (ba == 1) {
		    cm.sendOk("你已经成功加入远征队.");
		} else {
		    cm.sendOk("你已经加入远征队.");
		}
	    } else if (selection == 1) {// withdraw
		var baa = cm.addMember("VonLeon", false);
		if (baa == 1) {
		    cm.sendOk("退出远征队成功.");
		} else {
		    cm.sendOk("你没有加入远征队");
		}
	    } else if (selection == 2) {
		if (!cm.getSquadList("VonLeon", 0)) {
		    cm.sendOk("由于未知的错误，对远征队的要求被拒绝。");
		}
	    }
	    cm.dispose();
	    break;
	case 10:
	    if (mode == 1) {
		if (selection == 0) {
		    if (!cm.getSquadList("VonLeon", 0)) {
			cm.sendOk("由于未知的错误，对远征队的要求被拒绝。");
		    }
		    cm.dispose();
		} else if (selection == 1) {
		    status = 11;
		    if (!cm.getSquadList("VonLeon", 1)) {
			cm.sendOk("由于未知的错误，对远征队的要求被拒绝。");
			cm.dispose();
		    }
		} else if (selection == 2) {
		    status = 12;
		    if (!cm.getSquadList("VonLeon", 2)) {
			cm.sendOk("由于未知的错误，对远征队的要求被拒绝。");
			cm.dispose();
		    }
		} else if (selection == 3) { // get insode
		    if (cm.getSquad("VonLeon") != null) {
			var dd = cm.getEventManager("VonLeonBattle");
			dd.startInstance(cm.getSquad("VonLeon"), cm.getMap(), "狮子王");
		    } else {
			cm.sendOk("由于未知的错误，对远征队的要求被拒绝。");
		    }
		    cm.dispose();
		}
	    } else {
		cm.dispose();
	    }
	    break;
	case 11:
	    cm.banMember("VonLeon", selection);
	    cm.dispose();
	    break;
	case 12:
	    if (selection != -1) {
		cm.acceptMember("VonLeon", selection);
	    }
	    cm.dispose();
	    break;
    }
}