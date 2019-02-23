var status = 0;
var choice;
var scrolls = Array(
	Array(1003510, 188),
	Array(1003233, 188),
	Array(1003204, 188),
	Array(1002738, 188),
	Array(1003207, 188),
	Array(1003541, 188),
	Array(1003729, 188),
	Array(1040192, 188),
	Array(1041194, 188),
	Array(1042125, 188),
	Array(1042238, 188),
	Array(1048001, 188),
	Array(1051070, 188),
	Array(1051137, 188),
	Array(1052073, 188),
	Array(1052077, 188),
	Array(1052298, 188),
	Array(1062081, 188),
	Array(1062106, 188),
	Array(1062179, 188),
	Array(1072189, 188),
	Array(1072240, 188),
	Array(1072274, 188),
	Array(1082169, 188),
	Array(1102112, 188),
	Array(1102653, 188),
	Array(1142304, 188),
	Array(1702164, 188),
	Array(1702301, 188),
	Array(1702340, 188),
	Array(1702342, 188),
	Array(1702400, 188),
	Array(1702401, 188),
	Array(1802379, 188),
	Array(3010053, 188),
	Array(3010182, 188),
	Array(3010222, 188),
	Array(3010522, 188),
	Array(3010458, 188)






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
            choices = "\r\n兔兔币余额：#r" + cm.getHyPay(1) + "#k #e鼠标移到名字上显示属性 (#r买后不支持退货哟亲#k)";
            for (var i = 0; i < scrolls.length; i++) {
                choices += "\r\n#L" + i + "##v" + scrolls[i][0] + "##z" + scrolls[i][0] + "#　#d需要#r" + scrolls[i][1] + "#d兔兔币#k#l";
            }
            cm.sendSimpleS("欢迎来到绝版点装店,你想买我们商店的物品么?请选择吧：." + choices,2);
		   } else if (cm.getSpace(1) < 2) {  
                cm.sendOk("#r -  温馨提示>> #k\r\n\r\n温馨提示，您的装备栏小于2个。");  
                 cm.dispose(); 
        } else if (status == 1) {
            cm.sendYesNo("你确定需要购买#v" + scrolls[selection][0] + "##t" + scrolls[selection][0] + "#?");
            choice = selection;
        } else if (status == 2) {
            var money = scrolls[choice][1];
            if (cm.getHyPay(1) < money) {
                cm.sendOk("抱歉，你没足够的兔兔币！");
                cm.dispose();
            } else {
                cm.addHyPay(money);
                cm.gainItem(scrolls[choice][0], 1);
                cm.sendOk("购买成功.");
                cm.dispose();
            }
        }
    }
}
