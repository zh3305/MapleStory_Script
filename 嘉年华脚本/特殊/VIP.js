var aaa ="#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var z5 = "#fEffect/CharacterEff/1112904/2/1#";//五角花
var tz = "#fEffect/CharacterEff/1082565/2/0#"; //兔子蓝
var eff1 = "#fEffect/CharacterEff/1112905/0/1#";//小红心
var tz12 = "#fEffect/CharacterEff/1112924/0/0#"; //黄星
var tz13 = "#fEffect/CharacterEff/1112925/0/0#"; //蓝星
var tz14 = "#fEffect/CharacterEff/1112926/0/0#"; //红星

var status = 0;
var typed=0;
var rmb = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 0) {
			//cm.sendOk("#d通知：随身服务将在15号涨价，由原先的3/天、80/月、500/年改为10/天、240/月、1200/年。\r\n功能改动：每日消费购买点卷改为领取点卷，将会增加专属打抵用卷副本。每日领取专署武器祝福油x100，防具祝福油x100. 每日抽奖包x5. 更有神装租借等等会逐步开放。");
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			//rmb = cm.getPlayer().updateRMB();
            //var selStr = "  \t\t\t\t#d您当前的余额为：#r" + cm.getHyPay(1) + " #d #k\r\n\r\n\r\n";
            //selStr +="       #d您当前的余额为：#r" + cm.getHyPay(1) + " #d #k\r\n\r\n\r\n";
			var selStr = "" + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + "";
			//selStr +="#L1##b"+aaa+"    ★★女神★★会员★★  永久[详情点击查看]#l#k\r\n\r\n";
			//selStr +="\t\t\t\t#r" + tz + "黄金理财等级" + tz + "#k\r\n";
			selStr +="#L2##b"+aaa+" 超级实惠理财服务25W点劵/周[详情点击查看]#l#k\r\n\r\n";
			selStr +="#L3##b"+aaa+" 超级实惠理财服务60W点劵/月[#r#e火爆#b#n点击查看]#l#k\r\n\r\n";
			selStr +="#L4##b"+aaa+" 超级实惠理财服务680W点劵/永久[#r#e火爆#b#n点击查看]#l#k\r\n\r\n";
			//selStr +="\t\t\t\t#r" + tz + "白银理财等" + tz + "#k\r\n";
			//selStr +="#L5##b"+aaa+" 超级实惠理财服务30余额/周[详情点击查看]#l#k\r\n\r\n";
			//s//elStr +="#L6##b"+aaa+" 超级实惠理财服务100余额/月[#r#e火爆#b#n点击查看]#l#k\r\n\r\n";
			selStr += "" + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + "";
                        cm.sendSimple(selStr);	
		} else if (status == 1) {
			if (selection == 1) {
				typed=1;
				cm.sendYesNo("- #e#d女生会员永久权：#n#k\r\n\r\n- #e#r提示:#k#n  #r理财神秘盒子 永久#k\r\n\r\n- #e#d办理等级：#n#k\r\n\t\t#b女神VIP \r\n- #e#d详细说明：#n#k\r\n\t\t每天享有三倍经验以及双倍爆率，副本重置，理财抽奖，每日抽奖，每日道具。另可享有快速洗血、自选美容美发。还可以领取每日金币\r\n\r\n- #e#d管理提示：#n#b点是进行购买。点否返回上一页.#k");
			} else if (selection == 2) {
				typed=2;
				cm.sendYesNo("- #e#d超级实惠理财服务一周权：#n#k\r\n\r\n- #e#r提示:#k#n  #r理财神秘盒子 25W点劵/1周#k\r\n\r\n- #e#d办理等级：#n#k\r\n\t\t#b黄金VIP \r\n- #e#d详细说明：#n#k\r\n\t\t办理后会扣掉您80余额，7天内每天享有三倍经验以及双倍爆率，副本重置，理财抽奖，每日抽奖，每日道具。另可享有快速洗血、自选美容美发。还可以领取每日金币\r\n\r\n- #e#d管理提示：#n#b点是进行购买。点否返回上一页.#k");
			} else if (selection == 3) {
				typed=3;
				cm.sendYesNo("- #e#d超级实惠理财服务一月权：#n#k\r\n\r\n- #e#r提示:#k#n  #r理财神秘盒子 60W点劵/1月#k\r\n\r\n- #e#d办理等级：#n#k\r\n\t\t#b黄金VIP \r\n- #e#d详细说明：#n#k\r\n\t\t办理后会扣掉您300余额，30天内每天享有三倍经验以及双倍爆率，副本重置，理财抽奖，每日抽奖，每日道具。。另可享有快速洗血、自选美容美发。还可以领取每日金币\r\n\r\n- #e#d管理提示：#n#b点是进行购买。点否返回上一页.#k");
            } else if (selection == 4) {
				typed=4;
				cm.sendYesNo("- #e#d超级实惠理财服务永久权：#n#k\r\n\r\n- #e#r提示:#k#n  #r理财神秘盒子 680W点劵/永久#k\r\n\r\n- #e#d办理等级：#n#k\r\n\t\t#b黄金VIP \r\n- #e#d详细说明：#n#k\r\n\t\t办理后会扣掉您1500余额，每天享有三倍经验以及双倍爆率，副本重置，理财抽奖，每日抽奖，每日道具。。另可享有快速洗血、自选美容美发。还可以领取每日金币\r\n\r\n- #e#d管理提示：#n#b点是进行购买。点否返回上一页.#k");
			} else if (selection == 5) {
				typed=5;
				cm.sendYesNo("- #e#d超级实惠理财服务一周权：#n#k\r\n\r\n- #e#r提示:#k#n  #r理财神秘盒子 30余额/1周#k\r\n\r\n- #e#d办理等级：#n#k\r\n\t\t#b白银VIP \r\n- #e#d详细说明：#n#k\r\n\t\t办理后会扣掉您30余额，7天内每天享有三倍经验以及双倍爆率，，每日抽奖，每日道具。还可以领取每日金币\r\n\r\n- #e#d管理提示：#n#b点是进行购买。点否返回上一页.#k");
                                
			} else if (selection == 6) {
				typed=6;
				cm.sendYesNo("- #e#d超级实惠理财服务一月权：#n#k\r\n\r\n- #e#r提示:#k#n  #r理财神秘盒子 100余额/1月#k\r\n\r\n- #e#d办理等级：#n#k\r\n\t\t#b白银VIP \r\n- #e#d详细说明：#n#k\r\n\t\t办理后会扣掉您100余额，30天内每天享有三倍经验以及双倍爆率，每日抽奖，每日道具。还可以领取每日金币\r\n\r\n- #e#d管理提示：#n#b点是进行购买。点否返回上一页.#k");	
			}
		} else if (status == 2) {
						if(typed==1){
                if (cm.haveItem(2430865) < 1 && cm.getSpace(2) > 2 && cm.haveItem(4001695, 1)) {
					cm.gainItem(2430865,1);
					//cm.gainNX(
					cm.gainItem(4001695, -1);
					cm.setPQLog("黄金VIP",1,-2);
					cm.setPQLog("白银VIP",1,0);
					cm.sendOk("恭喜您成功获得女神随身服务.");
					cm.getMap().startMapEffect("恭喜玩家 "+cm.getChar().getName()+" 成功获得★★女神★★随身服务。", 5120012);
					cm.worldSpouseMessage(0x20, "[系统公告] : 恭喜 " + cm.getChar().getName() + " 成功获得★★女神★★随身服务.");
					cm.dispose();
                } else {
					cm.sendOk("失败：\r\n\r\n#r1). 您的随身服务未到期,无法重复办理.\r\n2). 充值金额未达到条件.\r\n3). 背包里消耗栏位已满,请清理.");
					cm.dispose();
				}
			} else if(typed==2){
                if (cm.haveItem(2430865) < 1 && cm.getSpace(2) > 2 && cm.getPlayer().getCSPoints(1) >= 250000) {
					cm.gainItem(2430865,1,7);
cm.setPQLog("黄金VIP",1,-2);
					cm.setPQLog("白银VIP",1,0);
					cm.gainNX(-250000);
					cm.sendOk("恭喜您成功购买一周黄金随身服务.");
					cm.getMap().startMapEffect("恭喜玩家 "+cm.getChar().getName()+" 成功购买黄金理财服务一周权。", 5120012);
					cm.worldSpouseMessage(0x20, "[系统公告] : 恭喜 " + cm.getChar().getName() + " 成功购买一周黄金理财服务.");
					cm.dispose();
                } else {
					cm.sendOk("失败：\r\n\r\n#r1). 您的随身服务未到期,无法重复办理.\r\n2). 充值金额未达到条件.\r\n3). 背包里消耗栏位已满,请清理.");
					cm.dispose();
				}
			} else if(typed==3){
                if (cm.haveItem(2430865) < 1 && cm.getSpace(2) > 2 && cm.getPlayer().getCSPoints(1) >= 600000) {
						cm.gainItem(2430865,1,31);
						cm.gainNX(-600000);
cm.setPQLog("黄金VIP",1,-2);
					cm.setPQLog("白银VIP",1,0);
						cm.sendOk("恭喜您成功购买一个月黄金理财服务.");
						cm.getMap().startMapEffect("恭喜玩家 "+cm.getChar().getName()+" 成功购买黄金理财服务一个月权。", 5120012);
						cm.worldSpouseMessage(0x20, "[系统公告] : 恭喜 " + cm.getChar().getName() + " 成功购买一月黄金理财服务.");
						cm.dispose();
                } else {
						cm.sendOk("失败：\r\n\r\n#r1). 您的理财服务未到期,无法重复办理.\r\n2). 充值金额未达到条件.\r\n3). 背包里消耗栏位已满,请清理.");
						cm.dispose();
				}
			} else if(typed==4){
                if (cm.haveItem(2430865) < 1 && cm.getSpace(2) > 2 && cm.getPlayer().getCSPoints(1) >= 6800000) {
						cm.gainItem(2430865,1);
						cm.gainNX(-6800000);
cm.setPQLog("黄金VIP",1,-2);
					cm.setPQLog("白银VIP",1,0);
						cm.sendOk("恭喜您成功购买永久黄金理财服务.");
						cm.getMap().startMapEffect("恭喜玩家 "+cm.getChar().getName()+" 成功购买黄金理财服务永久权。", 5120012);
						cm.worldSpouseMessage(0x20, "[系统公告] : 恭喜 " + cm.getChar().getName() + " 成功购买永久黄金理财服务.");
						cm.dispose();
                } else {
						cm.sendOk("失败：\r\n\r\n#r1). 您的理财服务未到期,无法重复办理.\r\n2). 充值金额未达到条件.\r\n3). 背包里消耗栏位已满,请清理.");
						cm.dispose();
				}
			} else if(typed==5){
				if (cm.haveItem(2431028) < 1 && cm.getSpace(2) > 2 && cm.addHyPay(1)>=30) {
					cm.gainItem(2430865,1,7);
					cm.addHyPay(30);
cm.setPQLog("黄金VIP",1,0);
					cm.setPQLog("白银VIP",1,-1);
					cm.sendOk("恭喜您成功购买一周白银理财服务.");
					cm.getMap().startMapEffect("恭喜玩家 "+cm.getChar().getName()+" 成功购买白银理财服务一周权。", 5120012);
					cm.worldSpouseMessage(0x20, "[系统公告] : 恭喜 " + cm.getChar().getName() + " 成功购买一周白银理财服务.");
                                         cm.openNpc(9900005)
					cm.dispose();
                } else {
					cm.sendOk("失败：\r\n\r\n#r1). 您的随身服务【礼物盒】未到期,无法重复办理.\r\n2). 没有黄金票碎片#v4032605#.\r\n3). 背包里消耗栏位已满,请清理.");
					cm.dispose();
				}
			} else if(typed==6){
                if (cm.haveItem(2430865) < 1 && cm.getSpace(2) > 2 && cm.getHyPay(1)>=100) {
						cm.gainItem(2430865,1,30);
						cm.addHyPay(100);
cm.setPQLog("黄金VIP",1,0)
						cm.setPQLog("白银VIP",1,-1);
						cm.sendOk("恭喜您成功购买一个月白银理财服务.");
						cm.getMap().startMapEffect("恭喜玩家 "+cm.getChar().getName()+" 成功购买白银理财服务一个月权。", 5120012);
						cm.worldSpouseMessage(0x20, "[系统公告] : 恭喜 " + cm.getChar().getName() + " 成功购买一月白银理财服务.");
						cm.dispose();
                } else {
						cm.sendOk("失败：\r\n\r\n#r1). 您的理财服务未到期,无法重复办理.\r\n2). 充值金额未达到条件.\r\n3). 背包里消耗栏位已满,请清理.");
						cm.dispose();
				}
           }
      }
   }
}