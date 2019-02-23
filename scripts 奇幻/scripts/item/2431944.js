var itemList = Array(
	Array(4310036, 3000),
	Array(4000021, 150),
	Array(4001241, 10),
	Array(4001242, 10),
    Array(4033356, 3),
	Array(4000630, 3),
	Array(4004000, 100),
	Array(4004001, 100),
	Array(4004002, 100),
	Array(4004003, 100)
);
function start() {
    if (im.getSpace(4) >= 10) {
        im.gainItem(2431944, -1);
		for(var key in itemList) {
			im.gainItem(itemList[key][0],itemList[key][1]);
		}
        im.playerMessage(-1, "恭喜您获得140级武器制作材料");
        im.worldSpouseMessage(0x20, "[充值奖励] ：恭喜 " + im.getPlayer().getName() + " 从 <140级武器箱> 中获得全部制作材料，真是羡慕！");
	im.dispose();
    } else {
        im.sendOk("请将其他栏预留10个空位以上，我将给予您制作140级武器全部制作材料。");
	im.dispose();
    }
}