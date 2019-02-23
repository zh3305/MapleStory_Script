/*
	雪花精灵箱子
*/

var status;
var reward = Array(
					Array(1132246, 1, 1),	 //
					Array(1122267, 1, 1),	//
					Array(1032223, 1, 1),   //    
					Array(1113075, 1, 1)    //
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
		if (!im.haveSpace(2)) {
			im.sendOk("消耗栏空间不足，请整理后再打开");
			im.dispose();
			return;
		}
		var index = Math.floor(Math.random() * reward.length);
		var quantity = Math.floor(Math.random() * reward[index][2] + reward[index][1]);
		im.gainItem(2430217, -1);
		im.gainItem(reward[index][0], quantity);
		im.dispose();
	}
}