var status = 0;
var choice;
var scrolls = Array(
Array("", 1802100, 0),
Array("", 1802000, 0),
Array("", 1802001, 0),
Array("", 1802002, 0),
Array("", 1802003, 0),
Array("", 1802004, 0),
Array("", 1802005, 0),
Array("", 1802006, 0),
Array("", 1802007, 0),
Array("", 1802008, 0),
Array("", 1802009, 0),
Array("", 1802010, 0),
Array("", 1802011, 0),
Array("", 1802012, 0),
Array("", 1802013, 0),
Array("", 1802014, 0),
Array("", 1802015, 0),
Array("", 1802016, 0),
Array("", 1802017, 0),
Array("", 1802018, 0),
Array("", 1802019, 0),
Array("", 1802020, 0),
Array("", 1802021, 0),
Array("", 1802022, 0),
Array("", 1802023, 0),
Array("", 1802024, 0),
Array("", 1802025, 0),
Array("", 1802026, 0),
Array("", 1802027, 0),
Array("", 1802028, 0),
Array("", 1802029, 0),
Array("", 1802030, 0),
Array("", 1802031, 0),
Array("", 1802032, 0),
Array("", 1802033, 0),
Array("", 1802034, 0),
Array("", 1802035, 0),
Array("", 1802036, 0),
Array("", 1802037, 0),
Array("", 1802038, 0),
Array("", 1802039, 0),
Array("", 1802042, 0),
Array("", 1802043, 0),
Array("", 1802044, 0),
Array("", 1802045, 0),
Array("", 1802047, 0),
Array("", 1802053, 0),
Array("", 1802054, 0),
Array("", 1802056, 0),
Array("", 1802057, 0),
Array("", 1802058, 0),
Array("", 1802059, 0),
Array("", 1802060, 0),
Array("", 1802062, 0),
Array("", 1802063, 0),
Array("", 1802064, 0),
Array("", 1802065, 0),
Array("", 1802066, 0),
Array("", 1802067, 0),
Array("", 1802068, 0),
Array("", 1802070, 0),
Array("", 1802072, 0),
Array("", 1802073, 0),
Array("", 1802076, 0),
Array("", 1802077, 0),
Array("", 1802078, 0),
Array("", 1802079, 0),
Array("", 1802080, 0),
Array("", 1802081, 0),
Array("", 1802082, 0),
Array("", 1802083, 0),
Array("", 1802084, 0),
Array("", 1802220, 0),
Array("", 1802221, 0),
Array("", 1802337, 0),
Array("", 1802338, 0),
Array("", 1802339, 0),
Array("", 1802340, 0),
Array("", 1802341, 0),
Array("", 1802342, 0),
Array("", 1802343, 0),
Array("", 1802344, 0),
Array("", 1802345, 0),
Array("", 1802346, 0),
Array("", 1802347, 0),
Array("", 1802348, 0),
Array("", 1802349, 0),
Array("", 1802350, 0),
Array("", 1802351, 0),
Array("", 1802352, 0),
Array("", 1802353, 0),
Array("", 1802354, 0),
Array("", 1802365, 0),
Array("", 1802366, 0),
Array("", 1802367, 0),
Array("", 1802369, 0),
Array("", 1802370, 0),
Array("", 1802371, 0),
Array("", 1802373, 0),
Array("", 1802375, 0),
Array("", 1802376, 0),
Array("", 1802377, 0),
Array("", 1802378, 0),
Array("", 1802380, 0),
Array("", 1802381, 0),
Array("", 1802382, 0),
Array("", 1802393, 0)
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
            choices = "\r\n消费币余额：#r" + cm.getHyPay(1) + "#k个 (#r买后不支持退货哟亲#k)";
            for (var i = 0; i < scrolls.length; i++) {
                choices += "\r\n#L" + i + "##v" + scrolls[i][1] + "##z" + scrolls[i][1] + "#　#d需要#r" + scrolls[i][2] + "#d消费币#k#l";
            }
            cm.sendSimpleS("欢迎来到时尚宠装店,你想买我们商店的物品么?请选择吧：." + choices,2);
        } else if (status == 1) {
            cm.sendYesNo("你确定需要购买#v" + scrolls[selection][1] + "##t" + scrolls[selection][1] + "#?");
		choice = selection;
        } else if (status == 2) {
            var money = scrolls[choice][2];
            if (cm.getHyPay(1) < money) {
                cm.sendOk("抱歉，你没足够的消费币！");
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