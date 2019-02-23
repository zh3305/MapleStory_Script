status = -1;
var itemList = Array(
1152108,
1003172,
1102275,
1082295,
1052314,
1072485,
1003173,
1052315,
1072486,
1082296,
1102276,
1152110,
1152111,
1003174,
1102277,
1082297,
1052316,
1072487,
1152112,
1003175,
1102278,
1082298,
1052317,
1072488,
1152113,
1003176,
1102279,
1082299,
1052318,
1072489
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
		im.sendSimple("请选择你要换取的140级装备箱子：\r\n#r"+text);
    } else if(status == 1) {
		var itemid = itemList[selection];
		var itemnum = Math.floor(Math.random()*1+1);
		var item = im.gainGachaponItem(itemid, itemnum, "140级装备箱子", 3);
		im.gainItem(2431993, -1);
		im.sendOk("恭喜您，获得了"+itemnum+"个#b#z"+itemid+"#");
		im.safeDispose();
	}
}