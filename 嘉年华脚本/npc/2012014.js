var status = -1;
var location = -1;
var select = -1;
var cost;
var maps = [200080200, 200080600, 200081400, 200082100];

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
		var selects = "";
		for (var i=0; i < maps.length; i++) {
			if (maps[i] != cm.getMapId()) {
				cost = 5000;
				if ((location == 1 && i == 2) || (location == 2 && i == 1))
					cost = 0;
				selects += "\r\n#L" + (i+1) + "# #m" + maps[i] + "# (" + cost + " 金币)#l";
			}
		}
		cm.sendSimple("这是为通天塔的旅行者而设的魔法石。你只要支付费用，就能移动至任意的楼层。\r\n(如果持有#b#t4001019##k，可以用#b#t4001019##k代替金币使用。)\r\n#b" + selects);
	}
}

function action(mode, type, selection) {
    if (mode == 1) {
		status++;
	} else {
		if (status == 0 && mode == 0) {
			cm.sendNext("欢迎下次使用。");
		}
		status--;
	}
    if (status == 0) {
		if (select == -1)
			select = selection;
		if ((location == 1 && select == 3) || (location == 2 && select == 2))
			cost = 0;
		cm.sendYesNo("#b#m" + maps[select-1] + "要使用##k进行移动吗？费用为#b" + cost + "金币#k。");
    } else if (status == 1) {
		if(!cm.haveItem(4001019) && cm.getMeso() < cost) {
			cm.sendNext("你的金币不足。很抱歉，如果不支付费用，就无法使用。");
			cm.dispose();
			return;
		}
		if(cm.haveItem(4001019))
			cm.gainItem(4001019, -1);
		else
			cm.gainMeso(-cost);
		cm.warp(maps[select-1],0);
		cm.dispose();
    } else {
		cm.dispose();
	}
}
