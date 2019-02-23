//巨大福袋
function start() {
	if (im.getBossLog("校园巨大福袋") == 0) {
		if (im.getSpace(4) <= 1) {
			im.sendOk("其他栏位置不足，无法打开福袋");
			im.dispose();
		} else {
			im.gainItem(4310014, 25);
			im.getPlayer().dropMessage(1, "从巨大福袋中领取了25个雪花币");
			im.gainItem(2431481, -1);
			im.setBossLog("校园巨大福袋");
			im.dispose();
		}
	} else {
		im.getPlayer().dropMessage(1, "您今天已经打开过巨大福袋，不能再次打开");
		im.dispose();
	}
	
}
