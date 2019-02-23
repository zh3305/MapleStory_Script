var status = 0;
var choice;
var scrolls = Array(
Array("", 1312005, 0),
Array("", 1312006, 0),
Array("", 1312007, 0),
Array("", 1312008, 0),
Array("", 1312009, 0),
Array("", 1312010, 0),
Array("", 1312011, 0),
Array("", 1312012, 0),
Array("", 1312013, 0),
Array("", 1312014, 0),
Array("", 1312015, 0),
Array("", 1312016, 0),
Array("", 1312017, 0),
Array("", 1312018, 0),
Array("", 1312019, 0),
Array("", 1312020, 0),
Array("", 1312021, 0),
Array("", 1312022, 0),
Array("", 1312023, 0),
Array("", 1312024, 0),
Array("", 1312025, 0),
Array("", 1312026, 0),
Array("", 1312027, 0),
Array("", 1312028, 0),
Array("", 1312029, 0),
Array("", 1312030, 0),
Array("", 1312031, 0),
Array("", 1312032, 0),
Array("", 1312033, 0),
Array("", 1312034, 0),
Array("", 1312035, 0),
Array("", 1312036, 0),
Array("", 1312037, 0),
Array("", 1312038, 0),
Array("", 1312039, 0),
Array("", 1312040, 0),
Array("", 1312041, 0),
Array("", 1312042, 0),
Array("", 1312043, 0),
Array("", 1312045, 0),
Array("", 1312046, 0),
Array("", 1312048, 0),
Array("", 1312049, 0),
Array("", 1312052, 0),
Array("", 1312055, 0),
Array("", 1312056, 0),
Array("", 1312057, 0),
Array("", 1312058, 0),
Array("", 1312059, 0),
Array("", 1312060, 0),
Array("", 1312061, 0),
Array("", 1312062, 0),
Array("", 1312064, 0),
Array("", 1312065, 0),
Array("", 1312066, 0),
Array("", 1312067, 0),
Array("", 1312068, 0),
Array("", 1312069, 0),
Array("", 1312071, 0),
Array("", 1312072, 0),
Array("", 1312073, 0),
Array("", 1312074, 0),
Array("", 1312075, 0),
Array("", 1312076, 0),
Array("", 1312077, 0),
Array("", 1312078, 0),
Array("", 1312079, 0),
Array("", 1312080, 0),
Array("", 1312081, 0),
Array("", 1312082, 0),
Array("", 1312083, 0),
Array("", 1312084, 0),
Array("", 1312085, 0),
Array("", 1312086, 0),
Array("", 1312087, 0),
Array("", 1312088, 0),
Array("", 1312089, 0),
Array("", 1312090, 0),
Array("", 1312091, 0),
Array("", 1312092, 0),
Array("", 1312093, 0),
Array("", 1312094, 0),
Array("", 1312095, 0),
Array("", 1312096, 0),
Array("", 1312097, 0),
Array("", 1312098, 0),
Array("", 1312099, 0),
Array("", 1312101, 0),
Array("", 1312102, 0),
Array("", 1312103, 0),
Array("", 1312104, 0),
Array("", 1312105, 0),
Array("", 1312106, 0),
Array("", 1312110, 0),
Array("", 1312112, 0),
Array("", 1312114, 0),
Array("", 1312115, 0),
Array("", 1312116, 0),
Array("", 1312117, 0),
Array("", 1312119, 0),
Array("", 1312120, 0),
Array("", 1312135, 0),
Array("", 1312136, 0),
Array("", 1312137, 0),
Array("", 1312138, 0),
Array("", 1312142, 0)
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