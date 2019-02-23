status = -1;
var itemList = Array(
3010828,// - 木星椅子
3010832,// - 太阳椅子
3010193,// - 
3010528,// -
3010620,// - 
3010659,// - 
3010688,// -
3010715,// -
3010716,// -
3010717,// -
3010696,// -
3010758,// -
3012018,// -
3010782,// -
3010781,// -
3010835,// -
3010843,// -
3010842,// -
3010965,// -
3015014,// -
3015001,// -
3010935// - 
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
		im.sendYesNo("你要打开绝板椅子吗？");
    } else if(status == 1) {
		var itemid = itemList[Math.floor(Math.random()*itemList.length)];
		
		var item = im.gainGachaponItem(itemid, 1, "装满绝板椅子的箱子", 3);
		if (item!=-1) {
			im.gainItem(2431725, -1);
			im.sendOk("恭喜您，获得了1个#b#v"+itemid+"##z"+itemid+"#");
			im.safeDispose(); 
		} else {
			im.sendOk("打开失败，请重试");
			im.safeDispose();
		}
	}
}