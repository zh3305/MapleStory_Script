importPackage(java.lang);

var status = 0;
var slot = Array();
var stats = Array("力量", "敏捷", "智力", "运气", "HP", "MP", "物理攻击", "魔法攻击", "物理防御", "魔法防御", "命中率", "回避率", "手技", "移动速度", "跳跃力", "可升级次数", "金锤子次数", "已升级次数", "鉴定等级", "装备星级", "潜能属性 1", "潜能属性 2", "潜能属性 3");
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
        if (cm.getChar().getAccountID()==1) {
            cm.sendSimple("亲爱的#d  MapleWING管理员  #e#r#h ##k#n   您好！您有什么事情需要我帮忙的吗?#b\r\n#L2#修改装备属性#l\r\n#L0#加满属性#l\r\n#L1#加满所有技能#l\r\n#L3#查看潜能属性#l\r\n#L4#初始化AP/SP#l\r\n#L5#清除技能#l\r\n#L6#加满职业技能#l\r\n#L7#初始化属性#k");
        } else if (cm.getPlayerStat("GM") == 1) {
            cm.sendSimple("亲爱的管理员#r#h ##k您好，您有什么事情需要我帮忙的吗?#b\r\n#L0#加满属性#l\r\n#L1#加满所有技能#l\r\n#L4#初始化AP/SP#l\r\n#L7#初始化属性#k");
        } else {
            cm.dispose();
        }
    } else if (status == 1) {
        if (selection == 0) {
            if (cm.getChar().getAccountID()==1) {
                cm.maxStats();
                cm.sendOk("所有属性点加到最大值！");
            }
            cm.dispose();
        } else if (selection == 7) {
            if (cm.getChar().getAccountID()==1) {
                cm.getPlayer().resetStats(4, 4, 4, 4);
                cm.sendOk("属性点已经重置为4");
            }
            cm.dispose();
        } else if (selection == 1) {
            //Beginner
            if (cm.getChar().getAccountID()==1) {
                cm.maxAllSkills();
            }
            cm.dispose();
        } else if (selection == 2 && cm.getChar().getAccountID()==1) {
            var avail = "";
            for (var i = -1; i > -199; i--) {
                if (cm.getInventory( - 1).getItem(i) != null) {
                    avail += "#L" + Math.abs(i) + "##t" + cm.getInventory( - 1).getItem(i).getItemId() + "##l\r\n";
                }
                slot.push(i);
            }
            cm.sendSimple("请选择您需要修改属性的装备:\r\n#b" + avail);
        } else if (selection == 3 && cm.getChar().getAccountID()==1) {
            var eek = cm.getAllPotentialInfo();
            var avail = "#L0#Search for potential item#l\r\n";
            for (var ii = 0; ii < eek.size(); ii++) {
                avail += "#L" + eek.get(ii) + "#潜能 ID " + eek.get(ii) + "#l\r\n";
            }
            cm.sendSimple("你想要查看那个潜能ID\r\n#b" + avail);
            status = 9;
        } else if (selection == 4) {
            cm.getPlayer().resetAPSP();
            cm.sendOk("AP和SP已重置为0");
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
    } else if (status == 2 && cm.getChar().getAccountID()==1) {
        selected = selection - 1;
        var text = "";
        for (var i = 0; i < stats.length; i++) {
            text += "#L" + i + "#" + stats[i] + "#l\r\n";
        }
        cm.sendSimple("你选择了修改 #b#t" + cm.getInventory( - 1).getItem(slot[selected]).getItemId() + "##k 装备的属性\r\n请选择修改这个装备的具体属性\r\n#b" + text);
    } else if (status == 3 && cm.getChar().getAccountID()==1) {
        statsSel = selection;
        cm.playerMessage("当前选择 " + selection+"  "+slot[selected]);
        if (selection == 20) {
            cm.sendGetText("请输入你想要修改 #b#t" + cm.getInventory( - 1).getItem(slot[selected]).getItemId() + "#    #e#r " + stats[statsSel] + "   #n的数值：\r\n#r注意：输入的数值必须为潜能代码.如：权属性代码为60002");
} else {
            cm.sendGetNumber("请输入你想要修改 #b#t" + cm.getInventory( - 1).getItem(slot[selected]).getItemId() + "#     #e#r" + stats[statsSel] + " #n  的数值：\r\n#r注意：输入的数值不能超过32767\r\n", 0, 0, 32767);
        }
    } else if (status == 4 && cm.getChar().getAccountID()==1) {
        cm.changeStat(slot[selected], statsSel, selection);
        cm.playerMessage("当前选择 " + selection +"  "+slot[selected]+" "+ stats[statsSel]);
        cm.sendOk("你的 #b#t" + cm.getInventory( - 1).getItem(slot[selected]).getItemId() + "#     #e#d " + stats[statsSel] + " #n#r已经设置为 " + selection + ".");
        cm.dispose();
    } else if (status == 10 && cm.getChar().getAccountID()==1) {
        if (selection == 0) {
            cm.sendGetText("What would you like to search for? (e.g. STR %)");
            return;
        }
        cm.sendSimple("#L3#" + cm.getPotentialInfo(selection) + "#l");
        status = 0;
    } else if (status == 11 && cm.getChar().getAccountID()==1) {
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