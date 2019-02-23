var a = 0;
var text;
var selects; //记录玩家的选项
var buynum = 0;
var itemlist = Array(
//Array(4000463,100), // 宿命正义饰品敏捷卷轴 100% // 为饰品增加敏捷属性。
Array(4000463,50)// 宿命正义饰品运气卷轴 100% // 为饰品增加运气属性。
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
			text = "#h0#,您可以在这里兑换#e#b中介币#n#k,50个雪花币兑换1个中介币\r\n#b";
			for (var i=0; i<itemlist.length; i++) {
				text += "#L" + i + "##i" + itemlist[i] + ":##t" + itemlist[i] + "# - #r"+itemlist[i][1]+"#b雪花币  \r\n";
				if (i != 0 && (i+1) % 5 == 0) {
					text += "\r\n";
				}
			}
            cm.sendSimple(text);
        } else if (a == 1) {
			selects = selection;
            cm.sendGetNumber("请输入你请你输入想要兑换的数量\r\n\r\n#r需要" + itemlist[selects][1] + "个#b雪花币#k", 0, 0, 999999);
        } else if (a == 2) {
            buynum = selection;
            cm.sendNext("你想兑换" + buynum + "个#r#i" + itemlist[selects][0] + "##k？\r\n你将使用掉" + (buynum * itemlist[selects][1]) + "雪花币。");
        } else if (a == 3) {
            if (cm.haveItem(4310014,buynum * itemlist[selects][1])) {
                cm.gainItem(4310014, -buynum * itemlist[selects][1]);
                cm.gainItem(itemlist[selects][0], buynum);
                cm.sendOk("兑换成功了！");
                cm.dispose();
            } else {
                cm.sendOk("对不起，你没有足够的雪花币。");
                cm.dispose();
            }
        }
    }//mode
}//f