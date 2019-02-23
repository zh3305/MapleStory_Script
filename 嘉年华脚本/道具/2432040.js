/*
	热力四射礼盒
*/

var status;
var reward = Array(
					Array(1112155, 1, 1),	 //
					Array(1112267, 1, 1),	 //
					Array(1112160, 1, 1),	 //
					Array(1112272, 1, 1),	 //
					Array(1112286, 1, 1),	 //
					Array(1112174, 1, 1),	//
					Array(1112287, 1, 1),   //    
					Array(1112175, 1, 1),    //
					Array(1112176, 1, 1),	//	
					Array(1112288, 1, 1),	//
					Array(1112191, 1, 1),	//
					Array(1115004, 1, 1),	//
					Array(1112190, 1, 1),	//
					Array(1115003, 1, 1),	//
					Array(1112958, 1, 1),	//
					Array(1112959, 1, 1),	//
					Array(1060187, 1, 1),	//
					Array(1061211, 1, 1),	//
					Array(1052950, 1, 1),	//
					Array(1052951, 1, 1),	//
					Array(1042350, 1, 1),	//
					Array(1040194, 1, 1),	//
					Array(1041196, 1, 1),	//
					Array(1302201, 1, 1),	//
					Array(1102816, 1, 1),	//
					Array(1102813, 1, 1),	//
					Array(1102820, 1, 1),	//
					Array(1102822, 1, 1),	//
					Array(1102842, 1, 1),	//
					Array(1102827, 1, 1),	//
					Array(1102823, 1, 1)	//
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
		im.gainItem(2432040, -1);
		im.gainItem(reward[index][0], quantity);
		im.dispose();
	}
}