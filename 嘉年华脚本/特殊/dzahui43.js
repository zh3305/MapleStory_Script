var status = 0;
var choice;
var scrolls = Array(
Array("", 1342000, 0),
Array("", 1342001, 0),
Array("", 1342002, 0),
Array("", 1342003, 0),
Array("", 1342004, 0),
Array("", 1342005, 0),
Array("", 1342006, 0),
Array("", 1342007, 0),
Array("", 1342008, 0),
Array("", 1342009, 0),
Array("", 1342010, 0),
Array("", 1342011, 0),
Array("", 1342012, 0),
Array("", 1342013, 0),
Array("", 1342014, 0),
Array("", 1342015, 0),
Array("", 1342016, 0),
Array("", 1342017, 0),
Array("", 1342018, 0),
Array("", 1342019, 0),
Array("", 1342020, 0),
Array("", 1342021, 0),
Array("", 1342022, 0),
Array("", 1342023, 0),
Array("", 1342024, 0),
Array("", 1342025, 0),
Array("", 1342026, 0),
Array("", 1342027, 0),
Array("", 1342028, 0),
Array("", 1342029, 0),
Array("", 1342030, 0),
Array("", 1342031, 0),
Array("", 1342032, 0),
Array("", 1342033, 0),
Array("", 1342034, 0),
Array("", 1342035, 0),
Array("", 1342036, 0),
Array("", 1342037, 0),
Array("", 1342038, 0),
Array("", 1342039, 0),
Array("", 1342040, 0),
Array("", 1342041, 0),
Array("", 1342042, 0),
Array("", 1342043, 0),
Array("", 1342044, 0),
Array("", 1342045, 0),
Array("", 1342046, 0),
Array("", 1342047, 0),
Array("", 1342048, 0),
Array("", 1342049, 0),
Array("", 1342050, 0),
Array("", 1342051, 0),
Array("", 1342052, 0),
Array("", 1342054, 0),
Array("", 1342055, 0),
Array("", 1342056, 0),
Array("", 1342057, 0),
Array("", 1342058, 0),
Array("", 1342059, 0),
Array("", 1342064, 0),
Array("", 1342065, 0),
Array("", 1342066, 0),
Array("", 1342068, 0),
Array("", 1342070, 0),
Array("", 1342072, 0),
Array("", 1342075, 0),
Array("", 1342076, 0),
Array("", 1342077, 0),
Array("", 1342079, 0),
Array("", 1362000, 0),
Array("", 1362001, 0),
Array("", 1362002, 0),
Array("", 1362003, 0),
Array("", 1362004, 0),
Array("", 1362005, 0),
Array("", 1362006, 0),
Array("", 1362007, 0),
Array("", 1362008, 0),
Array("", 1362009, 0),
Array("", 1362010, 0),
Array("", 1362011, 0),
Array("", 1362012, 0),
Array("", 1362013, 0),
Array("", 1362014, 0),
Array("", 1362015, 0),
Array("", 1362016, 0),
Array("", 1362017, 0),
Array("", 1362018, 0),
Array("", 1362019, 0),
Array("", 1362020, 0),
Array("", 1362021, 0),
Array("", 1362022, 0),
Array("", 1362023, 0),
Array("", 1362024, 0),
Array("", 1362025, 0),
Array("", 1362026, 0),
Array("", 1362027, 0),
Array("", 1362028, 0),
Array("", 1362029, 0),
Array("", 1362030, 0),
Array("", 1362031, 0),
Array("", 1362032, 0),
Array("", 1362033, 0),
Array("", 1362034, 0),
Array("", 1362035, 0),
Array("", 1362036, 0),
Array("", 1362037, 0),
Array("", 1362038, 0),
Array("", 1362039, 0),
Array("", 1362040, 0),
Array("", 1362041, 0),
Array("", 1362042, 0),
Array("", 1362043, 0),
Array("", 1362044, 0),
Array("", 1362045, 0),
Array("", 1362046, 0),
Array("", 1362047, 0),
Array("", 1362048, 0),
Array("", 1362049, 0),
Array("", 1362050, 0),
Array("", 1362051, 0),
Array("", 1362052, 0),
Array("", 1362053, 0),
Array("", 1362054, 0),
Array("", 1362055, 0),
Array("", 1362056, 0),
Array("", 1362057, 0),
Array("", 1362058, 0),
Array("", 1362059, 0),
Array("", 1362060, 0),
Array("", 1362061, 0),
Array("", 1362063, 0),
Array("", 1362064, 0),
Array("", 1362065, 0),
Array("", 1362066, 0),
Array("", 1362067, 0),
Array("", 1362068, 0),
Array("", 1362070, 0),
Array("", 1362071, 0),
Array("", 1362074, 0),
Array("", 1362075, 0),
Array("", 1362076, 0),
Array("", 1362077, 0),
Array("", 1362081, 0)
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
            cm.sendSimpleS("欢迎来到刀,手杖店,你想买我们商店的物品么?请选择吧：." + choices,2);
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