function start(){
	if (im.getSpace(1) < 2) {
		im.dispose();
		return;
	}
	im.remove(1);
	var ii = im.getItemInfo();					
	var toDrop = ii.randomizeStats(ii.getEquipById(1112164)).copy(); // 生成一个Equip类                    
	toDrop.setStr(30); //装备力量
	toDrop.setDex(30); //装备敏捷
	toDrop.setInt(30); //装备智力
	toDrop.setLuk(30); //装备运气
	toDrop.setMatk(30); //物理攻击
	toDrop.setWatk(30); //魔法攻击 
	toDrop.setAcc(30); //
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
	toDrop.setOwner("神级觉醒");
	im.addFromDrop(im.getC(), toDrop, false);
	im.getPlayer().dropMessage(1, "获得了豪华神装");
	im.dispose();
}