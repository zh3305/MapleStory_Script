var a = 0;
var text;
var selects; //记录玩家的选项
var buynum = 0;
var itemlist = Array(
Array(1302212, 100),
Array(1442173, 100),
Array(1532073, 100),
Array(1452165, 100),
Array(1432135, 100),
Array(1242075, 100),
Array(1492138, 100),
Array(1322154, 100),
Array(1522068, 100),
Array(1372131, 100),
Array(1212068, 100),
Array(1222063, 100),
Array(1462156, 100),
Array(1232070, 100),
Array(1382160, 100),
Array(1422105, 100),
Array(1402145, 100),
Array(1482138, 100),
Array(1472177, 100),
Array(1312114, 100),
Array(1332186, 100),
Array(1412102, 100),
Array(1362060, 100)
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
			text = "亲爱的 #r#h ##k ,可以用 #v4000375# 兑换#e#b紫金枫叶武器#n#k：\r\n #r#e#L0#进入 #v4000375# 专爆地图（请自己留好空格！）#l\r\n\r\n#b";
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
				cm.warp(540020100);

				return;
			}  else {
			selects = (selection-1);
            
			}
            buynum = 1;
            cm.sendYesNo("你想兑换" + buynum + "个#r#i" + itemlist[selects][0] + "##k？\r\n你将使用掉" + (buynum * itemlist[selects][1]) + "个#v4000375#");
        } else if (a == 2) {
            if (cm.haveItem(4000375,buynum * itemlist[selects][1])) {
                cm.gainItem(4000375, -buynum * itemlist[selects][1]);
                cm.gainItem(itemlist[selects][0], buynum);
				cm.worldSpouseMessage(0x20,"[土豪商城]：" + "玩家 " + cm.getChar().getName() + " 兑换了紫金枫叶武器,离超神更近了一步！");
				cm.sendOk("兑换成功了！");
                cm.dispose();
            } else {
                cm.sendOk("对不起，你没有足够的#v4000375#。");
                cm.dispose();
            }
        }
    }//mode
}//f