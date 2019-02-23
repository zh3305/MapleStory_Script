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
        var selStr = "Dear#r#h ##k您好，现在就要进去挑战黑暗女皇希纳斯了吗\r\n#L2##r我准备好了！#k \r\n#L1##r女皇好萌，还是不推算了#k";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
	case 1:
                cm.warp(271040000);
	  	cm.dispose();
	break;
	case 2:
        cm.warp(271040100);
		cm.dispose();
                cm.spawnNpc(1104201, new java.awt.Point(-685, 0));
		break;
		}
	}
}