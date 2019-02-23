var status = 0;
var random = java.lang.Math.floor(Math.random() * 4);
var eff = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var eff1 = "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (cm.getMapId() == 180000001) {
            cm.sendOk("很遗憾，您因为违反用户守则被禁止游戏活动，如有异议请联系管理员.")
            cm.dispose();
        } else if (status == 0) {
        var selStr = "|----------------------充值中心#e"
		selStr = "			充值1 - 45元\r\n			充值50 - 100元#r 【送5余额】#k\r\n#r			充值100 - 200元【送10余额】\r\n			充值200 - 500元【送150余额】\r\n			充值500元以上  【送300余额】#k\r\n		#b【网银充值追加10% 充值卡充值追加5%】#k\r\n		#r充值比例1:2#k【余额追加+充值方式追加】\r\n";
       	       //selStr += "#L0#" + eff + "#r【充值余额】#k#l\r\n";
		selStr += "#L2#" + eff + "#b【余额兑换点卷1:3000--#k#r单纯兑换#k#b】#k#l\r\n";
		selStr += "#L1#" + eff + "#b【免费领取累计充值奖励】#k#l\r\n";
		selStr += "#L3#" + eff + "#r【充值活动-#k购买礼包 更划算-有大量道具和点卷#r】#k#l\r\n";
		selStr += "#L4#" + eff + "#b【理财卡-让您前程无忧】#k#l\r\n";
		selStr += "#L5#" + eff + "#b【中介系统-通用货币】#k#l#z[itemid]#";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
			cm.dispose();
			cm.openWeb("http://1.com");	
            break;
        case 1:
			cm.dispose();
			cm.openNpc(9900001,"leijijl");	
            break;
        case 2:
			cm.dispose();
			cm.openNpc(9900002,40);	
            break;
        case 3://充值网站
			cm.dispose();
			cm.openNpc(9900002,"chongzhd");	
            break;
        case 4://管理雇佣商店
            cm.dispose();
	    cm.openNpc(9000111);
            break;
        case 5://累积充值
            cm.dispose();
	    cm.openNpc(9900002,41);
            break;	
	}
    }
}