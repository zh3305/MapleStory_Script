var status = -1;
var selectedpay = 0;
var acash = 700;

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
                cm.sendNext("如果您需要充值金额兑换成点卷的话，那么请下次来找我！");
                cm.dispose();
            }
            status--;
        }
        if (status == 0) {
            cm.sendSimple("亲爱的#b#h ##k您好，我是永恒冒险岛玩家点卷充值兑换员。您的消费信息为:\r\n充值余额:#r " + cm.getHyPay(1) + " #k元\r\n已消费金额:#r " + cm.getHyPay(2) + " #k元\r\n累计充值总金额:#r " + cm.getHyPay(3) + " #k元\r\n#b#L0#兑换点卷(1:700)");
        } else if (status == 1) {
            if (cm.getHyPay(1) == 0) {
                cm.sendNext("您没有可兑换的充值金额。");
                cm.dispose();
            } else {
                cm.sendGetNumber("请输入您要兑换的充值金额:\r\n游戏点卷的兑换比例为 1 : 700\r\n", 1, 1, cm.getHyPay(1));
            }
        } else if (status == 2) {
            selectedpay = selection;
            if (cm.getHyPay(1) < selectedpay) {
                cm.sendNext("您充值金额不够。");
                cm.dispose();
            } else {
                cm.sendYesNo("您是否要将#r " + selectedpay + " #k元的充值金额兑换成#b " + selectedpay * acash + " #k的点卷。");
            }
        } else if (status == 3) {
            if (cm.getHyPay(1) < selectedpay) {
                cm.sendNext("您充值金额不够。");
            } else if (cm.addHyPay(selectedpay) > 0) {
                cm.gainNX(selectedpay * acash);
                cm.sendOk("恭喜您成功兑换#b " + selectedpay * acash + " #k的点卷，本次兑换消费充值金额#r " + selectedpay + " #k元，您目前的充值余额为:#r " + cm.getHyPay(1) + " #k元。");
            } else {
                cm.sendOk("兑换点卷出现错误，请反馈给管理员！");
            }
            cm.dispose();
        } else {
            cm.dispose();
        }
    }
}