var aaa = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var bbb = "#fUI/UIWindow.img/Shop/meso#";
var vvv = "#fUI/UIWindow2.img/ValuePack/button/complete/0#";//领取完成

function start() {
	var text ="你好.我是专门统计本服排行信息的,你是否上榜了呢?\r\n";
	//text +="#L10#" + aaa + " #b#e充值消费排行（月结排行榜，高额返利装备等）#n#l\r\n";
	//text +="#L7#" + aaa + " #r#e消费排行（谁是校园最有实力的玩家）#n#l\r\n";
	text +="#L8#" + aaa + " #r#e枫之高校通关时间排行（谁是副本达人）#n#l\r\n";
	text +="#L0#" + aaa + " #b人气排行（谁是校园最有人气的明星）#l\r\n";
	text +="#L1#" + aaa + " 家族排行（谁是校园最强大的家族）\r\n";
	text +="#L2#" + aaa + " 转生排行（谁是转身最多,你上榜了吗？）\r\n";
	text +="#L3#" + aaa + " 情侣恩爱排行（谁是校园最忠实的玩家）\r\n";
	text +="#L9#" + aaa + " 使用废弃组队通关#z4310081#为家族增加收入50GP";
	//text +="#L6#" + aaa + " 使用废弃组队通关#z4310081#为家族增加收入50GP";
	cm.sendOk (text,2);    
}
function action(mode, type, selection) {
	cm.dispose();
	if  (selection == 0) {
        	var a = "　　　　　 #fEffect/SetItemInfoEff/1/8#\r\n#e#r#fEffect/ItemEff/1112811/0/0#全服第一人气玩家#fEffect/ItemEff/1112811/0/0##n#k\r\n#fEffect/ItemEff/1112312/0/3#"; 
        	a+=cm.rqMing();        
        	cm.sendOkS(a,2);
        	cm.dispose();
    	}else if  (selection == 1) {
        	var a = "　　　　　 #fEffect/SetItemInfoEff/1/8#\r\n#e#r#fEffect/ItemEff/1112811/0/0#全服第一家族#fEffect/ItemEff/1112811/0/0##n#k\r\n#fEffect/ItemEff/1112312/0/3#"; 
        	a+=cm.guildMing();        
        	cm.sendOkS(a,2);
        	cm.dispose();
    	}if (selection == 10) {
				    cm.dispose();
                    cm.openNpc(9040008,1);//消费榜统计
		}else if  (selection == 7) {
        	var a = "　　　　　 #fEffect/SetItemInfoEff/1/8#\r\n#e#r#fEffect/ItemEff/1112811/0/0#全服第一富有玩家#fEffect/ItemEff/1112811/0/0##n#k\r\n#fEffect/ItemEff/1112312/0/3#"; 
        	a+=cm.payMing(10);        
        	cm.sendOkS(a,2);
        	cm.dispose();
    	}else if  (selection == 8) {
        	var a = "　　　　　 #fEffect/SetItemInfoEff/1/8#\r\n#e#r#fEffect/ItemEff/1112811/0/0#全服第一副本达人#fEffect/ItemEff/1112811/0/0##n#k\r\n#fEffect/ItemEff/1112312/0/3#"; 
        	a+=cm.studyMing(10);        
        	        cm.sendOkS(a,2);
			cm.dispose();
    	}else if  (selection == 2) {
        	var a = "　　　　　 #fEffect/SetItemInfoEff/1/8#\r\n#e#r#fEffect/ItemEff/1112811/0/0#全服第一转生玩家#fEffect/ItemEff/1112811/0/0##n#k\r\n#fEffect/ItemEff/1112312/0/3#"; 
        	a+=cm.paiMing();        
        	cm.sendOkS(a,2);
        	cm.dispose();
    	}else if  (selection == 3) {
        	var a = "　　　　　 #fEffect/SetItemInfoEff/1/8#\r\n#e#r#fEffect/ItemEff/1112312/0/3#全服第一恩爱情侣#fEffect/ItemEff/1112312/0/3##n#k\r\n"; 
        	a+=cm.marriageMing();        
        	cm.sendOkS(a,2);
        	cm.dispose();
    	}else if  (selection == 9) {
            if (cm.getPlayerStat("GID") < 1) {
                cm.sendOk("不好意思你没有家族");
                cm.dispose();
            } else if (cm.haveItem(4310081, 1) == false) {
                cm.sendOk("你没有1个#z4310081#");
                cm.dispose();
            } else {
                cm.gainGP(50);
                cm.gainItem(4310081,-1)
                cm.sendOk("恭喜你为家族增加了50GP");
                cm.dispose();
    	}
    	}else if  (selection == 4) {
            if (cm.getChar().getId() != 56) {
                cm.sendOk("不好意思你不是第一名玩家");
                cm.dispose();
            } else if (cm.getBossLog("转身活动",1) == 1) {
                cm.sendOk("你已经领过了");
                cm.dispose();
            } else {
                var ii = Packages.server.MapleItemInformationProvider.getInstance();
                var type = Packages.constants.GameConstants.getInventoryType(1142076); //VIP勋章
                var toDrop = ii.randomizeStats(ii.getEquipById(1142076)).copy(); // 生成一个Equip类
                toDrop.setStr(1000); //装备力量
                toDrop.setDex(1000); //装备敏捷
                toDrop.setInt(1000); //装备智力
                toDrop.setLuk(1000); //装备运气
                toDrop.setMatk(1000); //物理攻击
                toDrop.setWatk(1000); //魔法攻击
                cm.getPlayer().getInventory(type).addItem(toDrop); //将这个装备放入包中
                cm.getC().getSession().write(Packages.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //刷新圣诞
                cm.addHyPay(-100000, true);
                cm.setBossLog("转身活动", 1);
                cm.sendOk("" + vvv + "\r\n" + bbb + " 100000圣诞币\r\n" + bbb + " #z1142076#（全属性+1000）");
cm.getC().getChannelServer().broadcastPacket(Packages.tools.MaplePacketCreator.serverNotice(0x1A, cm.getC().getChannel(), "『转生活动奖励』" + " : " + "[" + cm.getChar().getName() + "]领取了转生第一名奖励"));
cm.getC().getChannelServer().broadcastPacket(Packages.tools.MaplePacketCreator.serverNotice(0x1A, cm.getC().getChannel(), "『转生活动奖励』" + " : " + "[" + cm.getChar().getName() + "]领取了转生第一名奖励"));
                cm.dispose();
            }
    	}else if  (selection == 5) {
            if (cm.getChar().getId() != 45) {
                cm.sendOk("不好意思你不是第二名玩家");
                cm.dispose();
            } else if (cm.getBossLog("转身活动",1) == 1) {
                cm.sendOk("你已经领过了");
                cm.dispose();
            } else {
                var ii = Packages.server.MapleItemInformationProvider.getInstance();
                var type = Packages.constants.GameConstants.getInventoryType(1142076); //VIP勋章
                var toDrop = ii.randomizeStats(ii.getEquipById(1142076)).copy(); // 生成一个Equip类
                toDrop.setStr(500); //装备力量
                toDrop.setDex(500); //装备敏捷
                toDrop.setInt(500); //装备智力
                toDrop.setLuk(500); //装备运气
                toDrop.setMatk(500); //物理攻击
                toDrop.setWatk(500); //魔法攻击
                cm.getPlayer().getInventory(type).addItem(toDrop); //将这个装备放入包中
                cm.getC().getSession().write(Packages.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //刷新圣诞
                cm.addHyPay(-50000, true);
                cm.setBossLog("转身活动", 1);
                cm.sendOk("" + vvv + "\r\n" + bbb + " 50000圣诞币\r\n" + bbb + " #z1142076#（全属性+500）");
cm.getC().getChannelServer().broadcastPacket(Packages.tools.MaplePacketCreator.serverNotice(0x1A, cm.getC().getChannel(), "『转生活动奖励』" + " : " + "[" + cm.getChar().getName() + "]领取了转生第二名奖励"));
cm.getC().getChannelServer().broadcastPacket(Packages.tools.MaplePacketCreator.serverNotice(0x1A, cm.getC().getChannel(), "『转生活动奖励』" + " : " + "[" + cm.getChar().getName() + "]领取了转生第二名奖励"));
                cm.dispose();
            }
    	}else if  (selection == 6) {
            if (cm.getChar().getId() != 77 && cm.getChar().getId() != 208) {
                cm.sendOk("不好意思你不是第三名玩家");
                cm.dispose();
            } else if (cm.getBossLog("转身活动",1) == 1) {
                cm.sendOk("你已经领过了");
                cm.dispose();
            } else {
                var ii = Packages.server.MapleItemInformationProvider.getInstance();
                var type = Packages.constants.GameConstants.getInventoryType(1142076); //VIP勋章
                var toDrop = ii.randomizeStats(ii.getEquipById(1142076)).copy(); // 生成一个Equip类
                toDrop.setStr(100); //装备力量
                toDrop.setDex(100); //装备敏捷
                toDrop.setInt(100); //装备智力
                toDrop.setLuk(100); //装备运气
                toDrop.setMatk(100); //物理攻击
                toDrop.setWatk(100); //魔法攻击
                cm.getPlayer().getInventory(type).addItem(toDrop); //将这个装备放入包中
                cm.getC().getSession().write(Packages.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //刷新圣诞
                cm.addHyPay(-15000, true);
                cm.setBossLog("转身活动", 1);
                cm.sendOk("" + vvv + "\r\n由于有两个玩家并列，奖品/2\r\n" + bbb + " 15000圣诞币\r\n" + bbb + " #z1142076#（全属性+100）");
//cm.getC().getChannelServer().broadcastPacket(Packages.tools.MaplePacketCreator.serverNotice(0x1A, cm.getC().getChannel(), "『转生活动奖励』" + " : " + "[" + cm.getChar().getName() + "]领取了转生第三名奖励"));
//cm.getC().getChannelServer().broadcastPacket(Packages.tools.MaplePacketCreator.serverNotice(0x1A, cm.getC().getChannel(), "『转生活动奖励』" + " : " + "[" + cm.getChar().getName() + "]领取了转生第三名奖励"));
                cm.dispose();
            }
	}
}
