var status = 0;
var choice;
var scrolls = Array(
Array("", 1050046, 0),
Array("", 1050047, 0),
Array("", 1050048, 0),
Array("", 1050049, 0),
Array("", 1050051, 0),
Array("", 1050052, 0),
Array("", 1050053, 0),
Array("", 1050054, 0),
Array("", 1050055, 0),
Array("", 1050056, 0),
Array("", 1050058, 0),
Array("", 1050059, 0),
Array("", 1050060, 0),
Array("", 1050061, 0),
Array("", 1050062, 0),
Array("", 1050063, 0),
Array("", 1050064, 0),
Array("", 1050067, 0),
Array("", 1050068, 0),
Array("", 1050069, 0),
Array("", 1050070, 0),
Array("", 1050072, 0),
Array("", 1050073, 0),
Array("", 1050074, 0),
Array("", 1050075, 0),
Array("", 1050076, 0),
Array("", 1050077, 0),
Array("", 1050078, 0),
Array("", 1050080, 0),
Array("", 1050000, 0),
Array("", 1050001, 0),
Array("", 1050002, 0),
Array("", 1050003, 0),
Array("", 1050005, 0),
Array("", 1050006, 0),
Array("", 1050007, 0),
Array("", 1050008, 0),
Array("", 1050009, 0),
Array("", 1050010, 0),
Array("", 1050011, 0),
Array("", 1050018, 0),
Array("", 1050021, 0),
Array("", 1050022, 0),
Array("", 1050023, 0),
Array("", 1050024, 0),
Array("", 1050025, 0),
Array("", 1050026, 0),
Array("", 1050027, 0),
Array("", 1050028, 0),
Array("", 1050029, 0),
Array("", 1050030, 0),
Array("", 1050031, 0),
Array("", 1050035, 0),
Array("", 1050036, 0),
Array("", 1050037, 0),
Array("", 1050038, 0),
Array("", 1050039, 0),
Array("", 1050045, 0),
Array("", 1052173, 0),
Array("", 1052177, 0),
Array("", 1052202, 0),
Array("", 1052208, 0),
Array("", 1052217, 0),
Array("", 1052226, 0),
Array("", 1052235, 0),
Array("", 1052244, 0),
Array("", 1052270, 0),
Array("", 1052271, 0),
Array("", 1052272, 0),
Array("", 1052273, 0),
Array("", 1052274, 0),
Array("", 1052299, 0),
Array("", 1052300, 0),
Array("", 1052301, 0),
Array("", 1052302, 0),
Array("", 1052303, 0),
Array("", 1052304, 0),
Array("", 1052305, 0),
Array("", 1052314, 0),
Array("", 1052315, 0),
Array("", 1052316, 0),
Array("", 1052317, 0),
Array("", 1052318, 0),
Array("", 1052319, 0),
Array("", 1052320, 0),
Array("", 1052321, 0),
Array("", 1052322, 0),
Array("", 1052323, 0),
Array("", 1052333, 0),
Array("", 1052334, 0),
Array("", 1052335, 0),
Array("", 1052336, 0),
Array("", 1052337, 0),
Array("", 1052341, 0),
Array("", 1052342, 0),
Array("", 1052344, 0),
Array("", 1052350, 0),
Array("", 1052357, 0),
Array("", 1052358, 0),
Array("", 1052371, 0),
Array("", 1052374, 0),
Array("", 1052375, 0),
Array("", 1052376, 0),
Array("", 1052377, 0),
Array("", 1052378, 0),
Array("", 1052379, 0),
Array("", 1052380, 0),
Array("", 1052381, 0),
Array("", 1052382, 0),
Array("", 1052383, 0),
Array("", 1052384, 0),
Array("", 1052385, 0),
Array("", 1052386, 0),
Array("", 1052387, 0),
Array("", 1052388, 0),
Array("", 1052389, 0),
Array("", 1052390, 0),
Array("", 1052391, 0),
Array("", 1052392, 0),
Array("", 1052393, 0),
Array("", 1052394, 0),
Array("", 1052395, 0),
Array("", 1052396, 0),
Array("", 1052397, 0),
Array("", 1052398, 0),
Array("", 1052405, 0),
Array("", 1052429, 0),
Array("", 1052430, 0),
Array("", 1052431, 0),
Array("", 1052432, 0),
Array("", 1052433, 0),
Array("", 1052434, 0),
Array("", 1052444, 0),
Array("", 1052457, 0),
Array("", 1052460, 0),
Array("", 1052461, 0),
Array("", 1052467, 0),
Array("", 1052468, 0),
Array("", 1052469, 0),
Array("", 1052470, 0),
Array("", 1052495, 0),
Array("", 1052496, 0),
Array("", 1052497, 0),
Array("", 1052498, 0),
Array("", 1052499, 0),
Array("", 1052500, 0),
Array("", 1052501, 0),
Array("", 1052502, 0),
Array("", 1052516, 0),
Array("", 1052517, 0),
Array("", 1052518, 0),
Array("", 1052519, 0),
Array("", 1052520, 0),
Array("", 1052521, 0),
Array("", 1052522, 0),
Array("", 1052523, 0),
Array("", 1052524, 0),
Array("", 1052525, 0),
Array("", 1052526, 0),
Array("", 1052527, 0),
Array("", 1052529, 0),
Array("", 1052532, 0),
Array("", 1052545, 0),
Array("", 1052546, 0),
Array("", 1052547, 0)
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
            cm.sendSimpleS("欢迎来到套服店,你想买我们商店的物品么?请选择吧：." + choices,2);
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