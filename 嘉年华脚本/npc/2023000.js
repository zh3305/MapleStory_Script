var status = 0;
var togos = [[220050300, 300000100], [220000000, 211000000], [211040200, 300000100, 211060000], [211000000], [220000000], [240030000]];
var togosName = [["时间通道", "艾琳森林"], ["玩具城", "冰峰雪域"], ["冰雪峡谷Ⅱ", "艾琳森林", "狮子王之城"], ["冰峰雪域"], ["玩具城"], ["龙林入口"]];
var maps = [220000000, 300000100, 211000000, 211060000, 220050300, 240000000];
var cost = [25000, 55000, 45000, 45000, 35000, 55000];
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
		var selects = "";
		for (var i=0; i < togos[location].length; i++) {
			selects += togosName[location][i];
			if (i != togos[location].length -1)
				selects += "、";
		}
		cm.sendNext("你好！我是随时可以去神秘岛大陆危险地区的危险地区快速出租车！现在运营线路为从#m" + cm.getMapId() + "#到#b" + selects + "#k之间！价格是 #b" + cost[location] + "金币#k尽管有点贵，但你一定不会后悔的！");
	}
}

function action(mode, type, selection) {
    if (mode != 1) {
		cm.dispose();
		return;
    }
	status++;

    if (status == 1) {
		var selects = "";
		for (var i=0; i < togos[location].length; i++) {
			selects += "\r\n#L" + i + "#" + togosName[location][i] + "#l";
		}
		cm.sendSimple("#b" + cost[location] + "#k金币支付后，想移动到什么地区呢？#b" + selects);
    } else if (status == 2) {
		if (cm.getMeso() < cost[location]) {
			cm.sendNext("你的金币好像不够。非常抱歉，不支付金币的话，是不能使用出租车的。继续努力打猎，获取金币后再来吧。");
		} else {
			cm.warp(togos[location][selection]);
			cm.gainMeso(-cost[location]);
		}
		cm.dispose();
    }
    
}
