var status = 0;
var choice;
var scrolls = Array(
Array("", 1702148, 0),
Array("", 1702149, 0),
Array("", 1702150, 0),
Array("", 1702151, 0),
Array("", 1702152, 0),
Array("", 1702153, 0),
Array("", 1702154, 0),
Array("", 1702155, 0),
Array("", 1702157, 0),
Array("", 1702158, 0),
Array("", 1702159, 0),
Array("", 1702160, 0),
Array("", 1702161, 0),
Array("", 1702162, 0),
Array("", 1702163, 0),
Array("", 1702164, 0),
Array("", 1702165, 0),
Array("", 1702166, 0),
Array("", 1702167, 0),
Array("", 1702168, 0),
Array("", 1702169, 0),
Array("", 1702170, 0),
Array("", 1702172, 0),
Array("", 1702173, 0),
Array("", 1702174, 0),
Array("", 1702175, 0),
Array("", 1702177, 0),
Array("", 1702179, 0),
Array("", 1702180, 0),
Array("", 1702181, 0),
Array("", 1702182, 0),
Array("", 1702186, 0),
Array("", 1702187, 0),
Array("", 1702188, 0),
Array("", 1702189, 0),
Array("", 1702190, 0),
Array("", 1702191, 0),
Array("", 1702193, 0),
Array("", 1702194, 0),
Array("", 1702195, 0),
Array("", 1702196, 0),
Array("", 1702199, 0),
Array("", 1702200, 0),
Array("", 1702201, 0),
Array("", 1702202, 0),
Array("", 1702203, 0),
Array("", 1702204, 0),
Array("", 1702207, 0),
Array("", 1702208, 0),
Array("", 1702209, 0),
Array("", 1702210, 0),
Array("", 1702211, 0),
Array("", 1702212, 0),
Array("", 1702213, 0),
Array("", 1702216, 0),
Array("", 1702217, 0),
Array("", 1702218, 0),
Array("", 1702219, 0),
Array("", 1702222, 0),
Array("", 1702223, 0),
Array("", 1702224, 0),
Array("", 1702226, 0),
Array("", 1702228, 0),
Array("", 1702229, 0),
Array("", 1702230, 0),
Array("", 1702233, 0),
Array("", 1702235, 0),
Array("", 1702237, 0),
Array("", 1702238, 0),
Array("", 1702239, 0),
Array("", 1702240, 0),
Array("", 1702248, 0),
Array("", 1702249, 0),
Array("", 1702250, 0),
Array("", 1702251, 0),
Array("", 1702252, 0),
Array("", 1702253, 0),
Array("", 1702254, 0),
Array("", 1702256, 0),
Array("", 1702257, 0),
Array("", 1702258, 0),
Array("", 1702259, 0),
Array("", 1702260, 0),
Array("", 1702261, 0),
Array("", 1702262, 0),
Array("", 1702263, 0),
Array("", 1702264, 0),
Array("", 1702266, 0),
Array("", 1702268, 0),
Array("", 1702269, 0),
Array("", 1702270, 0),
Array("", 1702271, 0),
Array("", 1702272, 0),
Array("", 1702273, 0),
Array("", 1702274, 0),
Array("", 1702275, 0),
Array("", 1702276, 0),
Array("", 1702277, 0),
Array("", 1702278, 0),
Array("", 1702279, 0),
Array("", 1702280, 0),
Array("", 1702281, 0),
Array("", 1702282, 0),
Array("", 1702283, 0),
Array("", 1702284, 0),
Array("", 1702285, 0),
Array("", 1702287, 0),
Array("", 1702288, 0),
Array("", 1702289, 0),
Array("", 1702291, 0),
Array("", 1702293, 0),
Array("", 1702295, 0),
Array("", 1702296, 0),
Array("", 1702297, 0),
Array("", 1702298, 0),
Array("", 1702299, 0),
Array("", 1702300, 0),
Array("", 1702301, 0),
Array("", 1702302, 0),
Array("", 1702303, 0),
Array("", 1702304, 0),
Array("", 1702305, 0),
Array("", 1702306, 0),
Array("", 1702308, 0),
Array("", 1702309, 0),
Array("", 1702310, 0),
Array("", 1702313, 0),
Array("", 1702314, 0),
Array("", 1702315, 0),
Array("", 1702316, 0),
Array("", 1702317, 0),
Array("", 1702318, 0),
Array("", 1702319, 0),
Array("", 1702320, 0),
Array("", 1702321, 0),
Array("", 1702322, 0),
Array("", 1702323, 0),
Array("", 1702324, 0),
Array("", 1702328, 0),
Array("", 1702329, 0),
Array("", 1702330, 0),
Array("", 1702334, 0),
Array("", 1702335, 0),
Array("", 1702336, 0),
Array("", 1702337, 0),
Array("", 1702340, 0),
Array("", 1702341, 0),
Array("", 1702342, 0),
Array("", 1702344, 0),
Array("", 1702345, 0),
Array("", 1702346, 0),
Array("", 1702347, 0),
Array("", 1702348, 0),
Array("", 1702349, 0),
Array("", 1702350, 0),
Array("", 1702352, 0),
Array("", 1702357, 0),
Array("", 1702358, 0),
Array("", 1702359, 0),
Array("", 1702361, 0),
Array("", 1702362, 0),
Array("", 1702363, 0),
Array("", 1702364, 0),
Array("", 1702365, 0),
Array("", 1702366, 0),
Array("", 1702367, 0),
Array("", 1702368, 0),
Array("", 1702371, 0),
Array("", 1702372, 0),
Array("", 1702373, 0),
Array("", 1702375, 0),
Array("", 1702377, 0),
Array("", 1702378, 0),
Array("", 1702379, 0),
Array("", 1702392, 0),
Array("", 1702393, 0)
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