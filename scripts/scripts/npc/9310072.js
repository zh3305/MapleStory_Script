 /*
 夕阳制作★China冒险岛
 完成时间：2015年4月28日 16:34:19
 脚本功能：牛逼装备
 */
var status = 0;
var choice;
var itemxh= new Array ("1099012","1099011","1352606","1352707","1352815","1352406","1352506","1352296","1352286","1352206","1352216","1352226","1352236","1352246","1352256","1352266","1352276","1353006","1353105","1352009","1352957","1352945","1352935","1352928","1352916","1352906","1342095","1352967","1352975","1352109","1352286");
var itemxhcost=new Array("99999999","99999999","99999999","99999999","99999999","99999999","99999999","99999999","99999999","99999999","99999999","99999999","99999999","99999999","99999999","99999999","99999999","99999999","99999999","99999999","99999999","99999999","99999999","99999999","99999999","99999999","99999999","99999999","99999999","99999999","99999999","99999999");

//function start() {
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
            choices = "\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#亲爱的 #r#h # #b#e您好，以下是活动奖品，只能看不能买！以下是活动奖品，只能看不能买！以下是活动奖品，只能看不能买!\r\n";
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
