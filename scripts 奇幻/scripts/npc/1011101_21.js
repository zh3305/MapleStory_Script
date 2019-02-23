var a = 0;
var text;
var selects; //记录玩家的选项
var buynum = 0;
var itemlist = Array(
Array(2290285, 4000), 
Array(2291137, 8000), 
Array(2290602, 8000), 
Array(2290892, 8000), 
Array(2290891, 8000), 
Array(2290880, 8000), 
Array(2290881, 8000), 
Array(2290882, 8000), 
Array(2290883, 8000), 
Array(2290884, 8000), 
Array(2290885, 8000), 
Array(2290466, 8000), 
Array(2290457, 8000), 
Array(2290456, 8000), 
Array(2290879, 8000), 
Array(2290878, 8000), 
Array(2290870, 8000), 
Array(2290871, 8000), 
Array(2290874, 8000), 
Array(2290875, 8000), 
Array(2290872, 8000), 
Array(2290873, 8000), 
Array(2290868, 8000), 
Array(2290869, 8000), 
Array(2290571, 8000), 
Array(2290887, 8000), 
Array(2290888, 8000), 
Array(2290915, 8000),
Array(2290890, 8000),
Array(2290245, 8000)
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
			text = "#h0#,您可以在这里购买#e#b神秘能手册#n#k,请选择你想要购买的物品#r（请自己留好空格！）\r\n#b";
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
            if (cm.getPlayer().getMeso() >= buynum * itemlist[selects][1]*500 ) {
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