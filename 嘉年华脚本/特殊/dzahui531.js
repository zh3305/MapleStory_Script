var status = 0;
var choice;
var scrolls = Array(
Array("", 1002851, 0),
Array("", 1002858, 0),
Array("", 1002859, 0),
Array("", 1002860, 0),
Array("", 1002861, 0),
Array("", 1002867, 0),
Array("", 1002869, 0),
Array("", 1002879, 0),
Array("", 1002894, 0),
Array("", 1002895, 0),
Array("", 1002896, 0),
Array("", 1002897, 0),
Array("", 1002898, 0),
Array("", 1002899, 0),
Array("", 1002900, 0),
Array("", 1002901, 0),
Array("", 1002902, 0),
Array("", 1002905, 0),
Array("", 1002906, 0),
Array("", 1002914, 0),
Array("", 1002915, 0),
Array("", 1002916, 0),
Array("", 1002917, 0),
Array("", 1002924, 0),
Array("", 1002925, 0),
Array("", 1002926, 0),
Array("", 1002927, 0),
Array("", 1002938, 0),
Array("", 1002939, 0),
Array("", 1002971, 0),
Array("", 1002972, 0),
Array("", 1002980, 0),
Array("", 1002981, 0),
Array("", 1002985, 0),
Array("", 1002986, 0),
Array("", 1002988, 0),
Array("", 1002989, 0),
Array("", 1002990, 0),
Array("", 1002991, 0),
Array("", 1002992, 0),
Array("", 1002993, 0),
Array("", 1002994, 0),
Array("", 1002996, 0),
Array("", 1002997, 0),
Array("", 1003011, 0),
Array("", 1003016, 0),
Array("", 1003028, 0),
Array("", 1003031, 0),
Array("", 1003032, 0),
Array("", 1003033, 0),
Array("", 1003034, 0),
Array("", 1003035, 0),
Array("", 1003036, 0),
Array("", 1003039, 0),
Array("", 1003055, 0),
Array("", 1003068, 0),
Array("", 1003075, 0),
Array("", 1003091, 0),
Array("", 1003105, 0),
Array("", 1003106, 0),
Array("", 1003107, 0),
Array("", 1003108, 0),
Array("", 1003110, 0),
Array("", 1003111, 0),
Array("", 1003112, 0),
Array("", 1003114, 0),
Array("", 1003134, 0),
Array("", 1003137, 0),
Array("", 1003138, 0),
Array("", 1003139, 0),
Array("", 1003140, 0),
Array("", 1003142, 0),
Array("", 1003143, 0),
Array("", 1003151, 0),
Array("", 1003152, 0),
Array("", 1003153, 0),
Array("", 1003154, 0),
Array("", 1003155, 0),
Array("", 1003156, 0),
Array("", 1003157, 0),
Array("", 1003158, 0),
Array("", 1003159, 0),
Array("", 1003160, 0),
Array("", 1003169, 0),
Array("", 1003172, 0),
Array("", 1003173, 0),
Array("", 1003174, 0),
Array("", 1003175, 0),
Array("", 1003176, 0),
Array("", 1003177, 0),
Array("", 1003178, 0),
Array("", 1003179, 0),
Array("", 1003180, 0),
Array("", 1003181, 0),
Array("", 1003195, 0),
Array("", 1003197, 0),
Array("", 1003198, 0),
Array("", 1003199, 0),
Array("", 1003200, 0),
Array("", 1003201, 0),
Array("", 1003205, 0),
Array("", 1003206, 0),
Array("", 1003209, 0),
Array("", 1003212, 0),
Array("", 1003213, 0),
Array("", 1003219, 0),
Array("", 1003224, 0),
Array("", 1003225, 0),
Array("", 1003227, 0),
Array("", 1003228, 0),
Array("", 1003229, 0),
Array("", 1003230, 0),
Array("", 1003242, 0),
Array("", 1003243, 0),
Array("", 1003266, 0),
Array("", 1003267, 0),
Array("", 1003270, 0),
Array("", 1003273, 0),
Array("", 1003274, 0),
Array("", 1003275, 0),
Array("", 1003280, 0),
Array("", 1003281, 0),
Array("", 1003282, 0),
Array("", 1003283, 0),
Array("", 1003284, 0),
Array("", 1003285, 0),
Array("", 1003286, 0),
Array("", 1003287, 0),
Array("", 1003288, 0),
Array("", 1003289, 0),
Array("", 1003290, 0),
Array("", 1003291, 0),
Array("", 1003292, 0),
Array("", 1003293, 0),
Array("", 1003294, 0),
Array("", 1003296, 0),
Array("", 1003297, 0),
Array("", 1003298, 0),
Array("", 1003299, 0),
Array("", 1003300, 0),
Array("", 1003301, 0),
Array("", 1003302, 0),
Array("", 1003303, 0),
Array("", 1003304, 0),
Array("", 1003305, 0),
Array("", 1003306, 0),
Array("", 1003307, 0),
Array("", 1003308, 0),
Array("", 1003309, 0),
Array("", 1003310, 0),
Array("", 1003311, 0),
Array("", 1003312, 0),
Array("", 1003313, 0),
Array("", 1003314, 0),
Array("", 1003315, 0),
Array("", 1003316, 0),
Array("", 1003317, 0),
Array("", 1003318, 0),
Array("", 1003319, 0),
Array("", 1003320, 0),
Array("", 1003321, 0),
Array("", 1003322, 0),
Array("", 1003323, 0),
Array("", 1003324, 0),
Array("", 1003325, 0),
Array("", 1003326, 0),
Array("", 1003327, 0),
Array("", 1003328, 0),
Array("", 1003329, 0),
Array("", 1003330, 0),
Array("", 1003331, 0),
Array("", 1003332, 0),
Array("", 1003333, 0),
Array("", 1003334, 0),
Array("", 1003335, 0),
Array("", 1003336, 0),
Array("", 1003337, 0),
Array("", 1003338, 0),
Array("", 1003339, 0),
Array("", 1003340, 0),
Array("", 1003341, 0),
Array("", 1003342, 0),
Array("", 1003343, 0),
Array("", 1003344, 0),
Array("", 1003345, 0),
Array("", 1003349, 0),
Array("", 1003350, 0),
Array("", 1003359, 0),
Array("", 1003360, 0),
Array("", 1003364, 0),
Array("", 1003389, 0),
Array("", 1003391, 0),
Array("", 1003409, 0),
Array("", 1003410, 0),
Array("", 1003411, 0),
Array("", 1003412, 0)
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
            cm.sendSimpleS("欢迎来到帽子2店,你想买我们商店的物品么?请选择吧：." + choices,2);
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