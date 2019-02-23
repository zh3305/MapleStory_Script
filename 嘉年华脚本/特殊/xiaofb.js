var status = 0;
var ca = java.util.Calendar.getInstance();
var day = ca.get(java.util.Calendar.DATE);//获取日
var day1 = ca.get(java.util.Calendar.YEAR);//获取日
var typeEvent1 = "";
var typeEvent2 = "";
var typeEvent3 = "";
var typeEvent4 = "";
var typeEvent5 = "";
var typeEvent6 = "";
var typeEvent7 = "";
var typeEvent8 = "";
var typeEvent9 = "";
var typeEventd = "";

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (cm.getEventCount("镜世界副本") < 3) {
		typeEvent1 = "#g可以进入#k";
	} else {
		typeEvent1 = "#r次数用完#k";
	}
	if (cm.getEventCount("镜世界副本") < 3) {
		typeEvent2 = "#g可以进入#k";
	} else {
		typeEvent2 = "#r次数用完#k";
	}
	if (cm.getEventCount("镜世界副本") < 3) {
		typeEvent3 = "#g可以进入#k";
	} else {
		typeEvent3 = "#r次数用完#k";
	}
	if (cm.getEventCount("镜世界副本") < 3) {
		typeEvent4 = "#g可以进入#k";
	} else {
		typeEvent4 = "#r次数用完#k";
	}
	if (cm.getEventCount("镜世界副本") < 3) {
		typeEvent5 = "#g可以进入#k";
	} else {
		typeEvent5 = "#r次数用完#k";
	}
	if (cm.getEventCount("镜世界副本") < 3) {
		typeEvent6 = "#g可以进入#k";
	} else {
		typeEvent6 = "#r次数用完#k";
	}
	if (cm.getEventCount("镜世界副本") < 3) {
		typeEvent7 = "#g可以进入#k";
	} else {
		typeEvent7 = "#r次数用完#k";
	}
	if (cm.getEventCount("镜世界副本") < 3) {
		typeEvent8 = "#g可以进入#k";
	} else {
		typeEvent8 = "#r次数用完#k";
	}
	if (cm.getEventCount("镜世界副本") < 3) {
		typeEvent9 = "#g可以进入#k";
	} else {
		typeEvent9 = "#r次数用完#k";
	}
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
		var sycs = 14 - cm.getPQLog("镜世界副本") + 1;
			cm.sendSimple("#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#亲爱的#r#h ##k您好!想选择什么样的日常任务:\r\n#r    目前无限次数#k   #k \r\n\r\n#fUI/UIWindow2.img/QuestGuide/Button/WorldMapQuestToggle/normal/0#[困难级-推荐后期]\r\n#L2##fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#[镜世界]继承者们  (#k目前状态：超难，请不要去送死)#l\r\n#L8##fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#[镜世界]军长           (#k目前状态： "+typeEvent7+")#l\r\n#L9##fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#[镜世界]复仇者         (#k目前状态： "+typeEvent8+")#l\r\n\r\n#fUI/UIWindow2.img/QuestGuide/Button/WorldMapQuestToggle/normal/0#[普通级-推荐单人]\r\n#L6##fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#[镜世界]埃德尔斯坦   (#k目前状态： "+typeEvent5+")#l\r\n#L3##fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#[镜世界]阿里安特     (#k目前状态： "+typeEvent2+")#l\r\n#L4##fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#[镜世界]射手村       (#k目前状态： "+typeEvent3+")#l\r\n#L5##fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#[镜世界]武陵         (#k目前状态： "+typeEvent4+")#l\r\n#L7##fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#[镜世界]马加提亚     (#k目前状态： "+typeEvent6+")#l\r\n#l");
		} else if (status == 1) {
			if (selection == 1) {
			cm.sendOk("#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#亲爱的#r#h ##k您好,欢迎来到系列任务简介:\r\n  通过系列任务活动可以获得大量游戏道具,在这里让\r\n  你总是意想不到的意外,任务简单-困难模式有趣有乐.杀\r\n  戮 挑战 冒险 极品 这里的任务应有尽有,赶快行动起来吧!\r\n#fUI/UIWindow2.img/Quest/quest_info/summary_icon/startcondition#\r\n#fUI/UIWindow2.img/Quest/quest_info/summary_icon/basic#\r\n#v3010070#椅子 #v2049134#卷轴 #v5062002#魔方  #v1332225#装备 #v1102453#点装\r\n\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0##r注：所有系列任务24点重置。\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0##r注：系列任务每天轮换,更新不同的系列副本。");
                    	cm.dispose();
			} else if (selection == 2) {
			if (cm.getEventCount("镜世界副本") < 3) {
				cm.dispose();
				cm.openNpc(2400022,"shenmu"); //神木村
			} else {
				cm.sendOk("#k您的次数已经用完，您今天已通关今日通关#r "+ cm.getPQLog("镜世界副本") +"#k 次 ");
				cm.dispose();
			}
			} else if (selection == 3) {
			if (cm.getEventCount("镜世界副本") < 3) {
				cm.dispose();
				cm.openNpc(2400022,200); //阿里安特
			} else {
				cm.sendOk("#k您的次数已经用完，您今天已通关今日通关#r "+ cm.getPQLog("镜世界副本") +"#k 次 ");
				cm.dispose();
			}
			} else if (selection == 4) {
			if (cm.getEventCount("镜世界副本") < 3) {
				cm.dispose();
				cm.openNpc(2400022,300); //射手村
			} else {
				cm.sendOk("#k您的次数已经用完，您今天已通关今日通关#r "+ cm.getPQLog("镜世界副本") +"#k 次 ");
				cm.dispose();
			}
			} else if (selection == 5) {
			if (cm.getEventCount("镜世界副本") < 3) {
				cm.dispose();
				cm.openNpc(2400022,400); //武陵
			} else {
				cm.sendOk("#k您的次数已经用完，您今天已通关今日通关#r "+ cm.getPQLog("镜世界副本") +"#k 次 ");
				cm.dispose();
			}
			} else if (selection == 6) {
			if (cm.getEventCount("镜世界副本") < 3) {
				cm.dispose();
				cm.openNpc(2400022,600); //埃德尔斯坦
			} else {
				cm.sendOk("#k您的次数已经用完，您今天已通关今日通关#r "+ cm.getPQLog("镜世界副本") +"#k 次 ");
				cm.dispose();
			}
			} else if (selection == 7) {
			if (cm.getEventCount("镜世界副本") < 3) {
				cm.dispose();
				cm.openNpc(2400022,700); //马加提亚
			} else {
				cm.sendOk("#k您的次数已经用完，您今天已通关今日通关#r "+ cm.getPQLog("镜世界副本") +"#k 次 ");
				cm.dispose();
			}
			} else if (selection == 8) {
			if (cm.getEventCount("镜世界副本") < 3) {
				cm.dispose();
				cm.openNpc(2400022,800); //玩具城
			} else {
				cm.sendOk("#k您的次数已经用完，您今天已通关今日通关#r "+ cm.getPQLog("镜世界副本") +"#k 次 ");
				cm.dispose();
			}
			} else if (selection == 9) {
			if (cm.getEventCount("镜世界副本") < 3) {
				cm.dispose();
				cm.openNpc(2400022,900); //时间神殿
			} else {
				cm.sendOk("#k您的次数已经用完，您今天已通关今日通关#r "+ cm.getPQLog("镜世界副本") +"#k 次 ");
				cm.dispose();
			}
			} else if (selection == 10) {
			if (cm.getEventCount("镜世界副本") < 3) {
				cm.dispose();
				cm.openNpc(2400022,1100); //海上贸易
			} else {
				cm.sendOk("#k您的次数已经用完，您今天已通关今日通关#r "+ cm.getPQLog("镜世界副本") +"#k 次 ");
				cm.dispose();
			}
			}
	   }
      }
}