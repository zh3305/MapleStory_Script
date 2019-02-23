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
            var selStr = "#r租借装备：#b\r\n#L1#特殊装备  #L2#传说武器";
 	    cm.sendSimple(selStr);
    } else if (status == 1) {
      switch (selection) {
        case 1:
            cm.dispose();
	    cm.openNpc(9900004,9);
            break;
        case 2:
            cm.dispose();
	    cm.sendOk("敬请期待！");
            break;
        }
    }
}