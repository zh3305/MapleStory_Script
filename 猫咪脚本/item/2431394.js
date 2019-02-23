function start() {
        im.gainItem(2431394, -1);
    var ii = im.getItemInfo();					
	var toDrop = ii.randomizeStats(ii.getEquipById(1142574)).copy(); // 生成一个Equip类                    
	toDrop.setStr(10); //装备力量
	toDrop.setDex(10); //装备敏捷
	toDrop.setInt(10); //装备智力
	toDrop.setLuk(10); //装备运气
	toDrop.setMatk(10); //物理攻击
	toDrop.setWatk(10); //魔法攻击 
	toDrop.setAcc(10); //
	toDrop.setOwner("猫岛");
	im.addFromDrop(im.getC(), toDrop, false);
	im.sendOk("成功获得 #r女生勋章#k 一个。");
	im.dispose(); 
}