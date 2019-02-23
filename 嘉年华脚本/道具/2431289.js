/*
	热力四射礼盒
*/

var status;
var reward = Array(
					Array(1004525, 1, 1),	 //
					Array(1004455, 1, 1),	//
					Array(1004499, 1, 1),   //    
					Array(1004500, 1, 1),    //
					Array(1004514, 1, 1),	//	
					Array(1004526, 1, 1),	//
					Array(1004487, 1, 1),	//
					Array(1004488, 1, 1),	//
					Array(1004482, 1, 1),	//
					Array(1004486, 1, 1),	//
					Array(1004501, 1, 1),	//
					Array(1004508, 1, 1),	//
					Array(1004544, 1, 1),	//
					Array(1004545, 1, 1),	//
					Array(1004546, 1, 1),	//
					Array(1004547, 1, 1),	//
					Array(1004548, 1, 1),	//
					Array(1004513, 1, 1),	//
					Array(1041196, 1, 1),	//
					Array(1004510, 1, 1),	//
					Array(1004511, 1, 1),	//
					Array(1004512, 1, 1),	//
					Array(1000084, 1, 1),	//
					Array(1001105, 1, 1),	//
					Array(1004542, 1, 1),	//
					Array(1004543, 1, 1)	//
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
		im.gainItem(2431289, -1);
		im.gainItem(reward[index][0], quantity);
		im.dispose();
	}
}