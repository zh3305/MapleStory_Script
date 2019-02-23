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
        var selStr = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#亲爱的#r#h ##k您好!我是一键潜能使者:\r\n\r\n#fUI/UIWindow2.img/QuestGuide/Button/WorldMapQuestToggle/normal/0##b\r\n#L0##fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#一键潜能简介#l\r\n#L1##fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#使用一键潜能#l";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
            case 0:
		cm.sendOk("#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#亲爱的#r#h ##k您好,欢迎来到一键潜能简介:\r\n#fUI/UIWindow2.img/Quest/quest_info/summary_icon/startcondition#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#该功能能快速使#b装备的第一条潜能属性#k到达您想要的属性\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#打开该NPC每次需要5点充值余额\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#最后保留属性是按魔方价算:\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0##b1200点卷(魔方价格)*次数#k \r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#最终价格为:#b1200点卷 * 系统洗的次数 + 5充值余额 \r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#赶快使用吧......");
		status = -1;
                break;
	    case 1:
		cm.dispose();
		cm.openNpc(9900002,1300);
		break;
        }
    }
}