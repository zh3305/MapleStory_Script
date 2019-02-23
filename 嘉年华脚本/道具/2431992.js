status = -1;
var itemList = Array(
1242042,
1332130,
1362019,
1472122,
1232014,
1302152,
1312065,
1322096,
1402095,
1412065,
1422066,
1432086,
1442116,
1542015,
1452111,
1462099,
1522018,
1222014,
1242014,
1482084,
1492085,
1532018,
1212014,
1372084,
1382104,
1552015,
1252014,
1262015
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
		im.sendSimple("请选择你要换取的140级武器箱子：\r\n#r"+text);
    } else if(status == 1) {
		var itemid = itemList[selection];
		var itemnum = Math.floor(Math.random()*1+1);
		var item = im.gainGachaponItem(itemid, itemnum, "140级武器自选箱子", 3);
		im.gainItem(2431992, -1);
		im.sendOk("恭喜您，获得了"+itemnum+"个#b#z"+itemid+"#");
		im.safeDispose();
	}
}