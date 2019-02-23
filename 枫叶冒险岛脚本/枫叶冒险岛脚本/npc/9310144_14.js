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
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			var selStr = "#d#e欢迎使用绑定枫叶冒险岛币购买物品，请选择您想要的：#n#k\r\n";
			selStr +="\t#b您当前绑定枫叶冒险岛币为：  #r" + cm.getPlayerPoints() + " #b 点#n#k\r\n\r\n";
			selStr +="- #e#d道具#n\r\n"
			selStr +="#L1##b"+aaa+" 购买 #r#t5062002#礼包#k #b需要 #r1000000#k #b绑定币#l#k\r\n"; 
			selStr +="#L2##b"+aaa+" 购买 #r升级强化型大礼包#k #b需要 #r1000000#k #b绑定币#l#k\r\n";
			selStr +="#L3##b"+aaa+" 购买 #r惊人正义卷大礼包#k #b需要 #r1000000#k #b绑定币#l#k\r\n";
			selStr +="#L4##b"+aaa+" 购买 #r潜能卷轴大礼包#k #b需要 #r100000#k #b绑定币#l#k\r\n";
			selStr +=" \r\n\r\n";
                        cm.sendSimple(selStr);	
		} else if (status == 1) {
			if (selection == 1) {
				typed=1;
				cm.sendYesNo("确定购买 #r#t5062002#礼包#k 吗? 将会使用掉您 #r1000000#k 绑定枫叶冒险岛币使用后将获得100个高级魔方，100个大师附加魔方.");
			} else if (selection == 2) {
				typed=2;
				cm.sendYesNo("确定购买 #r升级强化大礼包#k 吗? 将会使用掉您 #r1000000#k 绑定枫叶冒险岛币使用后将获得祝福卷轴x100张，防暴卷轴x50张，无损高级装备强化卷x50张.");
                        } else if (selection == 3) {
				typed=3;
				cm.sendYesNo("确定购买 #r惊人正义卷礼包#k 吗? 将会使用掉您 #r1000000#k 绑定枫叶冒险岛币使用后将获得祝福卷轴x50张，防暴卷轴x50张，惊人正义混沌卷轴x25");
			} else if (selection == 4) {
				typed=4;
				cm.sendYesNo("确定购买 #r特殊附加潜能卷轴礼包#k 吗? 将会使用掉您 #r100000#k 绑定枫叶冒险岛币。使用后将获得#t2049402#x5张，#t2048307#x5张.");
			}
		} else if (status == 2) {
			if(typed==1){
                if (cm.getPlayerPoints() >= 1000000 && cm.getSpace(5) >= 5) {
			cm.gainPlayerPoints(-1000000);
			cm.gainItem(5062002, 100);
			cm.gainItem(5062500, 100);
			cm.sendOk("恭喜您成功购买#t5062002#礼包.");
			cm.worldSpouseMessage(0x20, "『绑定币商城』 : 恭喜 " + cm.getChar().getName() + " 用绑定枫叶冒险岛币购买魔方大礼包一个.");
			cm.dispose();
				} else {
			cm.sendOk("购买失败：\r\n\r\n#r1). 当前绑定枫叶冒险岛币未达到条件.\r\n2). 背包特殊栏位不够,请清理.");
			cm.dispose();
				}
			}else if(typed==2){
                if (cm.getPlayerPoints() >= 1000000 && cm.getSpace(2) >= 2 && cm.getSpace(5) >= 1) {
			cm.gainPlayerPoints(-1000000);
			cm.gainItem(2340000, 100);
			cm.gainItem(5064000, 50);
			cm.gainItem(2049323, 50);
			cm.sendOk("恭喜您成功购买升级强化大礼包.");
			cm.worldSpouseMessage(0x20, "『绑定币商城』 : 恭喜 " + cm.getChar().getName() + " 用绑定枫叶冒险岛币购买升级强化大礼包一个.");
			cm.dispose();
				} else {
			cm.sendOk("购买失败：\r\n\r\n#r1). 当前绑定枫叶冒险岛币未达到条件.\r\n2). 背包消耗栏位已满,请清理.");
			cm.dispose();
				}
			}else if(typed==3){
                if (cm.getPlayerPoints() >= 1000000 && cm.getSpace(2) >= 3 && cm.getSpace(5) >= 1) {
			cm.gainPlayerPoints(-1000000);
			cm.gainItem(2340000, 50);
			cm.gainItem(5064000, 50);
			cm.gainItem(2049137, 25);
			cm.sendOk("恭喜您成功购买升级强化大礼包.");
			cm.worldSpouseMessage(0x20, "『绑定币商城』 : 恭喜 " + cm.getChar().getName() + " 用绑定枫叶冒险岛币购买惊人正义混沌卷大礼包一个.");
			cm.dispose();
				} else {
			cm.sendOk("购买失败：\r\n\r\n#r1). 当前绑定枫叶冒险岛币未达到条件.\r\n2). 背包消耗栏位已满,请清理.");
			cm.dispose();
				}
			}else if(typed==4){
                if (cm.getPlayerPoints() >= 100000 && cm.getSpace(2) >= 3) {
			cm.gainPlayerPoints(-100000);
			cm.gainItem(2049402, 5);
			cm.gainItem(2048307, 5);
			cm.sendOk("恭喜您成功购买升潜能卷轴大礼包.");
			cm.worldSpouseMessage(0x20, "『绑定币商城』 : 恭喜 " + cm.getChar().getName() + " 用绑定枫叶冒险岛币购买潜能卷轴大礼包一个.");
			cm.dispose();
				} else {
			cm.sendOk("购买失败：\r\n\r\n#r1). 当前绑定枫叶冒险岛币未达到条件.\r\n2). 背包消耗栏位已满,请清理.");
			cm.dispose();
				}
           }
		}
	  }
	}
