function start() {
	if(im.haveItem(4033755)) {
		if(im.canHold(1122224)) {
			im.gainItem(4033755, -1);
			im.used(1);
			im.gainItem(1122224, 1);
		} else {
			im.sendOk("请确认你背包有足够的空间。");
		}
	} else {
		im.sendOk("请确认你背包里有#t4033755#。");
	}
	im.dispose();
}