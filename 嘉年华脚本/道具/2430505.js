function start() {
        im.gainItem(2430505, -1);
	var ii = im.getItemInfo();					
	var toDrop = ii.randomizeStats(ii.getEquipById(1190400)).copy(); // 生成一个Equip类                    
	toDrop.setEnhance(25); //
	var timeStamp = java.lang.System.currentTimeMillis();
	var expirationDate = timeStamp+30*86400*1000;
	toDrop.setExpiration(expirationDate);
	toDrop.setOwner("30天的");
	im.addFromDrop(im.getC(), toDrop, false);
        im.sendOk("恭喜您获得 #r管理员送出的礼物#k 。");
	//im.worldSpouseMessage(0x20,"『新手驾到』：恭喜玩家 "+ im.getChar().getName() +" 来到了皮皮冒险岛。热烈祝贺他(她)吧。");
	im.dispose(); 
}
