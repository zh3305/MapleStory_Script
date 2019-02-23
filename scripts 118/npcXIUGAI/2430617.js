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
    if (cm.getMapId() == 180000001) {
            cm.sendOk("很遗憾，您因为违反用户守则被禁止游戏活动，如有异议请联系管理员.")
            cm.dispose();
        } 
    else if (status == 0) {
     if(cm.getChar().getAccountID()==2){
        var selStr = "尊贵的 #r#h ##k 您好！请您选择您需要测试的功能:\r\n\r\n#r#L0#终极服务#l\r\n#L1#发送全世界祝福#l\r\n#L2#点播音乐#l\r\n\r\n#L3#Maplewing贡献系统#l";
        cm.sendSimple(selStr);
 } else {

cm.sendOk("你好！我是时间女神伦娜！"); 
cm.dispose();
}

    } else if (status == 1) {
        switch (selection) {
        case 0:
            cm.dispose();
            cm.openNpc(2430617, 1);
            break;
        case 1:
            cm.dispose();
            cm.openNpc(2430617, 2);
            break;
        case 2:
            cm.dispose();
            cm.openNpc(2430617, 3);
            break;

        case 3:
            cm.dispose();
            if(cm.addBank()>0) {
           // cm.addBank();
            cm.openNpc(2430617, 4);
            } else {
            cm.openNpc(2430617, 4);
            }
            break;

        case 4:
            cm.dispose();
            cm.openNpc(2430617, 5);
            break;

        case 5:
            cm.dispose();
	    cm.openNpc(2430617, 6);
            break;
		}
    }
}