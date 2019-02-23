var status = 0;
var typed=0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendSimple("您好.欢迎您使用花生机.现在请先听我介绍下花生机出的物品吧.下面的东西都是花生机出的噢.您准备好开花生机没？\r\n#v2046074# #v2046075# #v2046149# #v2049701# #v1382049# #v1382050# #v1382051# #v1382052# #v1432039# #v2040212# #v2040121# #v1012174# #v1122080# #v1003114# #v1003209#\r\n#b#L1#我要购买花生机{70000点卷/个}#l");	
		} else if (status == 1) {
			if (selection == 1) {
				typed=1;
				cm.sendYesNo("你好，#h #！\r\n祝您好运.\r\n是否真的要购买呢?"); 
			}
			if (selection == 2) {
                    cm.dispose();
		    cm.openNpc(9000086, 1);
			}
			if (selection == 3) {
                    cm.dispose();
		    cm.sendOk("活动正在筹备中...");
			}
			if (selection == 4) {
                    cm.dispose();
		    cm.openNpc(9000086,2);
			}
		} else if (status == 2) {
			if(typed==1){
                if (cm.getPlayer().getCSPoints(1)>=25000) { 
                    cm.gainItem(5060003, 1);
                    cm.gainNX(-70000);
                    cm.sendOk("购买成功.请查看背包");
                    cm.dispose();
                } else {
                    cm.sendOk("您没有70000点卷");
                    cm.dispose();
                }
			}
		}
	}
}