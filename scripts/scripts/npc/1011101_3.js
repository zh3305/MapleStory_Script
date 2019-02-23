var a = 0;
var text;
var selects; //记录玩家的选项
var buynum = 0;
var itemlist = Array(
Array(2430123, 100), //
Array(1522000, 100), //
Array(1302135, 100), //
Array(1452093, 100), //
Array(1462078, 100), //
Array(1312049, 100), //
Array(1472104, 100), //
Array(1482066, 100), //
Array(1322077, 100), //
Array(1492066, 100), //
Array(1332104, 100), //
Array(1372063, 100), //
Array(1382085, 100), //
Array(1402078, 100), //
Array(1412048, 100), //
Array(1422050, 100), //
Array(1432068, 100), //
Array(1442096, 100),
Array(1342000, 100),
Array(1212001, 100), //
Array(1222001, 100), //
Array(1232001, 100), //
Array(1242001, 100), //
Array(1252047, 100),
Array(2070005, 1),
Array(1352260, 100),
Array(1352270, 100),
Array(1352280, 100),
Array(1352001, 100),
Array(1352101, 100),
Array(1352200, 100),
Array(1352210, 100),
Array(1352220, 100),
Array(1352230, 100),
Array(1352240, 100),
Array(1352250, 100),
Array(1352290, 100),
Array(1352301, 100),
Array(1352401, 100),
Array(1352501, 100),
Array(1352602, 100),
Array(1352701, 100),
Array(1352811, 100),
Array(1352900, 100),
Array(1352910, 100),
Array(1352920, 100),
Array(1352930, 100),
Array(1352940, 100),
Array(1352950, 100),
Array(1352960, 100),
Array(1352970, 100),
Array(2061000, 1),
Array(2060000, 1),
Array(2070007, 64)

);

function start() {
    a = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 1)
            a++;
        else
            a--;
        if (a == -1) {
            cm.dispose();
        } else if (a == 0) {
			text = "亲爱的 #r#h ##k 您好，请点击图片购买物品：\r\n#b注意：请自己留出空格！\r\n";
			for (var i=0; i<itemlist.length; i++) {
				text += "#L" + i + "##i" + itemlist[i] + ":# ";
				if (i != 0 && (i+1) % 5 == 0) {
					text += "\r\n";
				}
			}
            cm.sendSimple(text);
        } else if (a == 1) {
			selects = selection;
            cm.sendGetNumber("请输入你请你输入想要购买的数量\r\n\r\n#r1个需要" + (itemlist[selects][1]*500) + "个#b游戏币#k", 1, 0, 999999);
        } else if (a == 2) {
            buynum = selection;
            cm.sendNext("你想购买" + buynum + "个#r#i" + itemlist[selects][0] + "##k？\r\n你将使用掉" + (buynum * itemlist[selects][1]*500) + "游戏币。");
        } else if (a == 3) {
            if (cm.getPlayer().getMeso() >= buynum * itemlist[selects][1]*500) {
                cm.gainMeso(-buynum * itemlist[selects][1]*500);
                cm.gainItem(itemlist[selects][0], buynum);
				cm.worldSpouseMessage(0x20,"[平民商城]：" + "玩家 " + cm.getChar().getName() + " 用金币购买了新手武器,离超神更近了一步！");                
				cm.sendOk("购买成功了！");
                cm.dispose();
            } else {
                cm.sendOk("对不起，你没有足够的游戏币。或背包空格");
                cm.dispose();
            }
        }
    }//mode
}//f