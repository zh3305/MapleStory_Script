var status = 0;
var choice;
var scrolls = Array(
Array("", 1072086, 0),
Array("", 1072087, 0),
Array("", 1072089, 0),
Array("", 1072090, 0),
Array("", 1072091, 0),
Array("", 1072101, 0),
Array("", 1072102, 0),
Array("", 1072103, 0),
Array("", 1072104, 0),
Array("", 1072105, 0),
Array("", 1072106, 0),
Array("", 1072107, 0),
Array("", 1072108, 0),
Array("", 1072109, 0),
Array("", 1072110, 0),
Array("", 1072112, 0),
Array("", 1072113, 0),
Array("", 1072114, 0),
Array("", 1072115, 0),
Array("", 1072116, 0),
Array("", 1072117, 0),
Array("", 1072118, 0),
Array("", 1072119, 0),
Array("", 1072120, 0),
Array("", 1072121, 0),
Array("", 1072122, 0),
Array("", 1072123, 0),
Array("", 1072124, 0),
Array("", 1072125, 0),
Array("", 1072126, 0),
Array("", 1072127, 0),
Array("", 1072128, 0),
Array("", 1072129, 0),
Array("", 1072130, 0),
Array("", 1072131, 0),
Array("", 1072132, 0),
Array("", 1072133, 0),
Array("", 1072134, 0),
Array("", 1072135, 0),
Array("", 1072136, 0),
Array("", 1072137, 0),
Array("", 1072138, 0),
Array("", 1072139, 0),
Array("", 1072140, 0),
Array("", 1072141, 0),
Array("", 1072142, 0),
Array("", 1072143, 0),
Array("", 1072144, 0),
Array("", 1072145, 0),
Array("", 1072146, 0),
Array("", 1072147, 0),
Array("", 1072148, 0),
Array("", 1072149, 0),
Array("", 1072150, 0),
Array("", 1072151, 0),
Array("", 1072152, 0),
Array("", 1072154, 0),
Array("", 1072155, 0),
Array("", 1072156, 0),
Array("", 1072157, 0),
Array("", 1072158, 0),
Array("", 1072159, 0),
Array("", 1072160, 0),
Array("", 1072161, 0),
Array("", 1072162, 0),
Array("", 1072546, 0),
Array("", 1072547, 0),
Array("", 1072548, 0),
Array("", 1072549, 0),
Array("", 1072550, 0),
Array("", 1072551, 0),
Array("", 1072552, 0),
Array("", 1072553, 0),
Array("", 1072554, 0),
Array("", 1072555, 0),
Array("", 1072556, 0),
Array("", 1072557, 0),
Array("", 1072558, 0),
Array("", 1072560, 0),
Array("", 1072561, 0),
Array("", 1072562, 0),
Array("", 1072563, 0),
Array("", 1072564, 0),
Array("", 1072565, 0),
Array("", 1072566, 0),
Array("", 1072567, 0),
Array("", 1072568, 0),
Array("", 1072569, 0),
Array("", 1072570, 0),
Array("", 1072571, 0),
Array("", 1072572, 0),
Array("", 1072573, 0),
Array("", 1072574, 0),
Array("", 1072575, 0),
Array("", 1072576, 0),
Array("", 1072577, 0),
Array("", 1072578, 0),
Array("", 1072579, 0),
Array("", 1072580, 0),
Array("", 1072581, 0),
Array("", 1072582, 0),
Array("", 1072583, 0),
Array("", 1072584, 0),
Array("", 1072585, 0),
Array("", 1072586, 0),
Array("", 1072587, 0),
Array("", 1072588, 0),
Array("", 1072589, 0),
Array("", 1072590, 0),
Array("", 1072591, 0),
Array("", 1072592, 0),
Array("", 1072593, 0),
Array("", 1072594, 0),
Array("", 1072595, 0),
Array("", 1072596, 0),
Array("", 1072597, 0),
Array("", 1072598, 0),
Array("", 1072599, 0),
Array("", 1072600, 0),
Array("", 1072601, 0),
Array("", 1072602, 0),
Array("", 1072603, 0),
Array("", 1072604, 0),
Array("", 1072605, 0),
Array("", 1072606, 0),
Array("", 1072607, 0),
Array("", 1072608, 0),
Array("", 1072610, 0),
Array("", 1072618, 0),
Array("", 1072619, 0),
Array("", 1072629, 0),
Array("", 1072634, 0),
Array("", 1072641, 0),
Array("", 1072642, 0),
Array("", 1072643, 0),
Array("", 1072644, 0),
Array("", 1072645, 0),
Array("", 1072660, 0),
Array("", 1072664, 0),
Array("", 1072665, 0),
Array("", 1072666, 0),
Array("", 1072672, 0),
Array("", 1072679, 0),
Array("", 1072695, 0),
Array("", 1072696, 0),
Array("", 1072697, 0),
Array("", 1072700, 0),
Array("", 1072701, 0),
Array("", 1072702, 0),
Array("", 1072703, 0),
Array("", 1072704, 0),
Array("", 1072705, 0),
Array("", 1072706, 0),
Array("", 1072707, 0),
Array("", 1072718, 0),
Array("", 1072719, 0),
Array("", 1072720, 0),
Array("", 1072721, 0),
Array("", 1072722, 0),
Array("", 1072723, 0),
Array("", 1072724, 0),
Array("", 1072725, 0),
Array("", 1072726, 0),
Array("", 1072727, 0),
Array("", 1072728, 0),
Array("", 1072730, 0),
Array("", 1072732, 0),
Array("", 1072733, 0),
Array("", 1072734, 0),
Array("", 1072735, 0),
Array("", 1072736, 0),
Array("", 1072737, 0),
Array("", 1072738, 0),
Array("", 1072739, 0),
Array("", 1072740, 0),
Array("", 1072741, 0),
Array("", 1072751, 0)
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
            cm.sendSimpleS("欢迎来到双头杖,灵魂手铳店,你想买我们商店的物品么?请选择吧：." + choices,2);
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