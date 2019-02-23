var itemList = Array(
	Array(4310030, 1000),
	Array(4310036, 3000),
	Array(4033356, 25),
	Array(4021012, 15),
	Array(4021011, 15),
	Array(4021010, 15),
	Array(4000082, 200),
	Array(4000124, 25),
	Array(4310015, 3),
	Array(4021019, 1)
);
function start() {
    if (im.getSpace(4) >= 25) {
        im.gainItem(2431290, -1);
		for(var key in itemList) {
			im.gainItem(itemList[key][0],itemList[key][1]);
		}
        im.playerMessage(-1, "恭喜您获150防具制作材料");
        im.worldSpouseMessage(0x20, "『150防具制作包』 : 恭喜 " + im.getPlayer().getName() + " 从 <150防具制作包> 获得全部材料。");
	im.dispose();
    } else {
        im.sendOk("请将其他栏预留25个空位以上，我将给予您制作150防具全部材料。");
	im.dispose();
    }
}