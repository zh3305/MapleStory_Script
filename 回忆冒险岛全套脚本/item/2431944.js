//140武器
var itemList = Array(
	Array(4310036, 3000),
	Array(4000021, 150),
	Array(4001241, 8),
	Array(4001242, 8),
	Array(4004000, 75),
	Array(4004001, 75),
	Array(4004002, 75),
	Array(4004003, 75)
);
function start() {
    if (im.getSpace(4) >= 25) {
        im.gainItem(2431944, -1);
		for(var key in itemList) {
			im.gainItem(itemList[key][0],itemList[key][1]);
		}
        im.playerMessage(-1, "恭喜您获140武器制作材料");
        im.worldSpouseMessage(0x20, "『140武器制作包』 : 恭喜 " + im.getPlayer().getName() + " 从 <140武器制作包> 获得全部材料。");
	im.dispose();
    } else {
        im.sendOk("请将其他栏预留25个空位以上，我将给予您制作140武器全部材料。");
	im.dispose();
    }
}