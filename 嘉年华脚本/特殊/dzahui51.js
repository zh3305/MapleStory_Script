var status = 0;
var choice;
var scrolls = Array(
Array("", 1522000, 0),
Array("", 1522001, 0),
Array("", 1522002, 0),
Array("", 1522003, 0),
Array("", 1522004, 0),
Array("", 1522005, 0),
Array("", 1522006, 0),
Array("", 1522007, 0),
Array("", 1522008, 0),
Array("", 1522009, 0),
Array("", 1522010, 0),
Array("", 1522011, 0),
Array("", 1522012, 0),
Array("", 1522013, 0),
Array("", 1522014, 0),
Array("", 1522015, 0),
Array("", 1522016, 0),
Array("", 1522017, 0),
Array("", 1522018, 0),
Array("", 1522019, 0),
Array("", 1522020, 0),
Array("", 1522021, 0),
Array("", 1522022, 0),
Array("", 1522023, 0),
Array("", 1522024, 0),
Array("", 1522025, 0),
Array("", 1522026, 0),
Array("", 1522027, 0),
Array("", 1522028, 0),
Array("", 1522029, 0),
Array("", 1522030, 0),
Array("", 1522031, 0),
Array("", 1522032, 0),
Array("", 1522033, 0),
Array("", 1522034, 0),
Array("", 1522035, 0),
Array("", 1522036, 0),
Array("", 1522037, 0),
Array("", 1522038, 0),
Array("", 1522039, 0),
Array("", 1522040, 0),
Array("", 1522041, 0),
Array("", 1522042, 0),
Array("", 1522043, 0),
Array("", 1522044, 0),
Array("", 1522045, 0),
Array("", 1522046, 0),
Array("", 1522047, 0),
Array("", 1522048, 0),
Array("", 1522049, 0),
Array("", 1522050, 0),
Array("", 1522051, 0),
Array("", 1522052, 0),
Array("", 1522053, 0),
Array("", 1522054, 0),
Array("", 1522055, 0),
Array("", 1522056, 0),
Array("", 1522058, 0),
Array("", 1522059, 0),
Array("", 1522060, 0),
Array("", 1522061, 0),
Array("", 1522062, 0),
Array("", 1522063, 0),
Array("", 1522064, 0),
Array("", 1522065, 0),
Array("", 1522066, 0),
Array("", 1522067, 0),
Array("", 1522068, 0),
Array("", 1522070, 0),
Array("", 1522071, 0),
Array("", 1522072, 0),
Array("", 1522074, 0),
Array("", 1522075, 0),
Array("", 1522078, 0),
Array("", 1522079, 0),
Array("", 1522080, 0),
Array("", 1522081, 0),
Array("", 1522085, 0),
Array("", 1532000, 0),
Array("", 1532001, 0),
Array("", 1532002, 0),
Array("", 1532003, 0),
Array("", 1532004, 0),
Array("", 1532005, 0),
Array("", 1532006, 0),
Array("", 1532007, 0),
Array("", 1532008, 0),
Array("", 1532009, 0),
Array("", 1532010, 0),
Array("", 1532011, 0),
Array("", 1532012, 0),
Array("", 1532013, 0),
Array("", 1532014, 0),
Array("", 1532015, 0),
Array("", 1532016, 0),
Array("", 1532017, 0),
Array("", 1532018, 0),
Array("", 1532019, 0),
Array("", 1532020, 0),
Array("", 1532021, 0),
Array("", 1532022, 0),
Array("", 1532023, 0),
Array("", 1532024, 0),
Array("", 1532025, 0),
Array("", 1532026, 0),
Array("", 1532027, 0),
Array("", 1532028, 0),
Array("", 1532029, 0),
Array("", 1532030, 0),
Array("", 1532031, 0),
Array("", 1532036, 0),
Array("", 1532037, 0),
Array("", 1532038, 0),
Array("", 1532039, 0),
Array("", 1532040, 0),
Array("", 1532041, 0),
Array("", 1532042, 0),
Array("", 1532043, 0),
Array("", 1532044, 0),
Array("", 1532045, 0),
Array("", 1532046, 0),
Array("", 1532047, 0),
Array("", 1532048, 0),
Array("", 1532049, 0),
Array("", 1532050, 0),
Array("", 1532051, 0),
Array("", 1532052, 0),
Array("", 1532053, 0),
Array("", 1532054, 0),
Array("", 1532055, 0),
Array("", 1532056, 0),
Array("", 1532057, 0),
Array("", 1532058, 0),
Array("", 1532059, 0),
Array("", 1532060, 0),
Array("", 1532062, 0),
Array("", 1532063, 0),
Array("", 1532064, 0),
Array("", 1532065, 0),
Array("", 1532066, 0),
Array("", 1532067, 0),
Array("", 1532068, 0),
Array("", 1532069, 0),
Array("", 1532070, 0),
Array("", 1532071, 0),
Array("", 1532073, 0),
Array("", 1532074, 0),
Array("", 1532075, 0),
Array("", 1532077, 0),
Array("", 1532078, 0),
Array("", 1532081, 0),
Array("", 1532082, 0),
Array("", 1532083, 0),
Array("", 1532084, 0),
Array("", 1532089, 0)
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
            cm.sendSimpleS("欢迎来到双弩枪,手持火炮店,你想买我们商店的物品么?请选择吧：." + choices,2);
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