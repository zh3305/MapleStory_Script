status = -1;
var itemList = Array(
2047818,// - 惊人的双手武器攻击力卷轴100% - 在双手武器上附加提升攻击力的属性。
2046996,// - 惊人的单手武器攻击力卷轴100% - 对单手武器增加攻击力提高属性。
2046997,// - 惊人的单手武器魔力卷轴100% - 对单手武器增加魔力提高属性。
2612059// - 惊人的双手武器魔力卷轴100% - 对双手武器增加魔力提高属性。
);

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
       if (mode == 0 && status == 0) {
			im.dispose();
			return;
		}
        status--;
    }
    if (status == 0) {
        var text = "";
		for(var i=0; i<itemList.length; i++) {
			text+="#L"+i+"##v"+itemList[i]+"##z"+itemList[i]+"##l\r\n";
		}
		im.sendSimple("请选择你要换取的卷轴：\r\n#r"+text);
    } else if(status == 1) {
		var itemid = itemList[selection];
		var itemnum = Math.floor(Math.random()*1+1);
		var item = im.gainGachaponItem(itemid, itemnum, "惊人的箱子", 3);
		im.gainItem(2431995, -1);
		im.sendOk("恭喜您，获得了"+itemnum+"张#b#z"+itemid+"#");
		im.safeDispose();
	}
}