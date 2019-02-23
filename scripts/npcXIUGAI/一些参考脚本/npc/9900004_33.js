
var status = 0;
var sl = 0;//兑换数量

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
	cm.sendSimple("需要什么帮助吗？（当前汇率：10E金币=1国庆纪念币）\r\n#b#L1#用金币兑换成国庆纪念币\r\n#L2#用国庆纪念币兑换成金币");
    } else if (status == 1) {
	if (selection == 1) {
		if (cm.getMeso() >= 1000000000) {
			if (cm.getSpace(4) < 1) {
				cm.sendOk("请在其它栏中留1个空格");
			} else {
				cm.gainItem(4000463, 1);
				cm.gainMeso(-1000000000);
			}
		} else {
			cm.sendOk("您的金币不足10E");
		}
	} else {
		if (cm.itemQuantity(4000463) >= 1) {
			if (cm.getMeso() > 1147483647) {
				cm.sendOk("您的金币超过1147483647，为了避免金融危机不能为您兑换");
			} else {
				cm.gainMeso(1000000000);
				cm.gainItem(4000463, -1);
			}
		} else {
			cm.sendOk("您确定您拥有国庆纪念币吗？");
		}
	}
	cm.dispose();
    }
}