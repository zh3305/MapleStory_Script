var status = 0;
var typed=0;
var random1 = java.lang.Math.floor(Math.random() * 1000 + 1);
var random2 = java.lang.Math.floor(Math.random() * 3000 + 1);

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
			cm.sendSimple("#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#亲爱的#r#h ##k您好，我是伤害上限突破系统:\r\n#r#L1##fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#伤害上限突破简介#l\r\n\r\n   #k#e随机突破#n：#r需要1个#k #v4000463#  #k#e固定突破#n：#r需要10个#k #v4000463# \r\n #b\r\n#fUI/UIWindow2.img/QuestGuide/Button/WorldMapQuestToggle/normal/0#\r\n#L2##fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#[武器]伤害上限突破-随机突破 (#k目前状态：#r火爆内容#b)#l\r\n#L3##fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#[武器]伤害上限突破-固定突破 (#k目前状态：#r火爆内容#b)#l");
		} else if (status == 1) {
			if (selection == 1) {
			cm.sendOk("#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#亲爱的#r#h ##k您好,我是伤害上限突破系统简介:\r\n  使用道具: 当前职业对应等级武器 \r\n  使用武器: 任何武器都可以伤害上限突破 \r\n#fUI/UIWindow2.img/Quest/quest_info/summary_icon/startcondition#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#通过日常活动任务有概率获得.\r\n\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0##r注：每把武器最多追加1E伤害,超过后不予计算.");
                    	cm.dispose();
			} else if (selection == 2) {
			if(cm.getPQLog("随机突破",1) <= 100000000){
			if(cm.haveItem(4000463, 1)){
			if (cm.changeLimitBreak(random1)) {
			for(var i = 0; i < random1; i++){
			    cm.setPQLog("随机突破",1);
			}
			    cm.gainItem(4000463,-1);
    			    cm.sendOk("#b伤害上限突破成功.\r\n\r\n本次追加伤害为：#r"+ random1 +"#b.");
			    cm.worldSpouseMessage(0x20,"[伤害突破] 玩家 "+ cm.getChar().getName() +" 使用 随机突破 让武器伤害上限突破成功 本次追加 "+ random1 +" 伤害值 。");
			}else{
    			    cm.sendOk("#b突破失败.\r\n系统为检测到角色身上装备武器.");
			}
    			    cm.dispose();
			}else{
    			    cm.sendOk("#b突破失败.\r\n需要 1个 黄金枫叶#v4000463# 才可以突破.");
    			    cm.dispose();
			}
			}else{
    			    cm.sendOk("#b突破失败.\r\n武器最高额外突破1E伤害.");
    			    cm.dispose();
			}
			} else if (selection == 3) {
			if(cm.getPQLog("固定突破",1) <= 200000){
			if(cm.haveItem(4000463, 10)){
			if (cm.changeLimitBreak(200000)) {
			    cm.setPQLog("固定突破",1);
			    cm.gainItem(4000463,-10);
    			    cm.sendOk("#b伤害上限突破成功.\r\n\r\n本次追加伤害为：#r1000000#b.");
			    cm.worldSpouseMessage(0x20,"[伤害突破] 玩家 "+ cm.getChar().getName() +" 使用 固定突破 让武器伤害上限突破成功 本次追加 20万 伤害值。");
			}else{
    			    cm.sendOk("#b突破失败.\r\n系统为检测到角色身上装备武器.");
			}
    			    cm.dispose();
			}else{
    			    cm.sendOk("#b突破失败.\r\n需要 10个 黄金枫叶#v4000463# 才可以突破.");
    			    cm.dispose();
			}
			}else{
    			    cm.sendOk("#b突破失败.\r\n武器最高额外突破1E伤害.");
    			    cm.dispose();
			}
			}
	   }
      }
}