var status = 0;
var choice;
var scrolls = Array(
Array("", 1002640, 0),
Array("", 1002643, 0),
Array("", 1002646, 0),
Array("", 1002649, 0),
Array("", 1002656, 0),
Array("", 1002662, 0),
Array("", 1002663, 0),
Array("", 1002665, 0),
Array("", 1002677, 0),
Array("", 1002695, 0),
Array("", 1002699, 0),
Array("", 1002702, 0),
Array("", 1002707, 0),
Array("", 1002723, 0),
Array("", 1002728, 0),
Array("", 1002737, 0),
Array("", 1002743, 0),
Array("", 1002749, 0),
Array("", 1002758, 0),
Array("", 1002760, 0),
Array("", 1002761, 0),
Array("", 1002762, 0),
Array("", 1002763, 0),
Array("", 1002764, 0),
Array("", 1002765, 0),
Array("", 1002766, 0),
Array("", 1002773, 0),
Array("", 1002776, 0),
Array("", 1002777, 0),
Array("", 1002778, 0),
Array("", 1002779, 0),
Array("", 1002780, 0),
Array("", 1002788, 0),
Array("", 1002789, 0),
Array("", 1002790, 0),
Array("", 1002791, 0),
Array("", 1002792, 0),
Array("", 1002793, 0),
Array("", 1002794, 0),
Array("", 1002797, 0),
Array("", 1002798, 0),
Array("", 1002799, 0),
Array("", 1002800, 0),
Array("", 1002801, 0),
Array("", 1002807, 0),
Array("", 1002808, 0),
Array("", 1002812, 0),
Array("", 1002813, 0),
Array("", 1002824, 0),
Array("", 1002841, 0),
Array("", 1002850, 0),
Array("", 1003413, 0),
Array("", 1003414, 0),
Array("", 1003415, 0),
Array("", 1003418, 0),
Array("", 1003419, 0),
Array("", 1003439, 0),
Array("", 1003443, 0),
Array("", 1003444, 0),
Array("", 1003445, 0),
Array("", 1003446, 0),
Array("", 1003447, 0),
Array("", 1003449, 0),
Array("", 1003450, 0),
Array("", 1003451, 0),
Array("", 1003452, 0),
Array("", 1003453, 0),
Array("", 1003454, 0),
Array("", 1003455, 0),
Array("", 1003479, 0),
Array("", 1003507, 0),
Array("", 1003527, 0),
Array("", 1003528, 0),
Array("", 1003529, 0),
Array("", 1003534, 0),
Array("", 1003535, 0),
Array("", 1003537, 0),
Array("", 1003540, 0),
Array("", 1003552, 0),
Array("", 1003561, 0),
Array("", 1003562, 0),
Array("", 1003563, 0),
Array("", 1003564, 0),
Array("", 1003565, 0),
Array("", 1003566, 0),
Array("", 1003576, 0),
Array("", 1003579, 0),
Array("", 1003580, 0),
Array("", 1003589, 0),
Array("", 1003590, 0),
Array("", 1003591, 0),
Array("", 1003592, 0),
Array("", 1003593, 0),
Array("", 1003609, 0),
Array("", 1003610, 0),
Array("", 1003611, 0),
Array("", 1003612, 0),
Array("", 1003613, 0),
Array("", 1003614, 0),
Array("", 1003615, 0),
Array("", 1003616, 0),
Array("", 1003617, 0),
Array("", 1003618, 0),
Array("", 1003619, 0),
Array("", 1003620, 0),
Array("", 1003621, 0),
Array("", 1003622, 0),
Array("", 1003624, 0),
Array("", 1003625, 0),
Array("", 1003635, 0),
Array("", 1003637, 0),
Array("", 1003638, 0),
Array("", 1003644, 0),
Array("", 1003645, 0),
Array("", 1003646, 0),
Array("", 1003647, 0),
Array("", 1003648, 0),
Array("", 1003689, 0),
Array("", 1003690, 0),
Array("", 1003691, 0),
Array("", 1003715, 0),
Array("", 1003716, 0),
Array("", 1003717, 0),
Array("", 1003718, 0),
Array("", 1003719, 0),
Array("", 1003720, 0),
Array("", 1003721, 0),
Array("", 1003722, 0),
Array("", 1003744, 0),
Array("", 1003745, 0)
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
            cm.sendSimpleS("欢迎来到帽子2店,你想买我们商店的物品么?请选择吧：." + choices,2);
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