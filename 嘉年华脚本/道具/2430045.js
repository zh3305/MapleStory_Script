status = -1;
var itemList = Array(
2432996,
2432994,
2433003,
2432724,
2432635,
2432008,
2432031,
2432030,
2432527,
2432528,
2432295,
2432328,
2431697,
2433006,
2432309,
2432217,
2431825,
2430149,
2433002,
2433001,
2432995,
2432100,
2432736,
2432654,
2432079,
2432085,
2432149,
2431358,
2432450,
2432361,
2430993,
2432359,
2432015,
2431415,
2430312,
2432582,
2430326,
2430327,
2430321,
2430323,
2430339,
2430337,
2430335,
2430333,
2430332,
2430330,
2430348,
2430344,
2430346,
2430341
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
		im.sendSimple("请选择你要换取的骑宠自选箱子：\r\n#r"+text);
    } else if(status == 1) {
		var itemid = itemList[selection];
		var itemnum = Math.floor(Math.random()*1+1);
		var item = im.gainGachaponItem(itemid, itemnum, "骑宠自选箱子", 3);
		im.gainItem(2430045, -1);
		im.sendOk("恭喜您，获得了"+itemnum+"个#b#z"+itemid+"#");
		im.safeDispose();
	}
}
