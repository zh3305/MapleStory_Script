var status = 0;
var choice;
var scrolls = Array(
Array("", 1482064, 0),
Array("", 1482065, 0),
Array("", 1482066, 0),
Array("", 1482069, 0),
Array("", 1482072, 0),
Array("", 1482073, 0),
Array("", 1482074, 0),
Array("", 1482075, 0),
Array("", 1482076, 0),
Array("", 1482077, 0),
Array("", 1482078, 0),
Array("", 1482079, 0),
Array("", 1482080, 0),
Array("", 1482081, 0),
Array("", 1482082, 0),
Array("", 1482083, 0),
Array("", 1482084, 0),
Array("", 1482085, 0),
Array("", 1482086, 0),
Array("", 1482087, 0),
Array("", 1482088, 0),
Array("", 1482089, 0),
Array("", 1482090, 0),
Array("", 1482091, 0),
Array("", 1482092, 0),
Array("", 1482093, 0),
Array("", 1482094, 0),
Array("", 1482095, 0),
Array("", 1482096, 0),
Array("", 1482097, 0),
Array("", 1482098, 0),
Array("", 1482099, 0),
Array("", 1482101, 0),
Array("", 1482102, 0),
Array("", 1482103, 0),
Array("", 1482104, 0),
Array("", 1482105, 0),
Array("", 1482106, 0),
Array("", 1482107, 0),
Array("", 1482108, 0),
Array("", 1482109, 0),
Array("", 1482110, 0),
Array("", 1482111, 0),
Array("", 1482112, 0),
Array("", 1482113, 0),
Array("", 1482114, 0),
Array("", 1482115, 0),
Array("", 1482116, 0),
Array("", 1482117, 0),
Array("", 1482118, 0),
Array("", 1482119, 0),
Array("", 1482120, 0),
Array("", 1482121, 0),
Array("", 1482122, 0),
Array("", 1482124, 0),
Array("", 1482125, 0),
Array("", 1482126, 0),
Array("", 1482127, 0),
Array("", 1482128, 0),
Array("", 1482129, 0),
Array("", 1482135, 0),
Array("", 1482136, 0),
Array("", 1482138, 0),
Array("", 1482139, 0),
Array("", 1482140, 0),
Array("", 1482141, 0),
Array("", 1482143, 0),
Array("", 1482144, 0),
Array("", 1482151, 0),
Array("", 1482152, 0),
Array("", 1482153, 0),
Array("", 1482154, 0),
Array("", 1482159, 0),
Array("", 1492000, 0),
Array("", 1492001, 0),
Array("", 1492002, 0),
Array("", 1492003, 0),
Array("", 1492004, 0),
Array("", 1492005, 0),
Array("", 1492006, 0),
Array("", 1492007, 0),
Array("", 1492008, 0),
Array("", 1492009, 0),
Array("", 1492010, 0),
Array("", 1492011, 0),
Array("", 1492012, 0),
Array("", 1492013, 0),
Array("", 1492014, 0),
Array("", 1492015, 0),
Array("", 1492016, 0),
Array("", 1492017, 0),
Array("", 1492018, 0),
Array("", 1492019, 0),
Array("", 1492020, 0),
Array("", 1492021, 0),
Array("", 1492022, 0),
Array("", 1492023, 0),
Array("", 1492025, 0),
Array("", 1492026, 0),
Array("", 1492030, 0),
Array("", 1492031, 0),
Array("", 1492034, 0),
Array("", 1492035, 0),
Array("", 1492036, 0),
Array("", 1492037, 0),
Array("", 1492038, 0),
Array("", 1492042, 0),
Array("", 1492043, 0),
Array("", 1492044, 0),
Array("", 1492047, 0),
Array("", 1492048, 0),
Array("", 1492053, 0),
Array("", 1492054, 0),
Array("", 1492055, 0),
Array("", 1492056, 0),
Array("", 1492057, 0),
Array("", 1492058, 0),
Array("", 1492059, 0),
Array("", 1492060, 0),
Array("", 1492061, 0),
Array("", 1492062, 0),
Array("", 1492063, 0),
Array("", 1492064, 0),
Array("", 1492065, 0),
Array("", 1492066, 0),
Array("", 1492069, 0),
Array("", 1492072, 0),
Array("", 1492073, 0),
Array("", 1492074, 0),
Array("", 1492075, 0),
Array("", 1492076, 0),
Array("", 1492077, 0),
Array("", 1492078, 0),
Array("", 1492079, 0),
Array("", 1492080, 0),
Array("", 1492081, 0),
Array("", 1492082, 0),
Array("", 1492083, 0),
Array("", 1492084, 0),
Array("", 1492085, 0),
Array("", 1492086, 0),
Array("", 1492087, 0),
Array("", 1492088, 0),
Array("", 1492089, 0),
Array("", 1492090, 0),
Array("", 1492092, 0),
Array("", 1492093, 0),
Array("", 1492094, 0),
Array("", 1492095, 0),
Array("", 1492096, 0),
Array("", 1492097, 0),
Array("", 1492098, 0),
Array("", 1492100, 0),
Array("", 1492101, 0),
Array("", 1492102, 0),
Array("", 1492103, 0),
Array("", 1492105, 0),
Array("", 1492106, 0),
Array("", 1492107, 0),
Array("", 1492108, 0),
Array("", 1492109, 0),
Array("", 1492110, 0),
Array("", 1492111, 0),
Array("", 1492112, 0),
Array("", 1492113, 0),
Array("", 1492114, 0),
Array("", 1492115, 0),
Array("", 1492116, 0),
Array("", 1492117, 0),
Array("", 1492118, 0),
Array("", 1492119, 0),
Array("", 1492121, 0),
Array("", 1492122, 0),
Array("", 1492124, 0),
Array("", 1492125, 0),
Array("", 1492126, 0),
Array("", 1492127, 0),
Array("", 1492128, 0),
Array("", 1492129, 0),
Array("", 1492135, 0),
Array("", 1492136, 0),
Array("", 1492138, 0),
Array("", 1492144, 0),
Array("", 1492145, 0),
Array("", 1492146, 0),
Array("", 1492147, 0),
Array("", 1492148, 0),
Array("", 1492149, 0),
Array("", 1492152, 0),
Array("", 1492153, 0),
Array("", 1492155, 0),
Array("", 1492156, 0),
Array("", 1492162, 0),
Array("", 1492163, 0),
Array("", 1492164, 0),
Array("", 1492165, 0),
Array("", 1492170, 0)
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
            cm.sendSimpleS("欢迎来到指节,短枪店,你想买我们商店的物品么?请选择吧：." + choices,2);
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