/*
	回忆伤害皮肤
*/

var status;
var reward = Array(
					Array(2431966, 1, 1),	 //
					Array(2432084, 1, 1),	//
					//Array(2433104, 1, 1),	//
					Array(2431967, 1, 1),   //    
					Array(2432131, 1, 1),    //
					Array(2432153, 1, 1),	//	
					Array(2432603, 1, 1),	//
					Array(2432638, 1, 1),	//
					Array(2432659, 1, 1),	//
					Array(2432154, 1, 1),	//
					Array(2432637, 1, 1),	//
					Array(2432658, 1, 1),	//
					//Array(2433106, 1, 1),	//
					Array(2432207, 1, 1),	//
					Array(2432354, 1, 1),	//
					Array(2432355, 1, 1),	//
					Array(2432465, 1, 1),	//
					//Array(2433199, 1, 1),	//
					Array(2432479, 1, 1),	//
					Array(2432526, 1, 1),	//
					Array(2432532, 1, 1),	//
					Array(2432592, 1, 1),	//
					Array(2432640, 1, 1),	//
					Array(2432710, 1, 1),	//
					Array(2432836, 1, 1)	
					//Array(2432973, 1, 1),	//
					//Array(2433063, 1, 1),	//
					//Array(2432591, 1, 1),	//
					//Array(2432695, 1, 1),	//
					//Array(2432748, 1, 1),	//
					//Array(2432749, 1, 1),	//
					//Array(2432804, 1, 1),	//
					//Array(2433112, 1, 1),	//
					//Array(2433113, 1, 1),	//
					//Array(2433038, 1, 1),	//
					//Array(2433197, 1, 1),	//
					//Array(2433182, 1, 1),	//
					//Array(2433183, 1, 1)	//
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
		im.gainItem(2431867, -1);
		im.gainItem(reward[index][0], quantity);
		im.dispose();
	}
}