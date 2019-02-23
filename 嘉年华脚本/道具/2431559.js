function start() {
	if (im.haveItem(1122224) && im.haveItem(1122229)) {
		im.sendSimple("你身上有#i1122224##t1122224#和#i1122229##t1122229#，你想进化哪一个？#b\r\n#L0##i1122224##t1122224##l\r\n#L1##i1122229##t1122229##l");
	} else {
		if(im.haveItem(1122224)) {
			action(1, 0, 0);
		} else if(im.haveItem(1122229)) {
			action(1, 0, 1);
		} else {
			im.sendOk("请确认你背包里有#t1122224#或者#t1122229#。");
			im.dispose();
		}
	}
}

function action(mode, type, selection) {
	var i = -1;
	var chance = -1;
	var gain = -1;
	if (selection == 0) {
		i = 1122224;
		chance = 100;
		gain = 1122229;
	} else if (selection == 1) {
		i = 1122229;
		chance = 90;
		gain = 1122234;
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
			im.gainLockItem(gain, 1, false, 0, "冒险岛勇士之心(飞侠)");
		} else {
			im.sendOk("请确认你背包有足够的空间。");
		}
	} else {
		im.used(1);
		im.sendOk("进化失败。");
	}
	im.dispose();
}
