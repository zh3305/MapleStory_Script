var aaa ="#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";

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
                        var selStr = "#b请选择购买天数：#n#k\r\n";
                        selStr +="\r\n  - #e#r您当前赞助充值金额为 #d" + cm.getPlayer().getRMB() + "#k#r #e元#n#k\r\n";
                        selStr +="       #d您当前的点卷为：#r" + cm.getPlayer().getCSPoints(1) + " #d点#k\r\n";
						selStr +="       #d新增专属VIP勋章、名片戒指、聊天背景戒指\r\n\r\n\r\n";
			selStr +="#L1##b"+aaa+" 超级实惠理财服务包30雪花币/周[详情点击查看]#l#k\r\n\r\n";			
			selStr +="#L2##b"+aaa+" 超级实惠理财服务包100雪花币/月[详情点击查看]#l#k\r\n\r\n";
			selStr +="#L3##b"+aaa+" 超级实惠理财服务包800雪花币/年[详情点击查看]#l#k\r\n";
                        cm.sendSimple(selStr);	
		} else if (status == 1) {
			if (selection == 1) {
				typed=1;
				cm.sendYesNo("- #e#d超级实惠理财服务一周权：#n#k\r\n\r\n- #e#r提示:#k#n  #rvip神秘盒子 30雪花币/周#k\r\n\r\n- #e#d服务特权：#n#k\r\n\t\t#b拥有全服上线提示、独特聊天颜色。\r\n- #e#d详细说明：#n#k\r\n\t\t办理后会扣掉您30雪花币，并且每天返还1000点卷，1年内每天享有三倍经验以及双倍爆率，每天可领取多件理财道具（抽奖箱、魔方、防爆等）。另可享有自选更换发型以及快速洗血。还可以领取每日金币。#k\r\n\r\n- #e#d管理提示：#n#b点是进行购买。点否返回上一页.#k");
			} else if (selection == 2) {
				typed=2;
				cm.sendYesNo("- #e#d超级实惠理财服务一月权：#n#k\r\n\r\n- #e#r提示:#k#n  #rvip神秘盒子 100雪花币/月#k\r\n\r\n- #e#d服务特权：#n#k\r\n\t\t#b拥有全服上线提示、独特聊天颜色。\r\n- #e#d详细说明：#n#k\r\n\t\t办理后会扣掉您100雪花币，并且分30天返还3万点卷30天内每天享有三倍经验以及双倍爆率，每天可领取多件理财道具（抽奖箱、魔方、防爆等）。另可享有自选更换发型以及快速洗血。还可以领取每日金币。#r额外赠送50个神奇魔方，20个高级神奇魔方。\r\n\r\n- #e#d管理提示：#n#b点是进行购买。点否返回上一页.#k");
                        } else if (selection == 3) {
				typed=3;
				cm.sendYesNo("- #e#d超级实惠理财服务一年权：#n#k\r\n\r\n- #e#r提示:#k#n  #rvip神秘盒子 800雪花币/年#k\r\n\r\n- #e#d服务特权：#n#k\r\n\t\t#b拥有全服上线提示、独特聊天颜色。\r\n- #e#d详细说明：#n#k\r\n\t\t办理后会扣掉您800雪花币，并且每天返还1000点卷，1年内每天享有三倍经验以及双倍爆率，每天可领取多件理财道具（抽奖箱、魔方、防爆等）。另可享有自选更换发型以及快速洗血。还可以领取每日金币。#r额外赠送200个高级神奇魔方，100个终极魔方。\r\n\r\n- #e#d管理提示：#n#b点是进行购买。点否返回上一页.#k");
                        } else if (selection == 4) {
				typed=4;
				cm.sendYesNo("");	
			}
		} else if (status == 2) {
			if(typed==1){
                if (cm.haveItem(2430865) < 1 && cm.getSpace(1)>3 && cm.getSpace(2) > 2 && cm.haveItem(4310014, 30)) {
			cm.gainItem(2430865,1,7);
			cm.gainItem(1142328, 1, 7);
			cm.gainItem(1112140, 1, 7);
			cm.gainItem(1112247, 1, 7);
			//cm.addHyPay(10);
			cm.setBossLog(cm.getPlayer().getName()+"VIP一周");
			cm.gainItem(4310014, -30);
			cm.sendOk("恭喜您成功购买一周随身服务.");
			cm.getMap().startMapEffect("恭喜玩家 "+cm.getChar().getName()+" 成功购买理财服务一周权。", 5120012);
			cm.worldSpouseMessage(0x20, "[系统公告] : 恭喜 " + cm.getChar().getName() + " 成功购买一周理财服务.");
			cm.dispose();
                } else {
			cm.sendOk("失败：\r\n\r\n#r1). 您的随身服务未到期,无法重复办理.\r\n2). 充值金额未达到条件.\r\n3). 背包里装备栏或消耗栏位已满,请清理.");
			cm.dispose();
				}
			} else if(typed==2){
                if (cm.haveItem(2430865) < 1 && cm.getSpace(2) > 2 && cm.haveItem(4310014, 100)) {
			cm.gainItem(2430865,1,30);
			cm.gainItem(4310014, -100);
			cm.gainItem(1142328, 1, 30);
			cm.gainItem(1112139, 1, 30);
			cm.gainItem(1112246, 1, 30);
			cm.gainItem(5062000, 50);
			cm.gainItem(5062002, 20);
			cm.setBossLog(cm.getPlayer().getName()+"VIP一月");
			//cm.gainNX(1, -50000);
			cm.sendOk("恭喜您成功购买一个月理财服务.");
			cm.getMap().startMapEffect("恭喜玩家 "+cm.getChar().getName()+" 成功购买理财服务一个月权。", 5120012);
			cm.worldSpouseMessage(0x20, "[系统公告] : 恭喜 " + cm.getChar().getName() + " 成功购买一月理财服务.");
			cm.dispose();
                } else {
			cm.sendOk("失败：\r\n\r\n#r1). 您的理财服务未到期,无法重复办理.\r\n2). 充值金额未达到条件.\r\n3). 背包里消耗栏位已满,请清理.");
			cm.dispose();
				}
			} else if(typed==3){
                if (cm.haveItem(2430865) < 1 && cm.getSpace(2) > 2 && cm.haveItem(4310014, 800)) {
			cm.gainItem(2430865,1,365);
			cm.gainItem(4310014, -800);
			cm.gainItem(1142328, 1, 365);
			cm.gainItem(1112138, 1, 365);
			cm.gainItem(1112245, 1, 365);
			//cm.gainItem(5062000, 400);
			cm.gainItem(5062002, 200);
			cm.gainItem(5062010, 100);
			cm.setBossLog(cm.getPlayer().getName()+"VIP一年");
			//cm.gainNX(1, -400000);
			cm.sendOk("恭喜您成功购买一年理财服务.");
			cm.getMap().startMapEffect("恭喜玩家 "+cm.getChar().getName()+" 成功购买理财服务一年权。", 5120012);
			cm.worldSpouseMessage(0x20, "[系统公告] : 恭喜 " + cm.getChar().getName() + " 成功购买一年理财服务.");
			cm.dispose();
                } else {
			cm.sendOk("失败：\r\n\r\n#r1). 您的随身服务未到期,无法重复办理.\r\n2). 充值金额未达到条件.\r\n3). 背包里消耗栏位已满,请清理.");
			cm.dispose();
				}
           }
      }
   }
}