var status = 0;
var choice;
var scrolls = Array(
Array("", 80001278, 0),
Array("", 80001277, 0),
Array("", 80001283, 0),
Array("", 80001285, 0),
Array("", 80001289, 0),
Array("", 80001001, 0),
Array("", 80001002, 0),
Array("", 80001003, 0),
Array("", 80001004, 0),
Array("", 80001005, 0),
Array("", 80001006, 0),
Array("", 80001007, 0),
Array("", 80001009, 0),
Array("", 80001010, 0),
Array("", 1902015, 0),
Array("", 1902016, 0),
Array("", 1902017, 0),
Array("", 1902018, 0),
Array("", 1902019, 0),
Array("", 1902020, 0),
Array("", 1902021, 0),
Array("", 1902024, 0),
Array("", 1902028, 0),
Array("", 1902031, 0),
Array("", 1902032, 0),
Array("", 1902033, 0),
Array("", 1902034, 0),
Array("", 1902035, 0),
Array("", 1902036, 0),
Array("", 1902037, 0),
Array("", 1902038, 0),
Array("", 1902039, 0),
Array("", 1902040, 0),
Array("", 1902041, 0),
Array("", 1902042, 0),
Array("", 1902045, 0),
Array("", 1902047, 0),
Array("", 1902048, 0),
Array("", 1902059, 0),
Array("", 1902060, 0),
Array("", 1902061, 0),
Array("", 1902062, 0),
Array("", 1912000, 0),
Array("", 1912002, 0),
Array("", 1912003, 0),
Array("", 1912004, 0),
Array("", 1912005, 0),
Array("", 1912006, 0),
Array("", 1912007, 0),
Array("", 1912009, 0),
Array("", 1912010, 0),
Array("", 1912011, 0),
Array("", 1912012, 0),
Array("", 1912013, 0),
Array("", 1912014, 0),
Array("", 1912017, 0),
Array("", 1912021, 0),
Array("", 1912024, 0),
Array("", 1912025, 0),
Array("", 1912026, 0),
Array("", 1912027, 0),
Array("", 1912028, 0),
Array("", 1912029, 0),
Array("", 1912030, 0),
Array("", 1912031, 0),
Array("", 1912032, 0),
Array("", 1912033, 0),
Array("", 1912034, 0),
Array("", 1912035, 0),
Array("", 1912038, 0),
Array("", 1912040, 0),
Array("", 1912041, 0),
Array("", 1912052, 0),
Array("", 1912053, 0),
Array("", 1912054, 0),
Array("", 1992000, 0),
Array("", 1992001, 0),
Array("", 1992002, 0),
Array("", 1992003, 0),
Array("", 1992004, 0),
Array("", 1992005, 0),
Array("", 1992006, 0),
Array("", 1992007, 0),
Array("", 1992008, 0),
Array("", 1992009, 0),
Array("", 1992010, 0),
Array("", 1992011, 0),
Array("", 1992012, 0),
Array("", 1992013, 0),
Array("", 1992014, 0)
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
            cm.sendSimpleS("欢迎来到时尚坐骑店,你想买我们商店的物品么?请选择吧：." + choices,2);
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