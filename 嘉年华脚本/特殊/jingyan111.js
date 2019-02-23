var status = 0;
var choice;
var scrolls = Array(
	Array(1003893, 288),
	Array(1122256, 288),
	Array(1032191, 288),
	Array(1113038, 288),
	Array(1132230, 288),
	Array(1052460, 188),
	Array(1072664, 188),
	Array(1003540, 188),
	Array(1032142, 188),
	Array(1082432, 188),
	Array(1092109, 188),
	Array(1092110, 188),
	Array(1092109, 188),
	Array(1212084, 188),
	Array(1222079, 188),
	Array(1232079, 188),
	Array(1242085, 188),
	Array(1242086, 188),
	Array(1302224, 188),
	Array(1312115, 188),
	Array(1322161, 188),
	Array(1332192, 188), 
	Array(1342070, 188), 
	Array(1362104, 188), 
	Array(1372137, 188), 
	Array(1382167, 188), 
	Array(1402150, 188), 
	Array(1412103, 188), 
	Array(1422106, 188), 
	Array(1432137, 188), 
	Array(1442181, 188), 
	Array(1452168, 188),
	Array(1462157, 188), 
	Array(1472178, 188), 
	Array(1482139, 188), 
	Array(1492149, 188), 
	Array(1522108, 188), 
	Array(1532113, 188),   	
	Array(1252063, 188)




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
