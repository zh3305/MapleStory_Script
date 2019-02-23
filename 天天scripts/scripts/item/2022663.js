//温暖的冬季箱子
var itemList = Array(
	Array(4310066, 500),
	Array(4000517, 1),
	Array(2431945, 1),
	Array(5062002, 10),
	Array(5062500, 10),
	Array(5064000, 10)
);
function start() {
    if (im.getSpace(4) >= 1 && im.getSpace(5) >= 3 && im.getSpace(2) >= 1) {
        im.gainItem(2022663, -1);
		for(var key in itemList) {
			im.gainItem(itemList[key][0],itemList[key][1]);
		}
        im.playerMessage(-1, "恭喜您获得10个高级神奇魔方、10个大师附加神奇魔方、10张防爆卷轴、500个冬季限量币、1个140级防具箱子、1条黄金鱼");
       //im.worldSpouseMessage(0x20, "『140武器制作包』 : 恭喜 " + im.getPlayer().getName() + " 从 <140武器制作包> 获得全部材料。");
	im.dispose();
    } else {
        im.sendOk("您的包裹空间不足，请整理一下包裹吧~");
	im.dispose();
    }
}