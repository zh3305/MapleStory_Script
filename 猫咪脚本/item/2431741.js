function start() {
         im.gainItem(2431741, -1);
         im.gainNX(2,3000);
         im.sendOk("恭喜您获得 #r3000#k 低用卷。");
	 im.worldSpouseMessage(0x20,"[怪物掉宝提示]：恭喜玩家 "+ im.getChar().getName() +" 从怪物身上掉落[抵用券3000商品券]获得3000抵用卷。");
         im.dispose(); 
}
