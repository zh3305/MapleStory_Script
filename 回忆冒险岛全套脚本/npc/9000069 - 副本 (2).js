var icon = "#fUI/UIToolTip.img/Item/Equip/Star/Star#";
var icon2 = "#fUI/Basic.img/BtMin2/normal/0#";
var typed=1;
var cost = 5;
var itemid = 0;
var paynx = 20;
var equip = null;
var btnOk="#fUI/CashShop.img/CSCoupon/BtOK/normal/0#";
var btnOk_disabled="#fUI/CashShop.img/CSCoupon/BtOK/disabled/0#";
var isUpgrade = false;
var dropGrade = 0;
var successRate = 0;
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
	if (status == 0) {
		var text="唔嘛弥呗呗弘~又一件惊世神装要诞生了……\r\n#b";
		text+="#L1##r时装升星系统简介#l#b\r\n\r\n";
		text+="#L2#"+icon2+" 开始强化#l\r\n";
		text+="#L3#"+icon2+" 领取每日福利#l\r\n";
		//text+="#L3#"+icon2+" 点卷觉醒时装 #rx"+cost[1]+"/次#b#l\r\n";
		//text+="#L4#"+icon2+" 冬季限量币觉醒时装 #rx"+cost[2]+"/次#l\r\n";
		//text+="#L5#"+icon2+" 一键神级觉醒 #r#l\r\n";
		cm.sendSimple(text);
	} else if (status == 1){
		if (selection == 1) {
			typed=1;
			//var text="当玩家的等级达到#e#r120#n#k级时可以使用时装觉醒系统，时装觉醒系统能够为你的点装增加一定的#b力量、敏捷、智力、运气、攻击力、魔法力、命中值#k，目前可以使用游戏币、点卷、冬季限量币激活点装，每种觉醒的方式带来的能力效果都不同。\r\n"+icon+" 使用#r游戏币#k觉醒点装只能为点装增加#b力量、敏捷、智力、运气#k这四个属性值，并且能力值均为#r1#k\r\n"+icon+" 使用#b点卷#k觉醒点装，能为点装增加上述所有能力值，并且随机波动#r1-3#k点\r\n"+icon+" 使用#b冬季限量币#k则能够随机出现波动#r2-6#k点，并有几率产生全属性#b+15#k的#r神级觉醒#k\r\n\r\n#r#e(*) 觉醒后的点装可以重复觉醒";
			var text = "#d#e什么是时装升星？#n#k\r\n";
			text+="\t时装升星指的是为没有属性的点装赋予强大的属性，赋予的属性包括#b力量、敏捷、智力、运气、魔法力、HP、MP、攻击力、回避值，#r开始强化时，请把要强化的点装放置在装备栏第一格的位置！#k#k\r\n";
			text+="\r\n#d#e如何为时装升星？#n#k\r\n";
			text+="\t时装升星需要消耗#t4310129#和极其少量的点卷。\r\n";
			text+="\t#b1~5星#k：时装#b【力量、敏捷、智力、运气】#r+1#k\r\n";
			text+="\t#b6~10星#k：时装#b【力量、敏捷、智力、运气】#r+1，#b【魔法力、攻击力】#r+1,#b【HP、MP】#r+30#k\r\n";
			text+="\t#b11~15星#k：时装#b【力量、敏捷、智力、运气】#r+1，#b【魔法力、攻击力】#r+3,#b【HP、MP】#r+50#k\r\n";
			//text+="\t#b神级觉醒#k：使用#d冬季限量币#k有几率将时装觉醒的等级激活为神级觉醒的效果，使得时装#b【力量、敏捷、智力、运气、魔法力、攻击力、回避值】#d属性值#r+15#k#k\r\n";
			text+="\r\n#d#e其他说明：#n#k\r\n";
			text+="\t部分等级在强化失败时可能会产生星级倒退的现象。12~15星强化如果失败，星级必然下降。\r\n";
			cm.sendPrev(text);
		} else if (selection == 2) {
			equip = cm.getInventory(1).getItem(1);
			if (equip==null) {
				cm.sendOk("你确认你包裹的第一栏有装备存在？");
				cm.dispose();
				return;
			}
			itemid = equip.getItemId();
			if (!cm.isCash(itemid)) {
				cm.sendOk("你确认你包裹的第一栏是现金道具吗？");
				cm.dispose();
				return;
			}
			var currentStar = equip.getEnhance();
			if (currentStar>=15) {
				cm.sendOk("当前装备已强化至最高星级，无法继续强化。");
				cm.dispose();
				return;
			}
			calcRate(currentStar+1);
			//强化操作区
			if (isUpgrade) {
				if (!cm.haveItem(4310129, cost) || cm.getPlayer().getCSPoints(1)<paynx) {
					cm.sendOk("您的点卷或者冬季限量币不足，请检查！");
					cm.dispose();
					return ;
				}
				var successChance = Math.floor(Math.random()*100);
				if (successRate >= successChance) {
					//强化成功
					upgrade();
					cm.getPlayer().dropMessage(-1, "强化成功");
				} else {
					//强化失败
					var dropChance = Math.floor(Math.random()*100);
					if (dropGrade >= dropChance) {
						dropgrade();
						cm.getPlayer().dropMessage(-1, "强化失败，并降级");
					} else {
						cm.getPlayer().dropMessage(-1, "强化失败");
					}
				}
				cm.gainItem(4310129, -cost);
				cm.gainNX(-paynx);
				//重新获取装备属性
				currentStar = equip.getEnhance();
				//重新计算概率
				calcRate(currentStar+1);
				
			}
			
			//面板区域
			var text = "#d#e当前强化装备：#n#k#v"+itemid+"#\r\n";
			text += "#d#e当前强化等级：#n#k";
			var isStar = 0;
			for(var i =0; i<currentStar; i++) {
				text += icon;
				if ((i+1)%5==0)
					text+=" ";
				isStar++;
			}
			if (isStar<=0)
				text+="#r未强化#k\r\n";
			else
				text+="\r\n";
			text+="#d#e所需强化道具：  #n#k#b#t4310129# #r"+cost+"#k个\r\n";
			text+="#d#e剩余强化道具：  #n#k#b"+cm.getItemQuantity(4310129)+"#k个\r\n";
			text+="#d#e消耗点卷数量：  #n#k#b"+paynx+"#k 点\r\n";
			text+="#d#e本次强化成功率： #n#k"+successRate+"%\r\n";
			if (dropGrade == 0)
				text+="#e#g本次强化失败不下降星级#n#k\r\n";
			else if (dropGrade == 100) 
				text+="#e#r本次强化失败必然下降星级#n#k\r\n";
			else
				text+="#e#r本次强化失败可能下降星级#n#k\r\n";
			text+="#L2#"+btnOk+"#l";
			status=0;
			isUpgrade = true;
			cm.sendSimple(text);
		}
 	} else if (status == 2){
		
	}
}
function calcRate(enhance) {
	if (enhance >= 1 && enhance <= 5) {
		if (enhance == 1) {
			dropGrade = 0;
		} else {
			dropGrade = 50;
		}
		successRate=100-((enhance-1)*10);
		cost = 5;
		paynx = 20;
	}
	if (enhance >= 6 && enhance <= 10) {
		if (enhance == 6) {
			dropGrade = 0;
		} else if (enhance == 10){
			dropGrade = 100;
		} else {
			dropGrade = 50;
		}
		successRate=76-((enhance-6)*10);
		cost = 25;
		paynx = 50;
	}
	if (enhance >= 11 && enhance <= 15) {
		if (enhance == 11) {
			dropGrade = 0;
		} else if (enhance == 13 || enhance == 14 || enhance == 15){
			dropGrade = 100;
		} else {
			dropGrade = 50;
		}
		successRate=36;
		cost = 125;
		paynx = 100;
	}
}
function upgrade() {
	var _Str = 1;
	var _Dex = 1;
	var _Int = 1;
	var _Luk = 1;
	var _Matk = 0;
	var _Watk = 0;
	var _Acc = 0;
	var _Hp = 0;
	var _Mp = 0;
	if (equip.getEnhance()>=5 && equip.getEnhance()<=9) {
		_Matk = 1;
		_Watk = 1;
		_Acc = 1;
		_Hp = 30;
		_Mp = 30;
	}
	if (equip.getEnhance()>=10 && equip.getEnhance()<=14) {
		_Matk = 3;
		_Watk = 3;
		_Acc = 3;
		_Hp = 50;
		_Mp = 50;
	}
	if (equip.getEnhance() >= 15) {
		return false;
	}
	var ii = cm.getItemInfo();				
	var toDrop = equip.copy();       
	toDrop.setStr(equip.getStr()+_Str); //装备力量
	toDrop.setDex(equip.getDex()+_Dex); //装备敏捷
	toDrop.setInt(equip.getInt()+_Int); //装备智力
	toDrop.setLuk(equip.getLuk()+_Luk); //装备运气
	toDrop.setMatk(equip.getMatk()+_Matk); //物理攻击
	toDrop.setWatk(equip.getWatk()+_Watk); //魔法攻击 
	toDrop.setHp(equip.getHp()+_Hp); //魔法攻击 
	toDrop.setMp(equip.getMp()+_Mp); //魔法攻击 
	toDrop.setAcc(equip.getAcc()+_Acc); //
	toDrop.setEnhance(equip.getEnhance()+1); //
	//toDrop.setOwner(level);
	toDrop.setExpiration(equip.getExpiration());
	cm.removeItem(1, 1, 1);
	cm.addFromDrop(cm.getC(), toDrop, false);
	
	equip = cm.getInventory(1).getItem(1);
	if (equip.getEnhance()==10) {
		cm.worldMessageItem("[时装升星] : " + "玩家[" + cm.getPlayer().getName() + "]历经千辛万苦，将时装强化至 10 星", toDrop);
	} else if (equip.getEnhance()==15) {
		cm.worldMessageItem("[时装升星] : " + "不可思议，玩家[" + cm.getPlayer().getName() + "]将时装强化至 15 星", toDrop);
	}
	return true;
}
function dropgrade() {
	var _Str = -1;
	var _Dex = -1;
	var _Int = -1;
	var _Luk = -1;
	var _Matk = 0;
	var _Watk = 0;
	var _Acc = 0;
	var _Hp = 0;
	var _Mp = 0;
	if (equip.getEnhance()>=6 && equip.getEnhance()<=10) {
		_Matk = -1;
		_Watk = -1;
		_Acc = -1;
		_Hp = -30;
		_Mp = -30;
	}
	if (equip.getEnhance()>=11 && equip.getEnhance()<=15) {
		_Matk = -3;
		_Watk = -3;
		_Acc = -3;
		_Hp = -50;
		_Mp = -50;
	}
	if (equip.getEnhance() <= 0) {
		return false;
	}
	var ii = cm.getItemInfo();				
	var toDrop = equip.copy();       
	toDrop.setStr(equip.getStr()+_Str); //装备力量
	toDrop.setDex(equip.getDex()+_Dex); //装备敏捷
	toDrop.setInt(equip.getInt()+_Int); //装备智力
	toDrop.setLuk(equip.getLuk()+_Luk); //装备运气
	toDrop.setMatk(equip.getMatk()+_Matk); //物理攻击
	toDrop.setWatk(equip.getWatk()+_Watk); //魔法攻击 
	toDrop.setHp(equip.getHp()+_Hp); //魔法攻击 
	toDrop.setMp(equip.getMp()+_Mp); //魔法攻击 
	toDrop.setAcc(equip.getAcc()+_Acc); //
	toDrop.setEnhance(equip.getEnhance()-1); //
	//toDrop.setOwner(level);
	toDrop.setExpiration(equip.getExpiration());
	cm.removeItem(1, 1, 1);
	cm.addFromDrop(cm.getC(), toDrop, false);
	equip = cm.getInventory(1).getItem(1);
	return true;
}