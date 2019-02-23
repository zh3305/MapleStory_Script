//巨大福袋
function start() {
	if (im.getPQLog("回忆巨大福袋") == 0) {
		if (im.getSpace(4) <= 1) {
			im.sendOk("其他栏位置不足，无法打开福袋");
			im.dispose();
		} else {
			im.gainItem(4033248, 100);
			im.getPlayer().dropMessage(1, "从福袋中领取了100个金色枫叶,可找“可可熊运营员NPC”兑换100兔币");
			im.gainItem(2431481, -1);
			im.setPQLog("回忆巨大福袋");
			im.dispose();
		}
	} else {
		im.getPlayer().dropMessage(1, "您今天已经打开过巨大福袋，不能再次打开");
		im.dispose();
	}
	
}