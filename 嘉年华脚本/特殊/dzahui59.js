var status = 0;
var choice;
var scrolls = Array(
Array("", 1060000, 0),
Array("", 1060002, 0),
Array("", 1060004, 0),
Array("", 1060005, 0),
Array("", 1060006, 0),
Array("", 1060007, 0),
Array("", 1060008, 0),
Array("", 1060009, 0),
Array("", 1060010, 0),
Array("", 1060011, 0),
Array("", 1060012, 0),
Array("", 1060013, 0),
Array("", 1060014, 0),
Array("", 1060015, 0),
Array("", 1060016, 0),
Array("", 1060017, 0),
Array("", 1060018, 0),
Array("", 1060019, 0),
Array("", 1060020, 0),
Array("", 1060021, 0),
Array("", 1060022, 0),
Array("", 1060023, 0),
Array("", 1060024, 0),
Array("", 1060025, 0),
Array("", 1060026, 0),
Array("", 1060027, 0),
Array("", 1060028, 0),
Array("", 1060029, 0),
Array("", 1060030, 0),
Array("", 1060031, 0),
Array("", 1060032, 0),
Array("", 1060033, 0),
Array("", 1060037, 0),
Array("", 1060038, 0),
Array("", 1060039, 0),
Array("", 1060043, 0),
Array("", 1060044, 0),
Array("", 1060045, 0),
Array("", 1060046, 0),
Array("", 1060050, 0),
Array("", 1060051, 0),
Array("", 1060052, 0),
Array("", 1060056, 0),
Array("", 1060057, 0),
Array("", 1060058, 0),
Array("", 1060059, 0),
Array("", 1060060, 0),
Array("", 1060061, 0),
Array("", 1060062, 0),
Array("", 1060063, 0),
Array("", 1060064, 0),
Array("", 1060065, 0),
Array("", 1060068, 0),
Array("", 1060069, 0),
Array("", 1060070, 0),
Array("", 1060071, 0),
Array("", 1060072, 0),
Array("", 1060073, 0),
Array("", 1060074, 0),
Array("", 1060075, 0),
Array("", 1060076, 0),
Array("", 1060077, 0),
Array("", 1060078, 0),
Array("", 1060079, 0),
Array("", 1060080, 0),
Array("", 1060081, 0),
Array("", 1060082, 0),
Array("", 1060083, 0),
Array("", 1060084, 0),
Array("", 1060085, 0),
Array("", 1060086, 0),
Array("", 1060087, 0),
Array("", 1060088, 0),
Array("", 1060089, 0),
Array("", 1060090, 0),
Array("", 1060091, 0),
Array("", 1060092, 0),
Array("", 1060093, 0),
Array("", 1060094, 0),
Array("", 1060095, 0),
Array("", 1060097, 0),
Array("", 1060098, 0),
Array("", 1060099, 0),
Array("", 1060100, 0),
Array("", 1060101, 0),
Array("", 1060102, 0),
Array("", 1060104, 0),
Array("", 1060105, 0),
Array("", 1060106, 0),
Array("", 1060107, 0),
Array("", 1060109, 0),
Array("", 1060110, 0),
Array("", 1060111, 0),
Array("", 1060134, 0),
Array("", 1060135, 0),
Array("", 1060136, 0),
Array("", 1060138, 0),
Array("", 1060149, 0),
Array("", 1060150, 0),
Array("", 1060151, 0),
Array("", 1060152, 0),
Array("", 1060153, 0),
Array("", 1060154, 0),
Array("", 1060155, 0),
Array("", 1060156, 0),
Array("", 1060157, 0),
Array("", 1060158, 0),
Array("", 1060159, 0),
Array("", 1060160, 0),
Array("", 1060161, 0),
Array("", 1060162, 0),
Array("", 1060163, 0),
Array("", 1060164, 0),
Array("", 1060165, 0),
Array("", 1060166, 0),
Array("", 1060167, 0),
Array("", 1060168, 0),
Array("", 1060169, 0),
Array("", 1060170, 0),
Array("", 1060171, 0),
Array("", 1060172, 0),
Array("", 1060173, 0),
Array("", 1060175, 0),
Array("", 1060176, 0),
Array("", 1060177, 0),
Array("", 1061002, 0),
Array("", 1061003, 0),
Array("", 1061006, 0),
Array("", 1061008, 0),
Array("", 1061009, 0),
Array("", 1061010, 0),
Array("", 1061011, 0),
Array("", 1061012, 0),
Array("", 1061013, 0),
Array("", 1061014, 0),
Array("", 1061015, 0),
Array("", 1061016, 0),
Array("", 1061017, 0),
Array("", 1061018, 0),
Array("", 1061019, 0),
Array("", 1061020, 0),
Array("", 1061021, 0),
Array("", 1061022, 0),
Array("", 1061023, 0),
Array("", 1061024, 0),
Array("", 1061025, 0),
Array("", 1061026, 0),
Array("", 1061027, 0),
Array("", 1061028, 0),
Array("", 1061029, 0),
Array("", 1061030, 0),
Array("", 1061031, 0),
Array("", 1061032, 0),
Array("", 1061033, 0),
Array("", 1061034, 0),
Array("", 1061035, 0),
Array("", 1061036, 0),
Array("", 1061037, 0),
Array("", 1061038, 0),
Array("", 1061039, 0),
Array("", 1061040, 0),
Array("", 1061041, 0),
Array("", 1061042, 0),
Array("", 1061043, 0),
Array("", 1061044, 0),
Array("", 1061045, 0),
Array("", 1061046, 0),
Array("", 1061047, 0),
Array("", 1061048, 0),
Array("", 1061049, 0),
Array("", 1061050, 0),
Array("", 1061051, 0),
Array("", 1061052, 0),
Array("", 1061053, 0),
Array("", 1061054, 0),
Array("", 1061055, 0),
Array("", 1061056, 0),
Array("", 1061057, 0),
Array("", 1061058, 0),
Array("", 1061059, 0),
Array("", 1061060, 0),
Array("", 1061061, 0),
Array("", 1061062, 0),
Array("", 1061063, 0),
Array("", 1061064, 0),
Array("", 1061069, 0),
Array("", 1061070, 0),
Array("", 1061071, 0),
Array("", 1061076, 0),
Array("", 1061077, 0),
Array("", 1061078, 0),
Array("", 1061079, 0)
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
            cm.sendSimpleS("欢迎来到裤子店,你想买我们商店的物品么?请选择吧：." + choices,2);
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