
function start() {
	if (im.getPlayer().getCSPoints(1) >= 900000) {
	im.gainItem(2431673, -1);
	im.gainNX(1, -900000);
	im.gainPlayerPoints(1000000);
	im.gainItem(2049750, 1); //S级潜能卷轴 80% 
	im.gainItem(2049402, 1); //特殊潜能附加卷轴
	im.gainItem(2048307, 1); //特殊附加潜能附加卷轴
	im.gainItem(4001715, 1); // 1E
	var ii = im.getItemInfo();					
	var toDrop = ii.randomizeStats(ii.getEquipById(1112164)).copy(); // 生成一个Equip类                    
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
	var toDrop = ii.randomizeStats(ii.getEquipById(1112276)).copy(); // 生成一个Equip类                    
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
	var toDrop = ii.randomizeStats(ii.getEquipById(1003719)).copy(); // 生成一个Equip类                    
	toDrop.setStr(15); //装备力量
	toDrop.setDex(15); //装备敏捷
	toDrop.setInt(15); //装备智力
	toDrop.setLuk(15); //装备运气
	toDrop.setMatk(25); //物理攻击
	toDrop.setWatk(25); //魔法攻击 
	toDrop.setSpeed(15); //移动速度
	toDrop.setJump(15); //跳跃
	toDrop.setAcc(15); //
	toDrop.setOwner("豪华神装");
	im.addFromDrop(im.getC(), toDrop, false);
	im.gainItem(2431926, 1);// 礼包
	im.gainItem(2049122, 25);// 礼包
	im.gainItem(2049116, 25);// 礼包
	im.gainItem(2340000, 25);// 礼包
	im.sendOk("成功获得 #r豪华礼包#k 一个。");
	im.channelMessage(0x18, "『充点小钱玩玩』" + " : " + "玩家 " + im.getChar().getName() + " 从限时300元豪华中获得 神装 以及 道具 以及 1亿 金币。");
	im.dispose(); 
    } else {
	//im.sendOk("#b冲点小钱玩一下吧。您充值未达到300元或者点卷不足30万。#k\r\n\r\n\r\n#r#t1003719##v1003719# : 全属性15，攻击力魔攻25。\r\n#t1112276##v1112276# : 全属性15，攻击力魔攻15。\r\n#t1112164##v1112164# : 全属性15，攻击力魔攻15。\r\n\r\n- #e#d永久BUFF以及骑宠技能#k#n:\r\n#s80000077# #s80000077# #s80000077# #s80000081# #s80000082# #s80000083# #s80001198# #s80001241#");
	im.sendOk("#b冲点小钱玩一下吧。您点卷不足90万。#k\r\n\r\n #v2049750# #v2049402# #v2048307#(#v2431926#:全职业150级防具随机一件)\r\n#v2049122#(25张)     #v2049116#(25张)     #v2340000#(25张)\r\n#r#t1003719##v1003719# : 全属性15，攻击力魔攻25。\r\n#t1112276##v1112276# : 全属性15，攻击力魔攻15。\r\n#t1112164##v1112164# : 全属性15，攻击力魔攻15。");
	im.dispose();
	}
}