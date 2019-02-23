var aaa ="#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";

var status = 0;
var typed=0;
var rmb = 0;
var Gift = "#fUI/UIWindow2/crossHunterUI/reward/button/normal/0#";

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		im.dispose();
	} else {
		if (mode == 0 && status == 0) {
			im.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			var selStr = "#d#e请选择您所需要的卷轴：#n#k\r\n\r\n";
			selStr +="#L1#"+aaa+" 领取 1 张#i2049122##r#t2049122##l#k\r\n";
			selStr +="#L2#"+aaa+" 领取 1 张#i2049135##r#t2049135##l#k\r\n"
			selStr +="#L3#"+aaa+" 领取 3 张#i2340000##r#t2340000##l#k\r\n"; 
			selStr +="#L4#"+aaa+" 领取 1 张#i2613000##r#t2613000##l#k\r\n";
			selStr +="#L5#"+aaa+" 领取 1 张#i2613001##r#t2613001##l#k\r\n";
			selStr +="#L6#"+aaa+" 领取 1 张#i2612010##r#t2612010##l#k\r\n";
			selStr +="#L7#"+aaa+" #d[试试运气]#k 抽取#i2613050##r#t2613050##l#k\r\n";
			selStr +="#L8#"+aaa+" #d[试试运气]#k 抽取#i2613051##r#t2613051##l#k\r\n";
			selStr +="#L9#"+aaa+" #d[试试运气]#k 抽取#i2612061##r#t2612061##l#k\r\n";
			selStr +="#L10#"+aaa+" #d[试试运气]#k 抽取#i2612062##r#t2612062##l#k\r\n";
			selStr +="#L11#"+aaa+" #d[试试运气]#k 抽取#i2616061##r#t2616061##l#k\r\n";
			selStr +="#L12#"+aaa+" #d[试试运气]#k 抽取#i2616062##r#t2616062##l#k\r\n";
			selStr +="#L13#"+aaa+" #d[试试运气]#k 抽取#i2615031##r#t2615031##l#k\r\n";
			selStr +="#L14#"+aaa+" #d[试试运气]#k 抽取#i2615032##r#t2615032##l#k\r\n";
                        im.sendSimple(selStr);	
		} else if (status == 1) {
			if (selection == 1) {
				typed=1;
				im.sendYesNo("#b您是否想要领取#t2049122# x 1 ，您是否想要领取？");
			} else if (selection == 2) {
				typed=2;
				im.sendYesNo("#b您是否想要领取#t2049135# x 1 ，您是否想要领取？");
			} else if (selection == 3) {
				typed=3;
				im.sendYesNo("#b您是否想要领取#t2340000# x 10 ，您是否想要领取？");
			} else if (selection == 4) {
				typed=4;
				im.sendYesNo("#b您是否想要领取#t2613000# x 10 卷轴增加攻击力+7~11，该卷轴只实用于单手武器上面，如果领错无法领取其他卷轴，您是否想要领取？");
			} else if (selection == 5) {
				typed=5;
				im.sendYesNo("#b您是否想要领取#t2613001# x 10 卷轴增加魔法攻击力+7~11，该卷轴只实用于单手武器上面，如果领错无法领取其他卷轴，您是否想要领取？");
			} else if (selection == 6) {
				typed=6;
				im.sendYesNo("#b您是否想要领取#t2612010# x 10 卷轴增加攻击力+7~11，该卷轴只实用于双手武器上面，如果领错无法领取其他卷轴，您是否想要领取？");
			} else if (selection == 7) {
				typed=7;
				im.sendYesNo("#b您是否想要抽取#t2613050# x 1 ，请先确保您消耗栏位有空间，否则抽中无法获取。40/100的几率祝您好运！");
			} else if (selection == 8) {
				typed=8;
				im.sendYesNo("#b您是否想要抽取#t2613051# x 1 ，请先确保您消耗栏位有空间，否则抽中无法获取。40/100的几率祝您好运！");
			} else if (selection == 9) {
				typed=9;
				im.sendYesNo("#b您是否想要抽取#t2612061# x 1 ，请先确保您消耗栏位有空间，否则抽中无法获取。40/100的几率祝您好运！");
			} else if (selection == 10) {
				typed=10;
				im.sendYesNo("#b您是否想要抽取#t2612062# x 1 ，请先确保您消耗栏位有空间，否则抽中无法获取。40/100的几率祝您好运！");
			} else if (selection == 11) {
				typed=11;
				im.sendYesNo("#b您是否想要抽取#t2616061# x 1 ，请先确保您消耗栏位有空间，否则抽中无法获取。50/100的几率祝您好运！");
			} else if (selection == 12) {
				typed=12;
				im.sendYesNo("#b您是否想要抽取#t2612062# x 1 ，请先确保您消耗栏位有空间，否则抽中无法获取。50/100的几率祝您好运！");
			} else if (selection == 13) {
				typed=13;
				im.sendYesNo("#b您是否想要抽取#t2615031# x 1 ，请先确保您消耗栏位有空间，否则抽中无法获取。50/100的几率祝您好运！");
			} else if (selection == 14) {
				typed=14;
				im.sendYesNo("#b您是否想要抽取#t2615032# x 1 ，请先确保您消耗栏位有空间，否则抽中无法获取。50/100的几率祝您好运！");
			}
		} else if (status == 2) {
			if (typed==1) {
                if (im.getSpace(2) >= 1) {
					im.gainItem(2049122, 1);
					im.gainItem(2430683, -1);
					im.sendOk("恭喜您成功领取了#t2049122# x 1.");
					im.worldSpouseMessage(0x01, "『情人节卷轴箱』 :  " + im.getChar().getName() + " 领取了 正向卷轴 x 1.");
					im.dispose();
				} else {
					im.sendOk("领取失败：\r\n\r\n#r1). 背包消耗栏位不够1个位置,请清理.");
					im.dispose();
				}
			} else if (typed==2) {
                if (im.getSpace(2) >= 1) {
					im.gainItem(2049135, 1);
					im.gainItem(2430683, -1);
					im.sendOk("恭喜您成功领取了#t2049135# x 1.");
					im.worldSpouseMessage(0x01, "『情人节卷轴箱』 : 恭喜 " + im.getChar().getName() + " 领取了 惊人正义卷轴 x 1.");
					im.dispose();
				} else {
					im.sendOk("领取失败：\r\n\r\n#r1). 背包消耗栏位不够1个位置,请清理.");
					im.dispose();
				}
			} else if (typed==3) {
                if (im.getSpace(2) >= 1) {
					im.gainItem(2340000, 3);
					im.gainItem(2430683, -1);
					im.sendOk("恭喜您成功领取了#t2340000# x 1.");
					im.worldSpouseMessage(0x01, "『情人节卷轴箱』 : 恭喜 " + im.getChar().getName() + " 领取了 祝福卷轴 x 3.");
					im.dispose();
				} else {
					im.sendOk("领取失败：\r\n\r\n#r1). 背包消耗栏位不够1个位置,请清理.");
					im.dispose();
				}
			} else if (typed==4) {
                if (im.getSpace(2) >= 1) {
					im.gainItem(2613000, 1);
					im.gainItem(2430683, -1);
					im.sendOk("恭喜您成功领取了#t2613000# x 1.");
					im.worldSpouseMessage(0x01, "『情人节卷轴箱』 : 恭喜 " + im.getChar().getName() + " 领取了 星火单手武器攻击力卷轴 x 1.");
					im.dispose();
				} else {
					im.sendOk("领取失败：\r\n\r\n#r1). 背包消耗栏位不够1个位置,请清理.");
					im.dispose();
				}
			} else if (typed==5) {
                if (im.getSpace(2) >= 1) {
					im.gainItem(2613001, 1);
					im.gainItem(2430683, -1);
					im.sendOk("恭喜您成功领取了#t2613001# x 1.");
					im.worldSpouseMessage(0x01, "『情人节卷轴箱』 : 恭喜 " + im.getChar().getName() + " 领取了 星火单手武器魔法攻击力卷轴 x 1.");
					im.dispose();
				} else {
					im.sendOk("领取失败：\r\n\r\n#r1). 背包消耗栏位不够1个位置,请清理.");
					im.dispose();
				}
			} else if (typed==6) {
                if (im.getSpace(2) >= 1) {
					im.gainItem(2612010, 1);
					im.gainItem(2430683, -1);
					im.sendOk("恭喜您成功领取了#t2612010# x 1.");
					im.worldSpouseMessage(0x01, "『情人节卷轴箱』 : 恭喜 " + im.getChar().getName() + " 领取了 星火双手武器攻击力卷轴 x 1.");
					im.dispose();
				} else {
					im.sendOk("领取失败：\r\n\r\n#r1). 背包消耗栏位不够1个位置,请清理.");
					im.dispose();
				}
			} else if (typed==7) {
                var xxx = Math.floor(Math.random() * 4);
				if (xxx == 1) {
					im.gainItem(2613050, 1);
					im.gainItem(2430683, -1);
					im.sendOk("恭喜您成功领取了#t2613050# x 1.");
					im.worldSpouseMessage(0x01, "『情人节卷轴箱』 : 恭喜 " + im.getChar().getName() + " 抽取了 X单手武器攻击力卷轴 x 1.");
					im.dispose();
				} else {
					im.gainItem(2430683, -1);
					im.sendOk("领取失败：\r\n\r\n#r1). 抱歉您没有抽中.");
					im.dispose();
				}
			} else if (typed==8) {
                var xxx = Math.floor(Math.random() * 4);
				if (xxx == 1) {
					im.gainItem(2613051, 1);
					im.gainItem(2430683, -1);
					im.sendOk("恭喜您成功领取了#t2613051# x 1.");
					im.worldSpouseMessage(0x01, "『情人节卷轴箱』 : 恭喜 " + im.getChar().getName() + " 抽取了 X单手武器魔力卷轴 x 1.");
					im.dispose();
				} else {
					im.gainItem(2430683, -1);
					im.sendOk("领取失败：\r\n\r\n#r1). 抱歉您没有抽中.");
					im.dispose();
				}
			} else if (typed==9) {
                var xxx = Math.floor(Math.random() * 4);
				if (xxx == 1) {
					im.gainItem(2612061, 1);
					im.gainItem(2430683, -1);
					im.sendOk("恭喜您成功领取了#t2612061# x 1.");
					im.worldSpouseMessage(0x01, "『情人节卷轴箱』 : 恭喜 " + im.getChar().getName() + " 抽取了 X双手武器攻击力卷轴 x 1.");
					im.dispose();
				} else {
					im.gainItem(2430683, -1);
					im.sendOk("领取失败：\r\n\r\n#r1). 抱歉您没有抽中.");
					im.dispose();
				}
			} else if (typed==10) {
                var xxx = Math.floor(Math.random() * 4);
				if (xxx == 1) {
					im.gainItem(2612062, 1);
					im.gainItem(2430683, -1);
					im.sendOk("恭喜您成功领取了#t2612062# x 1.");
					im.worldSpouseMessage(0x01, "『情人节卷轴箱』 : 恭喜 " + im.getChar().getName() + " 抽取了 X双手武器魔力卷轴 x 1.");
					im.dispose();
				} else {
					im.gainItem(2430683, -1);
					im.sendOk("领取失败：\r\n\r\n#r1). 抱歉您没有抽中.");
					im.dispose();
				}
			} else if (typed==11) {
                var xxx = Math.floor(Math.random() * 3);
				if (xxx == 1) {
					im.gainItem(2616061, 1);
					im.gainItem(2430683, -1);
					im.sendOk("恭喜您成功领取了#t2616061# x 1.");
					im.worldSpouseMessage(0x01, "『情人节卷轴箱』 : 恭喜 " + im.getChar().getName() + " 抽取了 X防具攻击力卷轴 x 1.");
					im.dispose();
				} else {
					im.gainItem(2430683, -1);
					im.sendOk("领取失败：\r\n\r\n#r1). 抱歉您没有抽中.");
					im.dispose();
				}
			} else if (typed==12) {
                var xxx = Math.floor(Math.random() * 3);
				if (xxx == 1) {
					im.gainItem(2616062, 1);
					im.gainItem(2430683, -1);
					im.sendOk("恭喜您成功领取了#t2616062# x 1.");
					im.worldSpouseMessage(0x01, "『情人节卷轴箱』 : 恭喜 " + im.getChar().getName() + " 抽取了 X防具魔力卷轴 x 1.");
					im.dispose();
				} else {
					im.gainItem(2430683, -1);
					im.sendOk("领取失败：\r\n\r\n#r1). 抱歉您没有抽中.");
					im.dispose();
				}
			} else if (typed==13) {
                var xxx = Math.floor(Math.random() * 3);
				if (xxx == 1) {
					im.gainItem(2615031, 1);
					im.gainItem(2430683, -1);
					im.sendOk("恭喜您成功领取了#t2615031# x 1.");
					im.worldSpouseMessage(0x01, "『情人节卷轴箱』 : 恭喜 " + im.getChar().getName() + " 抽取了 X饰品攻击力卷轴 x 1.");
					im.dispose();
				} else {
					im.gainItem(2430683, -1);
					im.sendOk("领取失败：\r\n\r\n#r1). 抱歉您没有抽中.");
					im.dispose();
				}
			} else if (typed==14) {
                var xxx = Math.floor(Math.random() * 3);
				if (xxx == 1) {
					im.gainItem(2615032, 1);
					im.gainItem(2430683, -1);
					im.sendOk("恭喜您成功领取了#t2615032# x 1.");
					im.worldSpouseMessage(0x01, "『情人节卷轴箱』 : 恭喜 " + im.getChar().getName() + " 抽取了 X饰品魔力卷轴 x 1.");
					im.dispose();
				} else {
					im.gainItem(2430683, -1);
					im.sendOk("领取失败：\r\n\r\n#r1). 抱歉您没有抽中.");
					im.dispose();
				}
           }
		}
	}
  }