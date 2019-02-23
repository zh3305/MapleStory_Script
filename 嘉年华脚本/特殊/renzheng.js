var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR); //获得年份
var month = ca.get(java.util.Calendar.MONTH) + 1; //获得月份
var day = ca.get(java.util.Calendar.DATE);//获取日
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY); //获得小时
var minute = ca.get(java.util.Calendar.MINUTE);//获得分钟
var second = ca.get(java.util.Calendar.SECOND); //获得秒
var weekday = ca.get(java.util.Calendar.DAY_OF_WEEK);
importPackage(Packages.client.inventory);
var yun1 ="#fUI/UIWindow/Quest/icon7/10#";////红色圆
var yun2 ="#fUI/UIWindow/Quest/icon8/0#";////蓝指标
var yun4 ="#fUI/UIWindow/Quest/reward#";////奖励
var ppp = "#fEffect/CharacterEff/1112907/4/0#"; //泡炮
var zs = "#fEffect/CharacterEff/1112946/2/0#";  //砖石粉
var zs1 = "#fEffect/CharacterEff/1112946/1/1#";  //砖石蓝
var yun ="#fUI/UIWindow/PartySearch2/BtNext/mouseOver/0#";////红沙漏
var wn1 = "#fUI/Basic.img/BtClaim/normal/0#";  //警灯
var yun2 ="#fUI/UIWindow/Quest/icon8/0#";////蓝指标
var status = -1;
var giftNX = 10000;

function start() {
    status = -1;
    action(1, 0, 0);
}//装备代码：1142574 官方认证女生

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
    if (status == 0) {
        var selStr = "     #e#r#v1142574##v1142574#『女生专用活动中心』#v1142574##v1142574#\r\n\r\n";
			selStr += "#e#b#L0#必看说明#l\r\n\r\n";
			selStr += "#e#d#L1#" + yun + " 领取女生每日福利(#r点卷 #kx#r10000#k #v5062000#x#r10#k #v5062002#x#r10#k #v5062500#x#r10#k #v4001784#x#r4#k #v5152053#x#r1#k#l)#l\r\n\r\n";
			//selStr += "  #r进入女生专用特色副本(暂未开放)\r\n";
        cm.sendSimple(selStr)
    } else if (status == 1) {
        switch (selection) {
        /*case 0:
            if (hour == 17 && (minute >= 0 && minute <= 30) && (weekday == 6)) {
				cm.warp(749050500,0);
				//cm.worldMessage(0x18, "『每周活动』" + " : " + "玩家 " + cm.getChar().getName() + " 进入了每周活动★手控游戏★。");
                //cm.sendOk("本活动有2关,第二关掉下去则失败,输入@PM");
            } else {
                cm.sendOk("时间还没到!");
            }
            break;*/
		case 0:
            cm.dispose();
            cm.sendOk("#e#r如何获得女生认证勋章：\r\n#d  QQ私密群里的客服管理并进行视频认证，管理进行登记即可获得女生认证勋章一枚。\r\n#e#r领取女生每日福利要求：\r\n#d  只有在本服赞助超过1000元以上，并常驻一个月，群内发言次数多的，才可以领取到这个女生免费福利。");
            break;
        case 1:
            if (cm.getPQLog("女生奖励")<1 && cm.haveItem(1142574, 1)) {
			    cm.setPQLog("女生奖励");
               // cm.gainItem(4002001,4);
				//cm.gainItem(5150040,5);
                            cm.gainNX(1, giftNX);
                           // cm.gainItem(5152053, 1);
                            cm.gainItem(5062000, 10);
                            cm.gainItem(5062002, 10);
                            cm.gainItem(5062500, 10);
                            cm.gainItem(4001784, 4);
				//cm.gainMeso(2000000);
				//cm.gainItem(3800748, 1);
				cm.worldSpouseMessage(0x20, "『女生系统』" + " : " + "女生认证玩家 " + cm.getChar().getName() + " 成功领取每日女生福利。");
                cm.sendOk("领取成功\r\n祝你游戏愉快!!");
            } else {
                cm.sendOk("你已经领取过了,或者你没有把女生勋章取下来");
            }
            break;
		case 3:
                if (cm.haveItem(3800748, 1) && cm.getPlayerStat("GENDER") == 0) {
					cm.gainItem(3800748, -1);
					cm.gainItem(3700219, 1);//蜜蝴蝶沉迷认证
					cm.sendOk("恭喜你获得了#v3700219#");
					cm.worldSpouseMessage(0x20, "『女生系统』" + " : " + "玩家 " + cm.getChar().getName() + " 成功获取某人的芳心领取了女生给与他的奖励。");
			        cm.dispose();
                } else {
                cm.sendOk("你没有#v3800748#或者你不是男生。");
            }
            break;
        }
        cm.dispose();
    }
}
