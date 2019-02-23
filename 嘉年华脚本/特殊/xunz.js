var status = 0;
var choice;
var scrolls = Array(
	Array(1142249, 40000),
	Array(1142005, 20000),
	Array(1142215, 20000),
	Array(1142443, 20000),
	//Array(1142610, 20000),
	Array(1142637, 20000),
	Array(1142258, 20000),
	Array(1142477, 100000),
	Array(1142573, 50000),
	Array(1142558, 80000),
	Array(1142620, 100000),
	Array(1142617, 20000),
	Array(1142609, 60000),
	Array(1142561, 100000),
	Array(1142567, 20000),
	Array(1142603, 20000),
	Array(1142404, 20000),
	Array(1142676, 20000),
	Array(1142541, 60000),
	Array(1142523, 20000),
	Array(1142293, 20000),
	Array(1142218, 20000)





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
            choices = "\r\n点卷：#r" + cm.getPlayer().getCSPoints(1) + "#k #e鼠标移到名字上显示属性 (#r买后不支持退货哟亲#k)";
            for (var i = 0; i < scrolls.length; i++) {
                choices += "\r\n#L" + i + "##v" + scrolls[i][0] + "##z" + scrolls[i][0] + "#　#d需要#r" + scrolls[i][1] + "#d点卷#k#l";
            }
            cm.sendSimpleS("欢迎来到绝版勋章店,你想买我们商店的物品么?请选择吧：." + choices,2);
		   } else if (cm.getSpace(1) < 2) {  
                cm.sendOk("#r -  温馨提示>> #k\r\n\r\n温馨提示，您的装备栏小于2个。");  
                 cm.dispose(); 
        } else if (status == 1) {
            cm.sendYesNo("你确定需要购买#v" + scrolls[selection][0] + "##t" + scrolls[selection][0] + "#?");
            choice = selection;
        } else if (status == 2) {
            var money = scrolls[choice][1];
            if (cm.getPlayer().getCSPoints(1) < money) {
                cm.sendOk("抱歉，你没足够的点卷！");
                cm.dispose();
            } else {
                cm.gainNX(-money);
                cm.gainItem(scrolls[choice][0], 1);
                cm.sendOk("购买成功.");
                cm.dispose();
            }
        }
    }
}
