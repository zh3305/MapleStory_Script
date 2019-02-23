status = -1;
var itemList = Array(
1212115,
1222109,
1232109,
1402251,
1242116,
1302333,
1312199,
1322250,
1332274,
1342101,
1362135,
1372222,
1382259,
1412177,
1422184,
1432214,
1442268,
1452252,
1462239,
1472261,
1482216,
1492231,
1522138,
1532144,
1552110,
1252093,
1542108,
1262017
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
		im.sendSimple("请选择你要换取的160级武器箱子：\r\n#r"+text);
    } else if(status == 1) {
		var itemid = itemList[selection];
		var itemnum = Math.floor(Math.random()*1+1);
		var item = im.gainGachaponItem(itemid, itemnum, "160级武器自选箱子", 3);
		im.gainItem(2434340, -1);
		im.sendOk("恭喜您，获得了"+itemnum+"个#b#z"+itemid+"#");
		im.safeDispose();
	}
}