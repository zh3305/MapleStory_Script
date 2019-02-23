function start() {
	if (im.haveItem(1122231) && im.haveItem(1122236)) {
		im.sendSimple("你身上有#i1122231##t1122231#和#i1122236##t1122236#，你想进化哪一个？#b\r\n#L0##i1122231##t1122231##l\r\n#L1##i1122236##t1122236##l");
	} else {
		if(im.haveItem(1122231)) {
			action(1, 0, 0);
		} else if(im.haveItem(1122236)) {
			action(1, 0, 1);
		} else {
			im.sendOk("请确认你背包里有#t1122231#或者#t1122236#。");
			im.dispose();
		}
	}
}

function action(mode, type, selection) {
	var i = -1;
	var chance = -1;
	var gain = -1;
	if (selection == 0) {
		i = 1122231;
		chance = 70;
		gain = 1122236;
	} else if (selection == 1) {
		i = 1122236;
		chance = 50;
		gain = 1122241;
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
			im.gainLockItem(gain, 1, false, 0, "高级冒险岛勇士之心(战士)");
		} else {
			im.sendOk("请确认你背包有足够的空间。");
		}
	} else {
		im.used(1);
		im.sendOk("进化失败。");
	}
	im.dispose();
}
