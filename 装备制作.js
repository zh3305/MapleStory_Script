var status = -1;
var typed = 0;
var attrsChinese = Array("力量","敏捷","智力","运气","魔法攻击","物理攻击","HP","MP","已强化次数","剩余强化次数","强化等级","BOSS伤害[非潜能]","无视怪物防御力[非潜能]","总伤害[非潜能]","所有属性[非潜能]","伤害上限突破","装备名牌");
var toDrop = null;
var itemid = 0;
var ii = null;
function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		cm.dispose();
		return;
		//status--;
	}
	if (status == 0) {
		if (!cm.getPlayer().isGM()) {
			cm.sendOk("你无法使用该功能。");
			cm.dispose();
			return;
		}
		ii = cm.getItemInfo();
		cm.sendGetNumber("请输入要制作的装备ID：",0,999999,1999999);
		status = 99;
	} else {
		var index = status%100;
		if (status == 100) {
			itemid = selection;
			if (cm.getItemName(itemid)==null)
			{
				status = -1;
				cm.sendSimple("不存在的ID，请重新输入");
				return;
			}
			toDrop = ii.getEquipById(selection).copy();
		} else {
			var cVal = selection;
			if (attrsChinese[index-1] == "装备名牌")
				cVal = cm.getText();
			setAttr((index-1), cVal);
		}
		if (index>(attrsChinese.length-1)) {
			cm.addFromDrop(cm.getC(),toDrop,false);
			cm.sendOk("制作完毕");
			cm.dispose();
			return;
		} else {
			if (attrsChinese[index] == "装备名牌") {
				cm.sendGetText("#i"+itemid+":#请输入装备#r#e"+attrsChinese[index]+"#n#k的值：");
			} else {
				var maxVal = 32767;
				if (attrsChinese[index]=="伤害上限突破")
					maxVal = 2100000000;
				cm.sendGetNumber("#i"+itemid+":#请输入装备#r#e"+attrsChinese[index]+"#n#k的值：",0,0,maxVal);
			}
		}
	}
}
function setAttr(num,val) {
	switch(num) {
		case 0: 
			toDrop.setStr(val);
			break;
		case 1:
			toDrop.setDex(val);
			break;
		case 2:
			toDrop.setInt(val);
			break;
		case 3:
			toDrop.setLuk(val);
			break;
		case 4:
			toDrop.setMatk(val);
			break;
		case 5:
			toDrop.setWatk(val);
			break;
		case 6:
			toDrop.setHp(val);
			break;
		case 7:
			toDrop.setMp(val);
			break;
		case 8:
			toDrop.setLevel(val);
			break;
		case 9:
			toDrop.setUpgradeSlots(val);
		case 10:
			toDrop.setEnhance(val);
			break;
		case 11:
			toDrop.setBossDamage(val);
			break;
		case 12:
			toDrop.setIgnorePDR(val);
			break;
		case 13:
			toDrop.setTotalDamage(val);
			break;
		case 14:
			toDrop.setAllStat(val);
			break;
		case 15:
			toDrop.setLimitBreak(val);
			break;
		case 16:
			toDrop.setOwner(val);
			break;
		default:
			return null;
	}
}