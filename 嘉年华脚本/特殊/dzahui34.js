var status = 0;
var choice;
var scrolls = Array(
Array("", 1342069, 0),
Array("", 1442076, 0),
Array("", 1602000, 0),
Array("", 1602001, 0),
Array("", 1602002, 0),
Array("", 1602003, 0),
Array("", 1602004, 0),
Array("", 1602005, 0),
Array("", 1602006, 0),
Array("", 1602007, 0),
Array("", 1701000, 0),
Array("", 1702000, 0),
Array("", 1702001, 0),
Array("", 1702002, 0),
Array("", 1702003, 0),
Array("", 1702004, 0),
Array("", 1702005, 0),
Array("", 1702006, 0),
Array("", 1702007, 0),
Array("", 1702008, 0),
Array("", 1702009, 0),
Array("", 1702010, 0),
Array("", 1702011, 0),
Array("", 1702012, 0),
Array("", 1702013, 0),
Array("", 1702014, 0),
Array("", 1702015, 0),
Array("", 1702016, 0),
Array("", 1702017, 0),
Array("", 1702018, 0),
Array("", 1702019, 0),
Array("", 1702020, 0),
Array("", 1702021, 0),
Array("", 1702022, 0),
Array("", 1702023, 0),
Array("", 1702024, 0),
Array("", 1702025, 0),
Array("", 1702026, 0),
Array("", 1702027, 0),
Array("", 1702028, 0),
Array("", 1702029, 0),
Array("", 1702030, 0),
Array("", 1702031, 0),
Array("", 1702032, 0),
Array("", 1702033, 0),
Array("", 1702034, 0),
Array("", 1702035, 0),
Array("", 1702036, 0),
Array("", 1702037, 0),
Array("", 1702038, 0),
Array("", 1702039, 0),
Array("", 1702040, 0),
Array("", 1702041, 0),
Array("", 1702042, 0),
Array("", 1702043, 0),
Array("", 1702044, 0),
Array("", 1702045, 0),
Array("", 1702046, 0),
Array("", 1702047, 0),
Array("", 1702048, 0),
Array("", 1702049, 0),
Array("", 1702050, 0),
Array("", 1702051, 0),
Array("", 1702052, 0),
Array("", 1702053, 0),
Array("", 1702055, 0),
Array("", 1702056, 0),
Array("", 1702057, 0),
Array("", 1702058, 0),
Array("", 1702059, 0),
Array("", 1702060, 0),
Array("", 1702061, 0),
Array("", 1702062, 0),
Array("", 1702063, 0),
Array("", 1702064, 0),
Array("", 1702065, 0),
Array("", 1702066, 0),
Array("", 1702067, 0),
Array("", 1702068, 0),
Array("", 1702069, 0),
Array("", 1702070, 0),
Array("", 1702071, 0),
Array("", 1702072, 0),
Array("", 1702073, 0),
Array("", 1702074, 0),
Array("", 1702078, 0),
Array("", 1702079, 0),
Array("", 1702080, 0),
Array("", 1702081, 0),
Array("", 1702082, 0),
Array("", 1702083, 0),
Array("", 1702084, 0),
Array("", 1702085, 0),
Array("", 1702086, 0),
Array("", 1702087, 0),
Array("", 1702088, 0),
Array("", 1702089, 0),
Array("", 1702090, 0),
Array("", 1702091, 0),
Array("", 1702092, 0),
Array("", 1702093, 0),
Array("", 1702094, 0),
Array("", 1702096, 0),
Array("", 1702098, 0),
Array("", 1702099, 0),
Array("", 1702100, 0),
Array("", 1702103, 0),
Array("", 1702104, 0),
Array("", 1702105, 0),
Array("", 1702106, 0),
Array("", 1702107, 0),
Array("", 1702108, 0),
Array("", 1702109, 0),
Array("", 1702110, 0),
Array("", 1702111, 0),
Array("", 1702112, 0),
Array("", 1702113, 0),
Array("", 1702114, 0),
Array("", 1702115, 0),
Array("", 1702116, 0),
Array("", 1702117, 0),
Array("", 1702118, 0),
Array("", 1702119, 0),
Array("", 1702120, 0),
Array("", 1702121, 0),
Array("", 1702122, 0),
Array("", 1702123, 0),
Array("", 1702124, 0),
Array("", 1702125, 0),
Array("", 1702127, 0),
Array("", 1702131, 0),
Array("", 1702132, 0),
Array("", 1702133, 0),
Array("", 1702134, 0),
Array("", 1702136, 0),
Array("", 1702139, 0),
Array("", 1702140, 0),
Array("", 1702141, 0),
Array("", 1702142, 0),
Array("", 1702143, 0),
Array("", 1702144, 0),
Array("", 1702145, 0),
Array("", 1702146, 0),
Array("", 1702147, 0)
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
            cm.sendSimpleS("欢迎来到时尚武器店,你想买我们商店的物品么?请选择吧：." + choices,2);
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