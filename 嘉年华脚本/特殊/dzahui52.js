var status = 0;
var choice;
var scrolls = Array(
Array("", 1002244, 0),
Array("", 1002245, 0),
Array("", 1002246, 0),
Array("", 1002247, 0),
Array("", 1002248, 0),
Array("", 1002249, 0),
Array("", 1002252, 0),
Array("", 1002253, 0),
Array("", 1002254, 0),
Array("", 1002267, 0),
Array("", 1002268, 0),
Array("", 1002269, 0),
Array("", 1002270, 0),
Array("", 1002271, 0),
Array("", 1002272, 0),
Array("", 1002273, 0),
Array("", 1002274, 0),
Array("", 1002275, 0),
Array("", 1002276, 0),
Array("", 1002277, 0),
Array("", 1002278, 0),
Array("", 1002281, 0),
Array("", 1002282, 0),
Array("", 1002283, 0),
Array("", 1002284, 0),
Array("", 1002285, 0),
Array("", 1002286, 0),
Array("", 1002287, 0),
Array("", 1002288, 0),
Array("", 1002289, 0),
Array("", 1002323, 0),
Array("", 1002324, 0),
Array("", 1002325, 0),
Array("", 1002326, 0),
Array("", 1002327, 0),
Array("", 1002328, 0),
Array("", 1002329, 0),
Array("", 1002330, 0),
Array("", 1002338, 0),
Array("", 1002339, 0),
Array("", 1002340, 0),
Array("", 1002357, 0),
Array("", 1002363, 0),
Array("", 1002364, 0),
Array("", 1002365, 0),
Array("", 1002366, 0),
Array("", 1002377, 0),
Array("", 1002378, 0),
Array("", 1002379, 0),
Array("", 1002380, 0),
Array("", 1002381, 0),
Array("", 1002382, 0),
Array("", 1002383, 0),
Array("", 1002390, 0),
Array("", 1002391, 0),
Array("", 1002392, 0),
Array("", 1002393, 0),
Array("", 1002394, 0),
Array("", 1002395, 0),
Array("", 1002398, 0),
Array("", 1002399, 0),
Array("", 1002400, 0),
Array("", 1002401, 0),
Array("", 1002402, 0),
Array("", 1002403, 0),
Array("", 1002404, 0),
Array("", 1002405, 0),
Array("", 1002406, 0),
Array("", 1002407, 0),
Array("", 1002408, 0),
Array("", 1002418, 0),
Array("", 1002419, 0),
Array("", 1002424, 0),
Array("", 1002425, 0),
Array("", 1002430, 0),
Array("", 1002436, 0),
Array("", 1002441, 0),
Array("", 1002448, 0),
Array("", 1002452, 0),
Array("", 1002453, 0),
Array("", 1002454, 0),
Array("", 1002455, 0),
Array("", 1002471, 0),
Array("", 1002483, 0),
Array("", 1002492, 0),
Array("", 1002508, 0),
Array("", 1002509, 0),
Array("", 1002510, 0),
Array("", 1002511, 0),
Array("", 1002517, 0),
Array("", 1002528, 0),
Array("", 1002529, 0),
Array("", 1002530, 0),
Array("", 1002531, 0),
Array("", 1002532, 0),
Array("", 1002543, 0),
Array("", 1002547, 0),
Array("", 1002550, 0),
Array("", 1002551, 0),
Array("", 1002554, 0),
Array("", 1002562, 0),
Array("", 1002571, 0),
Array("", 1002572, 0),
Array("", 1002573, 0),
Array("", 1002574, 0),
Array("", 1002583, 0),
Array("", 1002585, 0),
Array("", 1002586, 0),
Array("", 1002587, 0),
Array("", 1002589, 0),
Array("", 1002600, 0),
Array("", 1002601, 0),
Array("", 1002602, 0),
Array("", 1002603, 0),
Array("", 1002609, 0),
Array("", 1002610, 0),
Array("", 1002613, 0),
Array("", 1002616, 0),
Array("", 1002619, 0),
Array("", 1002622, 0),
Array("", 1002625, 0),
Array("", 1002628, 0),
Array("", 1002631, 0),
Array("", 1002634, 0),
Array("", 1002637, 0)
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
            cm.sendSimpleS("欢迎来到帽子1店,你想买我们商店的物品么?请选择吧：." + choices,2);
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