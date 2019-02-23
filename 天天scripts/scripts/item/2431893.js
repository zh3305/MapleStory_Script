/* 附加神奇魔方碎片 */
var contnum=25;//兑换需要的数量
var status = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {2431893
        if (status >= 0) {
            if (status == 1) {
                im.sendNext("如果您需要兑换的话，那么请下次来找我！");
            }
            im.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        var selStr = "您现在持有#r" + im.getItemQuantity(2431893) + "#k个#b#i2431893:# #t2431893##k\r\n";
        selStr += contnum+"个碎片换一个超级魔方";
            selStr += "\r\n#L1#兑换#r1个#l";
        im.sendSimple(selStr);
    } else if (status == 1) {
        if (im.getItemQuantity(2431893) >= contnum) {
            if (im.canHold(5062009)) {
                im.gainItem(2431893, -contnum);
                im.gainItem(5062009, 1);
                im.sendOk("恭喜您成功兑换#i" + 5062009 + ":# #b#t" + 5062009 + "##k 。");
            } else {
                im.sendOk("请清理出1格以上的空间。");
            }
        } else {
            im.sendOk("兑换#i" + 5062009 + ":# #b#t" + 5062009 + "##k需要#r" + contnum + "个#k#b#t2431893##k\r\n您还需收集#r" + (contnum - im.getItemQuantity(2431893)) + "#k个我才能为您兑换。");
        }
        im.dispose();
    }
}
