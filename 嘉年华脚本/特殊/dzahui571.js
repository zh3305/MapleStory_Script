var status = 0;
var choice;
var scrolls = Array(
Array("", 1082328, 0),
Array("", 1082329, 0),
Array("", 1082330, 0),
Array("", 1082331, 0),
Array("", 1082332, 0),
Array("", 1082333, 0),
Array("", 1082334, 0),
Array("", 1082335, 0),
Array("", 1082336, 0),
Array("", 1082337, 0),
Array("", 1082338, 0),
Array("", 1082339, 0),
Array("", 1082340, 0),
Array("", 1082341, 0),
Array("", 1082342, 0),
Array("", 1082343, 0),
Array("", 1082344, 0),
Array("", 1082345, 0),
Array("", 1082346, 0),
Array("", 1082347, 0),
Array("", 1082348, 0),
Array("", 1082349, 0),
Array("", 1082350, 0),
Array("", 1082351, 0),
Array("", 1082352, 0),
Array("", 1082353, 0),
Array("", 1082354, 0),
Array("", 1082355, 0),
Array("", 1082356, 0),
Array("", 1082357, 0),
Array("", 1082358, 0),
Array("", 1082359, 0),
Array("", 1082360, 0),
Array("", 1082361, 0),
Array("", 1082362, 0),
Array("", 1082363, 0),
Array("", 1082364, 0),
Array("", 1082365, 0),
Array("", 1082366, 0),
Array("", 1082367, 0),
Array("", 1082368, 0),
Array("", 1082369, 0),
Array("", 1082370, 0),
Array("", 1082371, 0),
Array("", 1082372, 0),
Array("", 1082373, 0),
Array("", 1082374, 0),
Array("", 1082375, 0),
Array("", 1082376, 0),
Array("", 1082377, 0),
Array("", 1082378, 0),
Array("", 1082379, 0),
Array("", 1082380, 0),
Array("", 1082381, 0),
Array("", 1082382, 0),
Array("", 1082383, 0),
Array("", 1082384, 0),
Array("", 1082385, 0),
Array("", 1082386, 0),
Array("", 1082387, 0),
Array("", 1082388, 0),
Array("", 1082389, 0),
Array("", 1082390, 0),
Array("", 1082391, 0),
Array("", 1082392, 0),
Array("", 1082393, 0),
Array("", 1082394, 0),
Array("", 1082400, 0),
Array("", 1082401, 0),
Array("", 1082416, 0),
Array("", 1082417, 0),
Array("", 1082418, 0),
Array("", 1082419, 0),
Array("", 1082420, 0),
Array("", 1082424, 0),
Array("", 1082430, 0),
Array("", 1082431, 0),
Array("", 1082432, 0),
Array("", 1082433, 0),
Array("", 1082438, 0),
Array("", 1082439, 0),
Array("", 1082440, 0),
Array("", 1082441, 0),
Array("", 1082447, 0),
Array("", 1082466, 0),
Array("", 1082467, 0),
Array("", 1082468, 0),
Array("", 1082469, 0),
Array("", 1082470, 0),
Array("", 1082477, 0),
Array("", 1082478, 0),
Array("", 1082479, 0),
Array("", 1082480, 0),
Array("", 1082481, 0),
Array("", 1082482, 0),
Array("", 1082483, 0),
Array("", 1082484, 0),
Array("", 1082485, 0),
Array("", 1082486, 0),
Array("", 1082487, 0),
Array("", 1082490, 0),
Array("", 1082491, 0),
Array("", 1082492, 0)
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
            cm.sendSimpleS("欢迎来到手套店,你想买我们商店的物品么?请选择吧：." + choices,2);
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