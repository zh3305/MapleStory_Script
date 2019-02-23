function start() {
         im.gainItem(2431738, -1);
         im.gainNX(2,500);
         im.sendOk("恭喜您获得 #r500#k 低用卷。");
	 	 im.worldSpouseMessage(0x20,"[在线奖励] ：恭喜玩家 "+ im.getChar().getName() +" 在线满360分钟，领取[抵用券500商品券]获得500抵用。");
         im.dispose(); 
}
