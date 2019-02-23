function start() {
        im.gainItem(2431737, -1);
		im.gainItem(5030021, 1, 999);// 老爷爷商人
		im.sendOk("恭喜您获得 #r土豪礼物#k 。");
		im.worldSpouseMessage(0x20,"『系统公告』：恭喜玩家 "+ im.getChar().getName() +" 领取了土豪专用雇佣商店-永久期限。");
		im.dispose(); 
}
