var status = 0;
var choice;
var scrolls = Array(
	Array(1122018, 188),
	Array(1122038, 188),
	Array(1122037, 188),
	Array(1122036, 188),
	Array(1122035, 188),
	Array(1122034, 188),
	Array(1122109, 188),
	Array(1122187, 188),
	Array(1122246, 188),
	Array(1122009, 188),
	Array(1122007, 188),
	Array(1122203, 188),
	Array(1122073, 188),
	Array(1122105, 188),
	Array(1122253, 188),
	Array(1122013, 188),
	Array(1122188, 188),
	Array(1122010, 188),
	Array(1122115, 188),
	Array(1122199, 188),
	Array(1122219, 288),
	Array(1122161, 288),
	Array(1122174, 288), 
	Array(1122209, 288), 
	Array(1122262, 288), 
	Array(1122110, 288), 
	Array(1122252, 288), 
	Array(1122275, 288), 
	Array(1122059, 288), 
	Array(1122076, 288), 
	Array(1122080, 288), 
	Array(1122106, 288), 
	Array(1122248, 188),
	Array(1122254, 388), 
	Array(1122104, 288), 
	Array(1122148, 288), 
	Array(1122149, 288), 
	Array(1122261, 288), 
	Array(1122150, 288),
	Array(1122272, 288),   	
	Array(1122012, 188)




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
