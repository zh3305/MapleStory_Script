var status = 0;
var choice;
var scrolls = Array(
Array("", 1142539, 0),
Array("", 1142540, 0),
Array("", 1142541, 0),
Array("", 1142544, 0),
Array("", 1142545, 0),
Array("", 1142574, 0),
Array("", 1142587, 0),
Array("", 1152000, 0),
Array("", 1152001, 0),
Array("", 1152009, 0),
Array("", 1152010, 0),
Array("", 1152011, 0),
Array("", 1152012, 0),
Array("", 1152013, 0),
Array("", 1152014, 0),
Array("", 1152015, 0),
Array("", 1152016, 0),
Array("", 1152017, 0),
Array("", 1152018, 0),
Array("", 1152019, 0),
Array("", 1152020, 0),
Array("", 1152021, 0),
Array("", 1152022, 0),
Array("", 1152023, 0),
Array("", 1152024, 0),
Array("", 1152025, 0),
Array("", 1152026, 0),
Array("", 1152027, 0),
Array("", 1152028, 0),
Array("", 1152029, 0),
Array("", 1152030, 0),
Array("", 1152031, 0),
Array("", 1152032, 0),
Array("", 1152033, 0),
Array("", 1152034, 0),
Array("", 1152035, 0),
Array("", 1152036, 0),
Array("", 1152037, 0),
Array("", 1152038, 0),
Array("", 1152039, 0),
Array("", 1152040, 0),
Array("", 1152041, 0),
Array("", 1152042, 0),
Array("", 1152043, 0),
Array("", 1152044, 0),
Array("", 1152045, 0),
Array("", 1152046, 0),
Array("", 1152047, 0),
Array("", 1152048, 0),
Array("", 1152049, 0),
Array("", 1152050, 0),
Array("", 1152051, 0),
Array("", 1152052, 0),
Array("", 1152053, 0),
Array("", 1152054, 0),
Array("", 1152055, 0),
Array("", 1152056, 0),
Array("", 1152057, 0),
Array("", 1152058, 0),
Array("", 1152059, 0),
Array("", 1152060, 0),
Array("", 1152061, 0),
Array("", 1152062, 0),
Array("", 1152063, 0),
Array("", 1152068, 0),
Array("", 1152069, 0),
Array("", 1152074, 0),
Array("", 1152075, 0),
Array("", 1152076, 0),
Array("", 1152077, 0),
Array("", 1152079, 0),
Array("", 1152080, 0),
Array("", 1152081, 0),
Array("", 1152082, 0),
Array("", 1152083, 0),
Array("", 1152085, 0),
Array("", 1152086, 0),
Array("", 1152088, 0),
Array("", 1152089, 0),
Array("", 1152090, 0),
Array("", 1152091, 0),
Array("", 1152092, 0),
Array("", 1152093, 0),
Array("", 1152099, 0),
Array("", 1152103, 0),
Array("", 1152104, 0),
Array("", 1152114, 0),
Array("", 1152115, 0),
Array("", 1152116, 0),
Array("", 1152117, 0),
Array("", 1162000, 0),
Array("", 1162001, 0),
Array("", 1162002, 0),
Array("", 1162003, 0),
Array("", 1162004, 0),
Array("", 1162005, 0),
Array("", 1162006, 0),
Array("", 1162007, 0),
Array("", 1162008, 0),
Array("", 1162009, 0),
Array("", 1162010, 0),
Array("", 1162011, 0),
Array("", 1162012, 0),
Array("", 1162014, 0),
Array("", 1162015, 0),
Array("", 1182000, 0),
Array("", 1182001, 0),
Array("", 1182002, 0),
Array("", 1182003, 0),
Array("", 1182004, 0),
Array("", 1182005, 0),
Array("", 1182006, 0),
Array("", 1182007, 0),
Array("", 1182009, 0),
Array("", 1182010, 0),
Array("", 1182011, 0),
Array("", 1182016, 0),
Array("", 1182017, 0),
Array("", 1182019, 0),
Array("", 1182020, 0),
Array("", 1182021, 0),
Array("", 1182022, 0),
Array("", 1182023, 0),
Array("", 1182051, 0),
Array("", 1182052, 0),
Array("", 1190000, 0),
Array("", 1190001, 0),
Array("", 1190100, 0),
Array("", 1190101, 0)
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
            cm.sendSimpleS("欢迎来到配件3店,你想买我们商店的物品么?请选择吧：." + choices,2);
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