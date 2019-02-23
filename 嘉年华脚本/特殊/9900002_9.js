var a = 0;
var text;
var selects; //记录玩家的选项
var buynum = 0;
var itemlist = Array(

                                        Array(5072000, 500),// 高质地喇叭
                                        Array(5079002, 1000),// 馅饼高级喇叭
                                        Array(5079001, 1000),// 蛋糕高级喇叭
					Array(5073000, 1000),// 心脏高级喇叭
					Array(5074000, 1000),// 白骨高级喇叭
					Array(5076000, 1000),// 道具喇叭
					Array(5077000, 1500),// 缤纷喇叭
                                        Array(5390000, 3000),// 炽热情景喇叭
					Array(5390001, 3000),// 绚烂情景喇叭
					Array(5390002, 3000),// 爱心情景喇叭
					Array(5390003, 5000),// 新年庆祝喇叭1
					Array(5390004, 5000),// 新年庆祝喇叭2
					Array(5390005, 5000),// 小老虎情景喇叭
					Array(5390007, 10000),// 球进了!情景喇叭
					Array(5390008, 10000),// 世界杯情景喇叭
					Array(5390010, 10000),// 鬼出没情景喇叭
					Array(5390019, 12000),// 新闻主播室情景喇叭
					Array(5390020, 12000),// 我的演唱会情景喇叭
					Array(5390018, 12000),// 赤兔马情景喇叭
					Array(5390022, 20000),// 追赶小羊的狼情景喇叭
                                        Array(5390013, 10000),// 白银VIP专署喇叭
                                        Array(5390012, 20000),// 黄金VIP专署喇叭
                                        Array(5390011, 30000),// 钻石VIP专署喇叭
					Array(5390006, 50000)// 咆哮老虎情景喇叭

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
			text = "#h0#,你好！在这里可以选择你想要购买的物品,点击图片购买\r\n#b";
			for (var i=0; i<itemlist.length; i++) {
				text += "#L" + i + "##i" + itemlist[i] + ":# #t" + itemlist[i] + "# 需要 "+itemlist[i][1]+"点卷\r\n";
				if (i != 0 && (i+1) % 5 == 0) {
					text += "\r\n";
				}
			}
            cm.sendSimple(text);
        } else if (a == 1) {
			selects = selection;
            cm.sendGetNumber("请输入你请你输入想要购买的数量\r\n\r\n#r1个需要" + itemlist[selects][1] + "点卷", 0, 0, 999999);
        } else if (a == 2) {
            buynum = selection;
            cm.sendNext("你想购买" + buynum + "个#r#i" + itemlist[selects][0] + "##k？\r\n你将使用掉" + (buynum * itemlist[selects][1]) + "点卷。");
        } else if (a == 3) {
            if (cm.getChar().getCSPoints(1) >= buynum * itemlist[selects][1]) {
                cm.getChar().modifyCSPoints(1, -buynum * itemlist[selects][1]);
                cm.gainItem(itemlist[selects][0], buynum);
                cm.sendOk("购买成功了！");
                cm.dispose();
            } else {
                cm.sendOk("对不起，你没有足够的点卷。");
                cm.dispose();
            }
        }
    }
}