status = -1;
var itemList = Array(
1004422,
1004423,
1004424,
1004425,
1004426,
1102775,
1102794,
1102795,
1102796,
1102797,
1073030,
1073032,
1073033,
1073034,
1073035,
1082636,
1082637,
1082638,
1082639,
1082640,
1152174,
1152176,
1152177,
1152178,
1152179,
1052882,
1052887,
1052888,
1052889,
1052890
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
		im.sendSimple("请选择你要换取的160级埃苏莱布斯箱子：\r\n#r"+text);
    } else if(status == 1) {
		var itemid = itemList[selection];
		var itemnum = Math.floor(Math.random()*1+1);
		var item = im.gainGachaponItem(itemid, itemnum, "160级埃苏莱布斯箱子", 3);
		im.gainItem(2431991, -1);
		im.sendOk("恭喜您，获得了"+itemnum+"个#b#z"+itemid+"#");
		im.safeDispose();
	}
}