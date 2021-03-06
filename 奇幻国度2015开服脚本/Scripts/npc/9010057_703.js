/* 点卷兑换 */

var status = -1;
var selectedpay = 0;
var acash = 1000;
var head = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n";
var icon = "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";
var icon2 = "#fUI/UIToolTip.img/Item/Equip/Star/Star#";

function start() {
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
        if (mode == 1) {
            status++;
        } else {
            if (status == 2) {
                cm.sendNext(head + "如果您需要把幻币兑换成点卷的话，那么请下次来找我！");
                cm.dispose();
            }
            status--;
        }
        if (status == 0) {
            cm.sendSimple(head + "亲爱的#b#h ##k您好，我是" + cm.getServerName() + "玩家点卷充值兑换员.\r\n  您的消费信息为:\r\n  " + icon2 + "当前幻币:#r " + cm.getHyPay(1) + " #k币\r\n  " + icon2 + "已消费幻币:#r " + cm.getHyPay(2) + " #k币\r\n  " + icon2 + "累计充值总幻币:#r " + cm.getHyPay(3) + " #k币\r\n#b#L0#" + icon + "兑换点卷(1:1000)\r\n#L1#" + icon + "领取赞助奖励#l\r\n#L2#" + icon+ "奇幻理财#l\r\n");
        } else if (status == 1) {
			if(selection == 1) {
				cm.dispose();
				cm.openNpc(9010057, 602);
				return;
			} else if (selection == 2) 
			{
				cm.dispose();
				cm.openNpc(9010057, 606);
				return;
			}

            if (cm.getHyPay(1) == 0) {
                cm.sendNext(head + "您没有可兑换的幻币。");
                cm.dispose();
            } else {
                cm.sendGetNumber(head + "请输入您要兑换的幻币:\r\n游戏点卷的兑换比例为 1 : 1000\r\n", 1, 1, cm.getHyPay(1));
            }
        } else if (status == 2) {
            selectedpay = selection;
            if (cm.getHyPay(1) < selectedpay) {
                cm.sendNext(head + "您幻币不够。");
                cm.dispose();
            } else {
                cm.sendYesNo(head + "您是否要将#r " + selectedpay + " #k幻币兑换成#b " + selectedpay * acash + " #k的点卷。");
            }
        } else if (status == 3) {
            if (cm.getHyPay(1) < selectedpay) {
                cm.sendNext(head + "您幻币不够。");
            } else if (cm.addHyPay(selectedpay) > 0) {
                cm.gainNX(selectedpay * acash);
                cm.sendOk(head + "恭喜您成功兑换#b " + selectedpay * acash + " #k的点卷，本次兑换消费幻币#r " + selectedpay + " #k币，您目前的幻币余额为:#r " + cm.getHyPay(1) + " #k币。");
            } else {
                cm.sendOk(head + "兑换点卷出现错误，请反馈给管理员！");
            }
            cm.dispose();
        } else {
            cm.dispose();
        }
    }
}