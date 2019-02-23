/*
* Bye:自由冒险岛
* 2014/05/21
*/
var status = 0;
var choice;
var itemxh=new Array("4000001","4001126","4000037","4000024","4000020","4000470","4000469","4000128","4000129","4000379","4000132","4000133","4000274","4000273","4000454");  

//4000001","4001126","4000037","4000024","4000020","4000470","4000469","4000128","4000129","4000379","4000132","4000133","4000274","4000273","4000454
var itemxhcost=new Array("2000","1","1","1","1","2","2","2","2","2","2","4","6","6","6");
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
            choices = "\r\n点卷余额：#r" + cm.getPlayer().getCSPoints(1) + "点#k\r\n";
            for (var i = 0; i < itemxh.length; i++) {
                choices += "\r\n#L" + i + "##v" + itemxh[i] + "##z" + itemxh[i] + "#　#d=#r" + itemxhcost[i] + "#d点卷#k#l";
            }
            cm.sendSimpleS("下面是可以兑换的杂物列表，请选择吧：." + choices,2);
        } else if (status == 1) {
                cm.sendGetNumber("你选择的杂物是#v" + itemxh[selection] + "#可换取：" + itemxhcost[selection] + "点卷/个\r\n请输入你兑换的数量",1,1,cm.getPlayer().getCSPoints(2));
		choice = selection;
        } else if (status == 2) {
            fee = selection;
            money = fee*itemxhcost[choice];
            if (fee < 0) {
            cm.sendOk("只能输入0-1000以内的数字~");
            cm.dispose();
            } else if(cm.haveItem(itemxh[choice],fee) == false) {
            cm.sendOk("兑换失败，你没有足够杂物");
            cm.dispose();
            }else {
			cm.gainNX(money);
			cm.gainItem(itemxh[choice], -fee);
            cm.sendOk("恭喜，兑换成功。");
            cm.dispose();
           }
        }
    }
}
