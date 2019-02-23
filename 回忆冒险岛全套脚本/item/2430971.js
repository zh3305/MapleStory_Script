var itemid = 1482189; //默认装备ID
function start() {
	im.remove(1);
	var ii = im.getItemInfo();
	var toDrop = null;
	
	
	
	/*武器制作*/
	itemid = 1482189; //装备ID
	var toDrop = ii.randomizeStats(ii.getEquipById(itemid)).copy(); //装备              
    toDrop.setStr(70); //装备力量
	toDrop.setDex(70); //装备敏捷
	toDrop.setInt(70); //装备智力
	toDrop.setLuk(70); //装备运气
	toDrop.setMatk(240); //魔法攻击
	toDrop.setWatk(240); //物理攻击
	toDrop.setUpgradeSlots(20);  //升级次数20次
	toDrop.setBossDamage(100);  //BOSS伤害100%
	toDrop.setIgnorePDR(70);  //无视防御70%
	toDrop.setTotalDamage(30); //总伤害30%
	toDrop.setAllStat(20);  //所有属性20%
	toDrop.setLimitBreak(2100000000); //破攻
	toDrop.setOwner("真·漩涡系列");  //设置装备主人名称
	im.addFromDrop(im.getC(),toDrop,false);
	/*武器制作结束*/
	
	
	/*武器制作*/
	itemid = 1242060;
	toDrop = ii.randomizeStats(ii.getEquipById(itemid)).copy(); //装备              
    toDrop.setStr(70); //装备力量
	toDrop.setDex(70); //装备敏捷
	toDrop.setInt(70); //装备智力
	toDrop.setLuk(70); //装备运气
	toDrop.setMatk(240); //魔法攻击
	toDrop.setWatk(240); //物理攻击
	toDrop.setUpgradeSlots(20);  //升级次数20次
	toDrop.setBossDamage(100);  //BOSS伤害100%
	toDrop.setIgnorePDR(70);  //无视防御70%
	toDrop.setTotalDamage(30); //总伤害30%
	toDrop.setAllStat(20);  //所有属性20%
	toDrop.setLimitBreak(2100000000); //破攻
	toDrop.setOwner("真·漩涡系列");  //设置装备主人名称
	im.addFromDrop(im.getC(),toDrop,false);
	/*武器制作结束*/
	
	
	
	im.sendOk("获得了真漩涡系列武器。");
	im.dispose();
}