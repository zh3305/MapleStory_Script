var a = 0;
var text;
var selects; //记录玩家的选项
var buynum = 0;
var itemlist = Array(
Array(2210037, 400), 
Array(2210036, 400), 
Array(2210035, 400), 
Array(2210039, 400), 
Array(2210038, 400), 
Array(2213059, 400), 
Array(2213057, 400), 
Array(2213058, 400), 
Array(2213056, 400), 
Array(2213055, 400), 
Array(2213054, 400), 
Array(2213053, 400), 
Array(2213052, 400), 
Array(2213051, 400), 
Array(2213050, 400), 
Array(2213048, 400), 
Array(2213049, 400), 
Array(2213011, 400), 
Array(2213016, 400), 
Array(2213060, 400), 
//Array(2213043, 400), //闹钟
//Array(2213042, 400), //班雷昂
Array(2213010, 400), 
Array(2213041, 400), 
Array(2213040, 400), 
Array(2213018, 400), 
Array(2213019, 400), 
Array(2213014, 400), 
Array(2213013, 400), 
Array(2213015, 400), 
Array(2213000, 400), 
Array(2213001, 400), 
Array(2213009, 400), 
Array(2213008, 400), 
Array(2213006, 400), 
Array(2213005, 400), 
Array(2213004, 400), 
Array(2213003, 400), 
Array(2213002, 400), 
Array(2213030, 400), 
Array(2213031, 400), 
Array(2213033, 400), 
Array(2213034, 400), 
Array(2213036, 400), 
Array(2213035, 400), 
Array(2213038, 400), 
Array(2213039, 400), 
Array(2213022, 400),
Array(2213023, 400),
Array(2213020, 400),
Array(2213021, 400),
//Array(2213027, 400),//艾丽杰
Array(2213026, 400),
Array(2213025, 400),
Array(2213024, 400),
Array(2213029, 400),
Array(2213028, 400)
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
			text = "#h0#,您可以在这里购买#e#b变身药水#n#k,请选择你想要购买的物品\r\n#b";
			for (var i=0; i<itemlist.length; i++) {
				text += "#L" + i + "##i" + itemlist[i] + ":##t" + itemlist[i] + "# - #r"+(itemlist[i][1]*500)+"#b游戏币  \r\n";
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
                cm.sendOk("购买成功了！");
                cm.dispose();
            } else {
                cm.sendOk("对不起，你没有足够的游戏币。");
                cm.dispose();
            }
        }
    }//mode
}//f