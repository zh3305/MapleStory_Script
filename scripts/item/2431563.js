function start() {
	if (im.haveItem(1122233) && im.haveItem(1122238)) {
		im.sendSimple("你身上有#i1122233##t1122233#和#i1122238##t1122238#，你想进化哪一个？#b\r\n#L0##i1122233##t1122233##l\r\n#L1##i1122238##t1122238##l");
	} else {
		if(im.haveItem(1122233)) {
			action(1, 0, 0);
		} else if(im.haveItem(1122238)) {
			action(1, 0, 1);
		} else {
			im.sendOk("请确认你背包里有#t1122233#或者#t1122238#。");
			im.dispose();
		}
	}
}

function action(mode, type, selection) {
	var i = -1;
	var chance = -1;
	var gain = -1;
	if (selection == 0) {
		i = 1122233;
		chance = 100;
		gain = 1122238;
	} else if (selection == 1) {
		i = 1122238;
		chance = 50;
		gain = 1122243;
	}
	if (i == -1) {
		im.sendOk("出现未知错误。")
		im.dispose();
		return;
	}
	var random = new java.util.Random();
	if(random.nextInt(1000) <= chance) {
		if(im.canHold(i)) {
			//im.used(1);
			im.gainItem(i, -1);
			im.gainLockItem(gain, 1, false, 0, "高级冒险岛勇士之心(弓箭手)");
		} else {
			im.sendOk("请确认你背包有足够的空间。");
		}
	} else {
		//im.used(1);
		im.sendOk("进化失败。");
	}
	im.dispose();
}