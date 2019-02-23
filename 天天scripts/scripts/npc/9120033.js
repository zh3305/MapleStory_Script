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
            var selStr = "#e#r#h ##k#n    你想要做什么？#b\r\n#L0#进入 天空大战舰远征队任务 入场点#l\r\n#L1#结束对话#l"; 
        cm.sendSimple(selStr);
        } else if (status == 1) { 
        switch (selection) {
        case 0:
		cm.warp(802000610); 
                cm.dispose();
            break;
        case 1:
            cm.dispose();
            cm.sendOk("..........");
            break;
        case 2:
            cm.dispose();
            cm.openNpc(9120033, 3);
            break;
        case 3:
            cm.dispose();
	    cm.sendOk("暂时关闭");
            //cm.openNpc(9120033, 1);
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
