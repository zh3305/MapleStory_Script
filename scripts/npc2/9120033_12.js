var status = -1;
var selectedpay = 0;

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
                cm.sendNext("如果你需要7周年纪念银币，请下次来找我！");
                cm.dispose();
            }
            status--;
        }
        if (status == 0) {
            cm.sendSimple("亲爱的#r" + cm.getChar().getName() + "#k你好，欢迎来到7周年银币商铺。#b \r\n - 7周年银币内容>>       国庆纪念币:#r " + cm.getItemQuantity(4000463) + " #b个\r\n#r≯#v4000463#国庆纪念币x1等于#v4310002#7周年纪念银币x4≮\r\n\r\n#b#L0#我要兑换物品#l");
        } else if (status == 1) {
            if (cm.getItemQuantity(4000463) == 0) {
                cm.sendNext("您没有可兑换的国庆纪念币。");
                cm.dispose();
            } else {
                cm.sendGetNumber("请输入中介币兑换7周年银币数量:\r\n7周年币的兑换比例为 1 : 4\r\n", 1, 1, cm.getItemQuantity(4000463));
            }
        } else if (status == 2) {
		selectedpay = selection;
             if (cm.getItemQuantity(4000463) < selectedpay) {
                cm.sendNext("您的国庆纪念币不足，无法兑换7周年纪念银币。");
                cm.dispose();
            } else {
                cm.sendYesNo("您是否要将#r " + selectedpay + " #k个国庆纪念币兑换成#b " + selectedpay * 4 + " #k个7周年纪念银币。");
            }
        } else if (status == 3) {
            if (cm.getItemQuantity(4000463) < selectedpay) {
                cm.sendNext("您的国庆纪念币不足。");
            } else if (cm.getItemQuantity(4000463) < selectedpay) {
                cm.sendOk("兑换出现错误，请反馈给管理员！");
            } else {
                cm.gainItem(4000463, - selectedpay);
                cm.gainItem(4310002, + selectedpay * 4);
                cm.sendOk("恭喜您成功兑换#b " + selectedpay * 4 + " #k个7周年纪念银币。");
            }
            cm.dispose();
        } else {
            cm.dispose();
        }
    }
}