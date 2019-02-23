var icon ="#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";

var status = 0;


function start() {
	status = -1;
	action(1,0,0);
}
function action(mode, type, selection) {
	if (mode == -1) { //ExitChat
        cm.dispose();
		return;
    } else if (mode == 0) { //No
        cm.dispose();
	}
	if (mode == 1) {
        status++;
    } else {
        status--;
    }
	if (status == 0) {
		cm.sendSimple("你好，看一看吧，需要购买什么呢？\r\n\r\n#b#L5# "+icon+" 上乘装备 #L1# "+icon+" 绝版点装 #L2# "+icon+" 稀有椅子\r\n\r\n#L3# "+icon+" 极品卷轴 #L6# "+icon+" 品级副装 #L4# #r"+icon+" 使用说明");
	} else if (status == 1) {
		switch(selection) {
			case 1:
				cm.dispose();
				cm.openNpc(9000069, 1);
			break;
			case 2:
				cm.dispose();
				cm.openNpc(9000069, 2);
			break;
			case 3:
			//卷轴
				cm.dispose();
				cm.openNpc(9000069, 3);
			break;
			case 4:
				cm.sendOk("元宝充值完成后，请找普通等级管理员进行元宝兑换，目前元宝可以兑换雪花币和点卷。");
				cm.dispose();
			break;
			case 5:
				cm.dispose();
				cm.openNpc(9000069, 4); 
			break;
			case 6:
				cm.dispose();
				cm.openNpc(9310144, 999);
			break;
		}
	} else {
		//cm.sendOk(status);
		cm.dispose();
	}
}