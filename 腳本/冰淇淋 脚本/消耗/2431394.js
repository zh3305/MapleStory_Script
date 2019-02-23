function start() {
        im.gainItem(2431394, -1);
		im.gainItem(3800748, 1);
    var ii = im.getItemInfo();					
	var toDrop = ii.randomizeStats(ii.getEquipById(1142574)).copy(); // 生成一个Equip类                    
	toDrop.setStr(25); //装备力量
	toDrop.setDex(25); //装备敏捷
	toDrop.setInt(25); //装备智力
	toDrop.setLuk(25); //装备运气
	toDrop.setMatk(25); //物理攻击
	toDrop.setWatk(25); //魔法攻击 
	toDrop.setAcc(25); //
	toDrop.setOwner("梦想女神");
	im.addFromDrop(im.getC(), toDrop, false);
	im.sendOk("成功获得全属性+25的女生认证勋章一枚+指定特权男生#v3800748#。 请到市场海豚查看女生福利说明。");
	im.dispose(); 
}
