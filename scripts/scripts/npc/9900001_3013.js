var status = 0;
var typed=0;
var random = java.lang.Math.floor(Math.random() * 10) + 1;
var random1 = java.lang.Math.floor(Math.random() * 3) + 1;
var eff = "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";
var zx1;
var zx3;
var zx6;
var zx9;
var zx12;
var zx13;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
    if(cm.getEventCount("在线1") > 0){
	zx1 ="#e#b已领取奖励#k#n";
	}else if (cm.getGamePoints() >= 60){
	zx1 ="#e#g可领取奖励#n#k";
	}else{
    zx1 ="#e未达到条件#n";
    }
    if(cm.getEventCount("在线3") > 0){
	zx3 ="#e#b已领取奖励#k#n";
	}else if (cm.getGamePoints() >= 180){
	zx3 ="#e#g可领取奖励#n#k";
	}else{
    zx3 ="#e未达到条件#n";
    }
    if(cm.getEventCount("在线6") > 0){
	zx6 ="#e#b已领取奖励#k#n";
	}else if (cm.getGamePoints() >= 360){
	zx6 ="#e#g可领取奖励#n#k";
	}else{
    zx6 ="#e未达到条件#n";
    }
    if(cm.getEventCount("在线9") > 0){
	zx9 ="#e#b已领取奖励#k#n";
	}else if (cm.getGamePoints() >= 540){
	zx9 ="#e#g可领取奖励#n#k";
	}else{
    zx9 ="#e未达到条件#n";
    }
    if(cm.getEventCount("在线12") > 0){
	zx12 ="#e#b已领取奖励#k#n";
	}else if (cm.getGamePoints() >= 720){
	zx12 ="#e#g可领取奖励#n#k";
	}else{
    zx12 ="#e未达到条件#n";
    }	
	if(cm.getEventCount("在线13") > 0){
	zx13 ="#e#b已领取奖励#k#n";
	}else if (cm.getGamePoints() >= 780){
	zx13 ="#e#g可领取奖励#n#k";
	}else{
    zx13 ="#e未达到条件#n";
    }	
	if(mode == -1) {
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
			cm.sendSimple("#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n"+ eff +"亲爱的#r#h ##k您好，我是在线时间奖励系统:\r\n#r#L1#"+ eff +"在线时间奖励简介#l\r\n\r\n   "+ eff +"#k今天在线： #r"+cm.getGamePoints()+"#k 分钟#b\r\n\r\n#fUI/UIWindow2.img/QuestGuide/Button/WorldMapQuestToggle/normal/0#\r\n#L6##b"+ eff +"[在线]在线 180 分钟奖励   (#k目前状态："+ zx3 +")#l\r\n#L2##b"+ eff +"[在线]在线 360 分钟奖励   (#k目前状态："+ zx6 +")#l\r\n#L3##b"+ eff +"[在线]在线 540 分钟奖励   (#k目前状态："+ zx9 +")#l\r\n#L7##b"+ eff +"[在线]在线 780 分钟奖励   (#k目前状态："+ zx13 +")#l");
		} else if (status == 1) {
		    if (cm.getSpace(2) > 3 && cm.getSpace(4) > 3){	
			if (selection == 1) {
			cm.sendOk("#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n"+ eff +"亲爱的#r#h ##k您好,我是在线时间奖励系统简介:\r\n  使用道具: 当前帐号在线时间 \r\n#fUI/UIWindow2.img/Quest/quest_info/summary_icon/startcondition#\r\n"+ eff +"角色只需要在游戏保持在线.\r\n\r\n"+ eff +"#r注：每种奖励该帐号下的任何角色当前只能共领取一次.");
                    	cm.dispose();		
			} else if (selection == 2) {
			if (cm.getGamePoints() >= 360 && cm.getEventCount("在线6") == 0) {
			    if(random > 9){
				cm.gainNX(2,200);
				}
				//cm.gainNX(2,3500);
			    cm.gainItem(2049303,1,1); //高级装备强化卷轴
			    cm.gainItem(2049407,1,1); //高级潜能附加卷轴
			    cm.setEventCount("在线6");
    			cm.sendOk("在线6小时奖励 领取成功。");
			    cm.worldSpouseMessage(0x20,"[在线奖励] 玩家 "+ cm.getChar().getName() +" 领取了 在线6小时奖励 系统赠送他(她)大量物品。");
			}else{
    			    cm.sendOk("#b领取失败.\r\n请确认该帐号在线时间达到6小时.\r\n请确认所有背包栏大于5格或以上.\r\n请确认该帐号今天是否已经领取过.");
			}
    cm.dispose();
			} else if (selection == 3) {
			if (cm.getGamePoints() >= 540 && cm.getEventCount("在线9") == 0) {
			    cm.gainItem(2049303,2,1); //高级装备强化卷轴
			    cm.gainItem(2049407,1,1); //高级潜能附加卷轴
			    cm.setEventCount("在线9");
    			cm.sendOk("在线9小时奖励 领取成功。");
			    cm.worldSpouseMessage(0x20,"[在线奖励] 玩家 "+ cm.getChar().getName() +" 领取了 在线9小时奖励 系统赠送他(她)大量物品。");
			}else{
    			    cm.sendOk("#b领取失败.\r\n请确认该帐号在线时间达到9小时.\r\n请确认所有背包栏大于5格或以上.\r\n请确认该帐号今天是否已经领取过.");
			}
    cm.dispose();
			} else if (selection == 4) {
			if (cm.getGamePoints() >= 720 && cm.getEventCount("在线12") == 0) {
			    cm.gainItem(2049303,5); //高级装备强化卷轴
			    cm.gainItem(2049407,1); //高级潜能附加卷轴
			    cm.setEventCount("在线12");
    			cm.sendOk("在线12小时奖励 领取成功。");
			    cm.worldSpouseMessage(0x20,"[在线奖励] 玩家 "+ cm.getChar().getName() +" 领取了 在线12小时奖励 系统赠送他(她)大量物品。");
			}else{
    			    cm.sendOk("#b领取失败.\r\n请确认该帐号在线时间达到12小时.\r\n请确认所有背包栏大于5格或以上.\r\n请确认该帐号今天是否已经领取过.");
			}
    cm.dispose();
	        } else if (selection == 5) {
			if (cm.getGamePoints() >= 60 && cm.getEventCount("在线1") == 0) {
			    if(random > 10){
				cm.gainNX(2,1000);
				}
				cm.gainItem(2049303,1); //高级装备强化卷轴
			    cm.gainItem(2049407,1); //高级潜能附加卷轴
			    cm.setEventCount("在线1");
    			cm.sendOk("在线1小时奖励 领取成功。");
			    cm.worldSpouseMessage(0x20,"[在线奖励] 玩家 "+ cm.getChar().getName() +" 领取了 在线1小时奖励 系统赠送他(她)大量物品。");
			}else{
    			    cm.sendOk("#b领取失败.\r\n请确认该帐号在线时间达到12小时.\r\n请确认所有背包栏大于5格或以上.\r\n请确认该帐号今天是否已经领取过.");
			}
    cm.dispose();
	        } else if (selection == 6) {
			if (cm.getGamePoints() >= 180 && cm.getEventCount("在线3") == 0) {
			    if(random > 9){
				cm.gainNX(2,200);
				}
				cm.gainItem(2049303,1,1); //高级装备强化卷轴
			    cm.gainItem(2049407,1,1); //高级潜能附加卷轴
			    cm.setEventCount("在线3");
    			cm.sendOk("在线3小时奖励 领取成功。");
			    cm.worldSpouseMessage(0x20,"[在线奖励] 玩家 "+ cm.getChar().getName() +" 领取了 在线3小时奖励 系统赠送他(她)大量物品。");
			}else{
    			    cm.sendOk("#b领取失败.\r\n请确认该帐号在线时间达到12小时.\r\n请确认所有背包栏大于5格或以上.\r\n请确认该帐号今天是否已经领取过.");
			}
    cm.dispose();
	        } else if (selection == 7) {
			if (cm.getGamePoints() >= 780 && cm.getEventCount("在线13") == 0) {
			    cm.gainItem(2049303,3,1); //高级装备强化卷轴
			    cm.gainItem(2049407,1,1); //高级潜能附加卷轴
				if(random > 9){
				cm.gainNX(1,200);//点卷
			    cm.gainItem(2049116,random1); //强化混沌卷轴
			    }
			    cm.setEventCount("在线13");
    			    cm.sendOk("在线13小时奖励 领取成功。");
			    cm.worldSpouseMessage(0x20,"[在线奖励] 玩家 "+ cm.getChar().getName() +" 领取了 在线13小时奖励 系统赠送他(她)大量物品。");
			}else{
    			    cm.sendOk("#b领取失败.\r\n请确认该帐号在线时间达到15小时.\r\n请确认所有背包栏大于5格或以上.\r\n请确认该帐号今天是否已经领取过.");
			}
    cm.dispose();
			}
			}else{
			cm.playerMessage(1,"请确保你的消耗栏和其他栏各有3格以上空位。");
			cm.dispose();
			}
	   }
      }
}