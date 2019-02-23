var status = 0;
var choice;
var scrolls = Array(
Array("月妙3倍巨人秘药", 2003552, 20),
Array("月妙5倍巨人秘药", 2003553, 50),
Array("火红玫瑰", 2022956, 20),
Array("皇家理发券", 5150040, 50),
Array("皇家整容券", 5152053, 50),
Array("幻影残像", 5010044, 55),
Array("超级暴风升级", 2430979, 5000),
Array("防爆卷轴", 5064000, 20),
//Array("15星强化", 2049349, 888),
Array("缤纷喇叭", 5077000, 20),
Array("炽热情景喇叭", 5390000, 20),
Array("绚烂情景喇叭", 5390001, 20),
Array("爱心情景喇叭", 5390002, 20),
Array("新年庆祝喇叭1", 5390003, 20),
Array("新年庆祝喇叭2", 5390004, 20),
Array("小老虎情景喇叭", 5390005, 20),
Array("球进了!情景喇叭", 5390007, 20),
Array("世界杯情景喇叭", 5390008, 20),
Array("咆哮老虎情景喇叭", 5390006, 20),
Array("鬼出没情景喇叭", 5390010, 20),
Array("赤兔马情景喇叭", 5390018, 20),
Array("道具喇叭", 5076000, 20),
Array("馅饼高级喇叭", 5079002, 20),
Array("蛋糕高级喇叭", 5079001, 20),
Array("心脏高级喇叭", 5073000, 20), 
Array("白骨高级喇叭", 5074000, 20), 
Array("高质地喇叭", 5072000, 20),
Array("红心巧克力", 5110000, 10)
);

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) cm.dispose();
    else {
        if (status == 0 && mode == 0) {
            cm.dispose();
            return;
        } else if (status >= 1 && mode == 0) {
            cm.sendOk("好吧，欢迎下次继续光临！.");
            cm.dispose();
            return;
        }
        if (mode == 1) status++;
        else status--;

        if (status == 0) {
            choices = "\r\n兔兔币余额：#r" + cm.getHyPay(1) + "#k个 (#r买后不支持退货哟亲#k)";
            for (var i = 0; i < scrolls.length; i++) {
                choices += "\r\n#L" + i + "##v" + scrolls[i][1] + "##z" + scrolls[i][1] + "#　#d需要#r" + scrolls[i][2] + "#d兔兔币#k#l";
            }
            cm.sendSimpleS("欢迎来到精品玩具店,你想买我们商店的物品么?请选择吧：." + choices,2);
        } else if (status == 1) {
            cm.sendYesNo("你确定需要购买#v" + scrolls[selection][1] + "##t" + scrolls[selection][1] + "#?");
		choice = selection;
        } else if (status == 2) {
            var money = scrolls[choice][2];
            if (cm.getHyPay(1) < money) {
                cm.sendOk("抱歉，你没足够的兔兔币！");
                cm.dispose();
            } else {
                cm.addHyPay(money);
                cm.gainItem(scrolls[choice][1], 1);
                cm.sendOk("购买成功.");
                cm.dispose();
            }
        }
    }
}
