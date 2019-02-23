importPackage(net.sf.odinms.client);
importPackage(net.sf.odinms.server.maps); 
importPackage(net.sf.odinms.net.channel); 
importPackage(net.sf.odinms.tools); 
importPackage(net.sf.odinms.server.life);
importPackage(java.awt);
var status = 0;
var party;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
var party4 = cm.getPlayer().getParty();	
 var treeboss00Map = cm.getC().getChannelServer().getMapFactory().getMap(677000012); 
 var mapobjects = treeboss00Map.getMapObjects(); 
 var boss = null; 
 var player = null; 
 var iter = mapobjects.iterator(); 
var nextmap = cm.getC().getChannelServer().getMapFactory().getMap(677000012);

 o = iter.next(); 
   if (o.getType() == MapleMapObjectType.MONSTER){ 
    boss = o; 
   } 
   if (o.getType() == MapleMapObjectType.PLAYER){ 
    player = o; 
   } 
	if (mode == -1) {
		cm.dispose();
	} else {
		if (status >= 0 && mode == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
				if(cm.getChar().getVip() <= 0){
					var vipstr = "普通玩家";					
				}else if(cm.getChar().getVip() == 1){
					var vipstr = " 5元vIp①";					
				}else if(cm.getChar().getVip() == 2){
					var vipstr = " 5元vIp②";					
				}else if(cm.getChar().getVip() == 3){
					var vipstr = " 5元vIp③";
                                }else if(cm.getChar().getVip() == 4){
					var vipstr = " 5元vIp④";						
				}else{
					var vipstr = " 5元vIp⑤";					
				}
if (cm.getPlayer().getMapId() == 105050400 &&cm.haveItem(4001035)>=1){
cm.summonMob(8830000, 2000000000, 100000, 1);//船长5E血
 cm.gainItem(4001035,-1);
cm.serverNotice("[任务]: 玩家 [" + cm.getPlayer() + "] 找到了愤怒的蝙蝠怪,他是否能获得进一步突破呢?");
cm.sendOk("[巨大蝙蝠魔]：#r血量:#d■■■■■■■■■■ \r\n#r              攻击:#d■■■■■\r\n召唤成功，击败它将获得大量宝物！\r\n#d副本终极奖励：[#v3010040##v1122012##v1332055##v1332056#]#k，爆率较低."); 
cm.dispose();

}else if (cm.getPlayer().getMapId() == 677000013){//开始前
			cm.sendSimple("地狱大公的威力,让你震撼不已!你愿意挑战地狱大公吗?\r\n\r\n#r任务流程：\r\n  #k1.开始任务，消灭手下,直到获取#b符咒独眼野猪帽子#k为止#n.\r\n  #k2.戴上#b符咒独眼野猪帽子#k进入地狱大公地图,消灭大公.#n.\r\n#r任务奖励：\r\n  #v4031344#,地狱系列武器,大量冒险币.\r\n#r任务提示：\r\n  #k1.该任务第一关无需组队,可单独进入,第二关可组队.\r\n  #k2.第二关需要佩戴#b指定帽子#k,中途脱下帽子,立刻回城.\r\n  #k3.该任务可进行范围:#r0转-70转玩家#k.\r\n#L6##bNo.1 进入地狱大公势力范围#l");

}else if (cm.getPlayer().getMapId() == 677000012){//继续
        cm.sendSimple("地狱大公的威力,让你震撼不已!你愿意挑战地狱大公吗?\r\n\r\n#r任务流程：\r\n  #k1.开始任务，消灭手下,直到获取#b符咒独眼野猪帽子#k为止#n.\r\n  #k2.戴上#b符咒独眼野猪帽子#k进入地狱大公地图,消灭大公.#n.\r\n#r任务奖励：\r\n  #v4031344#,地狱系列武器,大量冒险币.\r\n#r任务提示：\r\n  #k1.该任务第一关无需组队,可单独进入,第二关可组队.\r\n  #k2.第二关需要佩戴#b指定帽子#k,中途脱下帽子,立刻回城.\r\n  #k3.该任务可进行范围:#r0转-70转玩家#k.\r\n#L71##b返回自由#l");	
}else if (cm.getPlayer().getMapId() == 677000011){//继续
	cm.sendSimple("地狱大公的威力,让你震撼不已!你愿意挑战地狱大公吗?\r\n\r\n#r任务流程：\r\n  #k1.开始任务，消灭手下,直到获取#b符咒独眼野猪帽子#k为止#n.\r\n  #k2.戴上#b符咒独眼野猪帽子#k进入地狱大公地图,消灭大公.#n.\r\n#r任务奖励：\r\n  #v4031344#,地狱系列武器,大量冒险币.\r\n#r任务提示：\r\n  #k1.该任务第一关无需组队,可单独进入,第二关可组队.\r\n  #k2.第二关需要佩戴#b指定帽子#k,中途脱下帽子,立刻回城.\r\n  #k3.该任务可进行范围:#r0转-70转玩家#k.\r\n#L70##bNo.2 消灭地狱大公#l");	
}
}else if (status == 1) {
			var viplevel = cm.getChar().getVip();
			if(selection == 2){
				var text = "最开始的变化是从幽灵船开始,幽灵船被封锁,幽灵水手们变得暴躁不安,是不是黑魔法师所为?\r\n打开幽灵船大门的时间只有每天的#r16:00-24:00#b\r\n现在时间:" + cm.getHour() + "时:" + cm.getMin() + "分:" + cm.getSec() + "秒\r\n\r\n到底我该不该去查找黑魔法师留下的证据呢?";
cm.sendNext(text);
			}else if(selection == 3){
          if (cm.haveItem(4001035)>=1) {
				var text = "恶魔标识的气息，暗暗飘向了林中之城的某个地洞,会有什么出现呢？\r\n标识上留下几个残字:  #r巨大..蝙蝠..封..#b地狱大公! 黑暗通道!#k\r\n\r\n到底我该不该去查找黑魔法师留下的证据呢?";
cm.sendOk(text);cm.dispose();
}else{
var text = "请收集上一阶段物品#v4001035#";
cm.sendOk(text);cm.dispose();
}

			}else if(selection == 6){
				if(cm.haveItem(1003036,1,true,false)){
cm.sendOk("请扔掉多余的帽子.");
cm.dispose();
				}else if(cm.getPlayer().getReborns()>70){
cm.sendOk("您已经没有资格参加该任务.");
cm.dispose();
}else {

cm.warp(677000011,0);	
cm.sendOk("请你打败大公手下.收集到#r符咒独眼野猪帽子#k,集合勇士来上面找我.");				
					cm.dispose();
				}

			}else if (selection == 4){
			  if (cm.haveItem(4031282)>=1) {
				var text = "恶魔标识的气息，暗暗飘向了林中之城的某个地洞,会有什么出现呢？\r\n标识上留下几个残字:  #r巨大..蝙蝠..封..#b地狱大公! 黑暗通道!#k\r\n\r\n到底我该不该去查找黑魔法师留下的证据呢?";
cm.sendOk(text);cm.dispose();
}else{
var text = "请收集上一阶段物品#v4031282#";
cm.sendOk(text);cm.dispose();
}

}else if (selection == 111){
				cm.showlvl();				
					cm.dispose();
}else if (selection == 112){
				cm.showfame();				
					cm.dispose();
}else if (selection == 113){
				cm.showreborns();				
					cm.dispose();
}else if (selection == 114){
				cm.displayGuildRanks();				
					cm.dispose();
}else if (selection == 115){
				cm.showpvpkills();				
					cm.dispose();
}else if (selection == 116){
				cm.showpvpdeaths();				
					cm.dispose();
				
			}else if (selection == 70){
if(!cm.haveItem(1003036,1,true,false)){
cm.sendOk("你还没收集到帽子.");
cm.dispose();
}else if (nextmap.countMobOnMap() > 0 && nextmap.playerCount() > 0){
			cm.sendOk("有人正在挑战.请稍等.");
			cm.dispose();

}else if (party4 == null || party4.getLeader().getId() != cm.getPlayer().getId()) {
                    cm.sendOk("你不是队长。请你们队长来说话吧！【单人、组队都可进行】");
                    cm.dispose();

                               }else{

cm.getC().getChannelServer().getMapFactory().getMap(677000012).clearMapTimer();
cm.getC().getChannelServer().getMapFactory().getMap(677000012).killAllMonsters();
			nextmap.setOnUserEnter("diyudagong");
			cm.warpParty(677000012);
			cm.dispose();

				}
			}else if (selection == 71){
              var m = cm.getPlayer().getMap()
		//if(m.playerCount() > 1){
			m.clearMapTimer();
			m.killAllMonsters();
			//m.resetReactors();
			m.setOnUserEnter("");
			cm.warp(910000000,0);	
cm.dispose();
			}else if (selection == 8){
				if(viplevel < 0){					
					cm.sendOk("您目前的VIP等级无权进入此地图!")
					cm.dispose();
				}else{
					cm.warp(vip4bj,0);					
					cm.dispose();
				}
			}else if (selection == 5){
				if(cm.getBossLog("smmxd_GZ")< 1){
					var vipstr = "普通玩家";
					var sf_money = 0;
					var sf_item = 0;
					var sf_Nx = 0;
					var noticeType = 2;
					var quantity;
					if(viplevel <= 0){
						sf_money = GZ_Player_money;
						sf_item = GZ_Player_item[0];
						quantity = GZ_Player_item[1];
						sf_Nx = GZ_Player_Nx;
                                                sf_zb = GZ_Player_zb; 
						vipstr = "普通玩家"
						var noticeType = 2;
					}else if(viplevel == 1){
						sf_money = GZ_V1_money;
						sf_item = GZ_V1_item[0];
						quantity = GZ_V1_item[1];
						sf_Nx = GZ_V1_Nx;
						sf_zb = GZ_V1_zb;	
						vipstr = "★初级VIP★";
						var noticeType = 2;
					}else if(viplevel == 2){
						sf_money = GZ_V2_money;
						sf_item = GZ_V2_item[0];
						quantity = GZ_V2_item[1];
						sf_Nx = GZ_V2_Nx;
						sf_zb = GZ_V2_zb;
						vipstr = "★★高级VIP★★";
						var noticeType = 3;
					}else if(viplevel == 3){
						sf_money = GZ_V3_money;
						sf_item = GZ_V3_item[0];
						quantity = GZ_V3_item[1];
						sf_Nx = GZ_V3_Nx;
						sf_zb = GZ_V3_zb;
						vipstr = "★★★黄金VIP★★★";
						var noticeType = 11;

					}else if(viplevel >= 4){
						sf_money = GZ_V4_money;
						sf_item = GZ_V4_item[0];
						quantity = GZ_V4_item[1];
						sf_Nx = GZ_V4_Nx;
						sf_zb = GZ_V4_zb;
						vipstr = "★★★★至尊VIP★★★★";	
						var noticeType = 12;						
					}
					if((cm.getMeso()+ sf_money) < 2147483647){
						cm.gainMeso(sf_money);
                                                cm.setzb(sf_zb);			
						cm.getChar().modifyCSPoints(1,sf_Nx);
						cm.getChar().UpdateCash();   //更新显示抵用状态
						if (quantity > 0){
							cm.gainItem(sf_item,quantity);
						}
						cm.setBossLog("smmxd_GZ");
						cm.sendOk("您已成功领取到#rVIP"+ cm.getChar().getVip() +"#k的工资#r" + sf_money + "#k金币、#r" + sf_Nx + "#k点抵用券、#r" + sf_zb + "#k宿命豆、#r" + quantity + "#k张祝福卷");
						cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(noticeType,cm.getC().getChannel(),"工资发放员" + " : " + "恭喜 " + vipstr + " " + cm.getPlayer().getName() +" 领取到今天的工资"  + sf_money + "金币、" + sf_Nx + "点抵用券、" + sf_zb + "宿命豆、" + quantity + "张祝福卷",true).getBytes());
						cm.dispose();
					}else{
						cm.sendOk("由于您身上的钱过多,已经装不下今天的工资了,请存银行后再来领取吧！");
						cm.dispose();
					}
				}else{
					cm.sendOk("工资为24小时发放一次,您今天已经领取过工资了,请明天再来!");
					cm.dispose();
				}
			}									
		}else if (status == 2) {
if(cm.haveItem(1003036,1,true,false)){
cm.sendOk("请扔掉多余的帽子.");
cm.dispose();
}else if (cm.haveItem(4000382) ||cm.haveItem(4000379) ||cm.haveItem(4000383)) {
cm.sendOk("请把你背包里面的:#v4000382##v4000379##v4000383#清空.");
cm.dispose();
}else {	
cm.warp(541010010,0);	
cm.sendOk("但愿你能打败幽灵船长,请先展现下你的实力吧~收集300个#v4000382#.请注意时间!!!超过24点,任务将视为放弃.!");
cm.dispose();
}
}	
	}
}

