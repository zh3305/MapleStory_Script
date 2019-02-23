/*
	
*/

var status;
var reward = Array(
					Array(1062165, 1, 1),	 //魔术师战士短裤
					Array(1062166, 1, 1),	//魔术师丹维奇短裤	
					Array(1062167, 1, 1),	//魔术师游侠短裤	
					Array(1062168, 1, 1),   //魔术师刺客短裤       
					Array(1062169, 1, 1),    //魔术师流浪者短裤   
					Array(1003797, 1, 1),	//	高贵战士头盔
					Array(1003798, 1, 1),	//高贵流丹维奇帽
					Array(1003799, 1, 1),	//高贵游侠贝雷帽
					Array(1003800, 1, 1),	//高贵刺客软帽
					Array(1003801, 1, 1),	//高贵流浪者帽
					Array(1042254, 1, 1),	//鹰眼战士盔甲
					Array(1042255, 1, 1),	//鹰眼丹维奇长袍
					Array(1042256, 1, 1),	//鹰眼游侠斗篷
					Array(1042257, 1, 1),	//鹰眼刺客衬衣
					Array(1042258, 1, 1)	//鹰眼流浪者外衣
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
		im.gainItem(2431926, -1);
		im.gainItem(reward[index][0], quantity);
		im.dispose();
	}
}
