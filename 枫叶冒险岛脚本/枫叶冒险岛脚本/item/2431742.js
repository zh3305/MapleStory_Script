function start() {
         im.gainItem(2431742, -1);
         im.gainNX(2,4000);
         im.sendOk("恭喜您获得 #r4000#k 低用卷。");
	 im.worldSpouseMessage(0x20,"[怪物掉宝提示]：恭喜玩家 "+ im.getChar().getName() +" 从怪物身上掉落[抵用券4000商品券]获得4000抵用卷。");
         im.dispose(); 
}
