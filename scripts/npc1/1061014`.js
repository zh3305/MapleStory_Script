/* Mu Young
	Boss Balrog
*/


var status = -1;
var balrogMode; // false = easy, true = hard

function action(mode, type, selection) {
    switch (status) {
	case -1:
	    status = 0;
	    switch (cm.getChannelNumber()) {
		case 5:
		    balrogMode = true;
		    cm.sendNext("你当前所在的频道可以挑战 #b蝙蝠魔(普通)#k. 如果你要挑战其它级别的蝙蝠魔请到相应频道. \n\r #b#i3994116# 5频道 / 等级50上 / 6 - 15 人 \r\n#b#i3994115# 除5频道外其他频道  / 等级50-70 / 3 - 6 人.");
		    break;
		default:
		    balrogMode = false;
		    cm.sendNext("你当前所在的频道可以挑战 #b蝙蝠魔(简单)#k. 如果你要挑战其它级别的蝙蝠魔请到相应频道. \n\r #b#i3994116# 5频道 / 等级50上 / 6 - 15 人 \r\n#b#i3994115# 除5频道外其他频道  / 等级50-70 / 3 - 6 人.");
		    break;
	    }
	    break;
	case 0:
	    var em = cm.getEventManager(balrogMode ? "BossBalrog_NORMAL" : "BossBalrog_EASY");

	    if (em == null) {
		cm.sendOk("脚本错误.请联系管理员.");
		cm.safeDispose();
		return;
	    }

	    if (cm.getParty() != null) {
	var prop = em.getProperty("state");
	    var marr = cm.getQuestRecord(balrogMode ? 160106 : 160105);
	    var data = marr.getCustomData();
	    if (data == null) {
		marr.setCustomData("0");
	        data = "0";
	    }
	    var time = parseInt(data);
	if (prop == null || prop.equals("0")) {
		var squadAvailability = cm.getSquadAvailability("BossBalrog");
		if (squadAvailability == -1) {
		    status = 1;
	    if (time + (6 * 3600000) >= cm.getCurrentTime() && !cm.getPlayer().isGM()) {
		cm.sendOk("你在六小时内已经挑战过了蝙蝠魔.剩下的冻结时间为: " + cm.getReadableMillis(cm.getCurrentTime(), time + (6 * 3600000)));
		cm.dispose();
		return;
	    }
		    cm.sendYesNo("你想要成为远征队队长吗?");

		} else if (squadAvailability == 1) {
	    if (time + (6 * 3600000) >= cm.getCurrentTime() && !cm.getPlayer().isGM()) {
		cm.sendOk("你在六小时内已经挑战过了蝙蝠魔.剩下的冻结时间为: " + cm.getReadableMillis(cm.getCurrentTime(), time + (6 * 3600000)));
		cm.dispose();
		return;
	    }
		    // -1 = Cancelled, 0 = not, 1 = true
		    var type = cm.isSquadLeader("BossBalrog");
		    if (type == -1) {
			cm.sendOk("远征队已经注销.请重新申请!");
			cm.safeDispose();
		    } else if (type == 0) {
			var memberType = cm.isSquadMember("BossBalrog");
			if (memberType == 2) {
			    cm.sendOk("你在制裁名单.不能参加远征任务.");
			    cm.safeDispose();
			} else if (memberType == 1) {
			    status = 5;
			    cm.sendSimple("你想做什么? \r\n#b#L0#查看远征队成员#l \r\n#b#L1#加入远征堆#l \r\n#b#L2#退出远征队#l");
			} else if (memberType == -1) {
			    cm.sendOk("远征队已经注销.请重新申请.");
			    cm.safeDispose();
			} else {
			    status = 5;
			    cm.sendSimple("你想做什么? \r\n#b#L0#查看远征队成员#l \r\n#b#L1#加入远征堆#l \r\n#b#L2#退出远征队#l");
			}
		    } else { // Is leader
			status = 10;
			cm.sendSimple("你想做什么? \r\n#b#L0#查看远征队成员#l \r\n#b#L1#制裁远征队员#l \r\n#b#L2#管理制裁名单#l \r\n#r#L3#开始远征任务#l");
		    // TODO viewing!
		    }
	    } else {
			var eim = cm.getDisconnected(balrogMode ? "BossBalrog_NORMAL" : "BossBalrog_EASY");
			if (eim == null) {
				var squd = cm.getSquad("BossBalrog");
				if (squd != null) {
	    if (time + (6 * 3600000) >= cm.getCurrentTime() && !cm.getPlayer().isGM()) {
		cm.sendOk("你在六小时内已经挑战过了蝙蝠魔.剩下的冻结时间为: " + cm.getReadableMillis(cm.getCurrentTime(), time + (6 * 3600000)));
		cm.dispose();
		return;
	    }
					cm.sendYesNo("远征任务已经开始!\r\n" + squd.getNextPlayer());
					status = 3;
				} else {
					cm.sendOk("远征任务已经开始!");
					cm.safeDispose();
				}
			} else {
				cm.sendYesNo("你要继续进行远征任务吗?");
				status = 2;
			}
	    }
	} else {
			var eim = cm.getDisconnected(balrogMode ? "BossBalrog_NORMAL" : "BossBalrog_EASY");
			if (eim == null) {
				var squd = cm.getSquad("BossBalrog");
				if (squd != null) {
	    if (time + (6 * 3600000) >= cm.getCurrentTime() && !cm.getPlayer().isGM()) {
		cm.sendOk("你在六小时内已经挑战过了蝙蝠魔.剩下的冻结时间为: " + cm.getReadableMillis(cm.getCurrentTime(), time + (6 * 3600000)));
		cm.dispose();
		return;
	    }
					cm.sendYesNo("远征任务已经开始.\r\n" + squd.getNextPlayer());
					status = 3;
				} else {
					cm.sendOk("远征任务已经开始.");
					cm.safeDispose();
				}
			} else {
				cm.sendYesNo("你要继续进行远征任务吗?");
				status = 2;
			}
	}
	    } else {
		cm.sendPrev("你没有队伍.");
		cm.safeDispose();
	    }
	    break;
	case 1:
	    if (mode == 1) {
		if (!balrogMode) { // Easy Mode
		    var lvl = cm.getPlayerStat("LVL");
		    if (lvl >= 50 && lvl <= 70) {
			if (cm.registerSquad("BossBalrog", 5, " 已经成为远征队长.请各位成员在５分钟内加入远征队并开始远征任务.否则将会自动注销远征队伍.")) {
				cm.sendOk("你已经成为远征队长.请在５分钟召集远征队员并且开始远征任务.否则将会注销你的远征队.");
			} else {
				cm.sendOk("未知错误,请重试.");
			}
		    } else {
			cm.sendNext("你的小组成员的等级请在５０－７０之间.请确保他们满足任务条件.");
		    }
		} else { // Normal Mode
			if (cm.registerSquad("BossBalrog", 5, " 已经成为远征队长.请各位成员在５分钟内加入远征队并开始远征任务.否则将会自动注销远征队伍.")) {
				cm.sendOk("你已经成为远征队长.请在５分钟召集远征队员并且开始远征任务.否则将会注销你的远征队.");
			} else {
				cm.sendOk("未知错误,请重试.");
			}
		}
	    } else {
		cm.sendOk("你想成为远征队长.?")
	    }
	    cm.safeDispose();
	    break;
	case 2:
		if (!cm.reAdd(balrogMode ? "BossBalrog_NORMAL" : "BossBalrog_EASY", "BossBalrog")) {
			cm.sendOk("错误…请再试一次。");
		}
		cm.safeDispose();
		break;
	case 3:
		if (mode == 1) {
			var squd = cm.getSquad("BossBalrog");
			if (squd != null && !squd.getAllNextPlayer().contains(cm.getPlayer().getName())) {
				squd.setNextPlayer(cm.getPlayer().getName());
				cm.sendOk("你已经在远征队了.");
			}
		}
		cm.dispose();
		break;
	case 5:
	    if (selection == 0) {
		if (!cm.getSquadList("BossBalrog", 0)) {
		    cm.sendOk("由于未知的错误，对远征队的请求被拒绝。");
		    cm.safeDispose();
		} else {
		    cm.dispose();
		}
	    } else if (selection == 1) { // join
		var ba = cm.addMember("BossBalrog", true);
		if (ba == 2) {
		    cm.sendOk("远征队人数已经足够,请稍后在试.");
		    cm.safeDispose();
		} else if (ba == 1) {
		    cm.sendOk("加入远征队成功.");
		    cm.safeDispose();
		} else {
		    cm.sendOk("你已经在远征队伍了.");
		    cm.safeDispose();
		}
	    } else {// withdraw
		var baa = cm.addMember("BossBalrog", false);
		if (baa == 1) {
		    cm.sendOk("成功退出远征队.");
		    cm.safeDispose();
		} else {
		    cm.sendOk("你没有加入远征队.");
		    cm.safeDispose();
		}
	    }
	    break;
	case 10:
	    if (selection == 0) {
		if (!cm.getSquadList("BossBalrog", 0)) {
		    cm.sendOk("由于未知的错误，对远征队的请求被拒绝。");
		}
		cm.safeDispose();
	    } else if (selection == 1) {
		status = 11;
		if (!cm.getSquadList("BossBalrog", 1)) {
		    cm.sendOk("由于未知的错误，对远征队的请求被拒绝。");
		}
		cm.safeDispose();
	    } else if (selection == 2) {
		status = 12;
		if (!cm.getSquadList("BossBalrog", 2)) {
		    cm.sendOk("由于未知的错误，对远征队的请求被拒绝。");
		}
		cm.safeDispose();
	    } else if (selection == 3) { // get insode
		if (cm.getSquad("BossBalrog") != null) {
		    var dd = cm.getEventManager(balrogMode ? "BossBalrog_NORMAL" : "BossBalrog_EASY");
		    dd.startInstance(cm.getSquad("BossBalrog"), cm.getMap(), balrogMode ? 160106 : 160105);
		    cm.dispose();
		} else {
		    cm.sendOk("由于未知的错误，对远征队的请求被拒绝。");
		    cm.safeDispose();
		}
	    }
	    break;
	case 11:
	    cm.banMember("BossBalrog", selection);
	    cm.dispose();
	    break;
	case 12:
	    if (selection != -1) {
		cm.acceptMember("BossBalrog", selection);
	    }
	    cm.dispose();
	    break;
    }
}