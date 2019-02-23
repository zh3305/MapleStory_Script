function start() {
        im.gainItem(2432667, -1);
		im.gainPet(5000324, "我是充值奖励", 1, 0, 100, 100, 0x211);
		im.sendOk("恭喜您获得 #r管理员送出的礼物#k 。");
		im.worldSpouseMessage(0x20,"『充值礼包』：恭喜玩家 "+ im.getChar().getName() +" 领取了充值宠物");
		im.dispose(); 
}
