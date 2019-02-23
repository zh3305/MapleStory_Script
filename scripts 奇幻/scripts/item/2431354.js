var itemList = Array(2613000, // 星火单手武器攻击力卷轴 // 为单手武器附加提升攻击力的属性。
2613001, // 星火单手武器魔法力卷轴 // 为单手武器附加提升魔力的属性。
2612010 // 星火双手武器攻击力卷轴 // 为双手武器附加提升攻击力的属性。
);
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        im.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
	if (status == 0) {
		im.sendYesNo("打开箱子可随机获得#r星火武器卷轴#k，在打开箱子前，请确认您的消耗栏至少有一格的位置？是否打开？");
	} else if (status == 1) {
		var itemid = itemList[Math.floor(Math.random() * itemList.length)];
		im.gainItem(itemid, 1);
		im.gainItem(2431354, -1);
		var ii = im.getItemInfo();
		im.sendOk("恭喜你获得了#b#t"+itemid+"##k.");
		im.worldSpouseMessage(0x20,"『星火幸运箱子』 ：恭喜玩家 "+ im.getChar().getName() +" 获得了【"+ii.getName(itemid)+"】");
		im.dispose();
	}
}