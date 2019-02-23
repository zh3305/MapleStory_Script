function start() {
	if (im.getPlayer().getCSPoints(1) >= 3000000 && im.getPlayer().getRMB() >= 8000) {
	im.gainItem(2431673, -1);
	im.gainNX(1, -3000000);
	im.gainPlayerPoints(100);
	im.gainItem(5062002, 10); //红色蜡笔
	//im.gainItem(5062002, 10); //橙色蜡笔
	//im.gainItem(5062002, 10); //黄色蜡笔
	//im.gainItem(5062002, 10); //绿色蜡笔
	//im.gainItem(5062002, 10); //青色蜡笔
	//im.gainItem(5062002, 10); //蓝色蜡笔
	im.gainItem(2049750, 1); //S级潜能卷轴 80% 
	im.gainItem(2049402, 1); //特殊潜能附加卷轴
	im.gainItem(2048307, 1); //特殊附加潜能附加卷轴
	im.gainItem(5062002, 1); // 10E
	var ii = im.getItemInfo();					
	var toDrop = ii.randomizeStats(ii.getEquipById(1142796)).copy(); // 生成一个Equip类                    
	toDrop.setStr(15); //装备力量
	toDrop.setDex(15); //装备敏捷
	toDrop.setInt(15); //装备智力
	toDrop.setLuk(15); //装备运气
	toDrop.setMatk(15); //物理攻击
	toDrop.setWatk(15); //魔法攻击 
	toDrop.setAcc(15); //
	toDrop.setOwner("豪华点装");
	im.addFromDrop(im.getC(), toDrop, false);
	var ii = im.getItemInfo();					
	var toDrop = ii.randomizeStats(ii.getEquipById(1142574)).copy(); // 生成一个Equip类                    
	toDrop.setStr(15); //装备力量
	toDrop.setDex(15); //装备敏捷
	toDrop.setInt(15); //装备智力
	toDrop.setLuk(15); //装备运气
	toDrop.setMatk(15); //物理攻击
	toDrop.setWatk(15); //魔法攻击 
	toDrop.setAcc(15); //
	toDrop.setOwner("豪华点装");
	im.addFromDrop(im.getC(), toDrop, false);
	var ii = im.getItemInfo();					
	var toDrop = ii.randomizeStats(ii.getEquipById(1332225)).copy(); // 生成一个Equip类                    
	toDrop.setStr(30); //装备力量
	toDrop.setDex(30); //装备敏捷
	toDrop.setInt(30); //装备智力
	toDrop.setLuk(30); //装备运气
	toDrop.setMatk(50); //物理攻击
	toDrop.setWatk(50); //魔法攻击 
	toDrop.setSpeed(30); //移动速度
	toDrop.setJump(30); //跳跃
	toDrop.setAcc(30); //
	toDrop.setOwner("豪华神装");
	im.addFromDrop(im.getC(), toDrop, false);
	im.sendOk("成功获得 #r豪华礼包#k 一个。");
	im.channelMessage(0x18, "『充点小钱玩玩』" + " : " + "玩家 " + im.getChar().getName() + " 从限时8000元豪华中获得 神装 以及 道具 以及 10亿 金币。");
	im.dispose(); 
    } else {
	//im.sendOk("#b冲点小钱玩一下吧。您充值未达到8000元或者点卷不足300万。#k\r\n\r\n#v3994417# #v3994418# #v3994419# #v3994420# #v3994421# #v3994422# #v2049750# #v2049402# #v2048307#\r\n#r#t1003719##v1003719# : 全属性30，攻击力魔攻50。\r\n#t1112276##v1112276# : 全属性15，攻击力魔攻15。\r\n#t1112164##v1112164# : 全属性15，攻击力魔攻15。\r\n\r\n- #e#d永久BUFF以及骑宠技能#k#n:\r\n#s80000077# #s80000077# #s80000077# #s80000081# #s80000082# #s80000083# #s80001198# #s80001241#");
	im.sendOk("#b冲点小钱玩一下吧。您充值未达到8000元或者点卷不足300万。#k\r\n\r\n#v5062002# #v5062002# #v5062002# #v5062002# #v5062002# #v5062002# #v2049750# #v2049402# #v2048307#\r\n#r#t1332225##v1332225# : 全属性30，攻击力魔攻50。\r\n#t1142574##v1142574# : 全属性15，攻击力魔攻15。\r\n#t1142796##v1142796# : 全属性15，攻击力魔攻15。");
	im.dispose();
	}
}