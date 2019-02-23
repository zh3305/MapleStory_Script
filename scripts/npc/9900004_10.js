/*	充值金额兑换中介	*/

var status = -1;
var Space = 0;
var beauty = 0;
var Scount = 0;
var pay = Array(100, 300, 600, 1000);
var count = Array(200, 800, 1600, 2600);


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
            if (status == 1) { //在是否按钮时选择否的提示
                cm.sendNext("如果您需要充值金额兑换成#v4000463#国庆纪念币的话，那么请下次来找我！");
                cm.dispose();
            }
            status--;
        }
        if (status == 0) {
            var selStr = "亲爱的#b#h ##k您好，我是冒险岛玩家点卷充值兑换员。您的消费信息为:\r\n充值余额:#r " + cm.getHyPay(1) + " #k元 已消费金额:#r " + cm.getHyPay(2) + " #k元 累计充值总金额:#r " + cm.getHyPay(3) + " #k元";
            for (var i = 0; i < pay.length; i++) {
                selStr += "\r\n#b#L" + i + "#兑换中介(" + pay[i] + "元 ==> " + count[i] + "个#v4000463#国庆纪念币)";
            }
            cm.sendSimple(selStr);
        } else if (status == 1) {
            if (cm.getHyPay(1) == 0) {
                cm.sendNext("您没有可兑换的充值金额。");
                cm.dispose();
            } else {
                beauty = pay[selection]; //获取选择的金额数量
                Scount = count[selection]; //获取选择兑换的数量
                Space = Math.floor(count[selection] / 200); //数量除以200等于1组中介 取最大值
                if (cm.getHyPay(1) < beauty) { //检测是否有那么多充值
                    cm.sendNext("您充值金额不够 " + beauty + " 元。");
                    cm.dispose();
                } else if (cm.getSpace(4) < Space) { //检测其他栏背包空间是否有那么多
                    cm.sendNext("背包空间不够，请将其他栏空出 " + Space + " 个位置。");
                    cm.dispose();
                } else {
                    cm.sendYesNo("您是否要将#r " + beauty + " #k元的充值金额兑换成#b " + Scount + " #k个#v4000463#国庆纪念币。");
                }
            }
        } else if (status == 2) {
            if (beauty < 100 || Scount == 0) { //检测选择获取的是否错误
                cm.sendNext("兑换中介出现错误，请反馈给管理员！");
            } else if (cm.getSpace(4) < Space) { //检测其他栏背包空间是否有那么多
                cm.sendNext("背包空间不够，请将其他栏空出 " + Space + " 个位置。");
            } else if (cm.getHyPay(1) < beauty) { //检测是否有那么多充值
                cm.sendNext("您充值金额不够 " + beauty + " 元。");
            } else if (cm.addHyPay(beauty) > 0) { //检测是否消费成功
                cm.gainItem(4000463, Scount);
                cm.sendOk("恭喜您成功兑换#b " + Scount + " #k个#v4000463#国庆纪念币，本次兑换消费充值金额#r " + beauty + " #k元，您目前的充值余额为:#r " + cm.getHyPay(1) + " #k元。");
            } else {
                cm.sendOk("兑换中介出现错误，请反馈给管理员！");
            }
            cm.dispose();
        } else {
            cm.dispose();
        }
    }
}
