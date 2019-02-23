/*
	VIP4 BOSS功能NPC

	by 芯碎王子
*/
importPackage(net.sf.odinms.server.life);
importPackage(net.sf.odinms.tools);
importPackage(java.awt);

var ttt ="#fUI/UIWindow/Quest/icon2/7#";//"+ttt+"//美化1
var ttt2 ="#fUI/UIWindow/Quest/icon6/7#";//"+ttt2+"//美化2
var ttt3 ="#fUI/UIWindow/Quest/icon3/6#";//"+ttt3+"//美化圆
var ttt4 ="#fUI/UIWindow/Quest/icon5/1#";//"+ttt4+"//美化New
var ttt5 ="#fUI/UIWindow/Quest/icon0#";//"+ttt5+"//美化!
var ttt6 ="#fUI/Basic/BtHide3/mouseOver/0#";//"+ttt6+"//美化会员
var MAPID = 910000000;
var mobX = 933;
var mobY = -266;
var status;

 function start() {
 	status = -1;
 	action(1, 0, 0);
 }
 
 function action(mode, type, selection) {
 	if (mode == -1) {
 		cm.dispose();
 	} else {
 		if (mode == 0 && status == 0) {
			cm.sendOk("需要在市场召唤BOSS请来找我.");
 			cm.dispose();
 			return;
 		}
 		if (mode == 1)
 			status++;
 		else
 			status--;
 		if (status == 0) {
var cold =cm.getChar().getVip()*30;
var zhaohuan =cm.getBossLog("VIPzhaohuan");
var zhaohuanls =cold-zhaohuan;
			if(cm.getChar().getVip() >= 1){
			cm.sendSimple("#r"+cm.mxdmz()+"冒险岛#b，会员Boss召唤.[Boss会在自由的最左边刷出]\r\n召唤点未使用:#r"+zhaohuanls+"点#k,每日可以使用:#r"+cold+"点\r\n#L0##k"+ttt+"召唤 >>>> 蝙蝠怪[需要#r10点#k召唤值]#l  \r\n#L1#"+ttt+"召唤 >>>> 天鹰[需要#r10点#k召唤值]#l \r\n#L2#"+ttt+"召唤 >>>> 闹钟[需要#r15点#k召唤值]#l \r\n#L9#"+ttt+"召唤 >>>> 玄冰独角兽[需要#r20点#k召唤值]#l \r\n#L10#"+ttt+"召唤 >>>> 雷卡[需要#r20点#k召唤值]#l \r\n#L11#"+ttt+"召唤 >>>> 大海兽[需要#r20点#k召唤值]#l\r\n#L3#"+ttt+"召唤 >>>> 鱼王(右)[需要#r40点#k召唤值]#l\r\n#L4#"+ttt+"召唤 >>>> 鱼王(左)[需要#r40点#k召唤值] \r\n\r\n\r\n#L12##e"+ttt2+"召唤 >>>> 扎昆[需要#r50点#k召唤值]#l\r\n\r\n#r             [建议多人挑战扎昆]\r\n");
			}else{
				cm.sendOk("不是VIP,不能使用召唤值.");
				cm.dispose();
			}
			
		}
		if (status == 1) {
var cold =cm.getChar().getVip()*30;
var zhaohuan =cm.getBossLog("VIPzhaohuan");
var zhaohuanls =cold-zhaohuan;	
			if(cm.getChar().getMap().countMobOnMap() > 0){
				cm.sendOk("只有打完地图所有怪后才能召唤");
				cm.dispose();
				return;
			}
			if (selection == 0){
				if(zhaohuanls >= 10){
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					xswzsMob(8130100,1,MAPID);
					cm.dispose();	
                                }else{
					cm.sendOk("你的召唤值不足!!")
					cm.dispose();
				}

			}else if (selection == 1){
				if(zhaohuanls >= 10){
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					xswzsMob(8180001,1,MAPID);
					cm.dispose();	
                                }else{
					cm.sendOk("你的召唤值不足!!")
					cm.dispose();
				}

			}else if (selection == 2){
				if(zhaohuanls >= 15){
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					xswzsMob(8500001,1,MAPID);
					cm.dispose();	
                                }else{
					cm.sendOk("你的召唤值不足!!")
					cm.dispose();
				}
}else if (selection == 4){
				if(zhaohuanls >= 40){
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					xswzsMob(8520000,1,MAPID);
					cm.dispose();	
                                }else{
					cm.sendOk("你的召唤值不足!!")
					cm.dispose();
				}
}else if (selection == 3){
				if(zhaohuanls >= 40){
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					xswzsMob(8510000,1,MAPID);
					cm.dispose();	
                                }else{
					cm.sendOk("你的召唤值不足!!")
					cm.dispose();
				}
			}else if (selection == 9){
				if(zhaohuanls >= 20){
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					xswzsMob(8220005,1,MAPID);
					cm.dispose();	
                                }else{
					cm.sendOk("你的召唤值不足!!")
					cm.dispose();
				}

			}else if (selection == 10){
				if(zhaohuanls >= 20){
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					xswzsMob(8220006,1,MAPID);
					cm.dispose();	
                                }else{
					cm.sendOk("你的召唤值不足!!")
					cm.dispose();
				}
			}else if (selection == 11){
				if(zhaohuanls >= 20){
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					xswzsMob(8220003,1,MAPID);
					cm.dispose();	
				}else{
					cm.sendOk("你的召唤值不足!!")
					cm.dispose();
				}
			}else if (selection == 12){								
				if(zhaohuanls >= 50){
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.setBossLog("VIPzhaohuan");
					cm.getC().getChannelServer().getMapFactory().getMap(MAPID).spawnFakeMonsterOnGroundBelow(MapleLifeFactory.getMonster(8800000),new Point(mobX,mobY));
					for (var i=8800003; i<8800011; i++){					
						xswzsMob(i,1,MAPID);
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),"活动发起" + " : " + "玩家" + cm.getPlayer().getName() +" 使用召唤值在市场发起扎昆挑战,大家快来消灭吧~.",true).getBytes());
					}				
					cm.dispose();
				}else{
					cm.sendOk("你的召唤值不足!!")
					cm.dispose();
				}	
			}else if (selection == 13){
				if(cm.getzb() >= 3){																
					var youren = 0;
					var temp = 0;
					for (var i = 0 ; i < 15; i++){
						if(cm.getC().getChannelServer().getMapFactory().getMap(209000001 + i).playerCount() > 0){							
							youren = 1;
							
						}else{
							youren = 0;
							temp =i;
							break;
						}
					}
					if(youren == 1){
						cm.sendOk("此线已没有位置了,请从其它线进入!");				
					}else{						
						cm.getC().getChannelServer().getMapFactory().getMap(209000001 + temp).clearMapTimer();
						cm.getC().getChannelServer().getMapFactory().getMap(209000001 + temp).killAllMonsters();
						cm.getC().getChannelServer().getMapFactory().getMap(209000001 + temp).addMapTimer(3600,910000000);
						cm.warp(209000001 + temp,0);
						cm.setzb(-0);	
						cm.getChar().setzbLog("包房刷怪区每次进入都需要帐号还有3元宝，进去不会扣的！");					
					}
					cm.dispose();
				}else{
					cm.sendOk("包房刷怪区每次进入都需要帐号还有3元宝，进去不会扣的！");
					cm.sendOk();
				}								
			}else if (selection == 14){								
				cm.warp(910000000,0);
				cm.dispose();
			}
				
			
		}
	}
}


function xswzsMob(mobid,amount,mapid){    //芯碎王子的对指定地图刷怪函数，可以防把怪卡出市场的BUG	

	var pMap = cm.getC().getChannelServer().getMapFactory().getMap(mapid); 
//	var newStats = MapleMonsterStats();
//	newStats.setHp(mobhp);
//	newStats.setExp(mobexp);
	for(i = 0; i < amount; i++){
		var mob = MapleLifeFactory.getMonster(mobid);	
//		mob.setOverrideStats(newStats);
//        	mob.setHp(mob.getMaxHp());
	        //mobX += 10
		pMap.spawnMonsterOnGroudBelow(mob, mobX, mobY); 
	}
}
