/*闪耀点装*/
var status = 0;
var choice;
var itemxh=new Array("1004642","1050394","1051465","1073105","1102876","1702637","1003516","1102391","1052455","1072658","1002944","1052193","1102210","1003536","1102373","1052458","1072662","1102488","1003460","1052438","1072749","1102453","1003581","1042241","1062156","1702367");
var itemxhcost=new Array("31999","31999","31999","31999","31999","31999","31999","31999","31999","31999","31999","31999","31999","31999","31999","31999","31999","31999","31999","31999","31999","31999","31999","31999","31999","31999");

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
            choices = "请选择您要购买的点装：\r\n#r#e闪耀点装已更新最新版本！#n#b";
            for (var i = 0; i < itemxh.length; i++) {
                choices += "\r\n#b#L" + i + "##v" + itemxh[i] + "##z" + itemxh[i] + "#　#d需要#r" + itemxhcost[i] + "#d点卷#k#l";
            }
            cm.sendSimpleS("" + choices,2);
        } else if (status == 1) {
                cm.sendGetNumber("你选择的商品为#b#v" + itemxh[selection] + "#售价为：" + itemxhcost[selection] + "点卷/张\r\n请输入你购买的数量",1,1,cm.getPlayer().getCSPoints(1));
		choice = selection;
        } else if (status == 2) {
            fee = selection;
            money = fee*itemxhcost[choice];
            if (fee < 0) {
            cm.sendOk("不能输入0.或者你没有足够的点卷支付你要买的数量.!");
            cm.dispose();
            } else if (cm.getPlayer().getCSPoints(1) < money) {
            cm.sendOk("购买失败，你没有" + money + "点卷");
            cm.dispose();
            } else {
				if (cm.haveItem(4220098,1)){
					money = 1 ;
				}
			cm.gainNX(-money);
            cm.gainItem(itemxh[choice], fee);
                cm.worldSpouseMessage(0x0D,"[闪耀箱子] :  "+ cm.getChar().getName() +"  在点卷商店购买了闪耀点装!");
            cm.sendOk("恭喜，购买成功。");
            cm.dispose();
             }
        }
    }
}
