
importPackage(net.sf.odinms.client);

var itemSet = new Array(2340000,3010070,1402037,1402063,1432013,4001021,2022101,1082149,1432046,3010099,1432047,4001017,2049100,3010014,4001021,1442087,2000005,4001021,3010073,1402036,4001021,3010075,2022118,1442088,3010045,1442039,1452059,2022100,4001021,2022109,1122017,1472068,2022151,1432056,2022251,1402044,1402014,1402046,2022060);
var rand = Math.floor(Math.random() * itemSet.length);
var suliang = Math.floor(Math.random() * 40) + 5;
var rand2 = Math.floor(Math.random() * 5);
function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (status >= 2 && mode == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			for(var i = 1;i<=5;i++){
				if(cm.getPlayer().getInventory(net.sf.odinms.client.MapleInventoryType.getByType(i)).isFull()){
					cm.sendOk("您至少应该让所有包裹都空出一格");
					cm.dispose();
					return;
				}
			}
			var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
			var type = ii.getInventoryType(itemSet[rand]);
			if(ii.getInventoryType(itemSet[rand]).getType() == 1){	//装备类	 		
		    		var toDrop = ii.randomizeStats(ii.getEquipById(itemSet[rand])).copy();
	        	        var cishu = Math.floor(Math.random() * 3) + toDrop.getUpgradeSlots();	    				
				toDrop.setUpgradeSlots(cishu);				
				if(itemSet[rand] == 1402014 || itemSet[rand] == 1442039 || itemSet[rand] == 1432046 || itemSet[rand] == 1122017){
					if(rand2 == 0){
						var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 1 * 24 * 60 * 60 * 1000);					
					}else if(rand2 == 1){
						var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 3 * 24 * 60 * 60 * 1000);
					}else if(rand2 == 2){
						var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 7 * 24 * 60 * 60 * 1000);
					}else if(rand2 == 3){
						var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 10 * 24 * 60 * 60 * 1000);
					}
					toDrop.setExpiration(temptime);									
					
				}								
			}else if(ii.getInventoryType(itemSet[rand]).getType() == 3){ //椅子
		    		var toDrop = new net.sf.cherry.client.Item(itemSet[rand],0,1).copy();
				if(itemSet[rand] == 3010070){ //PB只给一天的
					var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 1 * 24 * 60 * 60 * 1000);
				}else{
					if(rand2 == 0){
						var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 1 * 24 * 60 * 60 * 1000);					
					}else if(rand2 == 1){
						var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 3 * 24 * 60 * 60 * 1000);
					}else if(rand2 == 2){
						var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 7 * 24 * 60 * 60 * 1000);
					}else if(rand2 == 3){
						var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 10 * 24 * 60 * 60 * 1000);
					}
				}
				toDrop.setExpiration(temptime);						
			}else{
				if(Math.floor(itemSet[rand] / 10000) == 202){ //其它一些东西
					var toDrop = new net.sf.odinms.client.Item(itemSet[rand],0,suliang).copy();	
				}else{
					var toDrop = new net.sf.odinms.client.Item(itemSet[rand],0,1).copy();				
				}
			}
			cm.getPlayer().getInventory(type).addItem(toDrop);
			cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop));		
			cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.getItemMegas(cm.getC().getChannel(),cm.getPlayer().getName() + " : " + "从扎昆跳跳任务中获得！大家一起恭喜他（她）吧！！！",toDrop, true).getBytes());	
			cm.warp(910000000,0);
			cm.dispose();
		}
	}
}
