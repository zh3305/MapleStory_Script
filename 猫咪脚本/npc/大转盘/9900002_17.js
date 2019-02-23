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
        var selStr = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#请选择你要控制的转盘（好礼大赠送）:\r\n\r\n#L1#我要转30的(累计充值到30可以免费转)#l\r\n#b#L0#我要转300的(累计充值到300可以免费转)#l\r\n#L2#我要转1500的(累计金额到1500可以花费2万点卷转)#l\r\n#L3#我要转3000的(累计金额到3000可以花费4万点卷转)#l\r\n#L4#我要转6000的(累计金额到6000可以花费6万点卷转)#l";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
	cm.dispose();
	cm.openNpc(9900002,18);
            break;
        case 1:
	cm.dispose();
	cm.openNpc(9900002,19);
            break;
        case 2:
	cm.dispose();
	cm.openNpc(9900002,21);
            break;
        case 3:
	cm.dispose();
	cm.openNpc(9900002,22);
            break;
        case 4:
	cm.dispose();
	cm.openNpc(9900002,23);
            break;
        }
    }
}