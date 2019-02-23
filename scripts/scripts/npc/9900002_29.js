var a = 0;
var text;
var selects; //记录玩家的选项
var buynum = 0;
var itemlist = Array(
Array(1212063, 280), 
Array(1222058, 280), 
Array(1232057, 280), 
Array(1242060, 280), 
Array(1242061, 280), 
Array(1302275, 280),
Array(1312153, 280),
Array(1322203, 280),
Array(1332225, 280),
Array(1342082, 280),
Array(1362090, 280),
Array(1372177, 280),
Array(1382208, 280),
Array(1402196, 280),
Array(1412135, 280),
Array(1422140, 280),
Array(1432167, 280),
Array(1442223, 280),
Array(1452205, 280),
Array(1462193, 280),
Array(1472214, 280),
Array(1482168, 280),
Array(1492179, 280),
Array(1522094, 280),
Array(1532098, 280),
Array(1252015, 280)
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
			text = "#h0#,您可以在这里兑换#e#b极品卷轴#n#k,请选择你想要购买的物品\r\n#b";
			for (var i=0; i<itemlist.length; i++) {
				text += "#L" + i + "##i" + itemlist[i] + ":##t" + itemlist[i] + "# - #r"+itemlist[i][1]+"#b雪花币  \r\n";
				if (i != 0 && (i+1) % 5 == 0) {
					text += "\r\n";
				}
			}
            cm.sendSimple(text);
        } else if (a == 1) {
			selects = selection;
            cm.sendGetNumber("请输入你请你输入想要购买的数量\r\n\r\n#r1个需要" + itemlist[selects][1] + "个#b雪花币#k", 0, 0, 999999);
        } else if (a == 2) {
            buynum = selection;
            cm.sendNext("你想购买" + buynum + "个#r#i" + itemlist[selects][0] + "##k？\r\n你将使用掉" + (buynum * itemlist[selects][1]) + "雪花币。");
        } else if (a == 3) {
            if (cm.haveItem(4310014,buynum * itemlist[selects][1])) {
                cm.gainItem(4310014, -buynum * itemlist[selects][1]);
                cm.gainItem(itemlist[selects][0], buynum);
                cm.sendOk("购买成功了！");
                cm.dispose();
            } else {
                cm.sendOk("对不起，你没有足够的雪花币。");
                cm.dispose();
            }
        }
    }//mode
}//f