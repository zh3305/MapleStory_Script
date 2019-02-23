function start() {
    if (im.getSpace(4) >= 25) {
        im.gainItem(2431938, -1);
	//im.gainItem(4310030, 5000);
	im.gainItem(4033356, 50);
	im.gainItem(4021012, 30);
	im.gainItem(4021011, 30);
	im.gainItem(4021010, 30);
	im.gainItem(4000082, 400);
	im.gainItem(4000124, 50);
	im.gainItem(4310015, 3);
	im.gainItem(4021019, 1);
        im.playerMessage(-1, "恭喜您获150武器制作材料");
        im.worldSpouseMessage(0x20, "『150武器制作包』 : 恭喜 " + im.getPlayer().getName() + " 从 <150武器制作包> 获得全部材料。");
	im.dispose();
    } else {
        im.sendOk("请将其他栏预留25个空位以上，我将给予您制作150武器全部材料。");
	im.dispose();
    }
}