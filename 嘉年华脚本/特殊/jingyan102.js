var status = 0;
var choice;
var scrolls = Array(
	Array(1112171, 1188),
	Array(1112283, 1188),
	Array(1112173, 1188),
	Array(1112285, 1188),
	Array(1112176, 1188),
	Array(1112288, 1188),
	Array(1112179, 1188),
	Array(1112291, 1188), 
	Array(1112177, 1188), 
	Array(1112289, 1188), 
	Array(1112154, 1188), 
	Array(1112266, 1188), 
	Array(1042240, 288), 
	Array(1050232, 288), 
	Array(1051282, 288), 
	Array(1052417, 288), 
	Array(1051192, 288), 
	Array(1050210, 588),
	Array(1051256, 388), 
	Array(1071011, 388), 
	Array(1071013, 388), 
	Array(1072426, 1288), 
	Array(1072437, 488), 
	Array(1072507, 788), 
	Array(1071077, 1288), 
	Array(1072749, 488), 
	Array(1072817, 488), 
	Array(1072842, 1288), 
	Array(1072920, 488), 
	Array(1072951, 488), 
	Array(1072998, 688), 
	Array(1052410, 288), 
	Array(1052438, 288), 
	Array(1051294, 288), 
	Array(1051295, 288),
	Array(1049002, 188),
	Array(1062027, 188),
	Array(1062100, 388),
	Array(1062098, 488),
	Array(1061111, 288),
	Array(1061109, 288),
	Array(1060108, 688),
	Array(1052726, 1188),
	Array(1051349, 1188),
	Array(1051255, 1188),
	Array(1050210, 1288),
	Array(1052422, 1288),
	Array(1052354, 1500), 
	Array(1052306, 1500), 
	Array(1050180, 1500), 
	Array(1051220, 2500), 
	Array(1052284, 1500), 
	Array(1052231, 1500), 
	Array(1052142, 1500), 
	Array(1052078, 1500), 
	Array(1051086, 1500), 
	Array(1051074, 1500), 
	Array(1051073, 1500), 
	Array(1051072, 1500), 
	Array(1051071, 1500), 
	Array(1042330, 500), 
	Array(1042316, 500), 
	Array(1042315, 500), 
	Array(1042314, 500), 
	Array(1042313, 500), 
	Array(1042312, 500), 
	Array(1042200, 1500), 
	Array(1042199, 1500), 
	Array(1042176, 2500), 
	Array(1042150, 1500), 
	Array(1042132, 1500), 
	Array(1041140, 1500), 
	Array(1041142, 1500),
	Array(1004414, 500),
	Array(1004148, 500),
	Array(1004147, 500),
	Array(1004140, 500),
	Array(1004141, 500),
	Array(1004142, 500),
	Array(1004143, 500),
	Array(1004144, 500),
	Array(1004145, 500),
	Array(1004146, 500),
	Array(1003951, 1688),
	Array(1003844, 1688),
	Array(1082249, 1688),
	Array(1082502, 1688),
	Array(1082520, 1688)




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
            choices = "\r\n兔兔币余额：#r" + cm.getHyPay(1) + "#k兔兔币 (#r买后不支持退货哟亲#k)";
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
