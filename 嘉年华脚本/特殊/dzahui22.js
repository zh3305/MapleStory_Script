var status = 0;
var choice;
var scrolls = Array(
Array("", 1100000, 0),
Array("", 1100001, 0),
Array("", 1102005, 0),
Array("", 1102006, 0),
Array("", 1102007, 0),
Array("", 1102008, 0),
Array("", 1102009, 0),
Array("", 1102010, 0),
Array("", 1102019, 0),
Array("", 1102020, 0),
Array("", 1102025, 0),
Array("", 1102036, 0),
Array("", 1102037, 0),
Array("", 1102038, 0),
Array("", 1102039, 0),
Array("", 1102044, 0),
Array("", 1102045, 0),
Array("", 1102049, 0),
Array("", 1102050, 0),
Array("", 1102051, 0),
Array("", 1102052, 0),
Array("", 1102058, 0),
Array("", 1102059, 0),
Array("", 1102060, 0),
Array("", 1102062, 0),
Array("", 1102063, 0),
Array("", 1102065, 0),
Array("", 1102066, 0),
Array("", 1102067, 0),
Array("", 1102068, 0),
Array("", 1102069, 0),
Array("", 1102070, 0),
Array("", 1102072, 0),
Array("", 1102073, 0),
Array("", 1102074, 0),
Array("", 1102075, 0),
Array("", 1102076, 0),
Array("", 1102077, 0),
Array("", 1102091, 0),
Array("", 1102092, 0),
Array("", 1102093, 0),
Array("", 1102094, 0),
Array("", 1102095, 0),
Array("", 1102096, 0),
Array("", 1102097, 0),
Array("", 1102098, 0),
Array("", 1102107, 0),
Array("", 1102108, 0),
Array("", 1102110, 0),
Array("", 1102111, 0),
Array("", 1102112, 0),
Array("", 1102137, 0),
Array("", 1102138, 0),
Array("", 1102141, 0),
Array("", 1102142, 0),
Array("", 1102143, 0),
Array("", 1102144, 0),
Array("", 1102148, 0),
Array("", 1102149, 0),
Array("", 1102150, 0),
Array("", 1102151, 0),
Array("", 1102152, 0),
Array("", 1102153, 0),
Array("", 1102154, 0),
Array("", 1102155, 0),
Array("", 1102156, 0),
Array("", 1102157, 0),
Array("", 1102158, 0),
Array("", 1102159, 0),
Array("", 1102160, 0),
Array("", 1102164, 0),
Array("", 1102169, 0),
Array("", 1102175, 0),
Array("", 1102184, 0),
Array("", 1102185, 0),
Array("", 1102186, 0),
Array("", 1102187, 0),
Array("", 1102188, 0),
Array("", 1102196, 0),
Array("", 1102197, 0),
Array("", 1102199, 0),
Array("", 1102202, 0),
Array("", 1102203, 0),
Array("", 1102204, 0),
Array("", 1102208, 0),
Array("", 1102210, 0),
Array("", 1102212, 0),
Array("", 1102213, 0),
Array("", 1102214, 0),
Array("", 1102215, 0),
Array("", 1102216, 0),
Array("", 1102217, 0),
Array("", 1102218, 0),
Array("", 1102222, 0),
Array("", 1102223, 0),
Array("", 1102224, 0),
Array("", 1102225, 0),
Array("", 1102229, 0),
Array("", 1102230, 0),
Array("", 1102232, 0),
Array("", 1102233, 0),
Array("", 1102238, 0),
Array("", 1102239, 0),
Array("", 1102242, 0),
Array("", 1102245, 0),
Array("", 1102249, 0),
Array("", 1102251, 0),
Array("", 1102253, 0),
Array("", 1102254, 0),
Array("", 1102255, 0),
Array("", 1102258, 0),
Array("", 1102261, 0),
Array("", 1102267, 0),
Array("", 1102270, 0),
Array("", 1102271, 0),
Array("", 1102272, 0),
Array("", 1102273, 0),
Array("", 1102274, 0),
Array("", 1102285, 0),
Array("", 1102286, 0),
Array("", 1102287, 0),
Array("", 1102288, 0),
Array("", 1102290, 0),
Array("", 1102292, 0),
Array("", 1102293, 0),
Array("", 1102296, 0),
Array("", 1102300, 0),
Array("", 1102301, 0),
Array("", 1102307, 0),
Array("", 1102308, 0),
Array("", 1102309, 0),
Array("", 1102310, 0),
Array("", 1102319, 0),
Array("", 1102323, 0),
Array("", 1102324, 0),
Array("", 1102325, 0),
Array("", 1102326, 0),
Array("", 1102336, 0),
Array("", 1102338, 0),
Array("", 1102343, 0),
Array("", 1102344, 0),
Array("", 1102349, 0),
Array("", 1102350, 0),
Array("", 1102353, 0),
Array("", 1102355, 0),
Array("", 1102356, 0),
Array("", 1102357, 0),
Array("", 1102358, 0),
Array("", 1102359, 0),
Array("", 1102367, 0),
Array("", 1102368, 0),
Array("", 1102373, 0),
Array("", 1102374, 0),
Array("", 1102376, 0),
Array("", 1102377, 0),
Array("", 1102378, 0),
Array("", 1102380, 0),
Array("", 1102381, 0),
Array("", 1102385, 0),
Array("", 1102386, 0),
Array("", 1102389, 0),
Array("", 1102390, 0),
Array("", 1102391, 0),
Array("", 1102392, 0),
Array("", 1102419, 0),
Array("", 1102420, 0),
Array("", 1102421, 0),
Array("", 1102450, 0),
Array("", 1102451, 0),
Array("", 1102452, 0),
Array("", 1102453, 0),
Array("", 1102461, 0),
Array("", 1102466, 0),
Array("", 1102487, 0),
Array("", 1102488, 0),
Array("", 1102491, 0)
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
            cm.sendSimpleS("欢迎来到时尚披风店,你想买我们商店的物品么?请选择吧：." + choices,2);
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