var status = 0;
var choice;
var scrolls = Array(
Array("", 1212000, 0),
Array("", 1212001, 0),
Array("", 1212002, 0),
Array("", 1212003, 0),
Array("", 1212004, 0),
Array("", 1212005, 0),
Array("", 1212006, 0),
Array("", 1212007, 0),
Array("", 1212008, 0),
Array("", 1212009, 0),
Array("", 1212010, 0),
Array("", 1212011, 0),
Array("", 1212012, 0),
Array("", 1212013, 0),
Array("", 1212014, 0),
Array("", 1212015, 0),
Array("", 1212016, 0),
Array("", 1212017, 0),
Array("", 1212018, 0),
Array("", 1212019, 0),
Array("", 1212020, 0),
Array("", 1212021, 0),
Array("", 1212022, 0),
Array("", 1212023, 0),
Array("", 1212024, 0),
Array("", 1212025, 0),
Array("", 1212026, 0),
Array("", 1212027, 0),
Array("", 1212028, 0),
Array("", 1212029, 0),
Array("", 1212030, 0),
Array("", 1212031, 0),
Array("", 1212032, 0),
Array("", 1212033, 0),
Array("", 1212034, 0),
Array("", 1212035, 0),
Array("", 1212036, 0),
Array("", 1212037, 0),
Array("", 1212038, 0),
Array("", 1212039, 0),
Array("", 1212040, 0),
Array("", 1212041, 0),
Array("", 1212042, 0),
Array("", 1212043, 0),
Array("", 1212044, 0),
Array("", 1212045, 0),
Array("", 1212046, 0),
Array("", 1212047, 0),
Array("", 1212048, 0),
Array("", 1212052, 0),
Array("", 1222000, 0),
Array("", 1222001, 0),
Array("", 1222002, 0),
Array("", 1222003, 0),
Array("", 1222004, 0),
Array("", 1222005, 0),
Array("", 1222006, 0),
Array("", 1222007, 0),
Array("", 1222008, 0),
Array("", 1222009, 0),
Array("", 1222010, 0),
Array("", 1222011, 0),
Array("", 1222012, 0),
Array("", 1222013, 0),
Array("", 1222014, 0),
Array("", 1222015, 0),
Array("", 1222016, 0),
Array("", 1222017, 0),
Array("", 1222018, 0),
Array("", 1222019, 0),
Array("", 1222020, 0),
Array("", 1222021, 0),
Array("", 1222022, 0),
Array("", 1222023, 0),
Array("", 1222024, 0),
Array("", 1222025, 0),
Array("", 1222026, 0),
Array("", 1222027, 0),
Array("", 1222028, 0),
Array("", 1222029, 0),
Array("", 1222030, 0),
Array("", 1222031, 0),
Array("", 1222032, 0),
Array("", 1222033, 0),
Array("", 1222034, 0),
Array("", 1222035, 0),
Array("", 1222036, 0),
Array("", 1222037, 0),
Array("", 1222038, 0),
Array("", 1222039, 0),
Array("", 1222040, 0),
Array("", 1222041, 0),
Array("", 1222042, 0),
Array("", 1222043, 0),
Array("", 1222044, 0),
Array("", 1222048, 0)
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
            cm.sendSimpleS("欢迎来到双头杖,灵魂手铳店,你想买我们商店的物品么?请选择吧：." + choices,2);
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