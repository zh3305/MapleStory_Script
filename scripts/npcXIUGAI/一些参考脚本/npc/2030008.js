
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
    if (status == 0){
	if (cm.getPlayer().getMapId() == 211042300) { //普通扎昆 入口
		var selStr = "伟大的勇士，您需要我的帮助吗\r\n#b#L1#我想去进阶扎昆入口";
		cm.sendSimple(selStr);
	} else if (cm.getPlayer().getMapId() == 211042301) { //进阶扎昆 入口
		var selStr = "伟大的勇士，您需要我的帮助吗\r\n#b#L2#我想去普通扎昆入口";
		cm.sendSimple(selStr);
	} else {
		cm.sendOk("未知的数据：mapID=#r" + cm.getPlayer().getMapId() + "#k.npcID=#r2030008");
		cm.dispose();
	}
    } else if(status == 1){
	switch (selection){
	case 1:
		cm.warp(211042301);
		break;
	case 2:
		cm.warp(211042300);
		break;
	}
	cm.dispose();
    }
}

