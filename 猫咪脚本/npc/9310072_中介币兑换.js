/*
	中介币兑换点券
	奇幻工作室出品
*/

var status = 0;
var mesoitem = 4000463; // 国庆纪念币 - 是国庆纪念币。
var ratio = 1000;	// 1：1000
var text;
var sel;
var seltext = new Array("点券兑换#z" + mesoitem + "#", "#z" + mesoitem + "#兑换点券");

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
		text = "\t\t\t\t#e欢迎来到中介币兑换中心#k\r\n\r\n";
		text += "在我这里可以使用#e#r#z" + mesoitem + "#1:" + ratio + "兑换点券#k#n\r\n";
		text += "当前点券：" + cm.getNX(1) + "\r\n";
		text += "当前中介币：" + cm.getItemQuantity(mesoitem) + "\r\n\r\n#b";
		for (var i = 0; i < seltext.length; i++) {
			text += "#L" + i + "#" + seltext[i] + "#l\r\n";
		}
		cm.sendSimple(text);
	} else if (status == 1) {
		sel = selection;
		text = "\t\t\t\t- " + seltext[sel] + " -\r\n\r\n"
		text += "请输入要兑换的数量(1-1000)：";
		cm.sendGetNumber(text, 1, 1, 1000);
	} else if (status == 2) {
		var count = selection;
		var needNX = count * ratio;
		java.lang.System.err.println("count: " + count + "   text: " + selection);
		if (sel == 0) {
			if (cm.getNX(1) < needNX) {
				cm.sendOk("您的点券不足以兑换#r" + count + "个#z" + mesoitem + "##k，请充值后再来兑换吧。");
				cm.dispose();
				return;
			} else if (cm.haveSpace(4) < 1) {
				cm.sendOk("您的包裹栏不足，为避免兑换后#r#z" + mesoitem + "##k被狗吃了，还是清理下再来吧。");
				cm.dispose();
				return;
			} else {
				cm.gainNX(-needNX);
				cm.gainItem(mesoitem, count);
			}
		} else if (sel == 1) {
			if (cm.getItemQuantity(mesoitem) < count) {
				cm.sendOk("您的#r#z" + mesoitem + "#数量不足" + count + "个，无法兑换。");
				cm.dispose();
				return;
			} else {
				cm.gainItem(mesoitem, -count);
				cm.gainNX(needNX);
			}
		}
		cm.sendOk("兑换完毕，祝你游戏愉快！");
		cm.dispose();
	}
}