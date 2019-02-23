/*
传送NPC
*/
var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } 

	if (status == 0) {
		cm.getDirectionStatus(true);
		cm.EnableUI(1);
		cm.environmentChange("maplemap/enter/10000", 13);
		cm.getDirectionInfo(1, 1000);
		cm.getDirectionStatus(true);
		cm.sendNextS("皮卡丘，就决定是你了!？？美女???",16);
	} else if (status == 1) {
		cm.spawnNPCRequestController(10300, -300, 220);
		cm.setNPCSpecialAction(10300, "summon");//348 NPC特殊行动
		cm.getNPCDirectionEffect(10300, "Effect/Direction12.img/effect/tuto/BalloonMsg1/1", 900, 0, -120);
		cm.getDirectionInfo(1, 1800);
	    cm.sendNextS("敌羞，吾去脱他衣!",16);
    } else if (status == 2) {
		cm.sendNextS("人间五十年，看世事梦幻似水，与天相比，不过渺小一物，精彩的人生。",16);
	}else if (status == 2) {
		cm.forceStartQuest(32202);
		cm.forceCompleteQuest(32202);
	    cm.sendNextS("走了吗,骚年!我也朝着那个方向过去看看吧。",16);
	} else if (status == 3) {
		//cm.forceStartQuest(32203);
		//cm.forceCompleteQuest(32203);
		cm.removeNPCRequestController(10300);	
		cm.EnableUI(0);
	    //cm.warp(10000);
		cm.dispose();
	} 

}
