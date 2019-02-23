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
        var selStr = "请选择你要控制的转盘（好礼大赠送）:\r\n\r\n#b#L0#我要转300的(累计充值到300可以转)#l\r\n#L1#我要转30的(累计充值到30可以转)#l";
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
        }
    }
}
