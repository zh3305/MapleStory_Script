var status = 0;
var choice;
var scrolls = Array(
Array("", 1061080, 0),
Array("", 1061081, 0),
Array("", 1061082, 0),
Array("", 1061083, 0),
Array("", 1061084, 0),
Array("", 1061085, 0),
Array("", 1061086, 0),
Array("", 1061087, 0),
Array("", 1061088, 0),
Array("", 1061090, 0),
Array("", 1061091, 0),
Array("", 1061092, 0),
Array("", 1061093, 0),
Array("", 1061094, 0),
Array("", 1061095, 0),
Array("", 1061096, 0),
Array("", 1061097, 0),
Array("", 1061098, 0),
Array("", 1061099, 0),
Array("", 1061100, 0),
Array("", 1061101, 0),
Array("", 1061102, 0),
Array("", 1061104, 0),
Array("", 1061105, 0),
Array("", 1061106, 0),
Array("", 1061114, 0),
Array("", 1061115, 0),
Array("", 1061116, 0),
Array("", 1061117, 0),
Array("", 1061118, 0),
Array("", 1061119, 0),
Array("", 1061120, 0),
Array("", 1061121, 0),
Array("", 1061122, 0),
Array("", 1061123, 0),
Array("", 1061156, 0),
Array("", 1061157, 0),
Array("", 1061158, 0),
Array("", 1061160, 0),
Array("", 1061171, 0),
Array("", 1061172, 0),
Array("", 1061173, 0),
Array("", 1061174, 0),
Array("", 1061175, 0),
Array("", 1061176, 0),
Array("", 1061177, 0),
Array("", 1061178, 0),
Array("", 1061179, 0),
Array("", 1061180, 0),
Array("", 1061181, 0),
Array("", 1061182, 0),
Array("", 1061183, 0),
Array("", 1061184, 0),
Array("", 1061185, 0),
Array("", 1061186, 0),
Array("", 1061187, 0),
Array("", 1061188, 0),
Array("", 1061189, 0),
Array("", 1061190, 0),
Array("", 1061191, 0),
Array("", 1061192, 0),
Array("", 1061193, 0),
Array("", 1061194, 0),
Array("", 1061195, 0),
Array("", 1061196, 0),
Array("", 1061197, 0),
Array("", 1061200, 0),
Array("", 1061201, 0),
Array("", 1061202, 0),
Array("", 1062000, 0),
Array("", 1062001, 0),
Array("", 1062002, 0),
Array("", 1062004, 0),
Array("", 1062006, 0),
Array("", 1062007, 0),
Array("", 1062029, 0),
Array("", 1062030, 0),
Array("", 1062115, 0),
Array("", 1062140, 0),
Array("", 1062141, 0),
Array("", 1062142, 0),
Array("", 1062143, 0),
Array("", 1062144, 0),
Array("", 1062146, 0),
Array("", 1062148, 0)
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