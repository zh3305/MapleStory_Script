//福袋
function start() {
	if (im.getBossLog("枫叶冒险岛福袋") == 0) {
		if (im.getSpace(4) <= 1) {
			im.sendOk("其他栏位置不足，无法打开福袋");
			im.dispose();
		} else {
			im.gainItem(4310014, 15);
			im.getPlayer().dropMessage(1, "从福袋中领取了15个雪花币");
			im.gainItem(2432529, -1);
			im.setBossLog("枫叶冒险岛福袋");
			im.dispose();
		}
	} else {
		im.getPlayer().dropMessage(1, "您今天已经打开过福袋，不能再次打开");
		im.dispose();
	}
	
}
