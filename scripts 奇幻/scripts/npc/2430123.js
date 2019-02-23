var status = 0;
var z = "#fUI/UIWindow/Quest/icon5/1#"; //"+z+"//美化
var typed = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (status == 0 && mode == 0) {
		im.dispose();
		return;
	}
	if (mode == 1) {
		status++;
	} else {
		status--;
	}
	if (status == 0) {
		var selStr = "#e#r#fEffect/ItemEff/1112811/0/0##fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k\r\n\r\n";
		selStr += "#d欢迎使用超级NPC盒子，您可以放在键盘快捷键使用：#k\r\n";
		selStr += "\r\n#L0#" + z + "#e#b打开拍卖Npc#l#k#n#L99#" + z + "#e#b进入商城#l#k#n";
		selStr += "#r#L1#" + z + " 在线奖励#l \r\n";
		selStr += "#r#L2#" + z + " 打开市场NPC#l \r\n";
		selStr += "#r#L3#" + z + " 挑战首领#l \r\n";
		selStr += "\r\n\r\n#fEffect/ItemEff/1112811/0/0##fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k";
		im.sendSimple(selStr);
	} else if (status == 1) {
		switch (selection) {
			case 0:
				im.dispose();
				im.openNpc(9900004, 0);
				break;
			case 1:
				im.dispose();
				im.openNpc(9900004, 200);
				break;
			case 3:
				im.dispose();
				im.openNpc(9010022, 0);
				break;
			case 13:
				im.dispose();
				im.openNpc(9310144);
				break;
			case 14:
				if (im.getMeso() >= 100000) {
					im.sendGetText("消耗10万游戏币，请输入您要说的话：");
					typed = 14;
				} else {
					im.sendOk("您没有10万游戏币，不能进行世界喊话。");
					im.dispose();
				}
				break;
			case 15:
				im.dispose();
				im.openNpc(9030000);
				break;
		}
	} else if (status == 2) {
		if (typed == 14) {
			im.worldSpouseMessage(0x07, "[世界]" + im.getPlayer().getMedalText() + im.getChar().getName() + " : " + im.getText());
			im.gainMeso(-100000);
			//im.dispose();
		}
		im.dispose();
	}
}