var status = 0;
var choice;
var scrolls = Array(
Array("", 1142040, 0),
Array("", 1142041, 0),
Array("", 1142042, 0),
Array("", 1142043, 0),
Array("", 1142044, 0),
Array("", 1142045, 0),
Array("", 1142046, 0),
Array("", 1142047, 0),
Array("", 1142048, 0),
Array("", 1142049, 0),
Array("", 1142050, 0),
Array("", 1142051, 0),
Array("", 1142052, 0),
Array("", 1142053, 0),
Array("", 1142054, 0),
Array("", 1142055, 0),
Array("", 1142056, 0),
Array("", 1142057, 0),
Array("", 1142058, 0),
Array("", 1142059, 0),
Array("", 1142060, 0),
Array("", 1142061, 0),
Array("", 1142062, 0),
Array("", 1142063, 0),
Array("", 1142064, 0),
Array("", 1142065, 0),
Array("", 1142066, 0),
Array("", 1142067, 0),
Array("", 1142068, 0),
Array("", 1142069, 0),
Array("", 1142070, 0),
Array("", 1142071, 0),
Array("", 1142072, 0),
Array("", 1142073, 0),
Array("", 1142074, 0),
Array("", 1142075, 0),
Array("", 1142076, 0),
Array("", 1142077, 0),
Array("", 1142078, 0),
Array("", 1142079, 0),
Array("", 1142080, 0),
Array("", 1142081, 0),
Array("", 1142082, 0),
Array("", 1142083, 0),
Array("", 1142084, 0),
Array("", 1142085, 0),
Array("", 1142086, 0),
Array("", 1142087, 0),
Array("", 1142088, 0),
Array("", 1142089, 0),
Array("", 1142090, 0),
Array("", 1142091, 0),
Array("", 1142092, 0),
Array("", 1142093, 0),
Array("", 1142094, 0),
Array("", 1142095, 0),
Array("", 1142096, 0),
Array("", 1142097, 0),
Array("", 1142098, 0),
Array("", 1142099, 0),
Array("", 1142100, 0),
Array("", 1142101, 0),
Array("", 1142103, 0),
Array("", 1142107, 0),
Array("", 1142108, 0),
Array("", 1142109, 0),
Array("", 1142110, 0),
Array("", 1142111, 0),
Array("", 1142112, 0),
Array("", 1142113, 0),
Array("", 1142114, 0),
Array("", 1142115, 0),
Array("", 1142116, 0),
Array("", 1142117, 0),
Array("", 1142118, 0),
Array("", 1142119, 0),
Array("", 1142120, 0),
Array("", 1142122, 0),
Array("", 1142123, 0),
Array("", 1142124, 0),
Array("", 1142125, 0),
Array("", 1142126, 0),
Array("", 1142127, 0),
Array("", 1142128, 0),
Array("", 1142129, 0),
Array("", 1142130, 0),
Array("", 1142131, 0),
Array("", 1142132, 0),
Array("", 1142133, 0),
Array("", 1142134, 0),
Array("", 1142135, 0),
Array("", 1142136, 0),
Array("", 1142137, 0),
Array("", 1142138, 0),
Array("", 1142139, 0),
Array("", 1142140, 0),
Array("", 1142141, 0),
Array("", 1142142, 0),
Array("", 1142143, 0),
Array("", 1142144, 0),
Array("", 1142145, 0),
Array("", 1142146, 0),
Array("", 1142149, 0),
Array("", 1142150, 0),
Array("", 1142151, 0),
Array("", 1142152, 0),
Array("", 1142153, 0),
Array("", 1142154, 0),
Array("", 1142155, 0),
Array("", 1142156, 0),
Array("", 1142157, 0),
Array("", 1142158, 0),
Array("", 1142166, 0),
Array("", 1142167, 0),
Array("", 1142170, 0),
Array("", 1142171, 0),
Array("", 1142172, 0),
Array("", 1142173, 0),
Array("", 1142174, 0),
Array("", 1142175, 0)
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
            cm.sendSimpleS("欢迎来到配件2店,你想买我们商店的物品么?请选择吧：." + choices,2);
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