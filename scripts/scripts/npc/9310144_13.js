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
			var selStr = "#d#e欢迎使用绑定校园币购买物品，请选择您想要的：#n#k\r\n";
			selStr +="\t#b您当前绑定校园币为：  #r" + cm.getPlayerPoints() + " #b 点#n#k\r\n\r\n";
			selStr +="- #e#d道具#n\r\n"
			selStr +="#L11##b"+aaa+" 购买 #r#t4001716##k #b需要 #r500000#k #b绑定币#l#k\r\n";
			selStr +="#L2##b"+aaa+" 购买 #r#t2340000##k #b需要 #r10000#k #b绑定币#l#k\r\n"; 
			selStr +="#L1##b"+aaa+" 购买 #r无损#t2049323##k #b需要 #r10000#k #b绑定币#l#k\r\n";
			selStr +="#L3##b"+aaa+" 购 #r#t2046074##k #b需要 #r100000#k #b绑定币#l#k\r\n";
			selStr +="#L4##b"+aaa+" 购 #r#t2046075##k #b需要 #r100000#k #b绑定币#l#k\r\n";
			selStr +="#L5##b"+aaa+" 购 #r#t2046149##k #b需要 #r100000#k #b绑定币#l#k\r\n";
			selStr +="#L6##b"+aaa+" 购买 #r#t2049750##k #b需要 #r50000#k #b绑定币#l#k\r\n";
			//selStr +="#L7##b"+aaa+" 购买 #r#t2070024##k #b需要 #r50000#k #b绑定币#l#k\r\n";
			selStr +="#L8##b"+aaa+" 购买 #r#t2070023##k #b需要 #r100000#k #b绑定币#l#k\r\n";
			selStr +="#L9##b"+aaa+" 购买 #r#t2049124##k #b需要 #r50000#k #b绑定币#l#k\r\n";
			selStr +="#L10##b"+aaa+" 购买 #r#t2049137##k #b需要 #r100000#k #b绑定币#l#k\r\n";
			selStr +=" \r\n\r\n";
                        cm.sendSimple(selStr);	
		} else if (status == 1) {
			if (selection == 1) {
				typed=1;
				cm.sendYesNo("确定购买一张 #r#t2049323##k 吗? 将会使用掉您 #r10000#k 绑定校园币。");
			} else if (selection == 2) {
				typed=2;
				cm.sendYesNo("确定购买一张 #r#t2340000##k 吗? 将会使用掉您 #r10000#k 绑定校园币。");
                        } else if (selection == 3) {
				typed=3;
				cm.sendYesNo("确定购买一张 #r#t2046074##k 吗? 将会使用掉您 #r100000#k 绑定校园币。");
                        } else if (selection == 4) {
				typed=4;
				cm.sendYesNo("确定购买一张 #r#t2046075##k 吗? 将会使用掉您 #r100000#k 绑定校园币。");
                        } else if (selection == 5) {
				typed=5;
				cm.sendYesNo("确定购买一张 #r#t2046149##k 吗? 将会使用掉您 #r100000#k 绑定校园币。");
                        } else if (selection == 6) {
				typed=6;
				cm.sendYesNo("确定购买一张 #r#t2049750##k 吗? 将会使用掉您 #r50000#k 绑定校园币。");
                        } else if (selection == 7) {
				typed=7;
				cm.sendYesNo("确定购买一组 #r#t2070024##k 吗? 将会使用掉您 #r50000#k 绑定校园币。\r\n#r(PS:本飞标充值必须去神木村药店充值)#k");	
                        } else if (selection == 8) {
				typed=8;
				cm.sendYesNo("确定购买一组 #r#t2070023##k 吗? 将会使用掉您 #r100000#k 绑定校园币。");	
                        } else if (selection == 9) {
				typed=9;
				cm.sendYesNo("确定购买一张 #r#t2049124##k 吗? 将会使用掉您 #r50000#k 绑定校园币。");	
                        } else if (selection == 10) {
				typed=10;
				cm.sendYesNo("确定购买一张 #r#t2049137##k 吗? 将会使用掉您 #r100000#k 绑定校园币。");
                        } else if (selection == 11) {
				typed=11;
				cm.sendYesNo("确定购买一个 #r#t4001716##k 吗? 将会使用掉您 #r500000#k 绑定校园币。");
			}
		} else if (status == 2) {
			if(typed==1){
                if (cm.getPlayerPoints() >= 10000 && cm.getSpace(2) >= 1) {
			cm.gainPlayerPoints(-10000);
			cm.gainItem(2049323, 1);
			cm.sendOk("恭喜您成功购买#t2049323#.");
			cm.worldSpouseMessage(0x20, "『绑定币商城』 : 恭喜 " + cm.getChar().getName() + " 用绑定校园币购买无损高级装备强化卷一个.");
			cm.dispose();
				} else {
			cm.sendOk("购买失败：\r\n\r\n#r1). 当前绑定校园币未达到条件.\r\n2). 背包消耗栏位已满,请清理.");
			cm.dispose();
				}
			}else if(typed==2){
                if (cm.getPlayerPoints() >= 10000 && cm.getSpace(2) >= 1) {
			cm.gainPlayerPoints(-10000);
			cm.gainItem(2340000, 1);
			cm.sendOk("恭喜您成功购买#t2340000#.");
			cm.worldSpouseMessage(0x20, "『绑定币商城』 : 恭喜 " + cm.getChar().getName() + " 用绑定校园币购买祝福卷轴一个.");
			cm.dispose();
				} else {
			cm.sendOk("购买失败：\r\n\r\n#r1). 当前绑定校园币未达到条件.\r\n2). 背包消耗栏位已满,请清理.");
			cm.dispose();
				}
			}else if(typed==3){
                if (cm.getPlayerPoints() >= 100000 && cm.getSpace(2) >= 1) {
			cm.gainPlayerPoints(-100000);
			cm.gainItem(2046074, 1);
			cm.sendOk("恭喜您成功购买#t2046074#.");
			cm.worldSpouseMessage(0x20, "『绑定币商城』 : 恭喜 " + cm.getChar().getName() + " 用绑定校园币购买祥龙单手武器攻击力卷轴99%一个.");
			cm.dispose();
				} else {
			cm.sendOk("购买失败：\r\n\r\n#r1). 当前绑定校园币未达到条件.\r\n2). 背包消耗栏位已满,请清理.");
			cm.dispose();
				}
			}else if(typed==4){
                if (cm.getPlayerPoints() >= 100000 && cm.getSpace(2) >= 1) {
			cm.gainPlayerPoints(-100000);
			cm.gainItem(2046075, 1);
			cm.sendOk("恭喜您成功购买#t2046075#.");
			cm.worldSpouseMessage(0x20, "『绑定币商城』 : 恭喜 " + cm.getChar().getName() + " 用绑定校园币购买祥龙单手武器魔法力卷轴99%一个.");
			cm.dispose();
				} else {
			cm.sendOk("购买失败：\r\n\r\n#r1). 当前绑定校园币未达到条件.\r\n2). 背包消耗栏位已满,请清理.");
			cm.dispose();
				}
			}else if(typed==5){
                if (cm.getPlayerPoints() >= 100000 && cm.getSpace(2) >= 1) {
			cm.gainPlayerPoints(-100000);
			cm.gainItem(2046149, 1);
			cm.sendOk("恭喜您成功购买#t2046149#.");
			cm.worldSpouseMessage(0x20, "『绑定币商城』 : 恭喜 " + cm.getChar().getName() + " 用绑定校园币购买祥龙双手武器攻击力卷轴99%一个.");
			cm.dispose();
				} else {
			cm.sendOk("购买失败：\r\n\r\n#r1). 当前绑定校园币未达到条件.\r\n2). 背包消耗栏位已满,请清理.");
			cm.dispose();
				}
			}else if(typed==6){
                if (cm.getPlayerPoints() >= 50000 && cm.getSpace(2) >= 1) {
			cm.gainPlayerPoints(-50000);
			cm.gainItem(2049750, 1);
			cm.sendOk("恭喜您成功购买#t2049750#.");
			cm.worldSpouseMessage(0x20, "『绑定币商城』 : 恭喜 " + cm.getChar().getName() + " 用绑定校园币购买S级潜能卷轴 80%一个.");
			cm.dispose();
				} else {
			cm.sendOk("购买失败：\r\n\r\n#r1). 当前绑定校园币未达到条件.\r\n2). 背包消耗栏位已满,请清理.");
			cm.dispose();
				}
			}else if(typed==7){
                if (cm.getPlayerPoints() >= 50000 && cm.getSpace(2) >= 1) {
			cm.gainPlayerPoints(-50000);
			cm.gainItem(2070024, 1);
			cm.sendOk("恭喜您成功购买#t2070024#.");
			cm.worldSpouseMessage(0x20, "『绑定币商城』 : 恭喜 " + cm.getChar().getName() + " 用绑定校园币购买无限飞镖一个.");
			cm.dispose();
				} else {
			cm.sendOk("购买失败：\r\n\r\n#r1). 当前绑定校园币未达到条件.\r\n2). 背包消耗栏位已满,请清理.");
			cm.dispose();
				}
			}else if(typed==8){
                if (cm.getPlayerPoints() >= 100000 && cm.getSpace(2) >= 1) {
			cm.gainPlayerPoints(-100000);
			cm.gainItem(2070023, 1);
			cm.sendOk("恭喜您成功购买#t2070023#.");
			cm.worldSpouseMessage(0x20, "『绑定币商城』 : 恭喜 " + cm.getChar().getName() + " 用绑定校园币购买火焰飞镖一个.");
			cm.dispose();
				} else {
			cm.sendOk("购买失败：\r\n\r\n#r1). 当前绑定校园币未达到条件.\r\n2). 背包消耗栏位已满,请清理.");
			cm.dispose();
				}
			}else if(typed==9){
                if (cm.getPlayerPoints() >= 50000 && cm.getSpace(2) >= 1) {
			cm.gainPlayerPoints(-50000);
			cm.gainItem(2049124, 1);
			cm.sendOk("恭喜您成功购买#t2049124#.");
			cm.worldSpouseMessage(0x20, "『绑定币商城』 : 恭喜 " + cm.getChar().getName() + " 用绑定校园币购买正向混沌卷轴一个.");
			cm.dispose();
				} else {
			cm.sendOk("购买失败：\r\n\r\n#r1). 当前绑定校园币未达到条件.\r\n2). 背包消耗栏位已满,请清理.");
			cm.dispose();
				}
			}else if(typed==10){
                if (cm.getPlayerPoints() >= 100000 && cm.getSpace(2) >= 1) {
			cm.gainPlayerPoints(-100000);
			cm.gainItem(2049137, 1);
			cm.sendOk("恭喜您成功购买#t2049137#.");
			cm.worldSpouseMessage(0x20, "『绑定币商城』 : 恭喜 " + cm.getChar().getName() + " 用绑定校园币购买惊人正义混沌卷轴 40%一个.");
			cm.dispose();
				} else {
			cm.sendOk("购买失败：\r\n\r\n#r1). 当前绑定校园币未达到条件.\r\n2). 背包消耗栏位已满,请清理.");
			cm.dispose();
				}
			}else if(typed==11){
                if (cm.getPlayerPoints() >= 500000 && cm.getSpace(4) >= 1) {
			cm.gainPlayerPoints(-500000);
			cm.gainItem(4001716, 1);
			cm.sendOk("恭喜您成功购买#t4001716#.");
			cm.worldSpouseMessage(0x20, "『绑定币商城』 : 恭喜 " + cm.getChar().getName() + " 用绑定校园币购买定居金10亿一个.");
			cm.dispose();
				} else {
			cm.sendOk("购买失败：\r\n\r\n#r1). 当前绑定校园币未达到条件.\r\n2). 背包消耗栏位已满,请清理.");
			cm.dispose();
				}
           }
		}
	  }
	}
