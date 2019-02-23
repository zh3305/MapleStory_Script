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
        var selStr = ""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+"\r\n#k#L2#   #v2432040#     购买热力四射礼盒10W点卷#l   \r\n"+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+"\r\n       打开可随机获得以下任意一个最新时装，聊天戒指\r\n#v1112286##v1112174##v1112287##v1112175##v1112155##v1112267##v1112160##v1112272##v1112254##v1112143##v1112176##v1112288##v1112191##v1115004##v1112190##v1115003##v1112958##v1112959##v1060187##v1061211##v1052950##v1052951##v1042350##v1040194##v1041196##v1302201##v1102816##v1102813##v1102820##v1102822##v1102842##v1102827##v1102823#";
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
                cm.gainItem(2432040,1);
                cm.spouseMessage(0x26,"『土豪公告』 "+ cm.getChar().getName() +"  在市场购买热力四射礼盒，大家快来打劫他(她)~!");
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