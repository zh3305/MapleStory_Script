/*绝版点装*/
var status = 0;
var choice;
var itemxh=new Array("2049509 ","2340000 ","2046577 ",
"2046578 ",
"2046579 ",
"2046580 ",
"2046763 ",
"2046765 ",
"2046764 ",
"2046766 ",
"2046111 ",
"2047818 ",
"2049153 ",
"2046996 ",
"2046997 ",
"2049750 ",
"2049323 ",
"2470000 ",
"5050000 ",
"5050001 ",
"5050002 ",
"5050003",
"5050004 ",
"5062400 ",
"2049405 ",
"5530268 ",
"5530269  ",
"2048305 ",
"5064003 ",
"5062500 ",
"5064000 ",
"5064100 ",
"5062002", 
"5062000","2702001");
var itemxhcost=new Array("1000","500","300","300","300","300","300","300","300","300","400","400","400","400","400","200","200","500","200","400","600","1000","1000","1000","1000","1000","1000","1000","200","1000","300","300","300","200","200","200");

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
            choices = "\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#亲爱的#r#h ##k您好，请选择您希望购买的绝版装备";
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
