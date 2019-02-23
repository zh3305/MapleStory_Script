/** Author: nejevoli
	NPC Name: 		NimaKin
	Map(s): 		Victoria Road : 隐秘之路 - 工作场所 (180000000)
	Description: 		Maxes out your stats and able to modify your equipment stats
*/
importPackage(java.lang);

var status = 0;
var slot = Array();
var stats = Array("力量", "敏捷", "智力", "运气", "HP", "MP", "物理攻击", "魔法攻击", "物理防御", "魔法防御", "命中率", "回避率", "手技", "移动速度", "跳跃力", "可升级次数", "金锤子次数", "已升级次数", "鉴定等级", "装备星级");
var selected;
var statsSel;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status >= 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        if (cm.getPlayerStat("GM") == 1) {
            cm.sendSimple("亲爱的管理员#r#h ##k您好，您有什么事情需要我帮忙的吗?#b\r\n#L0#加满属性#l\r\n#L2#修改装备属性#l\r\n#L3#查看潜能属性#l\r\n#L4#初始化AP/SP#l\r\n#L5#清除技能#l\r\n#L6#加满职业技能#l\r\n#L7#初始化属性\r\n#L15#一键潜能#l\r\n#L14#伤害上限突破#l\r\n#L13#固定职业装备#l\r\n#L16#调整固定属性#l\r\n#L30#潜能固定防具属性#l\r\n#L31#潜能固定武器属性#l\r\n#L32#装备上锁#l\r\n#L33#蓝调专用#l\r\n#L34#160装备解封#l#k");
        } else if (cm.getPlayerStat("GM") != 1) {
            cm.sendSimple("亲爱的管理员#r#h ##k您好，您有什么事情需要我帮忙的吗?#b\r\n#L32#装备一键上锁#l");
        } else {
            cm.dispose();
        }
    } else if (status == 1) {
        if (selection == 0) {
            if (cm.getPlayerStat("GM") == 1) {
                cm.maxStats();
                cm.sendOk("I have maxed your stats. Happy Mapling!");
            }
            cm.dispose();
        } else if (selection == 15) {
		cm.dispose();
		cm.openNpc(9900000,3001);
        } else if (selection == 14) {
		cm.dispose();
		cm.openNpc(9900000,3008);
        } else if (selection == 16) {
		cm.dispose();
		cm.openNpc(9900000,4000);
        } else if (selection == 13) {
		cm.dispose();
		cm.openNpc(9900000,5000);
        } else if (selection == 30) {
		cm.dispose();
		cm.openNpc(9900000,6000);
        } else if (selection == 31) {
		cm.dispose();
		cm.openNpc(9900000,6001);
        } else if (selection == 32) {
		cm.dispose();
		cm.openNpc(9900000,7000);
        } else if (selection == 33) {
		cm.dispose();
		cm.openNpc(9900000,4001);
        } else if (selection == 34) {
		if(cm.levelUpSealedEquip(1, false)) {
			cm.sendOk("成功");
		} else {
			cm.sendOk("失败");
		}
		cm.dispose();
        } else if (selection == 7) {
            if (cm.getPlayerStat("GM") == 1) {
                cm.getPlayer().resetStats(4, 4, 4, 4);
                cm.sendOk("I have cleared your stats. Happy Mapling!");
            }
            cm.dispose();
        } else if (selection == 1) {
            //Beginner
            if (cm.getPlayerStat("GM") == 1) {
                cm.maxAllSkills();
            }
            cm.dispose();
        } else if (selection == 2 && cm.getPlayerStat("GM") == 1) {
            var avail = "";
            for (var i = -1; i > -199; i--) {
                if (cm.getInventory( - 1).getItem(i) != null) {
                    avail += "#L" + Math.abs(i) + "##t" + cm.getInventory( - 1).getItem(i).getItemId() + "##l\r\n";
                }
                slot.push(i);
            }
            cm.sendSimple("请选择您需要修改属性的装备:\r\n#b" + avail);
        } else if (selection == 3 && cm.getPlayerStat("GM") == 1) {
            var eek = cm.getAllPotentialInfo();
            var avail = "#L0#Search for potential item#l\r\n";
            for (var ii = 0; ii < eek.size(); ii++) {
                avail += "#L" + eek.get(ii) + "#潜能 ID " + eek.get(ii) + "#l\r\n";
            }
            cm.sendSimple("What would you like to learn about?\r\n#b" + avail);
            status = 9;
        } else if (selection == 4) {
            cm.getPlayer().resetAPSP();
            cm.dispose();
        } else if (selection == 5) {
            cm.clearSkills();
            cm.dispose();
        } else if (selection == 6) {
            cm.maxSkillsByJob();
            cm.dispose();
        } else {
            cm.dispose();
        }
    } else if (status == 2 && cm.getPlayerStat("GM") == 1) {
        selected = selection - 1;
        var text = "";
        for (var i = 0; i < stats.length; i++) {
            text += "#L" + i + "#" + stats[i] + "#l\r\n";
        }
        cm.sendSimple("你选择了修改 #b#t" + cm.getInventory( - 1).getItem(slot[selected]).getItemId() + "##k 装备的属性\r\n请选择修改这个装备的具体属性\r\n#b" + text);
    } else if (status == 3 && cm.getPlayerStat("GM") == 1) {
        statsSel = selection;
        cm.playerMessage("当前选择 " + selection+"  "+slot[selected]);
        if (selection == 20) {
            cm.sendGetText("What would you like to set your #b#t" + cm.getInventory( - 1).getItem(slot[selected]).getItemId() + "##k's " + stats[statsSel] + " to?");
} else {
            cm.sendGetNumber("What would you like to set your #b#t" + cm.getInventory( - 1).getItem(slot[selected]).getItemId() + "##k's " + stats[statsSel] + " to?", 0, 0, 32767);
        }
    } else if (status == 4 && cm.getPlayerStat("GM") == 1) {
        cm.changeStat(slot[selected], statsSel, selection);
        cm.playerMessage("当前选择 " + selection +"  "+slot[selected]+" "+ stats[statsSel]);
        cm.sendOk("Your #b#t" + cm.getInventory( - 1).getItem(slot[selected]).getItemId() + "##k's " + stats[statsSel] + " has been set to " + selection + ".");
        cm.dispose();
    } else if (status == 10 && cm.getPlayerStat("GM") == 1) {
        if (selection == 0) {
            cm.sendGetText("What would you like to search for? (e.g. STR %)");
            return;
        }
        cm.sendSimple("#L3#" + cm.getPotentialInfo(selection) + "#l");
        status = 0;
    } else if (status == 11 && cm.getPlayerStat("GM") == 1) {
        var eek = cm.getAllPotentialInfoSearch(cm.getText());
        for (var ii = 0; ii < eek.size(); ii++) {
            avail += "#L" + eek.get(ii) + "#Potential ID " + eek.get(ii) + "#l\r\n";
        }
        cm.sendSimple("What would you like to learn about?\r\n#b" + avail);
        status = 9;
    } else {
        cm.dispose();
    }
}