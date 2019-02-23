var status = 0;

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
        var selStr = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#亲爱的#r#h ##k您好，请选择要兑换的魔方数量:\r\n#b#L0#兑换#v5062009##z5062009# x1\r\n#L1#兑换#v5062009##z5062009# x2\r\n#L2#兑换#v5062009##z5062009# x5\r\n#L3#兑换#v5062009##z5062009# x10\r\n#L4#兑换#v5062009##z5062009# x20\r\n#L5#兑换#v5062009##z5062009# x50\r\n#L6#兑换#v5062009##z5062009# x100\r\n#L7#兑换#v5062009##z5062009# x200";
        im.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            if (im.haveItem(2431893,20)) {
		        im.gainItem(2431893, -20);
                im.gainItem(5062009,1);
                im.sendOk("兑换成功\r\n祝你游戏愉快!");
            } else {
                im.sendOk("你没有#v2431893##z2431893# x20,我不能与你兑换。");
            }
            break;
        case 1:
             if (im.haveItem(2431893,40)) {
		        im.gainItem(2431893, -40);
                im.gainItem(5062009,2);
                im.sendOk("兑换成功\r\n祝你游戏愉快!");
            } else {
                im.sendOk("你没有#v2431893##z2431893# x40,我不能与你兑换。");
            }
            break;
        case 2:
             if (im.haveItem(2431893,100)) {
		        im.gainItem(2431893, -100);
                im.gainItem(5062009,5);
                im.sendOk("兑换成功\r\n祝你游戏愉快!");
            } else {
                im.sendOk("你没有#v2431893##z2431893# x100,我不能与你兑换。");
            }
            break;
        case 3:
             if (im.haveItem(2431893,200)) {
		        im.gainItem(2431893, -200);
                im.gainItem(5062009,10);
                im.sendOk("兑换成功\r\n祝你游戏愉快!");
            } else {
                im.sendOk("你没有#v2431893##z2431893# x200,我不能与你兑换。");
            }
            break;
        case 4:
             if (im.haveItem(2431893,400)) {
		        im.gainItem(2431893, -400);
                im.gainItem(5062009,20);
                im.sendOk("兑换成功\r\n祝你游戏愉快!");
            } else {
                im.sendOk("你没有#v2431893##z2431893# x400,我不能与你兑换。");
            }
            break;
        case 5:
             if (im.haveItem(2431893,1000)) {
		        im.gainItem(2431893, -1000);
                im.gainItem(5062009,50);
                im.sendOk("兑换成功\r\n祝你游戏愉快!");
            } else {
                im.sendOk("你没有#v2431893##z2431893# x1000,我不能与你兑换。");
            }
            break;
        case 6:
             if (im.haveItem(2431893,2000)) {
		        im.gainItem(2431893, -2000);
                im.gainItem(5062009,100);
                im.sendOk("兑换成功\r\n祝你游戏愉快!");
            } else {
                im.sendOk("你没有#v2431893##z2431893# x2000,我不能与你兑换。");
            }
            break;
        case 7:
             if (im.haveItem(2431893,4000)) {
		        im.gainItem(2431893, -4000);
                im.gainItem(5062009,200);
                im.sendOk("兑换成功\r\n祝你游戏愉快!");
            } else {
                im.sendOk("你没有#v2431893##z2431893# x4000,我不能与你兑换。");
            }
            break;
        }
        im.dispose();
    }
}