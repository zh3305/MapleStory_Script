status = -1;
var itemList = Array(
//Array(2048817,10),
//Array(2048818,10),
Array(1212063,1),
Array(1222058,1),
Array(1232057,1),
Array(1242060,1),
Array(1242061,1),
Array(1302275,1),
Array(1312153,1),
Array(1322203,1),
Array(1332225,1),
Array(1342082,1),
Array(1362090,1),
Array(1372177,1),
Array(1382208,1),
Array(1402196,1),
Array(1412135,1),
Array(1422140,1),
Array(1432167,1),
Array(1442223,1),
Array(1452205,1),
Array(1472214,1),
Array(1482168,1),
Array(1492179,1),
Array(1522094,1),
Array(1532098,1),
Array(1582016,1),
Array(1252015,1),
Array(1542063,1),
Array(1552063,1),
Array(1552015,1)

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
		im.sendSimple("请选择你要的武器：\r\n#r"+text);
    } else if(status == 1) {
		var itemid = itemList[selection][0];
		var itemnum = itemList[selection][1];
		var item = im.gainGachaponItem(itemid, itemnum, "自选X卷轴", 3);
		im.gainItem(2434666, -1);
		im.sendOk("恭喜您，获得了"+itemnum+"个#b#z"+itemid+"#");
		im.safeDispose();
	}
}