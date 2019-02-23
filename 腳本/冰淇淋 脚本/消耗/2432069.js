status = -1;
var itemList = Array(
1132174,//-暴君西亚戴斯腰带-(无描述)
1132175,//-暴君赫尔梅斯腰带-(无描述)
1132176,//-暴君凯伦腰带-(无描述)
1132177,//-暴君利卡昂腰带-(无描述)
1132178,//-暴君阿尔泰腰带-(无描述)
1102481,//-暴君西亚戴斯披风-(无描述)
1102482,//-暴君赫尔梅斯披风-(无描述)
1102483,//-暴君凯伦披风-(无描述)
1102484,//-暴君利卡昂披风-(无描述)
1102485,//-暴君阿尔泰披风-(无描述)
1082543,//-暴君西亚戴斯手套-(无描述)
1082544,//-暴君赫尔梅斯手套-(无描述)
1082545,//-暴君凯伦手套-(无描述)
1082546,//-暴君利卡昂手套-(无描述)
1082547,//-暴君阿尔泰手套-(无描述)
1072743,//-暴君西亚戴斯靴-(无描述)
1072744,//-暴君赫尔梅斯靴-(无描述)
1072745,//-暴君凯伦靴-(无描述)
1072746, //- 暴君利卡昂靴 - (无描述)
1072747//- 暴君阿尔泰靴 - (无描述)
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
		im.sendSimple("请选择你要的：\r\n#r"+text);
    } else if(status == 1) {
		var itemid = itemList[selection];
		var itemnum = Math.floor(Math.random()*1+1);
		var item = im.gainGachaponItem(itemid, itemnum, "暴君防具自选箱子", 3);
		im.gainItem(2432069, -1);
		im.sendOk("恭喜您，获得了"+itemnum+"个#b#z"+itemid+"#");
		im.dispose();
	}
}