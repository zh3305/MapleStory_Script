/*
  宠物进化第二版

	by 芯碎王子
		
		转载注明版权

*/


var Petlist = new Array(); //用于存储已装或者说已放出来的宠物对象。为 MaplePet类数据。
var lpet = new Array(5000030,5000032,5000033,5000035);  //进化龙类
var mpet = new Array(5000049,5000050,5000051,5000052);  //机器狗类
function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.sendOk("好的。下次再见！");
		cm.dispose();
	} else {
		if (mode == 0) {
			cm.sendOk("好的。下次再见！");
			cm.dispose();
			return;
		}
		if (mode == 1) {
			status++;
		}
		else {
			status--;
		}
		if (status == 0) {
		
			cm.sendNext(" 您好！我是宠物进化NPC，只有进化龙和机器人宠物能够进化哦.进化的时候,需要把要进化的宠物放出来.而且同一种宠物只能有一个。#b进化时需要扣除修炼点5000点.");
			
		}else if (status == 1){
			for(i = 0; i < 3; i++){
				if(cm.getChar().getPet(i) != null){
					Petlist.push(cm.getChar().getPet(i)); //循环检查角色装备栏三个宠物位置，如果有装备宠物，就把该宠物对象压入 Petlist对象
				}				
			}
			if(Petlist.length > 0){
				if(Petlist.length > 1){  //判断Petlist的长度。也就是说放出来的宠物的数量
					cm.sendOk("只有放出一只宠物时才能正确被识别!");
					cm.dispose();
				}else{
					var petid = Petlist[0].getItemId();
					if(petid == 5000029 || petid == 5000030 || petid == 5000032 || petid == 5000033 || petid == 5000035 || petid == 5000048 || petid == 5000049 || petid == 5000050 || petid == 5000051 || petid == 5000052){			
						var text = "您将要进化的宠物 #v" + petid + "# 详细信息: \r\n"
						text += "宠物名字：" +  Petlist[0].getName() + "\r\n";
						text += "宠物等级：" +  Petlist[0].getLevel() + "级\r\n";
						text += "亲密度：" + Petlist[0].getCloseness() + "\r\n";
						text += "饱满感：" + Petlist[0].getFullness() + "\r\n";
						text += "您确定现在进化吗？";
						cm.sendYesNo(text);					
					}else{
						cm.sendOk("您的宠物 #v" + petid + "# 是不能进化的");
						cm.dispose();
					}
				}
			}else{
				cm.sendOk("请把要进化的宠物放出来!");
				cm.dispose();
			}			
		}else if (status == 2){			
			if (cm.getChar().getRw15() >= 5000) {
				cm.gainrw15(-5000);
				var petid = Petlist[0].getItemId();  //获得进化前宠物的ID
				//取玩家Cash栏
				var Inventory = cm.getPlayer().getInventory(net.sf.cherry.server.MapleItemInformationProvider.getInstance().getInventoryType(petid));
				var fjpetid; //用于存储进化后的宠物ID
				cm.getChar().unequipPet(cm.getChar().getPet(0),true);  //收回放也来的宠
				if(petid == 5000029 || petid == 5000030 || petid == 5000032 || petid == 5000033 || petid == 5000035){
					fjpetid = lpet[Math.floor(Math.random() * lpet.length)]; //进化龙随机
				}else{
					fjpetid = mpet[Math.floor(Math.random() * mpet.length)];//机器人随机					
				}					
				var item = Inventory.findByUniqueId(Petlist[0].getUniqueId()); //被进化的宠的对象					
				Inventory.removeItem(item.getPosition(), item.getQuantity(), false);  //从物品栏清除被进化的宠
				cm.getC().getSession().write(net.sf.cherry.tools.MaplePacketCreator.moveInventoryItem(net.sf.cherry.server.MapleItemInformationProvider.getInstance().getInventoryType(petid),item.getPosition(),0));//这里只是刷新物品栏显示的状态															
				var toDrop = new net.sf.cherry.client.Item(fjpetid,0,1); //建设一个进化后宠物为物类对象
				var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 30 * 24 * 60 * 60 * 1000);  //时间计算
				toDrop.setUniqueId(Petlist[0].getUniqueId());   //设置进化后的宠的Uniqueid和进化前的宠的UnqueId一样,这样避免在pets表中产生多余的数据
				toDrop.setExpiration(temptime); //加时间语句。 
				cm.getPlayer().getInventory(net.sf.cherry.server.MapleItemInformationProvider.getInstance().getInventoryType(petid)).addItem(toDrop); //把进化后的宠物对象放进背包里
				cm.getC().getSession().write(net.sf.cherry.tools.MaplePacketCreator.addInventorySlot(net.sf.cherry.server.MapleItemInformationProvider.getInstance().getInventoryType(petid), toDrop));	//这里只是刷新物品栏显示的状态,不写的话要换线才能看到进化后的宠					
				cm.sendOk("您已成功把 #v" + petid + "# 进化成为 #v" + toDrop.getItemId() + "#");
				cm.dispose();		
			}else{
				cm.sendOk("#b抱歉，你没足够的修炼点！.");
				cm.dispose();
			}
		}
	}
}	

