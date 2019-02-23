var status = 0;
var choice;
var scrolls = Array(
Array("", 1942000, 0),
Array("", 1942001, 0),
Array("", 1942002, 0),
Array("", 1942003, 0),
Array("", 1942004, 0),
Array("", 1952000, 0),
Array("", 1952001, 0),
Array("", 1952002, 0),
Array("", 1952003, 0),
Array("", 1952004, 0),
Array("", 1962000, 0),
Array("", 1962001, 0),
Array("", 1962002, 0),
Array("", 1962003, 0),
Array("", 1962004, 0),
Array("", 1972000, 0),
Array("", 1972001, 0),
Array("", 1972002, 0),
Array("", 1972003, 0),
Array("", 1972004, 0),
Array("", 1612000, 0),
Array("", 1612001, 0),
Array("", 1612002, 0),
Array("", 1612003, 0),
Array("", 1612004, 0),
Array("", 1622000, 0),
Array("", 1622001, 0),
Array("", 1622002, 0),
Array("", 1622003, 0),
Array("", 1622004, 0),
Array("", 1632000, 0),
Array("", 1632001, 0),
Array("", 1632002, 0),
Array("", 1632003, 0),
Array("", 1642000, 0),
Array("", 1642001, 0),
Array("", 1642002, 0),
Array("", 1642003, 0),
Array("", 1652000, 0),
Array("", 1652001, 0),
Array("", 1652002, 0),
Array("", 1652003, 0),
Array("", 1652004, 0),
Array("", 1090000, 0),
Array("", 1091000, 0),
Array("", 1092000, 0),
Array("", 1092001, 0),
Array("", 1092002, 0),
Array("", 1092003, 0),
Array("", 1092004, 0),
Array("", 1092005, 0),
Array("", 1092006, 0),
Array("", 1092007, 0),
Array("", 1092008, 0),
Array("", 1092009, 0),
Array("", 1092010, 0),
Array("", 1092011, 0),
Array("", 1092012, 0),
Array("", 1092013, 0),
Array("", 1092014, 0),
Array("", 1092015, 0),
Array("", 1092016, 0),
Array("", 1092017, 0),
Array("", 1092018, 0),
Array("", 1092019, 0),
Array("", 1092020, 0),
Array("", 1092021, 0),
Array("", 1092022, 0),
Array("", 1092023, 0),
Array("", 1092024, 0),
Array("", 1092025, 0),
Array("", 1092026, 0),
Array("", 1092027, 0),
Array("", 1092028, 0),
Array("", 1092029, 0),
Array("", 1092030, 0),
Array("", 1092035, 0),
Array("", 1092036, 0),
Array("", 1092037, 0),
Array("", 1092038, 0),
Array("", 1092039, 0),
Array("", 1092041, 0),
Array("", 1092042, 0),
Array("", 1092045, 0),
Array("", 1092046, 0),
Array("", 1092047, 0),
Array("", 1092049, 0),
Array("", 1092050, 0),
Array("", 1092051, 0),
Array("", 1092054, 0),
Array("", 1092057, 0),
Array("", 1092058, 0),
Array("", 1092059, 0),
Array("", 1092060, 0),
Array("", 1092061, 0),
Array("", 1092069, 0),
Array("", 1092070, 0),
Array("", 1092071, 0),
Array("", 1092072, 0),
Array("", 1092073, 0),
Array("", 1092074, 0),
Array("", 1092075, 0),
Array("", 1092076, 0),
Array("", 1092077, 0),
Array("", 1092078, 0),
Array("", 1092079, 0),
Array("", 1092080, 0),
Array("", 1092081, 0),
Array("", 1092082, 0),
Array("", 1092083, 0),
Array("", 1092084, 0),
Array("", 1092087, 0),
Array("", 1092088, 0),
Array("", 1092089, 0),
Array("", 1092090, 0),
Array("", 1092091, 0),
Array("", 1092092, 0),
Array("", 1092093, 0),
Array("", 1092094, 0),
Array("", 1092095, 0),
Array("", 1092096, 0),
Array("", 1092097, 0),
Array("", 1092098, 0),
Array("", 1092099, 0),
Array("", 1092100, 0),
Array("", 1092101, 0),
Array("", 1092102, 0),
Array("", 1092103, 0),
Array("", 1092104, 0),
Array("", 1092105, 0),
Array("", 1092106, 0),
Array("", 1092107, 0),
Array("", 1092109, 0),
Array("", 1092110, 0),
Array("", 1092111, 0),
Array("", 1098000, 0),
Array("", 1098001, 0),
Array("", 1098002, 0),
Array("", 1098003, 0),
Array("", 1099000, 0),
Array("", 1099001, 0),
Array("", 1099002, 0),
Array("", 1099003, 0),
Array("", 1099004, 0)
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
            cm.sendSimpleS("欢迎来到龙,机械,盾店,你想买我们商店的物品么?请选择吧：." + choices,2);
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