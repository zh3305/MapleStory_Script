var status = 0;       //很简略，无聊做的，反震能用。 Q
var wn22 = "#fUI/CashShop.img/CSEffect/new/0#";  //新品图标
var tz20 = "#fEffect/CharacterEff/1114000/1/0#";  //红星花
var yun ="#fUI/UIWindow/PartySearch2/BtNext/mouseOver/0#";////红沙漏
var wn1 = "#fUI/Basic.img/BtClaim/normal/0#";  //警灯
var aaa = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var bbb = "#fUI/UIWindow.img/Shop/meso#";
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        var selStr = "\r\n" + bbb + " 你目前拥有：#r" + cm.itemQuantity(4220180) + " #k个 #b<#z4220180#>#k#n\r\n\r\n#e#r注意：一个空格可以装5000个星星！#n\r\n\r\n#b#L0#" + yun + "100个#v4220180#兑换100个#v4001839#\r\n\r\n#b#L2#" + yun + "500个#v4220180#兑换500个#v4001839#\r\n\r\n#b#L1#" + yun + "1000个#v4220180#兑换1000个#v4001839#\r\n";
 cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            if (cm.haveItem(4220180, 100)) {
                cm.gainItem(4220180, -100);
		cm.gainItem(4001839, 100);
                cm.sendOk("兑换成功：获得#b100个#v4001839#!");
          cm.worldSpouseMessage(0x20, "[星星交换] : 恭喜 " + cm.getChar().getName() + " 在市场相框兑换了100个星星！");
        	cm.dispose();
            } else {
                cm.sendOk("#r兑换失败:\r\n#b1.你没有足够的#v4220180#!");
        	cm.dispose();
            }
            break;
        case 1:
             if (cm.haveItem(4220180, 1000)) {
                cm.gainItem(4220180, -1000);
		cm.gainItem(4001839, 1000);
                cm.sendOk("兑换成功：获得#b1000个#v4001839#!");
          cm.worldSpouseMessage(0x20, "[星星交换] : 恭喜 " + cm.getChar().getName() + " 在市场相框兑换了1000个星星！");
        	cm.dispose();
            } else {
                cm.sendOk("#r兑换失败:\r\n#b1.你没有足够的#v4220180#!")
        	cm.dispose();
            }
            break;
        case 2:
             if (cm.haveItem(4220180, 500)) {
                cm.gainItem(4220180, -500);
		cm.gainItem(4001839, 500);
                cm.sendOk("兑换成功：获得#b500个#v4001839#!");
          cm.worldSpouseMessage(0x20, "[星星交换] : 恭喜 " + cm.getChar().getName() + " 在市场相框兑换了500个星星！");
        	cm.dispose();
            } else {
                cm.sendOk("#r兑换失败:\r\n#b1.你没有足够的#v4220180#!")
        	cm.dispose();
            }
            break;
        case 3:
            if (cm.getMeso() >= 800000000){
                cm.gainMeso( - 800000000);
		cm.gainNX(20*200)
                cm.sendOk("兑换成功：获得#b8000W游戏币换取的 4000 点卷");
        	cm.dispose();
            } else {
                cm.sendOk("#r兑换失败:\r\n#b1.你没有足够的游戏币(8000W)!");
        	cm.dispose();
            }
            break;
        case 4:
            if (cm.getMeso() >= 100000000){
                cm.gainMeso( - 100000000);
		cm.gainNX(25*200)
                cm.sendOk("兑换成功：获得#b1E游戏币换取的 5000 点卷");
        	cm.dispose();
            } else {
                cm.sendOk("#r兑换失败:\r\n#b1.你没有足够的游戏币(1E)!");
        	cm.dispose();
            }
            break;
        case 5:
            if (cm.getMeso() >= 200000000){
                cm.gainMeso( - 200000000);
		cm.gainNX(50*200)
                cm.sendOk("兑换成功：获得#b2E游戏币换取的 1W 点卷");
        	cm.dispose();
            } else {
                cm.sendOk("#r兑换失败:\r\n#b1.你没有足够的游戏币(2E)!");
        	cm.dispose();
            }
            break;
        }
    }
}