var status = 0;
var typed = 0;
var myRmb;
function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			var text = "您当前的点卷数量为：#r"+cm.getPlayer().getCSPoints(1)+"#k点\r\n\r\n";
			//text+="您可以在我这里使用点卷兑换雪花币或者雪花币兑换点卷。#k\r\n";
			text+="#b#L1#点卷兑换雪花币#l \r\n#L2#雪花币兑换点卷#l";
			cm.sendSimple(text);
			//cm.dispose();
		} else if (status == 1) {
			if (selection == 1) {
				cm.sendGetText("#b【点卷兑换雪花币】 1000点:1个雪花币#k\r\n\r\n您当前有#r"+cm.getPlayer().getCSPoints(1)+"#k点点卷，请输入想要兑换的#r雪花币#k数量：");
				typed = 1;
			} else if (selection == 2) {
				cm.sendGetText("#b【雪花币兑换点卷】 1个雪花币:1000点#k\r\n\r\n您当前有#r"+cm.getItemQuantity(4310014)+"#k个雪花币，请输入想要兑换的#r雪花币#k数量：");
				typed = 2;
			}
			//cm.dispose();
		} else if (status == 2) {
			var ybNum = Math.floor(cm.getText()*1);
			if (isNaN(ybNum)){
				cm.sendOk("很抱歉，数量只能为#r数字#k，请重新确认后查询！");
				cm.dispose();
				return;
			}
			if (ybNum<=0) {
				cm.sendOk("请输入大于0的数字！");
				cm.dispose();
				return;
			}
			if (ybNum>10000) {
				cm.sendOk("每次最多输入10000，请返回重新输入");
				cm.dispose();
				return;
			}
			if (typed == 1) {
				if (cm.getPlayer().getCSPoints(1) >= (ybNum*1000)) {
					if (cm.getSpace(4) >= 1) {
						cm.gainNX(1, -ybNum*1000);
						cm.gainItem(4310014, ybNum);
						cm.sendOk("兑换成功");
						cm.dispose();
					} else {
						cm.sendOk("包裹空间不足");
						cm.dispose();
					}
				} else {
					cm.sendOk("你没有那么多点卷");
					cm.dispose();
				}
			} else if (typed == 2) {
				if (cm.haveItem(4310014, ybNum)) {
					cm.gainItem(4310014, -ybNum);
					cm.gainNX(1, ybNum*1000);
					cm.sendOk("兑换成功");
					cm.dispose();
				} else {
					cm.sendOk("你没有那么多雪花币");
					cm.dispose();
				}
			}
		}
   }
}