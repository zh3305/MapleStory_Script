var itemList = Array(
	Array(4310030, 2000),
	Array(4310036, 5000),
	Array(4033356, 50),
	Array(4021012, 30),
	Array(4021011, 30),
	Array(4021010, 30),
	Array(4000082, 300),
	Array(4000124, 50),
	Array(4000630, 15),
	Array(4310015, 3),
	Array(4021019, 3)
);
function start() {
    if (im.getSpace(4) >= 11) {
        im.gainItem(2431938, -1);
		for(var key in itemList) {
			im.gainItem(itemList[key][0],itemList[key][1]);
		}
        im.playerMessage(-1, "恭喜您获150武器制作材料");
        im.worldSpouseMessage(0x20, "[充值奖励] ：恭喜 " + im.getPlayer().getName() + " 从 <150武器制作包> 中获得全部材料，真是羡慕！");
	im.dispose();
    } else {
        im.sendOk("请将其他栏预留10个空位以上，我将给予您制作150武器全部材料。");
	im.dispose();
    }
}