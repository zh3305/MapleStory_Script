function start() {
    if (im.haveItem(2432005, 1) == true) {
        im.gainItem(4310088, 5);
        im.gainItem(2432005, -1);
        im.playerMessage(-1, "恭喜您获得5个RED币");
        im.worldSpouseMessage(0x20, "『幸运硬币箱』 : 恭喜 " + im.getPlayer().getName() + " 从 <幸运硬币箱中> 获得 5 个RED币。");
	im.dispose();
    } else {
        im.sendOk("不足");
	im.dispose();
    }
}