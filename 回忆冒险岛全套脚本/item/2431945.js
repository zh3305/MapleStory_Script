//140防具
var itemList = Array(
	Array(4310036, 2000),
	Array(4000021, 100),
	Array(4001241, 5),
	Array(4001242, 5),
	Array(4004000, 50),
	Array(4004001, 50),
	Array(4004002, 50),
	Array(4004003, 50)
);
function start() {
    if (im.getSpace(4) >= 25) {
        im.gainItem(2431945, -1);
		for(var key in itemList) {
			im.gainItem(itemList[key][0],itemList[key][1]);
		}
        im.playerMessage(-1, "恭喜您获140防具制作材料");
        im.worldSpouseMessage(0x20, "『140防具制作包』 : 恭喜 " + im.getPlayer().getName() + " 从 <140防具制作包> 获得全部材料。");
	im.dispose();
    } else {
        im.sendOk("请将其他栏预留25个空位以上，我将给予您制作140防具全部材料。");
	im.dispose();
    }
}