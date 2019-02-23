var status = 0;

var eff = "#fEffect/CharacterEff/1112905/0/1#"; //

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
        var selStr = ""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+"\r\n#k#L2#   #v2431307#     购买圣诞老人的发光箱子10W点卷#l   \r\n"+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+"\r\n       打开可随机获得以下任意一个最新时装\r\n#v1022248##v1022247##v1070068##v1071084##v1073055##v1073056##v1071086##v1073076##v1702576##v1702584##v1702583##v1702570##v1702581##v1702304##v1702566##v1382261##v1702544##v1702587##v1702591##v1702585##v1702586#";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 1:
            if (cm.getPlayer().getCSPoints(1) >= 500000) {
		cm.gainNX(1, -500000);
                cm.changeDamageSkin(1023);
                cm.sendOk("购买成功,已应用到你的伤害皮肤,打怪可看到\r\n祝你游戏愉快!");
            } else {
                cm.sendOk("你没有点卷或不足,我不能与你兑换");
            }
            break;
        case 2:
            if (cm.getPlayer().getCSPoints(1) >= 100000) {
		cm.gainNX(1, -100000);
                cm.gainItem(2431307,1);
                cm.spouseMessage(0x26,"『土豪公告』 "+ cm.getChar().getName() +"  在市场购买圣诞老人的发光箱子，大家快来打劫他(她)~!");
                cm.sendOk("购买成功\r\n祝你游戏愉快!");
            } else {
                cm.sendOk("你没有点卷或不足,我不能与你兑换");
            }
            break;
			case 3:
            if (cm.getPlayer().getCSPoints(1) >= 300000) {
		cm.gainNX(1, -300000);
                cm.changeDamageSkin(1022);
                cm.sendOk("购买成功,已应用到你的伤害皮肤,打怪可看到\r\n祝你游戏愉快!");
            } else {
                cm.sendOk("你没有点卷或不足,我不能与你兑换");
            }
            break;
        }
        cm.dispose();
    }
}