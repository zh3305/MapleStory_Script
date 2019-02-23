var status = 0;

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
            var selStr = "#r#h ##k#k你好，在我这里可以兑换各种道具！#b\r\n#b#L1#换取必成卷#k\r\n#L3##b老公老婆戒指升级#k\r\n#b#L4#冒险岛7周年纪念币兑换物品#k\r\n#b#L5#中介币购买7周年纪念币#k"; 
        cm.sendSimple(selStr);
        } else if (status == 1) { 
        switch (selection) {
        case 0:
		cm.sendOk("7周年国庆纪念币：\r\n)1.可通过任务系统,回收系统,兑换系统,每日福利获得!\r\n)2.收集的纪念币越多兑换物品越好,至于收集多少看你实力!"); 
        case 1:
            cm.dispose();
            cm.openNpc(9120033,9);
            break;
        case 2:
            cm.dispose();
            cm.openNpc(9120033, 3);
            break;
        case 3:
            cm.dispose();
            cm.openNpc(9120033, 1);
            break;
        case 4:
            cm.dispose();
            cm.openNpc(9120033, 2);
            break;
        case 5:
            cm.dispose();
            cm.openNpc(9120033, 12);
            break;
        }
    }
}
