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
            var selStr = "亲爱的#r" + cm.getChar().getName() + "#k你好，请选择你需要的#b\r\n#L0#查看BOSS次数\r\n#L1#清除BOSS次数";
 	    cm.sendSimple(selStr);
    } else if (status == 1) {
      switch (selection) {
        case 0:
            cm.dispose();
            cm.openNpc(9900004,81);
            break;
        case 1:
            cm.dispose();
            cm.openNpc(9900004,3);
            break;
        }
    }
}