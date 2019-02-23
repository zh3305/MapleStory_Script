status = -1;
var itemList = Array(
3994417,// - 红色蜡笔 - 红色蜡笔。
3994418,// - 橙色蜡笔 - 橙色蜡笔。
3994419,// - 黄色蜡笔 - 黄色蜡笔。
3994420,// - 绿色蜡笔 - 绿色蜡笔。
3994421,// - 青色蜡笔 - 青色蜡笔。
3994422// - 蓝色蜡笔 - 蓝色蜡笔。
//3994423// - 紫色蜡笔 - 紫色蜡笔。
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
		im.sendYesNo("你要打开蜡笔箱子吗？");
    } else if(status == 1) {
		var itemid = itemList[Math.floor(Math.random()*itemList.length)];
		
		var item = im.gainGachaponItem(itemid, 1, "装满蜡笔的箱子", 3);
		if (item!=-1) {
			im.gainItem(2431725, -1);
			im.sendOk("恭喜您，获得了1支#b#v"+itemid+"##z"+itemid+"#");
			im.safeDispose(); 
		} else {
			im.sendOk("打开失败，请重试");
			im.safeDispose();
		}
	}
}