/*各种戒指*/
var status = 0;
var choice;
var itemxh=new Array("1113057","1113084","1112663","1112915","1112793","1112932","1113009","1112920","1112160","1112272","1112162","1112274","1112161","1112273","1112940","1112937","1112901",       "1112925","1112928","1112906","1112904","1112148","1112259","1112155","1112267","1112268","1112156","1112229","1112119","1112230","1112103","1112238","1112135","1112150","1112262","1112151","1112263","1112145","1112257","1112143","1112254","1112142","1112253","1112159","1112271","1112152","1112264");
var itemxhcost=new Array("35000","35000","35000","45000","45000","35000","35000","35000","15000","15000","15000","15000","15000","15000","15000","15000","15000","15000","15000","15000","15000","15000","15000","15000","15000","15000","15000","15000","15000","15000","15000","15000","15000","15000","15000","15000","15000","15000","15000","15000","15000","15000","15000","15000","15000","15000","15000");

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
            choices = "\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#亲爱的#r#h ##k您好，请选择您希望购买的戒指";
            for (var i = 0; i < itemxh.length; i++) {
                choices += "\r\n#L" + i + "##v" + itemxh[i] + "##z" + itemxh[i] + "#　#d需要#r" + itemxhcost[i] + "#d点卷#k#l";
            }
            cm.sendSimpleS("#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#" + choices,2);
        } else if (status == 1) {
                cm.sendGetNumber("你选择的商品为#v" + itemxh[selection] + "#售价为：" + itemxhcost[selection] + "点卷/张\r\n请输入你购买的数量",1,1,cm.getPlayer().getCSPoints(1));
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
			cm.gainNX(-money);
            cm.gainItem(itemxh[choice], fee);
            cm.sendOk("恭喜，购买成功。");
            cm.dispose();
             }
        }
    }
}
