var status = 0;
var choice;
var scrolls = Array(
	Array(1112793, 188),
	Array(1112915, 188),
	Array(1112907, 188),
	Array(1113029, 188),
	Array(1112908, 188),
	Array(1112421, 188),
	Array(1112422, 188),
	Array(1112423, 188),
	Array(1112424, 188),
	Array(1112425, 188),
	Array(1112426, 188),
	Array(1112405, 188),
	Array(1112444, 188),
	Array(1112445, 188),
	Array(1112657, 188),
	Array(1112718, 188),
	Array(1112719, 188),
	Array(1112720, 188),
	Array(1112932, 188),
	Array(1112595, 188),
	Array(1113026, 288),
	Array(1113027, 288),
	Array(1113076, 288), 
	Array(1112432, 288), 
	Array(1112434, 288), 
	Array(1112591, 288), 
	Array(1112592, 288), 
	Array(1112593, 288), 
	Array(1113067, 288), 
	Array(1112596, 288), 
	Array(1112659, 288), 
	Array(1112664, 288), 
	Array(1112665, 188),
	Array(1112666, 388), 
	Array(1112667, 288), 
	Array(1112668, 288), 
	Array(1113037, 288), 
	Array(1113011, 288), 
	Array(1113013, 288),
	Array(1113077, 288),
	Array(1112685, 288),
	Array(1112750, 288),
	Array(1113020, 288),
	Array(1113085, 288),
	Array(1113039, 288),
	Array(1113070, 288),
	Array(1112597, 288),   	
	Array(1113028, 188)




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
