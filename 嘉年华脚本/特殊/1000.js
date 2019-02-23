var status = 0;
var typed=0;
//中介币的物品ID
var zjbid = 4310014;
var zmtid = 4310036;
var zyhzid = 4033356;
var zmtNum = java.lang.Math.floor(Math.random() * 100001 + 10000);
var zyhzNum = java.lang.Math.floor(Math.random() * 70001 + 30000);
var zjbNum = java.lang.Math.floor(Math.random() * 1500001 + 500000);
var yeNum = java.lang.Math.floor(Math.random() * 3000000 + 2000000);
var zjNum = 1500000;
function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) { 
			var TXT = "";
			if (cm.getChar().isGM()){
				TXT = "\r\n#L100#[武器]GM突破 (#k目前状态：#r推荐内容#b)#l\r\n";
			}
			cm.sendSimple("亲爱的#r#h ##k您好，我是伤害上限突破系统:\r\n#r#L999#伤害上限突破简介#l\r\n\r\n#l\r\n#L5#[武器]中介币突破 #b(#k目前状态：#r土豪推荐#b)#l\r\n#L1#[武器]雪花币突破 (#k目前状态：#r推荐内容#b)#l\r\n#L2#[武器]正义火种突破 (#k目前状态：#r火爆内容#b)#l\r\n#L3#[武器]征服者币突破 (#k目前状态：#r火爆内容#b)#l"+TXT);
		} else if (status == 1) {
			if (selection == 999) {
				cm.sendOk("\t我能够为你的武器增加武器攻击伤害上限以提升您的潜在输出能力。使用不同的道具对武器伤害上限提升的效果不同。\r\n\t1.消耗#b50充值余额#k突破，每次可以为武器提升200W~500W伤害。\r\n\t1.消耗100个#b#v4310014#雪花币#k突破，每次可以为武器提升50W~200W伤害。\r\n\t1.消耗50个#b#v4310048#中介币#k突破，每次可以为武器提升100W伤害。\r\n\t2.消耗3个#b#v4033356#正义火种1#k突破，每次可以为武器提升3W~10W的伤害。\r\n\t3.消耗400个#b#v4310036#征服者币#k突破，每次可以为武器提升10W~20W的伤害。");
			cm.dispose();
			} else {
				typed=selection;
				if (selection == 1) {
					cm.sendYesNo("是否花费100个#b雪花币#k对当前穿戴的武器进行伤害上限突破？");
				} else if (selection == 2) { 
					cm.sendYesNo("是否花费3个#b正义火种1#k对当前穿戴的武器进行伤害上限突破？");
				} else if (selection == 3) {
					cm.sendYesNo("是否花费400个#b征服者币#k对当前穿戴的武器进行伤害上限突破？");
				} else if (selection == 4) {
					cm.sendYesNo("是否花费50#b余额#k对当前穿戴的武器进行伤害上限突破？");
				} else if (selection == 5) {
					cm.sendYesNo("是否花费50#b中介币#k对当前穿戴的武器进行伤害上限突破？");
				} else if (selection == 100) {
					cm.sendYesNo("是否对当前穿戴的武器进行2E伤害上限突破？");
				}
			}
		} else if (status == 2) {
			if (selection = -1)
				selection = typed;
			if (selection == 3) {
				//字母突破
					if(cm.haveItem(zmtid, 400)){
						if (cm.WeaponLimitBreak(zmtNum)) {
							
							cm.gainItem(zmtid,-400);
								cm.sendOk("#b伤害上限突破成功.\r\n\r\n本次追加伤害为：#r"+ zmtNum +"#b.");
							cm.worldSpouseMessage(0x20,"[伤害突破] 玩家 "+ cm.getChar().getName() +" 使用 征服者币 让武器伤害上限突破成功 本次追加 "+ zmtNum +" 伤害值 。");
						}else{
								cm.sendOk("#b突破失败.\r\n系统为检测到角色身上装备武器.");
						}
								cm.dispose();
						}else{
								cm.sendOk("#b突破失败.\r\n需要 400个 征服者 才可以突破.");
								cm.dispose();
						}
			} else if (selection == 1) {
				var A= java.lang.Math.floor((Math.random() * 99)+1);
				if (A<=50){
					zjbNum = java.lang.Math.floor((Math.random() * 600000)+500000);
				}else if (A>50&&A<=75){
					zjbNum = java.lang.Math.floor((Math.random() * 600000)+1000000);
				}else if (A>75&&A<=100){
					zjbNum = java.lang.Math.floor((Math.random() * 800000)+1200000);
				}
					if(cm.haveItem(zjbid, 100)){
						if (cm.WeaponLimitBreak(zjbNum)) {
						
							cm.gainItem(zjbid,-100);
								cm.sendOk("#b伤害上限突破成功.\r\n\r\n本次追加伤害为：#r"+ zjbNum +"#b.");
							cm.worldSpouseMessage(0x20,"[伤害突破] 玩家 "+ cm.getChar().getName() +" 使用 雪花币 让武器伤害上限突破成功 本次追加 "+ zjbNum +" 伤害值 。");
						}else{
								cm.sendOk("#b突破失败.\r\n系统为检测到角色身上装备武器.");
						}
								cm.dispose();
						}else{
								cm.sendOk("#b突破失败.\r\n需要 100个 雪花币 才可以突破.");
								cm.dispose();
						}
			} else if (selection == 2) {
					if(cm.haveItem(4033356, 3)){
						if (cm.WeaponLimitBreak(zyhzNum)) {
							cm.gainItem(4033356,-3);
							cm.sendOk("#b伤害上限突破成功.\r\n\r\n本次追加伤害为：#r"+ zyhzNum +"#b.");
							cm.worldSpouseMessage(0x20,"[伤害突破] 玩家 "+ cm.getChar().getName() +" 使用 正义火种1 让武器伤害上限突破成功 本次追加 "+ zyhzNum +" 伤害值 。");
						}else{
								cm.sendOk("#b突破失败.\r\n系统为检测到角色身上装备武器.");
						}
								cm.dispose();
						}else{
								cm.sendOk("#b突破失败.\r\n需要 3个 正义火种1 才可以突破.");
								cm.dispose();
						}
			} else if (selection == 4) {
				var A= java.lang.Math.floor((Math.random() * 99)+1);
				if (A<=35){
					yeNum = java.lang.Math.floor((Math.random() * 500000)+2000000);
				}else if (A>35&&A<=65){
					yeNum = java.lang.Math.floor((Math.random() * 500000)+2500000);
				}else if (A>65&&A<=85){
					yeNum = java.lang.Math.floor((Math.random() * 500000)+3000000);
				}else if (A>85&&A<=95){
					yeNum = java.lang.Math.floor((Math.random() * 500000)+3500000);
				}else if (A>95&&A<=100){
					yeNum = java.lang.Math.floor((Math.random() * 1000000)+4000000);
				}
					if (cm.getHyPay(1) > 49) {
						if (cm.WeaponLimitBreak(yeNum)) {
						
						    cm.addHyPay(50);
								cm.sendOk("#b伤害上限突破成功.\r\n\r\n本次追加伤害为：#r"+ yeNum +"#b.");
							cm.worldSpouseMessage(0x20,"[伤害突破] 玩家 "+ cm.getChar().getName() +" 使用 [ 50 ]余额 让武器伤害上限突破成功 本次追加 "+ yeNum +" 伤害值 。");
						}else{
								cm.sendOk("#b突破失败.\r\n系统为检测到角色身上装备武器.");
						}
								cm.dispose();
						}else{
								cm.sendOk("#b突破失败.\r\n需要 50充值余额 才可以突破.");
								cm.dispose();
						}
			} else if (selection == 5) {
					if (cm.haveItem(4000463,50)) {
						if (cm.WeaponLimitBreak(zjNum)) {
						
						    cm.gainItem(4000463,-50);
								cm.sendOk("#b伤害上限突破成功.\r\n\r\n本次追加伤害为：#r"+ zjNum +"#b.");
							cm.worldSpouseMessage(0x20,"[伤害突破] 玩家 "+ cm.getChar().getName() +" 使用 [ 50 ]中介币 让武器伤害上限突破成功 本次追加 "+ zjNum +" 伤害值");
						}else{
								cm.sendOk("#b突破失败.\r\n系统为检测到角色身上装备武器.");
						}
								cm.dispose();
						}else{
								cm.sendOk("#b突破失败.\r\n需要 50中介币 才可以突破.");
								cm.dispose();
						}
			} else if (selection == 100) {
					if (cm.getPlayer().isGM()) {
						if (cm.WeaponLimitBreak(200000000)) {
							cm.sendOk("#b伤害上限突破成功.\r\n\r\n本次追加伤害为：#r2E#b.");
							//cm.worldSpouseMessage(0x20,"[伤害突破] 玩家 "+ cm.getChar().getName() +" 使用 [ 50 ]中介币 让武器伤害上限突破成功 本次追加 "+ zjNum +" 伤害值");
						}else{
								cm.sendOk("#b突破失败.\r\n系统为检测到角色身上装备武器.");
						}
								cm.dispose();
						}else{
								cm.sendOk("#b突破失败.\r\n你不是最高等级GM");
								cm.dispose();
						}
			}
		}
	}
}