var status = -1;

function start() {
	if (cm.getPlayer().getLevel() < 50) {
		cm.sendOk("以你现在的等级，是无法靠近扎昆的。至少必须达到50级……");
		cm.dispose();
		return;
	}
	if (cm.getJob() >= 100 && cm.getJob() < 200) {
		cm.sendSimple("你来这里有什么事吗?#b\r\n#L0#我想挑战扎昆。#l\r\n#L1#没什么事。#l");
	} else {
		cm.sendNext("你是想探索扎昆副本吗？但是你不是战士，我没办法对你进行判断。你去找职业对应的长老吧。");
		cm.dispose();
	}
}

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		cm.dispose();
		return;
	}

	if (status == 0) {
		if (selection == 0) {
			cm.sendNext("那么，我现在就将你送往#b阿杜比斯#k所在的#b通向扎昆的门#k。");
		} else if (selection == 1) {
			cm.sendOk("这样啊。你可真无聊。如果有什么事的话，随时再来吧。");
			cm.dispose();
		}
	} else if (status == 1) {
		cm.warp(211042300);
		cm.dispose();
	}
}
