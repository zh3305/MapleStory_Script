/*
	热力四射礼盒
*/

var status;
var reward = Array(
					Array(1022248, 1, 1),	 //
					Array(1022247, 1, 1),	//
					Array(1004499, 1, 1),   //    
					Array(1070068, 1, 1),    //
					Array(1071084, 1, 1),	//	
					Array(1073055, 1, 1),	//
					Array(1073056, 1, 1),	//
					Array(1071086, 1, 1),	//
					Array(1073076, 1, 1),	//
					Array(1702576, 1, 1),	//
					Array(1702584, 1, 1),	//
					Array(1702583, 1, 1),	//
					Array(1702570, 1, 1),	//
					Array(1702581, 1, 1),	//
					Array(1702304, 1, 1),	//
					Array(1702566, 1, 1),	//
					Array(1382261, 1, 1),	//
					Array(1702544, 1, 1),	//
					Array(1702587, 1, 1),	//
					Array(1702591, 1, 1),	//
					Array(1702585, 1, 1),	//
					Array(1702586, 1, 1)	//
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
		im.gainItem(2431307, -1);
		im.gainItem(reward[index][0], quantity);
		im.dispose();
	}
}