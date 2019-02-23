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
        var selStr = "请选择你想要召唤的美容师傅#b\r\n#L0#一般美发#l\r\n#L1#一般整容#l\r\n#L2#高级美发#l\r\n#L3#高级整容#l\r\n#L4#高级换肤#l\r\n#r#L5#皇家整容 -可抽取到限量版脸型[New]#l\r\n#L6#皇家发型 -可抽取到限量版发型[New]#l";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
	case 0:
            cm.dispose();
            cm.openNpc(1012104);
            break;
        case 1:
            cm.dispose();
            cm.openNpc(1052005);
            break;
        case 2:
            cm.dispose();
            cm.openNpc(1012103);
            break;
        case 3:
            cm.dispose();
            cm.openNpc(1012104);
            break;
        case 4:
            cm.dispose();
	    cm.openNpc(1012105);
            break;
        case 5:
            cm.dispose();
	    cm.openNpc(9201148);
            break;
        case 6:
            cm.dispose();
	    cm.openNpc(1012117);
            break;
        }
    }
}