var a = 0;
var text;
var selects; //记录玩家的选项
var buynum = 0;
var itemlist = Array(
Array(1122262, 100), //	革命吊坠	
Array(1132242, 100), //	革命腰带
Array(1003946, 100),
Array(1052647, 100),
Array(1082540, 100),
Array(1102612, 100),
Array(1072853, 100),
Array(1462204, 100),
Array(1412147, 100),
Array(1532109, 100),
Array(1362101, 100),
Array(1472226, 100),
Array(1302289, 100),
Array(1242080, 100),
Array(1432178, 100),
Array(1492190, 100),
Array(1372188, 100),
Array(1212079, 100),
Array(1222074, 100),
Array(1442234, 100),
Array(1522105, 100),
Array(1232074, 100),
Array(1382222, 100),
Array(1332238, 100),
Array(1312165, 100),
Array(1322215, 100),
Array(1482179, 100),
Array(1402210, 100),
Array(1452216, 100),
Array(1252046, 100),
Array(1422152, 100)
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
			text = "亲爱的 #r#h ##k ,可以用 #v4310088# 兑换#e#b革命系列套装#n#k：\r\n #r#e#L0#进入 #v4310088# 专爆地图（请自己留好空格！）#l\r\n\r\n#b";
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
				cm.warp(270010500);

				return;
			}  else {
			selects = (selection-1);
            
			}
            buynum = 1;
            cm.sendYesNo("你想兑换" + buynum + "个#r#i" + itemlist[selects][0] + "##k？\r\n你将使用掉" + (buynum * itemlist[selects][1]) + "个#v4310088#");
        } else if (a == 2) {
            if (cm.haveItem(4310088,buynum * itemlist[selects][1])) {
                cm.gainItem(4310088, -buynum * itemlist[selects][1]);
                cm.gainItem(itemlist[selects][0], buynum);
  				cm.worldSpouseMessage(0x20,"[土豪商城]：" + "玩家 " + cm.getChar().getName() + " 兑换了革命系列套装,离超神更近了一步！");              
				cm.sendOk("兑换成功了！");
                cm.dispose();
            } else {
                cm.sendOk("对不起，你没有足够的#v4310088#。");
                cm.dispose();
            }
        }
    }//mode
}//f