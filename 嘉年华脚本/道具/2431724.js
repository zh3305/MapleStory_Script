/*
	漫威勇士箱
*/

var status;
var reward = Array(
					Array(3015100, 1, 1),	 //
					Array(3015109, 1, 1),	//
					Array(3015143, 1, 1),   //    
					Array(3015144, 1, 1),    //
					Array(3015142, 1, 1),	//	
					Array(3015178, 1, 1),	//
					Array(3015181, 1, 1),	//
					Array(3015183, 1, 1),	//
					Array(3015193, 1, 1),	//
					Array(3015197, 1, 1),	//
					Array(3015211, 1, 1),	//
					Array(1052953, 1, 1),	//
					Array(1073078, 1, 1),	//
					Array(1702598, 1, 1),	//
					Array(3015264, 1, 1),	//
					Array(3015225, 1, 1),	//
					Array(3015274, 1, 1),	//
					Array(3015263, 1, 1),	//
					Array(3015236, 1, 1),	//
					Array(3015272, 1, 1),	//
					Array(3015303, 1, 1),	//
					Array(3015315, 1, 1),	//
					Array(3010729, 1, 1),	//
					Array(3015268, 1, 1),	//
					Array(3015269, 1, 1),	//
					Array(3016101, 1, 1),	//
					Array(3015329, 1, 1),	//
					Array(3015338, 1, 1),	//
					Array(3014010, 1, 1),	//
					Array(3015344, 1, 1),	//
					Array(3015029, 1, 1),	//
					Array(1662054, 1, 1),	//
					Array(1672067, 1, 1)	//
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
		im.gainItem(2431724, -1);
		im.gainItem(reward[index][0], quantity);
		im.dispose();
	}
}