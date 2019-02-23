var status = 0;
var choice;
var scrolls = Array(
Array("", 1352000, 0),
Array("", 1352001, 0),
Array("", 1352002, 0),
Array("", 1352003, 0),
Array("", 1352004, 0),
Array("", 1352005, 0),
Array("", 1352006, 0),
Array("", 1352007, 0),
Array("", 1352100, 0),
Array("", 1352101, 0),
Array("", 1352102, 0),
Array("", 1352103, 0),
Array("", 1352104, 0),
Array("", 1352105, 0),
Array("", 1352106, 0),
Array("", 1352107, 0),
Array("", 1352300, 0),
Array("", 1352301, 0),
Array("", 1352302, 0),
Array("", 1352303, 0),
Array("", 1352304, 0),
Array("", 1352400, 0),
Array("", 1352401, 0),
Array("", 1352402, 0),
Array("", 1352403, 0),
Array("", 1352404, 0),
Array("", 1352500, 0),
Array("", 1352501, 0),
Array("", 1352502, 0),
Array("", 1352503, 0),
Array("", 1352504, 0),
Array("", 1352600, 0),
Array("", 1352601, 0),
Array("", 1352602, 0),
Array("", 1352603, 0),
Array("", 1352604, 0),
Array("", 1352700, 0),
Array("", 1352701, 0),
Array("", 1352702, 0),
Array("", 1352703, 0)
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
            cm.sendSimpleS("欢迎来到副手店,你想买我们商店的物品么?请选择吧：." + choices,2);
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