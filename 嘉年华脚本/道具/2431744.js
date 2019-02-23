status = -1;
var itemList = Array(
Array(2046996,10),
Array(2046997,10),
Array(2047818,10),
Array(2612059,10)
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
			text+="#L"+i+"##v"+itemList[i][0]+"##z"+itemList[i][0]+"#  数量：#r"+itemList[i][1]+"#k张#l\r\n";
		}
		im.sendSimple("请选择你要的惊人武器卷轴：\r\n#r"+text);
    } else if(status == 1) {
		var itemid = itemList[selection][0];
		var itemnum = itemList[selection][1];
		var item = im.gainGachaponItem(itemid, itemnum, "自选惊人卷轴", 3);
		im.gainItem(2431744, -1);
		im.sendOk("恭喜您，获得了"+itemnum+"个#b#z"+itemid+"#");
		im.safeDispose();
	}
}