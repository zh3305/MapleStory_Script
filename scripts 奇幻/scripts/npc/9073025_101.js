var status = -1;
var random = java.lang.Math.floor(Math.random() * 10);
function action(mode, type, selection) {
	   if(random >= 0 && random <= 8){
           cm.worldSpouseMessage(0x14,"[小伙伴养成] 玩家 "+ cm.getChar().getName() +" 的小伙伴突然 - 哇呜~~施展了奇葩的神功 掉落神奇礼物包x1。");
	   cm.gainItem(2430070,1);
           cm.resetBossLog("宠物总计成长值");
	   cm.dispose();
	   } else {
           cm.worldSpouseMessage(0x14,"[小伙伴养成] 玩家 "+ cm.getChar().getName() +" 的小伙伴突然 - 哇呜~~施展了奇葩的神功 掉落神奇礼物包x2。");
	   cm.gainItem(2430070,2);
           cm.resetBossLog("宠物总计成长值");
	   cm.dispose();
	   }
}