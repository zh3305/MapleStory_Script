var status = 0;
var choice;
var scrolls = Array(
Array("", 1302000, 0),
Array("", 1302001, 0),
Array("", 1302002, 0),
Array("", 1302003, 0),
Array("", 1302004, 0),
Array("", 1302005, 0),
Array("", 1302006, 0),
Array("", 1302007, 0),
Array("", 1302008, 0),
Array("", 1302009, 0),
Array("", 1302010, 0),
Array("", 1302011, 0),
Array("", 1302012, 0),
Array("", 1302013, 0),
Array("", 1302014, 0),
Array("", 1302015, 0),
Array("", 1302016, 0),
Array("", 1302017, 0),
Array("", 1302018, 0),
Array("", 1302019, 0),
Array("", 1302020, 0),
Array("", 1302021, 0),
Array("", 1302022, 0),
Array("", 1302023, 0),
Array("", 1302024, 0),
Array("", 1302025, 0),
Array("", 1302026, 0),
Array("", 1302027, 0),
Array("", 1302028, 0),
Array("", 1302029, 0),
Array("", 1302030, 0),
Array("", 1302031, 0),
Array("", 1302032, 0),
Array("", 1302035, 0),
Array("", 1302036, 0),
Array("", 1302037, 0),
Array("", 1302038, 0),
Array("", 1302039, 0),
Array("", 1302040, 0),
Array("", 1302041, 0),
Array("", 1302042, 0),
Array("", 1302043, 0),
Array("", 1302044, 0),
Array("", 1302045, 0),
Array("", 1302046, 0),
Array("", 1302047, 0),
Array("", 1302049, 0),
Array("", 1302050, 0),
Array("", 1302051, 0),
Array("", 1302052, 0),
Array("", 1302053, 0),
Array("", 1302054, 0),
Array("", 1302056, 0),
Array("", 1302058, 0),
Array("", 1302059, 0),
Array("", 1302060, 0),
Array("", 1302061, 0),
Array("", 1302063, 0),
Array("", 1302064, 0),
Array("", 1302066, 0),
Array("", 1302067, 0),
Array("", 1302068, 0),
Array("", 1302070, 0),
Array("", 1302071, 0),
Array("", 1302073, 0),
Array("", 1302074, 0),
Array("", 1302075, 0),
Array("", 1302076, 0),
Array("", 1302077, 0),
Array("", 1302078, 0),
Array("", 1302080, 0),
Array("", 1302081, 0),
Array("", 1302084, 0),
Array("", 1302085, 0),
Array("", 1302086, 0),
Array("", 1302087, 0),
Array("", 1302104, 0),
Array("", 1302105, 0),
Array("", 1302108, 0),
Array("", 1302109, 0),
Array("", 1302112, 0),
Array("", 1302113, 0),
Array("", 1302119, 0),
Array("", 1302120, 0),
Array("", 1302124, 0),
Array("", 1302125, 0),
Array("", 1302126, 0),
Array("", 1302128, 0),
Array("", 1302129, 0),
Array("", 1302132, 0),
Array("", 1302133, 0),
Array("", 1302134, 0),
Array("", 1302135, 0),
Array("", 1302138, 0),
Array("", 1302141, 0),
Array("", 1302142, 0),
Array("", 1302143, 0),
Array("", 1302144, 0),
Array("", 1302145, 0),
Array("", 1302146, 0),
Array("", 1302147, 0),
Array("", 1302149, 0),
Array("", 1302151, 0),
Array("", 1302152, 0),
Array("", 1302153, 0),
Array("", 1302159, 0),
Array("", 1302160, 0),
Array("", 1302161, 0),
Array("", 1302162, 0),
Array("", 1302163, 0),
Array("", 1302164, 0),
Array("", 1302165, 0),
Array("", 1302166, 0),
Array("", 1302167, 0),
Array("", 1302168, 0),
Array("", 1302169, 0),
Array("", 1302170, 0),
Array("", 1302172, 0),
Array("", 1302173, 0),
Array("", 1302174, 0),
Array("", 1302175, 0),
Array("", 1302176, 0),
Array("", 1302177, 0),
Array("", 1302178, 0),
Array("", 1302179, 0),
Array("", 1302180, 0),
Array("", 1302181, 0),
Array("", 1302182, 0),
Array("", 1302183, 0),
Array("", 1302184, 0),
Array("", 1302185, 0),
Array("", 1302186, 0),
Array("", 1302187, 0),
Array("", 1302188, 0),
Array("", 1302189, 0),
Array("", 1302190, 0),
Array("", 1302191, 0),
Array("", 1302192, 0),
Array("", 1302193, 0),
Array("", 1302195, 0),
Array("", 1302196, 0),
Array("", 1302197, 0),
Array("", 1302198, 0),
Array("", 1302199, 0),
Array("", 1302200, 0),
Array("", 1302201, 0),
Array("", 1302207, 0),
Array("", 1302208, 0),
Array("", 1302209, 0),
Array("", 1302210, 0),
Array("", 1302211, 0),
Array("", 1302212, 0),
Array("", 1302213, 0),
Array("", 1302214, 0),
Array("", 1302217, 0),
Array("", 1302218, 0),
Array("", 1302219, 0),
Array("", 1302220, 0),
Array("", 1302221, 0),
Array("", 1302222, 0),
Array("", 1302223, 0),
Array("", 1302224, 0),
Array("", 1302225, 0),
Array("", 1302226, 0),
Array("", 1302227, 0),
Array("", 1302228, 0),
Array("", 1302230, 0),
Array("", 1302231, 0),
Array("", 1302248, 0),
Array("", 1302249, 0),
Array("", 1302250, 0),
Array("", 1302251, 0),
Array("", 1302252, 0),
Array("", 1302253, 0),
Array("", 1302900, 0),
Array("", 1302901, 0),
Array("", 1302902, 0),
Array("", 1302903, 0),
Array("", 1302904, 0),
Array("", 1302905, 0),
Array("", 1302906, 0),
Array("", 1302907, 0),
Array("", 1302908, 0),
Array("", 1302909, 0),
Array("", 1302910, 0),
Array("", 1302911, 0),
Array("", 1302912, 0),
Array("", 1302913, 0),
Array("", 1302914, 0),
Array("", 1302915, 0),
Array("", 1302916, 0),
Array("", 1312000, 0),
Array("", 1312001, 0),
Array("", 1312002, 0),
Array("", 1312003, 0),
Array("", 1312004, 0)
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
            cm.sendSimpleS("欢迎来到单手剑,斧店,你想买我们商店的物品么?请选择吧：." + choices,2);
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