/*
	活跃度礼盒 5阶
*/

var status;
var maxtimes = 3;
var reward = Array(
					//Array(2431988, 1, 1, 10),
					//Array(2028175, 1, 1, 20),		// 宿命正义卷轴箱
					Array(2049300, 2, 5, 30),		// 高级装备强化卷轴
					//Array(2048307, 2, 5, 40),		// 特殊附加潜能附加卷轴
					Array(4310030, 10, 20, 45),		// 运动会币
					Array(4310036, 50, 500, 50),		// 征服者币
					//Array(4310058, 3, 5, 55),		//麦格拉斯
					Array(5064000, 1, 3, 60),		// 防爆卷轴
					Array(2616204, 1, 5, 65),		// 红河的防御具 力量卷轴 10%
					Array(2616205, 1, 5, 70),		// 红河的防御具 智力卷轴 10%
					Array(2616207, 1, 5, 75),		// 红河的防御具运气卷轴 10%
					Array(2616208, 1, 5, 80),		// 红河的防御具 敏捷性卷轴 10%
					Array(5062000, 1, 3, 90),		// 神奇魔方
					//Array(5062009, 1, 2, 95),		// 超级神奇魔方
					//Array(2049323, 1, 1, 100)		// 高级装备强化卷轴 无损
					);

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode <= 0) {
		im.dispose();
		return;
	} else {
		if (mode == 1) {
			status++;
		} else {
			status--;
		}
	}

	if (status == 0) {
		if (im.getSpace(2) < maxtimes) {
			im.sendOk("消耗栏空间不足，请整理后再打开");
			im.dispose();
			return;
		} else if (im.getSpace(5) < maxtimes) {
			im.sendOk("特殊栏空间不足，请整理后再打开");
			im.dispose();
			return;
		}
		var togain = new Array();
		for (; maxtimes > 0; maxtimes--) {
			var chance = Math.floor(Math.random() * 999999);
			for (var i in reward) {
				if (Math.floor(chance / 999999 * 100) < reward[i][3] && !contains(togain, reward[i][0])) {
					var quantity = Math.floor(Math.random() * (reward[i][2] - reward[i][1]) + reward[i][1]);
					togain.push(new Array(reward[i][0], quantity));
					break;
				}
			}
		}
		im.gainItem(2431981, -1);
		var message = "[活跃度礼包] : [" + im.getPlayer().getName() + "]从活跃度5阶礼包中获得";
		for (var item in togain) {
			message += "[" + im.getItemName(togain[item][0]) + togain[item][1] + "个] ";
			im.gainItem(togain[item][0], togain[item][1]);
		}
		im.showEffect(true, "Yut/goal");
		im.worldSpouseMessage(0x15, message);
		im.dispose();
	}
}

function contains(togain, itemid) {
	for (var i in togain) {
		if (togain[i][0] == itemid) {
			return true;
		}
	}
	return false;
}