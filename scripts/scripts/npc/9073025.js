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
			cm.sendSimple("#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#亲爱的#r#h ##k您好，想选择什么样的养成功能:\r\n#r#L1##fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#小伙伴养成简介#l\r\n\r\n   #k#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#目前小伙伴成长值：#r"+cm.getBossLog("宠物总计成长值",1)+"#k 点 \r\n   #fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#今天在线：#r"+cm.getGamePoints()+"#k 分钟#b\r\n\r\n#fUI/UIWindow2.img/QuestGuide/Button/WorldMapQuestToggle/normal/0#\r\n#L2##fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#[养成]饲养我的小伙伴      (#k目前状态： #r推荐内容#b)#l\r\n#L3##fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#[养成]小伙伴的奇葩威力    (#k目前状态： #r推荐内容#b)#l\r\n#L4##fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#[养成]炫耀一下我的小伙伴  (#k目前状态： #r推荐内容#b)#l");
		} else if (status == 1) {
			if (selection == 1) {
			cm.sendOk("#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#亲爱的#r#h ##k您好,[养成]小伙伴的养成:\r\n  哇!美好冒险岛有小伙伴拉!可爱的草泥马耶!!!玩家通过的\r\n  饲养宠物,让宠物一点点的成长.当宠物成长至完全体形态会\r\n  给喂养他(她)的主人带来一次或多次随机获得150级武器、\r\n  140级装备等物品的机会.\r\n\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0##r注：如果想快速成长您的小伙伴，可以使用中介币饲养。");
                    	cm.dispose();
			} else if (selection == 2) {
			typed=3;
                    	cm.dispose();
			cm.openNpc(9073025, 100);
			} else if (selection == 3) {
			if(cm.getBossLog("宠物总计成长值",1) >= 200){
			typed=4;
			cm.dispose();
			cm.openNpc(9073025, 101);
			} else {
			cm.dispose();
			cm.sendOk("呼呼！#b小伙伴的奇葩威力失败。\r\n#r小伙伴泪汪汪的告诉主人我还没有达到完全体的全盛状态。");
			}
			} else if (selection == 4) {
			if(cm.getBossLog("炫耀") < 3){
			typed=5;
			cm.setBossLog("炫耀");
			cm.dispose();
			cm.openNpc(9073025, 102);
			} else {
			cm.dispose();
			cm.sendOk("每天最多炫耀3次哦！");
			}
		}
	   }
      }
}
