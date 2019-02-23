var status = 0;
var choice;
var scrolls = Array(
Array("", 1332040, 0),
Array("", 1332041, 0),
Array("", 1332042, 0),
Array("", 1332043, 0),
Array("", 1332044, 0),
Array("", 1332045, 0),
Array("", 1332046, 0),
Array("", 1332047, 0),
Array("", 1332049, 0),
Array("", 1332050, 0),
Array("", 1332051, 0),
Array("", 1332052, 0),
Array("", 1332053, 0),
Array("", 1332054, 0),
Array("", 1332055, 0),
Array("", 1332056, 0),
Array("", 1332057, 0),
Array("", 1332059, 0),
Array("", 1332060, 0),
Array("", 1332061, 0),
Array("", 1332063, 0),
Array("", 1332066, 0),
Array("", 1332073, 0),
Array("", 1332074, 0),
Array("", 1332075, 0),
Array("", 1332076, 0),
Array("", 1332077, 0),
Array("", 1332081, 0),
Array("", 1332082, 0),
Array("", 1332083, 0),
Array("", 1332084, 0),
Array("", 1332085, 0),
Array("", 1332086, 0),
Array("", 1332087, 0),
Array("", 1332088, 0),
Array("", 1332093, 0),
Array("", 1332094, 0),
Array("", 1332095, 0),
Array("", 1332099, 0),
Array("", 1332100, 0),
Array("", 1332102, 0),
Array("", 1332103, 0),
Array("", 1332104, 0),
Array("", 1332107, 0),
Array("", 1332110, 0),
Array("", 1332111, 0),
Array("", 1332112, 0),
Array("", 1332113, 0),
Array("", 1332114, 0),
Array("", 1332115, 0),
Array("", 1332116, 0),
Array("", 1332117, 0),
Array("", 1332118, 0),
Array("", 1332119, 0),
Array("", 1332120, 0),
Array("", 1332121, 0),
Array("", 1332122, 0),
Array("", 1332123, 0),
Array("", 1332124, 0),
Array("", 1332125, 0),
Array("", 1332126, 0),
Array("", 1332127, 0),
Array("", 1332128, 0),
Array("", 1332129, 0),
Array("", 1332130, 0),
Array("", 1332131, 0),
Array("", 1332132, 0),
Array("", 1332133, 0),
Array("", 1332134, 0),
Array("", 1332135, 0),
Array("", 1332136, 0),
Array("", 1332137, 0),
Array("", 1332138, 0),
Array("", 1332139, 0),
Array("", 1332140, 0),
Array("", 1332141, 0),
Array("", 1332142, 0),
Array("", 1332143, 0),
Array("", 1332144, 0),
Array("", 1332145, 0),
Array("", 1332147, 0),
Array("", 1332148, 0),
Array("", 1332149, 0),
Array("", 1332150, 0),
Array("", 1332151, 0),
Array("", 1332152, 0),
Array("", 1332153, 0),
Array("", 1332154, 0),
Array("", 1332155, 0),
Array("", 1332156, 0),
Array("", 1332157, 0),
Array("", 1332158, 0),
Array("", 1332159, 0),
Array("", 1332160, 0),
Array("", 1332161, 0),
Array("", 1332162, 0),
Array("", 1332163, 0),
Array("", 1332164, 0),
Array("", 1332165, 0),
Array("", 1332166, 0),
Array("", 1332167, 0),
Array("", 1332168, 0),
Array("", 1332169, 0),
Array("", 1332170, 0),
Array("", 1332172, 0),
Array("", 1332173, 0),
Array("", 1332174, 0),
Array("", 1332175, 0),
Array("", 1332176, 0),
Array("", 1332177, 0),
Array("", 1332184, 0),
Array("", 1332185, 0),
Array("", 1332186, 0),
Array("", 1332187, 0),
Array("", 1332188, 0),
Array("", 1332191, 0),
Array("", 1332192, 0),
Array("", 1332193, 0),
Array("", 1332194, 0),
Array("", 1332196, 0),
Array("", 1332197, 0),
Array("", 1332205, 0),
Array("", 1332207, 0),
Array("", 1332208, 0),
Array("", 1332209, 0),
Array("", 1332214, 0)
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
            cm.sendSimpleS("欢迎来到单手钝器,短刀店,你想买我们商店的物品么?请选择吧：." + choices,2);
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