var a = 0;
var text;
var selects; //记录玩家的选项
var buynum = 0;
var itemlist = Array(
Array(3010631, 200),
Array(1113069, 100),
Array(1113077, 350), 
Array(1112793, 150),
Array(1142146, 150),
Array(1142610, 300),
Array(2431938, 800),
Array(1702357, 300),
Array(1702217, 300),
Array(1702501, 300),
Array(1002796, 100),
Array(1052168, 100),
Array(1072367, 100),
Array(1082247, 120),
Array(1002877, 120),
Array(1052179, 120),
Array(1003509, 120), 
Array(1052449, 120), 
Array(3010838, 300), 
Array(3010836, 300), 
Array(3014006, 300),
Array(3010879, 300), 
Array(3010854, 280), 
Array(3010579, 240), 
Array(3010748, 280), 
Array(1702467, 200),
Array(1102723, 1200),
Array(1102724, 1200)
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
			text = "#h0#,#e#r欢迎来到兔花花#z2431690#兑换中心，您可以在这里兑换#e#b#z2431690#物品#n#k,请选择你想要兑换的物品\r\n#b";
			for (var i=0; i<itemlist.length; i++) {
				text += "#L" + i + "##i" + itemlist[i] + ":##t" + itemlist[i] + "# - #r"+itemlist[i][1]+"#b#z2431690#  \r\n";
				if (i != 0 && (i+1) % 5 == 0) {
					text += "\r\n";
				}
			}
            cm.sendSimple(text);
        } else if (a == 1) {
			selects = selection;
            cm.sendGetNumber("请输入你请你输入想要兑换的数量\r\n\r\n#r1个需要" + itemlist[selects][1] + "个#bBOSS币#k", 0, 0, 999999);
        } else if (a == 2) {
            buynum = selection;
            cm.sendNext("你想兑换" + buynum + "个#r#i" + itemlist[selects][0] + "##k？\r\n你将使用掉" + (buynum * itemlist[selects][1]) + "金龙鱼。");
        } else if (a == 3) {
            if (cm.haveItem(2431690,buynum * itemlist[selects][1])) {
                cm.gainItem(2431690, -buynum * itemlist[selects][1]);
                cm.gainItem(itemlist[selects][0], buynum);
                cm.sendOk("兑换成功了！");
                cm.dispose();
            } else {
                cm.sendOk("对不起，你没有足够的金龙鱼。");
                cm.dispose();
            }
        }
    }//mode
}//f