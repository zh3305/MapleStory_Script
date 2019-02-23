var status = -1;
var select = -1;
var togos = [[230030200, 251000100], [230000000]];
var togosName = [[230030200, 251000000], [230000000]];
var togosTicket = [[4031242, 0], [0]];
var maps = [230000000, 251000100];
var cost = [10000, 10000];
var location = -1;

function start() {
	for (var i=0; i < maps.length; i++) {
		if (cm.getMapId() == maps[i]) {
			location = i
			break;
		}
	}
	if (location == -1) {
		cm.sendNext("该地图还不支持传送，请向管理员反馈。");
		cm.dispose();
	} else {
		var menu = "";
		for (var i=0; i < togosName[location].length; i++) {
			menu += "\r\n#L" + i + "#去#m" + togosName[location][i] + "#";
			if (i == togosName[location].length -1)
				menu += "。";
			menu += "#l";
		}
		cm.sendSimple ("世界上所有的海都是相通的。走着去很远的地方，通过大海很快就能到达。怎么样？你想乘坐#b海豚出租车吗#k？\r\n#b" + menu);
	}
}

function action(mode, type, selection) {
    if (mode == 0 && status == 0) {
		cm.sendNext("欢迎下次光临。");
		cm.dispose();
		return;
    }
    if (mode == 1) {
		status++;
    } else {
		if (status < 1) {
			cm.dispose();
			return;
		}
		status--;
	}
    if (status == 0) {
		if (select == -1)
			select = selection;
		if (cm.haveItem(togosTicket[location][select])) {
			cm.sendYesNo("你有 #t" + togosTicket[location][select] + "# 。你想使用 #t" + togosTicket[location][select] + "# 现在移动吗？");
		} else {
			cm.sendYesNo("费用是" + cost[location] + "金币。你想现在移动吗？");
		}
    } else if (status == 1) {
		if (!cm.haveItem(togosTicket[location][select]) && cm.getMeso() < cost[location]) {
			cm.sendNext("你好像没带够钱啊。");
		} else {
			if (cm.haveItem(togosTicket[location][select])) {
				cm.gainItem(togosTicket[location][select],-1);
			} else {
				cm.gainMeso(-cost[location]);
			}
			cm.warp(togos[location][select]);
		}
		cm.dispose();
    }
}
