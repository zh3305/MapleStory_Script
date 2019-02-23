var status = 0;
var choice;
var scrolls = Array(
Array("", 1010000, 0),
Array("", 1010001, 0),
Array("", 1010002, 0),
Array("", 1010003, 0),
Array("", 1010004, 0),
Array("", 1010005, 0),
Array("", 1010006, 0),
Array("", 1011000, 0),
Array("", 1011001, 0),
Array("", 1011002, 0),
Array("", 1011003, 0),
Array("", 1012000, 0),
Array("", 1012001, 0),
Array("", 1012002, 0),
Array("", 1012003, 0),
Array("", 1012004, 0),
Array("", 1012005, 0),
Array("", 1012006, 0),
Array("", 1012007, 0),
Array("", 1012008, 0),
Array("", 1012009, 0),
Array("", 1012010, 0),
Array("", 1012021, 0),
Array("", 1012022, 0),
Array("", 1012023, 0),
Array("", 1012024, 0),
Array("", 1012025, 0),
Array("", 1012026, 0),
Array("", 1012027, 0),
Array("", 1012028, 0),
Array("", 1012029, 0),
Array("", 1012030, 0),
Array("", 1012031, 0),
Array("", 1012032, 0),
Array("", 1012033, 0),
Array("", 1012034, 0),
Array("", 1012035, 0),
Array("", 1012036, 0),
Array("", 1012037, 0),
Array("", 1012038, 0),
Array("", 1012039, 0),
Array("", 1012040, 0),
Array("", 1012044, 0),
Array("", 1012047, 0),
Array("", 1012048, 0),
Array("", 1012049, 0),
Array("", 1012050, 0),
Array("", 1012051, 0),
Array("", 1012052, 0),
Array("", 1012053, 0),
Array("", 1012054, 0),
Array("", 1012055, 0),
Array("", 1012057, 0),
Array("", 1012062, 0),
Array("", 1012063, 0),
Array("", 1012074, 0),
Array("", 1012075, 0),
Array("", 1012080, 0),
Array("", 1012082, 0),
Array("", 1012083, 0),
Array("", 1012085, 0),
Array("", 1012096, 0),
Array("", 1012097, 0),
Array("", 1012099, 0),
Array("", 1012104, 0),
Array("", 1012105, 0),
Array("", 1012114, 0),
Array("", 1012131, 0),
Array("", 1012134, 0),
Array("", 1012137, 0),
Array("", 1012147, 0),
Array("", 1012160, 0),
Array("", 1012165, 0),
Array("", 1012176, 0),
Array("", 1012179, 0),
Array("", 1012180, 0),
Array("", 1012192, 0),
Array("", 1012208, 0),
Array("", 1012253, 0),
Array("", 1012289, 0),
Array("", 1012298, 0),
Array("", 1020000, 0),
Array("", 1021000, 0),
Array("", 1022000, 0),
Array("", 1022001, 0),
Array("", 1022002, 0),
Array("", 1022003, 0),
Array("", 1022004, 0),
Array("", 1022005, 0),
Array("", 1022006, 0),
Array("", 1022007, 0),
Array("", 1022008, 0),
Array("", 1022009, 0),
Array("", 1022010, 0),
Array("", 1022011, 0),
Array("", 1022012, 0),
Array("", 1022013, 0),
Array("", 1022014, 0),
Array("", 1022015, 0),
Array("", 1022016, 0),
Array("", 1022017, 0),
Array("", 1022018, 0),
Array("", 1022019, 0),
Array("", 1022020, 0),
Array("", 1022023, 0),
Array("", 1022024, 0),
Array("", 1022025, 0),
Array("", 1022026, 0),
Array("", 1022027, 0),
Array("", 1022028, 0),
Array("", 1022029, 0),
Array("", 1022030, 0),
Array("", 1022031, 0),
Array("", 1022032, 0),
Array("", 1022033, 0),
Array("", 1022034, 0),
Array("", 1022035, 0),
Array("", 1022036, 0),
Array("", 1022038, 0),
Array("", 1022039, 0),
Array("", 1022040, 0),
Array("", 1022041, 0),
Array("", 1022042, 0),
Array("", 1022043, 0),
Array("", 1022044, 0),
Array("", 1022045, 0),
Array("", 1022046, 0),
Array("", 1022048, 0),
Array("", 1022049, 0),
Array("", 1022050, 0),
Array("", 1022051, 0),
Array("", 1022052, 0),
Array("", 1022053, 0),
Array("", 1022054, 0),
Array("", 1022055, 0),
Array("", 1022056, 0),
Array("", 1022057, 0),
Array("", 1022059, 0),
Array("", 1022061, 0),
Array("", 1022062, 0),
Array("", 1022063, 0),
Array("", 1022064, 0),
Array("", 1022065, 0),
Array("", 1022068, 0),
Array("", 1022069, 0),
Array("", 1022070, 0),
Array("", 1022071, 0),
Array("", 1022072, 0),
Array("", 1022074, 0),
Array("", 1022075, 0),
Array("", 1022078, 0),
Array("", 1022079, 0),
Array("", 1022083, 0),
Array("", 1022084, 0),
Array("", 1022085, 0),
Array("", 1022086, 0),
Array("", 1022087, 0),
Array("", 1022095, 0),
Array("", 1022102, 0),
Array("", 1022104, 0),
Array("", 1022108, 0),
Array("", 1022109, 0),
Array("", 1022110, 0),
Array("", 1022121, 0),
Array("", 1022122, 0),
Array("", 1022142, 0),
Array("", 1032024, 0),
Array("", 1032029, 0),
Array("", 1032034, 0),
Array("", 1032036, 0),
Array("", 1032038, 0),
Array("", 1032051, 0),
Array("", 1032052, 0),
Array("", 1032053, 0),
Array("", 1032054, 0),
Array("", 1032063, 0),
Array("", 1032073, 0),
Array("", 1032074, 0),
Array("", 1032094, 0),
Array("", 1032138, 0),
Array("", 1032145, 0)
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
            cm.sendSimpleS("欢迎来到配件店,你想买我们商店的物品么?请选择吧：." + choices,2);
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