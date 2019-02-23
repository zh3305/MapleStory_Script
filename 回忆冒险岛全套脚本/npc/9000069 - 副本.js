var icon = "#fUI/UIToolTip.img/Item/Equip/Star/Star#";
var icon2 = "#fUI/Basic.img/BtMin2/normal/0#";
var typed=1;
var cost = Array(10000000, 2000, 5);
var itemid = 0;
var equip = null;
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
		/*
		if (cm.getPlayer().getName() != "哈士奇") {
			cm.sendOk("你不是哈士奇，无法命令我。");
			cm.dispose();
			return;
		}*/
		var text="你好，我是#b#e时装觉醒大师#n#k，我能让你的时装发挥出更大的作用！切记，把你想要觉醒的点装放到装备栏的#r第一格#k就可以了，这样我就可以为你服务了。\r\n#b";
		text+="#L1#"+icon+" 使用说明（必看）#l\r\n";
		text+="#L2#"+icon2+" 游戏币觉醒时装 #rx"+cost[0]+"/次#b#l\r\n";
		text+="#L3#"+icon2+" 点卷觉醒时装 #rx"+cost[1]+"/次#b#l\r\n";
		text+="#L4#"+icon2+" 冬季限量币觉醒时装 #rx"+cost[2]+"/次#l\r\n";
		text+="#L5#"+icon2+" 一键神级觉醒 #r#l\r\n";
		cm.sendSimple(text);
	} else if (status == 1){
		if (selection == 1) {
			typed=1;
			//var text="当玩家的等级达到#e#r120#n#k级时可以使用时装觉醒系统，时装觉醒系统能够为你的点装增加一定的#b力量、敏捷、智力、运气、攻击力、魔法力、命中值#k，目前可以使用游戏币、点卷、冬季限量币激活点装，每种觉醒的方式带来的能力效果都不同。\r\n"+icon+" 使用#r游戏币#k觉醒点装只能为点装增加#b力量、敏捷、智力、运气#k这四个属性值，并且能力值均为#r1#k\r\n"+icon+" 使用#b点卷#k觉醒点装，能为点装增加上述所有能力值，并且随机波动#r1-3#k点\r\n"+icon+" 使用#b冬季限量币#k则能够随机出现波动#r2-6#k点，并有几率产生全属性#b+15#k的#r神级觉醒#k\r\n\r\n#r#e(*) 觉醒后的点装可以重复觉醒";
			var text = "#d#e什么是时装觉醒？#n#k\r\n";
			text+="\t时装觉醒指的是为没有属性的点装赋予强大的属性，赋予的属性包括#b力量、敏捷、智力、运气、魔法力、攻击力、回避值#k，消耗不同道具所产生的觉醒等级不同。\r\n";
			text+="\r\n#d#e时装觉醒的等级：#n#k\r\n";
			text+="\t时装觉醒的等级分为#b初级觉醒、中级觉醒、高级觉醒#k和#b神级觉醒，不同等级觉醒所带来的强化效果不同。\r\n";
			text+="\t#b初级觉醒#k：使用#d游戏币#k即可以为时装强化为初级觉醒的效果，使得时装#b【力量、敏捷、智力、运气】#d属性值#r+3#k\r\n";
			text+="\t#b中级觉醒#k：使用#d点卷#k即可以为时装强化为中级觉醒的效果，使得时装#b【力量、敏捷、智力、运气、魔法力、攻击力、回避值】#d属性值#k随机波动#r1~3#k点\r\n";
			text+="\t#b高级觉醒#k：使用#d冬季限量币#k有几率将时装觉醒的等级激活为高级觉醒的效果，使得时装#b【力量、敏捷、智力、运气】#d属性值#k随机波动#r3~6#k\r\n";
			text+="\t#b神级觉醒#k：使用#d冬季限量币#k有几率将时装觉醒的等级激活为神级觉醒的效果，使得时装#b【力量、敏捷、智力、运气、魔法力、攻击力、回避值】#d属性值#r+15#k#k\r\n";
			text+="\r\n#d#e其他说明：#n#k\r\n";
			text+="\t#b冬季限量币#k所带来的觉醒等级均有可能，觉醒前请将要觉醒的点装放置在装备栏第一格。\r\n";
			cm.sendPrev(text);
		} else if (selection == 2) {
			typed=2;
			var text="这将花费掉你#r"+cost[0]+"#k的游戏币为你的点装觉醒，请确认你已经把你想要觉醒的点装放到了#e#b装备栏的第一格#n#k\r\n\r\n#r(*) 注意：如果你的点装已经具备高于本档次的属性，也同样会被重置为该档次的属性，你是否还要继续？";
			cm.sendYesNo(text);
		} else if (selection == 3) {
			typed=3
			var text="这将花费掉你#r"+cost[1]+"#k点卷为你的点装觉醒，请确认你已经把你想要觉醒的点装放到了#e#b装备栏的第一格#n#k\r\n\r\n#r(*) 注意：如果你的点装已经具备高于本档次的属性，也同样会被重置为该档次的属性，你是否还要继续？";
			cm.sendYesNo(text);
		} else if (selection == 4) {
			typed=4
			var text="这将花费掉你#r"+cost[2]+"#k个冬季限量币为你的点装觉醒，请确认你已经把你想要觉醒的点装放到了#e#b装备栏的第一格#n#k\r\n\r\n#r(*) 注意：如果你的点装已经具备高于本档次的属性，也同样会被重置为该档次的属性，你是否还要继续？";
			cm.sendYesNo(text);
		} else if (selection == 5) {
			typed=5
			var text="#e#r此操作将一直扣除冬季限量币直到点装出现神级觉醒，并且不能主动停止，如果冬季限量币不足，并且还未出现神级觉醒，操作才将会停止。#n#k\r\n请确认你已经把你想要觉醒的点装放到了#e#b装备栏的第一格#n#k\r\n\r\n#r(*) 注意：如果你的点装已经具备高于本档次的属性，也同样会被重置为该档次的属性，你是否还要继续？";
			cm.sendYesNo(text);
		}
 	} else if (status == 2){
		if (cm.getLevel() < 120) {
			cm.sendOk("等级达到120级的英雄才可以使用此系统");
			cm.dispose();
			return;
		}
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
		switch(typed) {
			case 2:
				if (cm.getMeso()<cost[0]) {
					cm.sendOk("你没有这么多游戏币呢，少年！");
					cm.dispose();
					return;
				}
				cm.gainMeso(-cost[0]);
				upgrade(0);
			break;
			case 3:
				if (cm.getPlayer().getCSPoints(1)<cost[1]) {
					cm.sendOk("你没有这么多点卷呢，少年！");
					cm.dispose();
					return;
				}
				cm.gainNX(-cost[1]);
				upgrade(1);
			break;
			case 4:
				if (!cm.haveItem(4310129, cost[2])) {
					cm.sendOk("你没有这么多冬季限量币呢，少年！");
					cm.dispose();
					return;
				}
				var superRate = Math.floor(Math.random()*300);
				cm.gainItem(4310129, -cost[2]);
				
				if (superRate == 10) {
					upgrade(3);
					cm.worldMessageItem("[时装觉醒] : " + "[" + cm.getPlayer().getName() + "]出现了神级觉醒！大家祝贺他(她)吧！", toDrop);
				} else {
					var rate = Math.floor(Math.random()*3);
					upgrade(rate);
				}
			break;
			case 5:
				var ii = cm.getItemInfo();					
				var toDrop = ii.randomizeStats(ii.getEquipById(itemid)).copy();       
				if (!cm.haveItem(4310129, cost[2])) {
					cm.sendOk("你没有这么多冬季限量币呢，少年！");
					cm.dispose();
					return;
				}
				_Str = getMinAndMax(2,6);
				_Dex = getMinAndMax(2,6);
				_Int = getMinAndMax(2,6);
				_Luk = getMinAndMax(2,6);
				_Matk = getMinAndMax(2,6);
				_Watk = getMinAndMax(2,6);
				_Acc = getMinAndMax(2,6);
				var owner = "高级觉醒";
				var count=0;
				var isGod = false;
				var MAXTIMES = Math.floor(cm.getItemQuantity(4310129)/cost[2]);
				for (var i = 0; i<MAXTIMES; i++) {
					var superRate = Math.floor(Math.random()*300);
					count++;
					cm.gainItem(4310129, -cost[2]);
					if (superRate == 5) {
						owner = "神级觉醒";
						_Str = 15;
						_Dex = 15;
						_Int = 15;
						_Luk = 15;
						_Matk = 15;
						_Watk = 15;
						_Acc = 15;
						isGod = true;
						//cm.worldSpouseMessage(0x15, "[系统公告] : 玩家【" + cm.getChar().getName() + "】使用一键觉醒将时装提升到神级觉醒！花费了"+count+"个冬季限量币！");
						break;
					}
				}
				toDrop.setStr(_Str); //装备力量
				toDrop.setDex(_Dex); //装备敏捷
				toDrop.setInt(_Int); //装备智力
				toDrop.setLuk(_Luk); //装备运气
				toDrop.setMatk(_Matk); //物理攻击
				toDrop.setWatk(_Watk); //魔法攻击 
				toDrop.setAcc(_Acc); //
				toDrop.setOwner(owner);
				toDrop.setExpiration(equip.getExpiration());
				cm.removeItem(1, 1, 1);
				cm.addFromDrop(cm.getC(), toDrop, false);
				var str= (isGod) ? "出现了神级觉醒" : "可惜没有出现神级觉醒";
				count*=cost[2];
				if (isGod) {
					cm.worldMessageItem("[时装觉醒] : " + "[" + cm.getPlayer().getName() + "]使用了一键觉醒！花费了"+count+"个冬季限量币！", toDrop);
				}
				cm.sendOk("花费了"+count+"个冬季限量币，#r"+str+"#k，打开#e#b装备栏#n#k看一看吧。");
				cm.dispose();
				return;
			break;
			
		}
		cm.sendOk("觉醒完成了，打开#e#b装备栏#n#k看一看吧。");
		cm.dispose();
	}
}

function getVal(maxVal) {
	return Math.floor(Math.random()*(maxVal))+1;
}
function getMinAndMax(minVal, maxVal) {
	return Math.floor(Math.random()*(maxVal-minVal+1))+minVal;
}
function upgrade(type) {
	var ii = cm.getItemInfo();					
	var toDrop = ii.randomizeStats(ii.getEquipById(itemid)).copy();       
	var _Str=0;
	var _Dex=0;
	var _Int=0;
	var _Luk=0;
	var _Matk = 0;
	var _Watk = 0;
	var _Acc = 0;
	var level = null;
	switch(type)
	{
		//初级觉醒
		case 0:
			level = "★初级觉醒★";
			_Str = 3;
			_Dex = 3;
			_Int = 3;
			_Luk = 3;
		break;
		//中级觉醒
		case 1:
			level = "★中级觉醒★";
			_Str = getVal(3);
			_Dex = getVal(3);
			_Int = getVal(3);
			_Luk = getVal(3);
			_Matk = getVal(3);
			_Watk = getVal(3);
			_Acc = getVal(3);
		break;
		//高级觉醒
		case 2:
			level = "★高级觉醒★";
			_Str = getMinAndMax(3,6);
			_Dex = getMinAndMax(3,6);
			_Int = getMinAndMax(3,6);
			_Luk = getMinAndMax(3,6);
			_Matk = getMinAndMax(3,6);
			_Watk = getMinAndMax(3,6);
			_Acc = getMinAndMax(3,6);
		break;
		//神级觉醒
		case 3:
			level = "★神级觉醒★";
			_Str = 15;
			_Dex = 15;
			_Int = 15;
			_Luk = 15;
			_Matk = 15;
			_Watk = 15;
			_Acc = 15;
		break;
	}
	toDrop.setStr(_Str); //装备力量
	toDrop.setDex(_Dex); //装备敏捷
	toDrop.setInt(_Int); //装备智力
	toDrop.setLuk(_Luk); //装备运气
	toDrop.setMatk(_Matk); //物理攻击
	toDrop.setWatk(_Watk); //魔法攻击 
	toDrop.setAcc(_Acc); //
	toDrop.setOwner(level);
	toDrop.setExpiration(equip.getExpiration());
	cm.removeItem(1, 1, 1);
	cm.addFromDrop(cm.getC(), toDrop, false);
}