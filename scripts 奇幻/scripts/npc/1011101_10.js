var a = 0;
var text;
var selects; //记录玩家的选项
var buynum = 0;
var itemlist = Array(
Array(1003561, 200),
Array(1052467, 200),
Array(1072672, 200),
Array(1082438, 200),
Array(1102467, 200),
Array(1412123, 300),
Array(1532082, 300),
Array(1452190, 300),
Array(1362075, 300),
Array(1432151, 300),
Array(1302249, 300),
Array(1322182, 300),
Array(1492163, 300),
Array(1522079, 300),
Array(1372162, 300),
Array(1212040, 300),
Array(1222040, 300),
Array(1462178, 300),
Array(1382193, 300),
Array(1442203, 300),
Array(1422125, 300),
Array(1402174, 300),
Array(1482152, 300),
Array(1472198, 300),
Array(1312136, 300),
Array(1252045, 300),
Array(1332207, 300)
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
			text = "亲爱的 #r#h ##k ,可以用 #v4000241# 兑换#e#b风暴系列套装#n#k：\r\n #r#e#L0#进入 #v4000241# 专爆地图（请自己留好空格！）#l\r\n\r\n#b";
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
				cm.warp(240010400);

				return;
			}  else {
			selects = (selection-1);
            
			}
            buynum = 1;
            cm.sendYesNo("你想兑换" + buynum + "个#r#i" + itemlist[selects][0] + "##k？\r\n你将使用掉" + (buynum * itemlist[selects][1]) + "个#v4000241#");
        } else if (a == 2) {
            if (cm.haveItem(4000241,buynum * itemlist[selects][1])) {
                cm.gainItem(4000241, -buynum * itemlist[selects][1]);
                cm.gainItem(itemlist[selects][0], buynum);
 				cm.worldSpouseMessage(0x20,"[平民商城]：" + "玩家 " + cm.getChar().getName() + " 兑换了风暴系列套装,离超神更近了一步！");               
				cm.sendOk("兑换成功了！");
                cm.dispose();
            } else {
                cm.sendOk("对不起，你没有足够的#v4000241#。");
                cm.dispose();
            }
        }
    }//mode
}//f