var status = 0;

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
			cm.sendSimple("#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#亲爱的#r#h ##k您好!想选择什么样的系列任务:\r\n#r#L1##fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#系列任务简介#l\r\n\r\n   #k#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#积分：#r"+cm.getPlayerPoints()+"#k 点  #fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#活力值：#r"+cm.getPlayerEnergy()+"#k 点 \r\n   #fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#今天在线：#r"+cm.getOnlineTime()+"#k 分钟#b\r\n\r\n#fUI/UIWindow2.img/QuestGuide/Button/WorldMapQuestToggle/normal/0#\r\n#L2##fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#[系列-神木村]暗黑龙王洞穴#l");
		} else if (status == 1) {
			if (selection == 1) {
			cm.sendOk("#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#亲爱的#r#h ##k您好,欢迎来到系列任务简介:\r\n  通过系列任务活动可以获得大量游戏道具,在这里让\r\n  你总是意想不到的意外,任务简单-困难模式有趣有乐.杀\r\n  戮 挑战 冒险 极品 这里的任务应有尽有,赶快行动起来吧!\r\n#fUI/UIWindow2.img/Quest/quest_info/summary_icon/startcondition#\r\n#fUI/UIWindow2.img/Quest/quest_info/summary_icon/basic#\r\n#v3010070#椅子 #v2049134#卷轴 #v5062002#魔方  #v1332225#装备 #v1102453#点装\r\n\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0##r注：所有系列任务24点重置。\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0##r注：系列任务每天轮换,更新不同的系列副本。");
                    	cm.dispose();
			} else if (selection == 2) {
				cm.dispose();
				cm.openNpc(2400022,"shenmu4"); //暗黑龙王洞穴
			}
	   }
      }
}