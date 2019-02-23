var a = 0;
var text;
var selects; //记录玩家的选项
var buynum = 0;
var itemlist = Array(
Array(1132246, 99),// 最高级贝勒德腰带
Array(1122267, 99),// 最高级贝勒德吊坠
Array(1032223, 99),// 最高级贝勒德耳环
Array(1113075, 99),// 最高级贝勒德戒指
Array(1132245, 55), // 高级贝勒德腰带
Array(1122266, 55), // 高级贝勒德吊坠
Array(1032222, 55), // 高级贝勒德耳环
Array(1113074, 55), // 高级贝勒德戒指
Array(3010699, 44), // 贝勒德头部椅子
Array(1132244, 44), // 中级贝勒德腰带
Array(1122265, 44), // 中级贝勒德吊坠
Array(1032221, 44), // 中级贝勒德耳环
Array(1113073, 44), // 中级贝勒德戒指
Array(3010698, 44), // 贝勒德椅子
Array(1132243, 33), // 低级贝勒德腰带
Array(1122264, 33), // 低级贝勒德吊坠
Array(1032220, 33), // 低级贝勒德耳环
Array(1113072, 33)  // 低级贝勒德戒指
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
			text = "亲爱的 #r#h ##k ,可以用 #v4310097# 兑换#e#b贝勒德首饰套装#n#k：\r\n #r#e#L0#进入 #v4310097# 专爆地图（请自己留好空格！）#l\r\n\r\n#b";
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
				cm.warp(863000100);

				return;
			}  else {
			selects = (selection-1);
            
			}
            buynum = 1;
            cm.sendYesNo("你想兑换" + buynum + "个#r#i" + itemlist[selects][0] + "##k？\r\n你将使用掉" + (buynum * itemlist[selects][1]) + "个#v4310097#");
        } else if (a == 2) {
            if (cm.haveItem(4310097,buynum * itemlist[selects][1])) {
                cm.gainItem(4310097, -buynum * itemlist[selects][1]);
                cm.gainItem(itemlist[selects][0], buynum);
				cm.worldSpouseMessage(0x20,"[土豪商城]：" + "玩家 " + cm.getChar().getName() + " 兑换了贝勒德系列首饰,离超神更近了一步！");                
				cm.sendOk("兑换成功了！");
                cm.dispose();
            } else {
                cm.sendOk("对不起，你没有足够的#v4310097#。");
                cm.dispose();
            }
        }
    }//mode
}//f