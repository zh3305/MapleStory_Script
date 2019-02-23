var a = 0;
var text;
var selects; //记录玩家的选项
var buynum = 0;
var itemlist = Array(
Array(1112738, 150), //	外星人之戒指		
Array(1132152, 150), //	外星人之腰带	
Array(1122197, 150), //	外星人之吊坠	
Array(1032142, 150), //	外星人之耳环	
Array(1003540, 100),
Array(1052460, 100),
Array(1082432, 100),
Array(1072664, 100),
Array(1092110, 100),
Array(1092111, 100),
Array(1092109, 100),
Array(1302224, 100),
Array(1532113, 100),
Array(1442181, 100),
Array(1362104, 100),
Array(1452168, 100),
Array(1242086, 100),
Array(1242085, 100),
Array(1432137, 100),
Array(1492149, 100),
Array(1322161, 100),
Array(1372137, 100),
Array(1212084, 100),
Array(1222079, 100),
Array(1462157, 100),
Array(1232079, 100),
Array(1382167, 100),
Array(1422106, 100),
Array(1402150, 100),
Array(1482139, 100),
Array(1472178, 100),
Array(1342070, 100),
Array(1252063, 100),
Array(1312115, 100),
Array(1332192, 100),
Array(1412103, 100),
Array(1522108, 100),
Array(3010355, 100)
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
			text = "亲爱的 #r#h ##k ,可以用 #v4310049# 兑换#e#b外星人系列套装#n#k：\r\n #r#e#L0#进入 #v4310049# 专爆地图（请自己留好空格！）#l\r\n\r\n#b";
			for (var i=1; i<=itemlist.length; i++) {
				text += "#L" + i + "##i" + itemlist[i-1] + ":# ";
				if (i != 0 && (i+1) % 5 == 0) {
					text += "\r\n";
				}
			}
            cm.sendSimple(text);
        } else if (a == 1) {
			if (selection == 0) {
				cm.dispose();
				cm.warp(703001000);

				return;
			}  else {
			selects = (selection-1);
            
			}
            buynum = 1;
            cm.sendYesNo("你想兑换" + buynum + "个#r#i" + itemlist[selects][0] + "##k？\r\n你将使用掉" + (buynum * itemlist[selects][1]) + "个#v4310049#");
        } else if (a == 2) {
            if (cm.haveItem(4310049,buynum * itemlist[selects][1])) {
                cm.gainItem(4310049, -buynum * itemlist[selects][1]);
                cm.gainItem(itemlist[selects][0], buynum);
				cm.worldSpouseMessage(0x20,"[商城]：" + "玩家 " + cm.getChar().getName() + " 兑换了外星人系列套装,离超神更近了一步！");
                cm.sendOk("兑换成功了！");
                cm.dispose();
            } else {
                cm.sendOk("对不起，你没有足够的#v4310049#。");
                cm.dispose();
            }
        }
    }//mode
}//f