function start() {
	if (im.haveItem(1122232) && im.haveItem(1122237)) {
		im.sendSimple("你身上有#i1122232##t1122232#和#i1122237##t1122237#，你想进化哪一个？#b\r\n#L0##i1122232##t1122232##l\r\n#L1##i1122237##t1122237##l");
	} else {
		if(im.haveItem(1122232)) {
			action(1, 0, 0);
		} else if(im.haveItem(1122237)) {
			action(1, 0, 1);
		} else {
			im.sendOk("请确认你背包里有#t1122232#或者#t1122237#。");
			im.dispose();
		}
	}
}

function action(mode, type, selection) {
	var i = -1;
	var chance = -1;
	var gain = -1;
	if (selection == 0) {
		i = 1122232;
		chance = 70;
		gain = 1122237;
	} else if (selection == 1) {
		i = 1122237;
		chance = 50;
		gain = 1122242;
	}
	if (i == -1) {
		im.sendOk("出现未知错误。")
		im.dispose();
		return;
	}
	var random = new java.util.Random();
	if(random.nextInt(100) <= chance) {
		if(im.canHold(i)) {
			im.used(1);
			im.gainItem(i, -1);
			im.gainLockItem(gain, 1, false, 0, "高级冒险岛勇士之心(法师)");
		} else {
			im.sendOk("请确认你背包有足够的空间。");
		}
	} else {
		im.used(1);
		im.sendOk("进化失败。");
	}
	im.dispose();
}
