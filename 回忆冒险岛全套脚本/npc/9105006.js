var status;
var text = "";
var head = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n";
var icon = "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";
var icon2 = "#fUI/UIToolTip.img/Item/Equip/Star/Star#";

function start() {
    status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
    if(mode == -1) {
        cm.dispose();
	} else {
        if(mode == 0 && status == 0) {
            cm.dispose();
			return;
		}
		if(mode == 1) status++;
		else {
            cm.dispose();
			return;
		}

		if(status == 0) {
            if(cm.getMapId() == 910000000) {
				text += head +"我当然就是大名鼎鼎的#b传说中的美容师#k了，在抵用商城购买#b闪耀皇家理发券#k或#b天天变整容券#k就可以找我为你服务了！\r\n#b";
				text += "#L0#" + icon + " 我想美发\r\n";
				text += "#L1#" + icon + " 我想染发\r\n";
				text += "#L2#" + icon + " 我想美容\r\n";
				cm.sendSimple(text);
			} else {
				cm.dispose();
				cm.sendOk("到自由市场来找我吧！");
			}
		} else {
			if(selection == 0) {
				cm.dispose();
				cm.openNpc(9105006, 1);
			} else if (selection == 1) {
				cm.dispose();
				cm.openNpc(1012103);
			} else if (selection == 2)
			{
				cm.dispose();
				cm.openNpc(9105006, 2);
			}
		}
	}
}