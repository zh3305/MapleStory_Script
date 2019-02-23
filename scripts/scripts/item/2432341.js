var itemList = Array(
	Array(4310030, 1000),
	Array(4310036, 4000),
	Array(4033356, 50),
	Array(4021012, 30),
	Array(4021011, 30),
	Array(4021010, 30),//时间
	Array(4000082, 300),
	Array(4000124, 40),
	Array(4000630, 10),
	Array(4310015, 3),
	Array(4021019, 3)
);
function start() {
    if (im.getSpace(4) >= 11) {
        im.gainItem(2432341, -1);
		for(var key in itemList) {
			im.gainItem(itemList[key][0],itemList[key][1]);
		}
        im.playerMessage(-1, "恭喜您获得150级防具制作材料");
        im.worldSpouseMessage(0x15, "『充值奖励』:恭喜 " + im.getPlayer().getName() + " 从 <150级防具箱> 中获得全部制作材料，离超神更近了一步！");
	im.dispose();
    } else {
        im.sendOk("请将其他栏预留10个空位以上，我将给予您制作150级防具全部制作材料。");
	im.dispose();
    }
}