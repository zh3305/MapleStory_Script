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
        var selStr = ""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+"\r\n#k#v5000424##L2#购买+13攻击魔力宠物15W点卷#l   \r\n"+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+"\r\n";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 1:
            if (cm.getPlayer().getCSPoints(1) >= 150000) {
		cm.gainNX(1, -150000);
                cm.changeDamageSkin(1023);
                cm.sendOk("购买成功,已应用到你的伤害皮肤,打怪可看到\r\n祝你游戏愉快!");
            } else {
                cm.sendOk("你没有点卷或不足,我不能与你兑换");
            }
            break;
        case 2:
            if (cm.getPlayer().getCSPoints(1) >= 150000) {
		cm.gainNX(1, -150000);
                cm.gainItem(2430869,1);
				cm.worldMessage(0x18, "『购买公告』" + " : " + "玩家 " + cm.getChar().getName() + " 成功用15W点卷购买了+13魔攻物攻的宠物。");
                cm.sendOk("购买成功\r\n祝你游戏愉快!");
            } else {
                cm.sendOk("你没有点卷或不足,我不能与你兑换");
            }
            break;
			case 3:
            if (cm.getPlayer().getCSPoints(1) >= 600000) {
		cm.gainNX(1, -600000);
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