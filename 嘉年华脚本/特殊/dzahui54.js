var status = 0;
var choice;
var scrolls = Array(
Array("", 1102000, 0),
Array("", 1102001, 0),
Array("", 1102002, 0),
Array("", 1102003, 0),
Array("", 1102004, 0),
Array("", 1102011, 0),
Array("", 1102012, 0),
Array("", 1102013, 0),
Array("", 1102014, 0),
Array("", 1102015, 0),
Array("", 1102016, 0),
Array("", 1102017, 0),
Array("", 1102018, 0),
Array("", 1102021, 0),
Array("", 1102022, 0),
Array("", 1102023, 0),
Array("", 1102024, 0),
Array("", 1102026, 0),
Array("", 1102027, 0),
Array("", 1102028, 0),
Array("", 1102029, 0),
Array("", 1102030, 0),
Array("", 1102031, 0),
Array("", 1102032, 0),
Array("", 1102033, 0),
Array("", 1102034, 0),
Array("", 1102035, 0),
Array("", 1102040, 0),
Array("", 1102041, 0),
Array("", 1102042, 0),
Array("", 1102043, 0),
Array("", 1102046, 0),
Array("", 1102047, 0),
Array("", 1102048, 0),
Array("", 1102053, 0),
Array("", 1102054, 0),
Array("", 1102055, 0),
Array("", 1102056, 0),
Array("", 1102057, 0),
Array("", 1102061, 0),
Array("", 1102064, 0),
Array("", 1102071, 0),
Array("", 1102079, 0),
Array("", 1102081, 0),
Array("", 1102082, 0),
Array("", 1102084, 0),
Array("", 1102085, 0),
Array("", 1102086, 0),
Array("", 1102089, 0),
Array("", 1102109, 0),
Array("", 1102135, 0),
Array("", 1102136, 0),
Array("", 1102139, 0),
Array("", 1102140, 0),
Array("", 1102147, 0),
Array("", 1102163, 0),
Array("", 1102166, 0),
Array("", 1102167, 0),
Array("", 1102168, 0),
Array("", 1102172, 0),
Array("", 1102174, 0),
Array("", 1102205, 0),
Array("", 1102206, 0),
Array("", 1102207, 0),
Array("", 1102211, 0),
Array("", 1102220, 0),
Array("", 1102226, 0),
Array("", 1102227, 0),
Array("", 1102231, 0),
Array("", 1102235, 0),
Array("", 1102241, 0),
Array("", 1102246, 0),
Array("", 1102248, 0),
Array("", 1102256, 0),
Array("", 1102262, 0),
Array("", 1102263, 0),
Array("", 1102264, 0),
Array("", 1102265, 0),
Array("", 1102266, 0),
Array("", 1102275, 0),
Array("", 1102276, 0),
Array("", 1102277, 0),
Array("", 1102278, 0),
Array("", 1102279, 0),
Array("", 1102280, 0),
Array("", 1102281, 0),
Array("", 1102282, 0),
Array("", 1102283, 0),
Array("", 1102284, 0),
Array("", 1102289, 0),
Array("", 1102294, 0),
Array("", 1102295, 0),
Array("", 1102297, 0),
Array("", 1102298, 0),
Array("", 1102299, 0),
Array("", 1102302, 0),
Array("", 1102304, 0),
Array("", 1102305, 0),
Array("", 1102306, 0),
Array("", 1102311, 0),
Array("", 1102312, 0),
Array("", 1102313, 0),
Array("", 1102314, 0),
Array("", 1102315, 0),
Array("", 1102316, 0),
Array("", 1102317, 0),
Array("", 1102320, 0),
Array("", 1102321, 0),
Array("", 1102322, 0),
Array("", 1102327, 0),
Array("", 1102347, 0),
Array("", 1102348, 0),
Array("", 1102354, 0),
Array("", 1102362, 0),
Array("", 1102363, 0),
Array("", 1102364, 0),
Array("", 1102365, 0),
Array("", 1102366, 0),
Array("", 1102369, 0),
Array("", 1102370, 0),
Array("", 1102371, 0),
Array("", 1102372, 0),
Array("", 1102379, 0),
Array("", 1102382, 0),
Array("", 1102383, 0),
Array("", 1102394, 0),
Array("", 1102422, 0),
Array("", 1102441, 0),
Array("", 1102442, 0),
Array("", 1102443, 0),
Array("", 1102444, 0),
Array("", 1102445, 0),
Array("", 1102446, 0),
Array("", 1102447, 0),
Array("", 1102448, 0),
Array("", 1102449, 0),
Array("", 1102467, 0),
Array("", 1102468, 0),
Array("", 1102469, 0),
Array("", 1102470, 0),
Array("", 1102471, 0),
Array("", 1102472, 0),
Array("", 1102473, 0),
Array("", 1102474, 0),
Array("", 1102475, 0),
Array("", 1102476, 0),
Array("", 1102477, 0),
Array("", 1102478, 0),
Array("", 1102479, 0),
Array("", 1102480, 0),
Array("", 1102498, 0),
Array("", 1102499, 0),
Array("", 1102500, 0)
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
            cm.sendSimpleS("欢迎来到披风店,你想买我们商店的物品么?请选择吧：." + choices,2);
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