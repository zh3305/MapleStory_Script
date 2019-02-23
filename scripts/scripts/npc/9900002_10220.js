/*各类喇叭*/
var status = 0;
var choice;
var itemxh=new Array("5072000","5073000","5074000","5076000","5077000","5390000","5390001","5390002","5390003","5390004","5390005","5390006","5390007","5390008","5079001","5079002","5390010","5390011","5390012","5390013");
var itemxhcost=new Array("500","1500","1500","2000","1500","1000","1000","1000","1200","1200","1200","2500","1200","1200","1500","1500","1500","5000","4000","3000");

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
            choices = "\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#亲爱的#r#h ##k您好，请选择您希望购买的喇叭";
            for (var i = 0; i < itemxh.length; i++) {
                choices += "\r\n#L" + i + "##v" + itemxh[i] + "##z" + itemxh[i] + "#　#d需要#r" + itemxhcost[i] + "#d点卷#k#l";
            }
            cm.sendSimpleS("#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#" + choices,2);
        } else if (status == 1) {
                cm.sendGetNumber("你选择的商品为#v" + itemxh[selection] + "#售价为：" + itemxhcost[selection] + "点卷/个\r\n请输入你购买的数量",1,1,cm.getPlayer().getCSPoints(1));
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
