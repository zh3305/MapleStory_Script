var status = 0;       //很简略，无聊做的，反震能用。 Q
var wn22 = "#fUI/CashShop.img/CSEffect/new/0#";  //新品图标
var tz20 = "#fEffect/CharacterEff/1114000/1/0#";  //红星花
var yun ="#fUI/UIWindow/PartySearch2/BtNext/mouseOver/0#";////红沙漏
var wn1 = "#fUI/Basic.img/BtClaim/normal/0#";  //警灯
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
        var selStr = "" + wn22 + " #r#e欢迎使用游戏币兑换点卷功能！#n\r\n\r\n#b#L0#" + yun + "1E游戏币换取1000点卷\r\n\r\n#b#L1#" + yun + "10E游戏币换取10000点卷\r\n";
 cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            if (cm.getMeso() >= 100000000){
                cm.gainMeso( - 100000000);
		cm.gainNX(5*200)
                cm.sendOk("兑换成功：获得#b1E游戏币换取的 1000 点卷");
          cm.worldSpouseMessage(0x20, "[金币交换] : 恭喜 " + cm.getChar().getName() + " 在市场“雪人凯利”金币交换，兑换了1000点卷！");
        	cm.dispose();
            } else {
                cm.sendOk("#r兑换失败:\r\n#b1.你没有足够的游戏币(1E)!");
        	cm.dispose();
            }
            break;
        case 1:
            if (cm.getMeso() >= 1000000000){
                cm.gainMeso( - 1000000000);
		cm.gainNX(50*200)
                cm.sendOk("兑换成功：获得#b10E游戏币换取的 10000 点卷");
 cm.worldSpouseMessage(0x20, "[金币交换] : 恭喜 " + cm.getChar().getName() + " 在市场“雪人凯利”金币交换，兑换了10000点卷！");
        	cm.dispose();
            } else {
                cm.sendOk("#r兑换失败:\r\n#b1.你没有足够的游戏币(10E)!");
        	cm.dispose();
            }
            break;
        case 2:
            if (cm.getMeso() >= 60000000){
                cm.gainMeso( - 60000000);
		cm.gainNX(15*200)
                cm.sendOk("兑换成功：获得#b5E游戏币换取的 3000 点卷");
        	cm.dispose();
            } else {
                cm.sendOk("#r兑换失败:\r\n#b1.你没有足够的游戏币(6000W)!");
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