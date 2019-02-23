function start() {
         im.gainItem(2431742, -1);
         im.gainNX(2,4000);
         im.sendOk("恭喜您获得 #r4000#k 抵用券。");
	 im.worldSpouseMessage(0x20,"[在线奖励领取] ：恭喜玩家 "+ im.getChar().getName() +" 在线满800分钟，领取[抵用券4000商品券]获得4000抵用。");
         im.dispose(); 
}
