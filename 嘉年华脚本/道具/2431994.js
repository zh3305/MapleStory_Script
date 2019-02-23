status = -1;
var itemList = Array(
2046074,//祥龙单手武器攻击卷99% 
2046075,//祥龙单手武器魔力卷99% 
2046149,//祥龙双手武器攻击卷99%
2612060//祥龙双手武器攻击卷99%
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
		var item = im.gainGachaponItem(itemid, itemnum, "祥龙卷轴箱子", 3);
		im.gainItem(2431994, -1);
		im.sendOk("恭喜您，获得了"+itemnum+"张#b#z"+itemid+"#");
		im.safeDispose();
	}
}