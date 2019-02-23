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
			var selStr = "#d#e欢迎使用绑定猫咪币购买物品，请选择您想要的：#n#k\r\n";
			selStr +="\t#b您当前绑定猫咪币为：  #r" + cm.getPlayerPoints() + " #b 点#n#k\r\n\r\n";
			selStr +="- #e装备（武器在下面）#n\r\n"
			selStr +="#L16##b"+aaa+" 土豪专署 #rWELCOME特效#k #b需要 #r10000000#k #b绑定币#l#k\r\n";
			selStr +="#L1##b"+aaa+" 购买战士 #r#t1122122##k #b需要 #r6000000#k #b绑定币#l#k\r\n";
			selStr +="#L2##b"+aaa+" 购买法师 #r#t1122123##k #b需要 #r6000000#k #b绑定币#l#k\r\n";
			selStr +="#L3##b"+aaa+" 购买弓手 #r#t1122124##k #b需要 #r6000000#k #b绑定币#l#k\r\n";
			selStr +="#L4##b"+aaa+" 购买飞侠 #r#t1122125##k #b需要 #r6000000#k #b绑定币#l#k\r\n";
			selStr +="#L5##b"+aaa+" 购买海盗 #r#t1122126##k #b需要 #r6000000#k #b绑定币#l#k\r\n";
			selStr +="#L6##b"+aaa+" 购买美观 #r#t1142210##k #b需要 #r500000#k #b绑定币#l#k\r\n"; 
			selStr +="#L7##b"+aaa+" 购买美观 #r#t1142178##k #b需要 #r300000#k #b绑定币#l#k\r\n"; 
			selStr +="#L8##b"+aaa+" 购全职 #r#t1132245##k #b需要 #r1500000#k #b绑定币#l#k\r\n"; 
			selStr +="#L9##b"+aaa+" 购全职 #r#t1113074##k #b需要 #r1000000#k #b绑定币#l#k\r\n";
			selStr +="#L10##b"+aaa+" 购全职 #r#t1122266##k #b需要 #r1000000#k #b绑定币#l#k\r\n";
			selStr +="#L11##b"+aaa+" 购全职 #r#t1032222##k #b需要 #r1000000#k #b绑定币#l#k\r\n";
			selStr +="#L12##b"+aaa+" 购全职 #r#t1132246##k #b需要 #r3000000#k #b绑定币#l#k\r\n";
			selStr +="#L13##b"+aaa+" 购全职 #r#t1113075##k #b需要 #r3000000#k #b绑定币#l#k\r\n";
			selStr +="#L14##b"+aaa+" 购全职 #r#t1122267##k #b需要 #r2000000#k #b绑定币#l#k\r\n";
			selStr +="#L15##b"+aaa+" 购全职 #r#t1032223##k #b需要 #r3000000#k #b绑定币#l#k\r\n";
			//selStr +=""
			//selStr +="- #e购买150级武器#n\r\n"
			//selStr +="#L20##b"+aaa+" 双手剑 #r#t1402196##k #b需 #r1500000#k #b绑定币#l#k\r\n";
			//selStr +="#L21##b"+aaa+" 战士枪 #r#t1432167##k #b需 #r1500000#k #b绑定币#l#k\r\n";
			//selStr +="#L22##b"+aaa+" 弓手弓 #r#t1452205##k #b需 #r1500000#k #b绑定币#l#k\r\n";
			//selStr +="#L23##b"+aaa+" 弩手弩 #r#t1462193##k #b需 #r1500000#k #b绑定币#l#k\r\n";
			//selStr +="#L24##b"+aaa+" 双弩枪 #r#t1522094##k #b需 #r1500000#k #b绑定币#l#k\r\n";
			//selStr +="#L25##b"+aaa+" 侠拳套 #r#t1472214##k #b需 #r1500000#k #b绑定币#l#k\r\n";
			//selStr +="#L26##b"+aaa+" 飞侠短刀 #r#t1332225##k #b需 #r1500000#k #b绑定币#l#k\r\n";
			//selStr +="#L27##b"+aaa+" 飞侠副刀 #r#t1342082##k #b需 #r1500000#k #b绑定币#l#k\r\n";
			//selStr +="#L28##b"+aaa+" 幻影手杖 #r#t1362090##k #b需 #r1500000#k #b绑定币#l#k\r\n";
			//selStr +="#L29##b"+aaa+" 法师长杖 #r#t1382208##k #b需 #r1500000#k #b绑定币#l#k\r\n";
			//selStr +="#L30##b"+aaa+" 法师短杖 #r#t1372177##k #b需 #r1500000#k #b绑定币#l#k\r\n";
			//selStr +="#L31##b"+aaa+" 夜光双头仗 #r#t1212063##k #b需 #r1500000#k #b绑定币#l#k\r\n";
			//selStr +="#L32##b"+aaa+" 尖兵能量剑 #r#t1242060##k #b需 #r1500000#k #b绑定币#l#k\r\n";
			//selStr +="#L33##b"+aaa+" 恶魔亡命剑 #r#t1232057##k #b需 #r1500000#k #b绑定币#l#k\r\n";
			//selStr +="#L34##b"+aaa+" 战士单手斧 #r#t1312153##k #b需 #r1500000#k #b绑定币#l#k\r\n";
			//selStr +="#L35##b"+aaa+" 战士单手钝器 #r#t1322203##k #b需 #r1500000#k #b绑定币#l#k\r\n";
			//selStr +="#L36##b"+aaa+" 战士单手剑 #r#t1302275##k #b需 #r1500000#k #b绑定币#l#k\r\n";
			//selStr +="#L37##b"+aaa+" 隐月指节 #r#t1482168##k #b需 #r1500000#k #b绑定币#l#k\r\n";
			//selStr +="#L38##b"+aaa+" 罗莉灵魂手统 #r#t1222058##k #b需 #r1500000#k #b绑定币#l#k\r\n";
			//selStr +="#L39##b"+aaa+" 战士战神矛 #r#t1442223##k #b需 #r1500000#k #b绑定币#l#k\r\n";
			selStr +=" \r\n\r\n";
                        cm.sendSimple(selStr);	
		} else if (status == 1) {
			if (selection == 1) {
				typed=1;
				cm.sendYesNo("确定购买 #r#t1122122##k 将会使用掉您 #r6000000#k 绑定猫咪币. 您将获得 #r攻击力50 防御20 魔防 20 #k战士 #t1122122#。");
			} else if (selection == 2) {
				typed=2;
				cm.sendYesNo("确定购买 #r#t1122123##k 将会使用掉您 #r6000000#k 绑定猫咪币. 您将获得 #r魔法力50 防御20 魔防 20 #k法师 #t1122123#。");
                        } else if (selection == 3) {
				typed=3;
				cm.sendYesNo("确定购买 #r#t1122124##k 将会使用掉您 #r6000000#k 绑定猫咪币. 您将获得 #r攻击力50 防御20 魔防 20 #k弓手 #t1122124#。");
                        } else if (selection == 4) {
				typed=4;
				cm.sendYesNo("确定购买 #r#t1122125##k 将会使用掉您 #r6000000#k 绑定猫咪币. 您将获得 #r攻击力50 防御20 魔防 20 #k飞侠 #t1122125#。");
                        } else if (selection == 5) {
				typed=5;
				cm.sendYesNo("确定购买 #r#t1122126##k 将会使用掉您 #r6000000#k 绑定猫咪币. 您将获得 #r攻击力50 防御20 魔防 20 #k海盗 #t1122126#。");
                        } else if (selection == 6) {
				typed=6;
				cm.sendYesNo("确定购买 #r#t1142210##k 将会使用掉您 #r500000#k 绑定猫咪币. 您将获得 #r全属性+7 防御魔防+8#k 的 #t1142210#。");
                        } else if (selection == 7) {
				typed=7;
				cm.sendYesNo("确定购买 #r#t1142178##k 将会使用掉您 #r300000#k 绑定猫咪币. 您将获得 #r全属性+5 移动+7 跳跃+3#k 的 #t1142178#。");	
                        } else if (selection == 8) {
				typed=8;
				cm.sendYesNo("确定购买 #r#t1132245##k 将会使用掉您 #r1500000#k 绑定猫咪币. 您将获得 #r全属性+30 攻击魔攻+20#k 的 #t1132245#。");	
                        } else if (selection == 9) {
				typed=9;
				cm.sendYesNo("确定购买 #r#t1113074##k 将会使用掉您 #r1000000#k 绑定猫咪币. 您将获得 的 #t1113074#。");	
                        } else if (selection == 10) {
				typed=10;
				cm.sendYesNo("确定购买 #r#t1122266##k 将会使用掉您 #r1000000#k 绑定猫咪币. 您将获得 #r全属性+20 攻击魔攻+3#k 的 #t1122266#。");
                        } else if (selection == 11) {
				typed=11;
				cm.sendYesNo("确定购买 #r#t1032222##k 将会使用掉您 #r1200000#k 绑定猫咪币. 您将获得 #r全属性+12 攻击魔攻+5#k 的 #t1032222#。");
						} else if (selection == 12) {
				typed=12;
				cm.sendYesNo("确定购买 #r#t1132246##k 将会使用掉您 #r3000000#k 绑定猫咪币. 您将获得  的 #t1132246#。");
						} else if (selection == 13) {
				typed=13;
				cm.sendYesNo("确定购买 #r#t1113075##k 将会使用掉您 #r3000000#k 绑定猫咪币. 您将获得  的 #t1113075#。");
						} else if (selection == 14) {
				typed=14;
				cm.sendYesNo("确定购买 #r#1122267##k 将会使用掉您 #r3000000#k 绑定猫咪币. 您将获得  的 #t1122267#。");
						} else if (selection == 15) {
				typed=15;
				cm.sendYesNo("确定购买 #r#t1032223##k 将会使用掉您 #r3000000#k 绑定猫咪币. 您将获得  的 #t1032223#。");
						} else if (selection == 16) {
				typed=16;
				cm.sendYesNo("确定购买 #rWELCOME特效#k 将会使用掉您 #r10000000#k 绑定猫咪币. 您将获得 #r全属性+100 攻击魔攻+100#k 的 WELCOME特效。.");
						} else if (selection == 17) {
				typed=17;
				cm.sendYesNo("确定购买 #r150级武器#k 将会使用掉您 #r1500000#k 绑定猫咪币. 您将获得 #r150武器一把（请看好你的职业购买）#k .");
						} else if (selection == 18) {
				typed=18;
				cm.sendYesNo("确定购买 #r150级武器#k 将会使用掉您 #r1500000#k 绑定猫咪币. 您将获得 #r150武器一把（请看好你的职业购买）#k .");
						} else if (selection == 19) {
				typed=19;
				cm.sendYesNo("确定购买 #r150级武器#k 将会使用掉您 #r1500000#k 绑定猫咪币. 您将获得 #r150武器一把（请看好你的职业购买）#k .");
						} else if (selection == 20) {
				typed=20;
				cm.sendYesNo("确定购买 #r150级武器#k 将会使用掉您 #r1500000#k 绑定猫咪币. 您将获得 #r150武器一把（请看好你的职业购买）#k .");
						} else if (selection == 21) {
				typed=21;
				cm.sendYesNo("确定购买 #r150级武器#k 将会使用掉您 #r1500000#k 绑定猫咪币. 您将获得 #r150武器一把（请看好你的职业购买）#k .");
						} else if (selection == 22) {
				typed=22;
				cm.sendYesNo("确定购买 #r150级武器#k 将会使用掉您 #r1500000#k 绑定猫咪币. 您将获得 #r150武器一把（请看好你的职业购买）#k .");
						} else if (selection == 23) {
				typed=23;
				cm.sendYesNo("确定购买 #r150级武器#k 将会使用掉您 #r1500000#k 绑定猫咪币. 您将获得 #r150武器一把（请看好你的职业购买）#k .");
						} else if (selection == 24) {
				typed=24;
				cm.sendYesNo("确定购买 #r150级武器#k 将会使用掉您 #r1500000#k 绑定猫咪币. 您将获得 #r150武器一把（请看好你的职业购买）#k .");
						} else if (selection == 25) {
				typed=25;
				cm.sendYesNo("确定购买 #r150级武器#k 将会使用掉您 #r1500000#k 绑定猫咪币. 您将获得 #r150武器一把（请看好你的职业购买）#k .");
						} else if (selection == 26) {
				typed=26;
				cm.sendYesNo("确定购买 #r150级武器#k 将会使用掉您 #r1500000#k 绑定猫咪币. 您将获得 #r150武器一把（请看好你的职业购买）#k .");
						} else if (selection == 27) {
				typed=27;
				cm.sendYesNo("确定购买 #r150级武器#k 将会使用掉您 #r1500000#k 绑定猫咪币. 您将获得 #r150武器一把（请看好你的职业购买）#k .");
						} else if (selection == 28) {
				typed=28;
				cm.sendYesNo("确定购买 #r150级武器#k 将会使用掉您 #r1500000#k 绑定猫咪币. 您将获得 #r150武器一把（请看好你的职业购买）#k .");
						} else if (selection == 29) {
				typed=29;
				cm.sendYesNo("确定购买 #r150级武器#k 将会使用掉您 #r1500000#k 绑定猫咪币. 您将获得 #r150武器一把（请看好你的职业购买）#k .");
						} else if (selection == 30) {
				typed=30;
				cm.sendYesNo("确定购买 #r150级武器#k 将会使用掉您 #r1500000#k 绑定猫咪币. 您将获得 #r150武器一把（请看好你的职业购买）#k .");
						} else if (selection == 31) {
				typed=31;
				cm.sendYesNo("确定购买 #r150级武器#k 将会使用掉您 #r1500000#k 绑定猫咪币. 您将获得 #r150武器一把（请看好你的职业购买）#k .");
						} else if (selection == 32) {
				typed=32;
				cm.sendYesNo("确定购买 #r150级武器#k 将会使用掉您 #r1500000#k 绑定猫咪币. 您将获得 #r150武器一把（请看好你的职业购买）#k .");
						} else if (selection == 33) {
				typed=33;
				cm.sendYesNo("确定购买 #r150级武器#k 将会使用掉您 #r1500000#k 绑定猫咪币. 您将获得 #r150武器一把（请看好你的职业购买）#k .");
						} else if (selection == 34) {
				typed=34;
				cm.sendYesNo("确定购买 #r150级武器#k 将会使用掉您 #r1500000#k 绑定猫咪币. 您将获得 #r150武器一把（请看好你的职业购买）#k .");
						} else if (selection == 35) {
				typed=35;
				cm.sendYesNo("确定购买 #r150级武器#k 将会使用掉您 #r1500000#k 绑定猫咪币. 您将获得 #r150武器一把（请看好你的职业购买）#k .");
				    	} else if (selection == 36) {
				typed=36;
				cm.sendYesNo("确定购买 #r150级武器#k 将会使用掉您 #r1500000#k 绑定猫咪币. 您将获得 #r150武器一把（请看好你的职业购买）#k .");
						} else if (selection == 37) {
				typed=37;
				cm.sendYesNo("确定购买 #r150级武器#k 将会使用掉您 #r1500000#k 绑定猫咪币. 您将获得 #r150武器一把（请看好你的职业购买）#k .");
				    	} else if (selection == 38) {
				typed=38;
				cm.sendYesNo("确定购买 #r150级武器#k 将会使用掉您 #r1500000#k 绑定猫咪币. 您将获得 #r150武器一把（请看好你的职业购买）#k .");
				    	} else if (selection == 39) {
				typed=39;
				cm.sendYesNo("确定购买 #r150级武器#k 将会使用掉您 #r1500000#k 绑定猫咪币. 您将获得 #r150武器一把（请看好你的职业购买）#k .");
			}
		} else if (status == 2) {
			if(typed==1){
                if (cm.getPlayerPoints() >= 6000000 && cm.getSpace(1) >= 1) {
			cm.gainPlayerPoints(-6000000);
			cm.gainItem(1122122, 1);
			cm.sendOk("恭喜您成功购买#t1122122#.");
			cm.getMap().startMapEffect("恭喜玩家 "+cm.getChar().getName()+" 成功购买土豪心一个。", 5120012);
			cm.worldSpouseMessage(0x20, "『绑定币商城』 : 恭喜 " + cm.getChar().getName() + " 用绑定猫咪币购买战士土豪心一个.");
			cm.dispose();
				} else {
			cm.sendOk("购买失败：\r\n\r\n#r1). 当前绑定猫咪币未达到条件.\r\n2). 背包装备栏位已满,请清理.");
			cm.dispose();
				}
			}else if(typed==2){
                if (cm.getPlayerPoints() >= 6000000 && cm.getSpace(1) >= 1) {
			cm.gainPlayerPoints(-6000000);
			cm.gainItem(1122123, 1);
			cm.sendOk("恭喜您成功购买#t1122123#.");
			cm.getMap().startMapEffect("恭喜玩家 "+cm.getChar().getName()+" 成功购买土豪心一个。", 5120012);
			cm.worldSpouseMessage(0x20, "『绑定币商城』 : 恭喜 " + cm.getChar().getName() + " 用绑定猫咪币购买法师土豪心一个.");
			cm.dispose();
				} else {
			cm.sendOk("购买失败：\r\n\r\n#r1). 当前绑定猫咪币未达到条件.\r\n2). 背包装备栏位已满,请清理.");
			cm.dispose();
				}
			}else if(typed==3){
                if (cm.getPlayerPoints() >= 6000000 && cm.getSpace(1) >= 1) {
			cm.gainPlayerPoints(-6000000);
			cm.gainItem(1122124, 1);
			cm.sendOk("恭喜您成功购买#t1122123#.");
			cm.getMap().startMapEffect("恭喜玩家 "+cm.getChar().getName()+" 成功购买土豪心一个。", 5120012);
			cm.worldSpouseMessage(0x20, "『绑定币商城』 : 恭喜 " + cm.getChar().getName() + " 用绑定猫咪币购买弓手土豪心一个.");
			cm.dispose();
				} else {
			cm.sendOk("购买失败：\r\n\r\n#r1). 当前绑定猫咪币未达到条件.\r\n2). 背包装备栏位已满,请清理.");
			cm.dispose();
				}
			}else if(typed==4){
                if (cm.getPlayerPoints() >= 6000000 && cm.getSpace(1) >= 1) {
			cm.gainPlayerPoints(-6000000);
			cm.gainItem(1122125, 1);
			cm.sendOk("恭喜您成功购买#t1122125#.");
			cm.getMap().startMapEffect("恭喜玩家 "+cm.getChar().getName()+" 成功购买土豪心一个。", 5120012);
			cm.worldSpouseMessage(0x20, "『绑定币商城』 : 恭喜 " + cm.getChar().getName() + " 用绑定猫咪币购买飞侠土豪心一个.");
			cm.dispose();
				} else {
			cm.sendOk("购买失败：\r\n\r\n#r1). 当前绑定猫咪币未达到条件.\r\n2). 背包装备栏位已满,请清理.");
			cm.dispose();
				}
			}else if(typed==5){
                if (cm.getPlayerPoints() >= 6000000 && cm.getSpace(1) >= 1) {
			cm.gainPlayerPoints(-6000000);
			cm.gainItem(1122126, 1);
			cm.sendOk("恭喜您成功购买#t1122126#.");
			cm.getMap().startMapEffect("恭喜玩家 "+cm.getChar().getName()+" 成功购买土豪心一个。", 5120012);
			cm.worldSpouseMessage(0x20, "『绑定币商城』 : 恭喜 " + cm.getChar().getName() + " 用绑定猫咪币购海盗土豪心一个.");
			cm.dispose();
				} else {
			cm.sendOk("购买失败：\r\n\r\n#r1). 当前绑定猫咪币未达到条件.\r\n2). 背包装备栏位已满,请清理.");
			cm.dispose();
				}
			}else if(typed==6){
                if (cm.getPlayerPoints() >= 500000 && cm.getSpace(1) >= 1) {
			cm.gainPlayerPoints(-500000);
			cm.gainItem(1142210, 1);
			cm.sendOk("恭喜您成功购买#t1142210#.");
			cm.getMap().startMapEffect("恭喜玩家 "+cm.getChar().getName()+" 成功购买王座收藏家一个。", 5120012);
			cm.worldSpouseMessage(0x20, "『绑定币商城』 : 恭喜 " + cm.getChar().getName() + " 用绑定猫咪币购买王座收藏家一个.");
			cm.dispose();
				} else {
			cm.sendOk("购买失败：\r\n\r\n#r1). 当前绑定猫咪币未达到条件.\r\n2). 背包装备栏位已满,请清理.");
			cm.dispose();
				}
			}else if(typed==7){
                if (cm.getPlayerPoints() >= 300000 && cm.getSpace(1) >= 1) {
			cm.gainPlayerPoints(-300000);
			cm.gainItem(1142178, 1);
			cm.sendOk("恭喜您成功购买#t1142178#.");
			cm.getMap().startMapEffect("恭喜玩家 "+cm.getChar().getName()+" 成功购买冒险岛形象大使一个。", 5120012);
			cm.worldSpouseMessage(0x20, "『绑定币商城』 : 恭喜 " + cm.getChar().getName() + " 用绑定猫咪币购买冒险岛形象大使一个.");
			cm.dispose();
				} else {
			cm.sendOk("购买失败：\r\n\r\n#r1). 当前绑定猫咪币未达到条件.\r\n2). 背包装备栏位已满,请清理.");
			cm.dispose();
				}
			}else if(typed==8){
                if (cm.getPlayerPoints() >= 1500000 && cm.getSpace(1) >= 1) {
			cm.gainPlayerPoints(-1500000);
			cm.gainItem(1132245, 1);
			cm.sendOk("恭喜您成功购买#t1132245#.");
			cm.getMap().startMapEffect("恭喜玩家 "+cm.getChar().getName()+" 成功购买高级贝勒德刻印腰带一个。", 5120012);
			cm.worldSpouseMessage(0x20, "『绑定币商城』 : 恭喜 " + cm.getChar().getName() + " 用绑定猫咪币购买高级贝勒德刻印腰带一个.");
			cm.dispose();
				} else {
			cm.sendOk("购买失败：\r\n\r\n#r1). 当前绑定猫咪币未达到条件.\r\n2). 背包装备栏位已满,请清理.");
			cm.dispose();
				}
			}else if(typed==9){
                if (cm.getPlayerPoints() >= 1000000 && cm.getSpace(1) >= 1) {
			cm.gainPlayerPoints(-1000000);
			cm.gainItem(1113074, 1);
			cm.sendOk("恭喜您成功购买#t1113074#.");
			cm.getMap().startMapEffect("恭喜玩家 "+cm.getChar().getName()+" 成功购买高级贝勒德刻印戒指一个。", 5120012);
			cm.worldSpouseMessage(0x20, "『绑定币商城』 : 恭喜 " + cm.getChar().getName() + " 用绑定猫咪币购买高级贝勒德刻印戒指一个.");
			cm.dispose();
				} else {
			cm.sendOk("购买失败：\r\n\r\n#r1). 当前绑定猫咪币未达到条件.\r\n2). 背包装备栏位已满,请清理.");
			cm.dispose();
				}
			}else if(typed==10){
                if (cm.getPlayerPoints() >= 1000000 && cm.getSpace(1) >= 1) {
			cm.gainPlayerPoints(-1000000);
			cm.gainItem(1122266, 1);
			cm.sendOk("恭喜您成功购买#t1122266#.");
			cm.getMap().startMapEffect("恭喜玩家 "+cm.getChar().getName()+" 成功购买高级贝勒德刻印吊坠一个。", 5120012);
			cm.worldSpouseMessage(0x20, "『绑定币商城』 : 恭喜 " + cm.getChar().getName() + " 用绑定猫咪币购买高级贝勒德刻印吊坠一个.");
			cm.dispose();
				} else {
			cm.sendOk("购买失败：\r\n\r\n#r1). 当前绑定猫咪币未达到条件.\r\n2). 背包装备栏位已满,请清理.");
			cm.dispose();
				}
			}else if(typed==11){
                if (cm.getPlayerPoints() >= 1000000 && cm.getSpace(1) >= 1) {
			cm.gainPlayerPoints(-1000000);
			cm.gainItem(1032222, 1);
			cm.sendOk("恭喜您成功购买#t1032222#.");
			cm.getMap().startMapEffect("恭喜玩家 "+cm.getChar().getName()+" 成功购买高级贝勒德刻印耳环一个。", 5120012);
			cm.worldSpouseMessage(0x20, "『绑定币商城』 : 恭喜 " + cm.getChar().getName() + " 用绑定猫咪币购买最高级贝勒德刻印耳环一个.");
			cm.dispose();
				} else {
			cm.sendOk("购买失败：\r\n\r\n#r1). 当前绑定猫咪币未达到条件.\r\n2). 背包装备栏位已满,请清理.");
			cm.dispose();
				}
			}else if(typed==12){
                if (cm.getPlayerPoints() >= 3000000 && cm.getSpace(1) >= 1) {
			cm.gainPlayerPoints(-3000000);
			cm.gainItem(1132246, 1);
			cm.sendOk("恭喜您成功购买#t1132246#.");
			cm.getMap().startMapEffect("恭喜玩家 "+cm.getChar().getName()+" 成功购买最高级贝勒德刻印腰带一个。", 5120012);
			cm.worldSpouseMessage(0x20, "『绑定币商城』 : 恭喜 " + cm.getChar().getName() + " 用绑定猫咪币购买最高级贝勒德刻印腰带一个.");
			cm.dispose();
				} else {
			cm.sendOk("购买失败：\r\n\r\n#r1). 当前绑定猫咪币未达到条件.\r\n2). 背包装备栏位已满,请清理.");
			cm.dispose();
				}
			}else if(typed==13){
                if (cm.getPlayerPoints() >= 3000000 && cm.getSpace(1) >= 1) {
			cm.gainPlayerPoints(-3000000);
			cm.gainItem(1113075, 1);
			cm.sendOk("恭喜您成功购买#t1113075#.");
			cm.getMap().startMapEffect("恭喜玩家 "+cm.getChar().getName()+" 成功购买最高级贝勒德戒指一个。", 5120012);
			cm.worldSpouseMessage(0x20, "『绑定币商城』 : 恭喜 " + cm.getChar().getName() + " 用绑定猫咪币购买最高级贝勒德戒指一个.");
			cm.dispose();
				} else {
			cm.sendOk("购买失败：\r\n\r\n#r1). 当前绑定猫咪币未达到条件.\r\n2). 背包装备栏位已满,请清理.");
			cm.dispose();
				}
			}else if(typed==14){
                if (cm.getPlayerPoints() >= 2000000 && cm.getSpace(1) >= 1) {
			cm.gainPlayerPoints(-2000000);
			cm.gainItem(1122267, 1);
			cm.sendOk("恭喜您成功购买#t1122267#.");
			cm.getMap().startMapEffect("恭喜玩家 "+cm.getChar().getName()+" 成功购买代码最高级贝勒德刻印吊坠一个。", 5120012);
			cm.worldSpouseMessage(0x20, "『绑定币商城』 : 恭喜 " + cm.getChar().getName() + " 用绑定猫咪币购买最高级贝勒德刻印吊坠一个.");
			cm.dispose();
				} else {
			cm.sendOk("购买失败：\r\n\r\n#r1). 当前绑定猫咪币未达到条件.\r\n2). 背包装备栏位已满,请清理.");
			cm.dispose();
				}
			}else if(typed==15){
                if (cm.getPlayerPoints() >= 3000000 && cm.getSpace(1) >= 1) {
			cm.gainPlayerPoints(-3000000);
			cm.gainItem(1032223, 1);
			cm.sendOk("恭喜您成功购买#t1032223#.");
			cm.getMap().startMapEffect("恭喜玩家 "+cm.getChar().getName()+" 成功购买最高级贝勒德耳环一个。", 5120002);
			cm.worldSpouseMessage(0x20, "『绑定币商城』 : 恭喜 " + cm.getChar().getName() + " 用绑定猫咪币购买最高级贝勒德耳环一个.");
			cm.dispose();
				} else {
			cm.sendOk("购买失败：\r\n\r\n#r1). 当前绑定猫咪币未达到条件.\r\n2). 背包装备栏位已满,请清理.");
			cm.dispose();
				}
	        }else if(typed==16){   // WELCOME特效。
                if (cm.getPlayerPoints() >= 10000000 && cm.getSpace(1) >= 1) {
			cm.gainPlayerPoints(-10000000);
			var ii = cm.getItemInfo();				
			var toDrop = ii.randomizeStats(ii.getEquipById(1112941)).copy(); // 生成一个Equip类                    
            toDrop.setStr(100); //装备力量
			toDrop.setDex(100); //装备敏捷
			toDrop.setInt(100); //装备智力
			toDrop.setLuk(100); //装备运气
			toDrop.setMatk(100); //物理攻击
			toDrop.setWatk(100); //魔法攻击 
			cm.addFromDrop(cm.getC(), toDrop, false);
			cm.gainNX(1, 2);
			cm.sendOk("恭喜您成功购买WELCOME特效.");
			cm.getMap().startMapEffect("恭喜玩家 "+cm.getChar().getName()+" 成功购买WELCOME特效一个。", 5120002);
			cm.worldSpouseMessage(0x20, "『本服土豪』 : 恭喜真·土豪 " + cm.getChar().getName() + " 购买了土豪专署WELCOME特效一个.");
			cm.worldSpouseMessage(0x20, "『本服土豪』 : 恭喜真·土豪 " + cm.getChar().getName() + " 购买了土豪专署WELCOME特效一个.");
			cm.worldSpouseMessage(0x20, "『本服土豪』 : 恭喜真·土豪 " + cm.getChar().getName() + " 购买了土豪专署WELCOME特效一个.");
			cm.worldSpouseMessage(0x20, "『本服土豪』 : 恭喜真·土豪 " + cm.getChar().getName() + " 购买了土豪专署WELCOME特效一个.");
			cm.worldSpouseMessage(0x20, "『本服土豪』 : 恭喜真·土豪 " + cm.getChar().getName() + " 购买了土豪专署WELCOME特效一个.");
			cm.worldSpouseMessage(0x20, "『本服土豪』 : 恭喜真·土豪 " + cm.getChar().getName() + " 购买了土豪专署WELCOME特效一个.");
			cm.worldSpouseMessage(0x20, "『本服土豪』 : 恭喜真·土豪 " + cm.getChar().getName() + " 购买了土豪专署WELCOME特效一个.");
			cm.worldSpouseMessage(0x20, "『本服土豪』 : 恭喜真·土豪 " + cm.getChar().getName() + " 购买了土豪专署WELCOME特效一个.");
			cm.worldSpouseMessage(0x20, "『本服土豪』 : 恭喜真·土豪 " + cm.getChar().getName() + " 购买了土豪专署WELCOME特效一个.");
			cm.worldSpouseMessage(0x20, "『本服土豪』 : 恭喜真·土豪 " + cm.getChar().getName() + " 购买了土豪专署WELCOME特效一个.");
			cm.dispose();
				} else {
			cm.sendOk("购买失败：\r\n\r\n#r1). 当前绑定猫咪币未达到条件.\r\n2). 背包装备栏位已满,请清理.");
			cm.dispose();
				}
			}else if(typed==20){
                if (cm.getPlayerPoints() >= 1500000 && cm.getSpace(1) >= 1) {
			cm.gainPlayerPoints(-1500000);
			cm.gainItem(1402196, 1);
			cm.sendOk("恭喜您成功购买150级武器.");
			cm.getMap().startMapEffect("恭喜玩家 "+cm.getChar().getName()+" 成功购买150级武器一把。", 5120012);
			cm.worldSpouseMessage(0x20, "『绑定币商城』 : 恭喜 " + cm.getChar().getName() + " 用150W绑定猫咪币购买150级武器一把.");
			cm.dispose();
				} else {
			cm.sendOk("购买失败：\r\n\r\n#r1). 当前绑定猫咪币未达到条件.\r\n2). 背包装备栏位已满,请清理.");
			cm.dispose();
				}
			}else if(typed==21){
                if (cm.getPlayerPoints() >= 1500000 && cm.getSpace(1) >= 1) {
			cm.gainPlayerPoints(-1500000);
			cm.gainItem(1432167, 1);
			cm.sendOk("恭喜您成功购买150级武器.");
			cm.getMap().startMapEffect("恭喜玩家 "+cm.getChar().getName()+" 成功购买150级武器一把。", 5120012);
			cm.worldSpouseMessage(0x20, "『绑定币商城』 : 恭喜 " + cm.getChar().getName() + " 用150W绑定猫咪币购买150级武器一把.");
			cm.dispose();
				} else {
			cm.sendOk("购买失败：\r\n\r\n#r1). 当前绑定猫咪币未达到条件.\r\n2). 背包装备栏位已满,请清理.");
			cm.dispose();
				}
			}else if(typed==22){
                if (cm.getPlayerPoints() >= 1500000 && cm.getSpace(1) >= 1) {
			cm.gainPlayerPoints(-1500000);
			cm.gainItem(1452205, 1);
			cm.sendOk("恭喜您成功购买150级武器.");
			cm.getMap().startMapEffect("恭喜玩家 "+cm.getChar().getName()+" 成功购买150级武器一把。", 5120012);
			cm.worldSpouseMessage(0x20, "『绑定币商城』 : 恭喜 " + cm.getChar().getName() + " 用150W绑定猫咪币购买150级武器一把.");
			cm.dispose();
				} else {
			cm.sendOk("购买失败：\r\n\r\n#r1). 当前绑定猫咪币未达到条件.\r\n2). 背包装备栏位已满,请清理.");
			cm.dispose();
				}
			}else if(typed==23){
                if (cm.getPlayerPoints() >= 1500000 && cm.getSpace(1) >= 1) {
			cm.gainPlayerPoints(-1500000);
			cm.gainItem(1462193, 1);
			cm.sendOk("恭喜您成功购买150级武器.");
			cm.getMap().startMapEffect("恭喜玩家 "+cm.getChar().getName()+" 成功购买150级武器一把。", 5120012);
			cm.worldSpouseMessage(0x20, "『绑定币商城』 : 恭喜 " + cm.getChar().getName() + " 用150W绑定猫咪币购买150级武器一把.");
			cm.dispose();
				} else {
			cm.sendOk("购买失败：\r\n\r\n#r1). 当前绑定猫咪币未达到条件.\r\n2). 背包装备栏位已满,请清理.");
			cm.dispose();
				}
			}else if(typed==24){
                if (cm.getPlayerPoints() >= 1500000 && cm.getSpace(1) >= 1) {
			cm.gainPlayerPoints(-1500000);
			cm.gainItem(1522094, 1);
			cm.sendOk("恭喜您成功购买150级武器.");
			cm.getMap().startMapEffect("恭喜玩家 "+cm.getChar().getName()+" 成功购买150级武器一把。", 5120012);
			cm.worldSpouseMessage(0x20, "『绑定币商城』 : 恭喜 " + cm.getChar().getName() + " 用150W绑定猫咪币购买150级武器一把.");
			cm.dispose();
				} else {
			cm.sendOk("购买失败：\r\n\r\n#r1). 当前绑定猫咪币未达到条件.\r\n2). 背包装备栏位已满,请清理.");
			cm.dispose();
				}
			}else if(typed==25){
                if (cm.getPlayerPoints() >= 1500000 && cm.getSpace(1) >= 1) {
			cm.gainPlayerPoints(-1500000);
			cm.gainItem(1472214, 1);
			cm.sendOk("恭喜您成功购买150级武器.");
			cm.getMap().startMapEffect("恭喜玩家 "+cm.getChar().getName()+" 成功购买150级武器一把。", 5120012);
			cm.worldSpouseMessage(0x20, "『绑定币商城』 : 恭喜 " + cm.getChar().getName() + " 用150W绑定猫咪币购买150级武器一把.");
			cm.dispose();
				} else {
			cm.sendOk("购买失败：\r\n\r\n#r1). 当前绑定猫咪币未达到条件.\r\n2). 背包装备栏位已满,请清理.");
			cm.dispose();
				}
			}else if(typed==26){
                if (cm.getPlayerPoints() >= 1500000 && cm.getSpace(1) >= 1) {
			cm.gainPlayerPoints(-1500000);
			cm.gainItem(1332225, 1);
			cm.sendOk("恭喜您成功购买150级武器.");
			cm.getMap().startMapEffect("恭喜玩家 "+cm.getChar().getName()+" 成功购买150级武器一把。", 5120012);
			cm.worldSpouseMessage(0x20, "『绑定币商城』 : 恭喜 " + cm.getChar().getName() + " 用150W绑定猫咪币购买150级武器一把.");
			cm.dispose();
				} else {
			cm.sendOk("购买失败：\r\n\r\n#r1). 当前绑定猫咪币未达到条件.\r\n2). 背包装备栏位已满,请清理.");
			cm.dispose();
				}
			}else if(typed==27){
                if (cm.getPlayerPoints() >= 1500000 && cm.getSpace(1) >= 1) {
			cm.gainPlayerPoints(-1500000);
			cm.gainItem(1342082, 1);
			cm.sendOk("恭喜您成功购买150级武器.");
			cm.getMap().startMapEffect("恭喜玩家 "+cm.getChar().getName()+" 成功购买150级武器一把。", 5120012);
			cm.worldSpouseMessage(0x20, "『绑定币商城』 : 恭喜 " + cm.getChar().getName() + " 用150W绑定猫咪币购买150级武器一把.");
			cm.dispose();
				} else {
			cm.sendOk("购买失败：\r\n\r\n#r1). 当前绑定猫咪币未达到条件.\r\n2). 背包装备栏位已满,请清理.");
			cm.dispose();
				}
			}else if(typed==28){
                if (cm.getPlayerPoints() >= 1500000 && cm.getSpace(1) >= 1) {
			cm.gainPlayerPoints(-1500000);
			cm.gainItem(1362090, 1);
			cm.sendOk("恭喜您成功购买150级武器.");
			cm.getMap().startMapEffect("恭喜玩家 "+cm.getChar().getName()+" 成功购买150级武器一把。", 5120012);
			cm.worldSpouseMessage(0x20, "『绑定币商城』 : 恭喜 " + cm.getChar().getName() + " 用150W绑定猫咪币购买150级武器一把.");
			cm.dispose();
				} else {
			cm.sendOk("购买失败：\r\n\r\n#r1). 当前绑定猫咪币未达到条件.\r\n2). 背包装备栏位已满,请清理.");
			cm.dispose();
				}
			}else if(typed==29){
                if (cm.getPlayerPoints() >= 1500000 && cm.getSpace(1) >= 1) {
			cm.gainPlayerPoints(-1500000);
			cm.gainItem(1382208, 1);
			cm.sendOk("恭喜您成功购买150级武器.");
			cm.getMap().startMapEffect("恭喜玩家 "+cm.getChar().getName()+" 成功购买150级武器一把。", 5120012);
			cm.worldSpouseMessage(0x20, "『绑定币商城』 : 恭喜 " + cm.getChar().getName() + " 用150W绑定猫咪币购买150级武器一把.");
			cm.dispose();
				} else {
			cm.sendOk("购买失败：\r\n\r\n#r1). 当前绑定猫咪币未达到条件.\r\n2). 背包装备栏位已满,请清理.");
			cm.dispose();
				}
			}else if(typed==30){
                if (cm.getPlayerPoints() >= 1500000 && cm.getSpace(1) >= 1) {
			cm.gainPlayerPoints(-1500000);
			cm.gainItem(1372177, 1);
			cm.sendOk("恭喜您成功购买150级武器.");
			cm.getMap().startMapEffect("恭喜玩家 "+cm.getChar().getName()+" 成功购买150级武器一把。", 5120012);
			cm.worldSpouseMessage(0x20, "『绑定币商城』 : 恭喜 " + cm.getChar().getName() + " 用150W绑定猫咪币购买150级武器一把.");
			cm.dispose();
				} else {
			cm.sendOk("购买失败：\r\n\r\n#r1). 当前绑定猫咪币未达到条件.\r\n2). 背包装备栏位已满,请清理.");
			cm.dispose();
				}
			}else if(typed==31){
                if (cm.getPlayerPoints() >= 1500000 && cm.getSpace(1) >= 1) {
			cm.gainPlayerPoints(-1500000);
			cm.gainItem(1212063, 1);
			cm.sendOk("恭喜您成功购买150级武器.");
			cm.getMap().startMapEffect("恭喜玩家 "+cm.getChar().getName()+" 成功购买150级武器一把。", 5120012);
			cm.worldSpouseMessage(0x20, "『绑定币商城』 : 恭喜 " + cm.getChar().getName() + " 用150W绑定猫咪币购买150级武器一把.");
			cm.dispose();
				} else {
			cm.sendOk("购买失败：\r\n\r\n#r1). 当前绑定猫咪币未达到条件.\r\n2). 背包装备栏位已满,请清理.");
			cm.dispose();
				}
			}else if(typed==32){
                if (cm.getPlayerPoints() >= 1500000 && cm.getSpace(1) >= 1) {
			cm.gainPlayerPoints(-1500000);
			cm.gainItem(1242060, 1);
			cm.sendOk("恭喜您成功购买150级武器.");
			cm.getMap().startMapEffect("恭喜玩家 "+cm.getChar().getName()+" 成功购买150级武器一把。", 5120012);
			cm.worldSpouseMessage(0x20, "『绑定币商城』 : 恭喜 " + cm.getChar().getName() + " 用150W绑定猫咪币购买150级武器一把.");
			cm.dispose();
				} else {
			cm.sendOk("购买失败：\r\n\r\n#r1). 当前绑定猫咪币未达到条件.\r\n2). 背包装备栏位已满,请清理.");
			cm.dispose();
				}
			}else if(typed==33){
                if (cm.getPlayerPoints() >= 1500000 && cm.getSpace(1) >= 1) {
			cm.gainPlayerPoints(-1500000);
			cm.gainItem(1232057, 1);
			cm.sendOk("恭喜您成功购买150级武器.");
			cm.getMap().startMapEffect("恭喜玩家 "+cm.getChar().getName()+" 成功购买150级武器一把。", 5120012);
			cm.worldSpouseMessage(0x20, "『绑定币商城』 : 恭喜 " + cm.getChar().getName() + " 用150W绑定猫咪币购买150级武器一把.");
			cm.dispose();
				} else {
			cm.sendOk("购买失败：\r\n\r\n#r1). 当前绑定猫咪币未达到条件.\r\n2). 背包装备栏位已满,请清理.");
			cm.dispose();
				}
			}else if(typed==34){
                if (cm.getPlayerPoints() >= 1500000 && cm.getSpace(1) >= 1) {
			cm.gainPlayerPoints(-1500000);
			cm.gainItem(1312153, 1);
			cm.sendOk("恭喜您成功购买150级武器.");
			cm.getMap().startMapEffect("恭喜玩家 "+cm.getChar().getName()+" 成功购买150级武器一把。", 5120012);
			cm.worldSpouseMessage(0x20, "『绑定币商城』 : 恭喜 " + cm.getChar().getName() + " 用150W绑定猫咪币购买150级武器一把.");
			cm.dispose();
				} else {
			cm.sendOk("购买失败：\r\n\r\n#r1). 当前绑定猫咪币未达到条件.\r\n2). 背包装备栏位已满,请清理.");
			cm.dispose();
				}
			}else if(typed==35){
                if (cm.getPlayerPoints() >= 1500000 && cm.getSpace(1) >= 1) {
			cm.gainPlayerPoints(-1500000);
			cm.gainItem(1322203, 1);
			cm.sendOk("恭喜您成功购买150级武器.");
			cm.getMap().startMapEffect("恭喜玩家 "+cm.getChar().getName()+" 成功购买150级武器一把。", 5120012);
			cm.worldSpouseMessage(0x20, "『绑定币商城』 : 恭喜 " + cm.getChar().getName() + " 用150W绑定猫咪币购买150级武器一把.");
			cm.dispose();
				} else {
			cm.sendOk("购买失败：\r\n\r\n#r1). 当前绑定猫咪币未达到条件.\r\n2). 背包装备栏位已满,请清理.");
			cm.dispose();
				}
			}else if(typed==36){
                if (cm.getPlayerPoints() >= 1500000 && cm.getSpace(1) >= 1) {
			cm.gainPlayerPoints(-1500000);
			cm.gainItem(1302275, 1);
			cm.sendOk("恭喜您成功购买150级武器.");
			cm.getMap().startMapEffect("恭喜玩家 "+cm.getChar().getName()+" 成功购买150级武器一把。", 5120012);
			cm.worldSpouseMessage(0x20, "『绑定币商城』 : 恭喜 " + cm.getChar().getName() + " 用150W绑定猫咪币购买150级武器一把.");
			cm.dispose();
				} else {
			cm.sendOk("购买失败：\r\n\r\n#r1). 当前绑定猫咪币未达到条件.\r\n2). 背包装备栏位已满,请清理.");
			cm.dispose();
				}
			}else if(typed==37){
                if (cm.getPlayerPoints() >= 1500000 && cm.getSpace(1) >= 1) {
			cm.gainPlayerPoints(-1500000);
			cm.gainItem(1482168, 1);
			cm.sendOk("恭喜您成功购买150级武器.");
			cm.getMap().startMapEffect("恭喜玩家 "+cm.getChar().getName()+" 成功购买150级武器一把。", 5120012);
			cm.worldSpouseMessage(0x20, "『绑定币商城』 : 恭喜 " + cm.getChar().getName() + " 用150W绑定猫咪币购买150级武器一把.");
			cm.dispose();
				} else {
			cm.sendOk("购买失败：\r\n\r\n#r1). 当前绑定猫咪币未达到条件.\r\n2). 背包装备栏位已满,请清理.");
			cm.dispose();
			    }
			}else if(typed==38){
                if (cm.getPlayerPoints() >= 1500000 && cm.getSpace(1) >= 1) {
			cm.gainPlayerPoints(-1500000);
			cm.gainItem(1222058, 1);
			cm.sendOk("恭喜您成功购买150级武器.");
			cm.getMap().startMapEffect("恭喜玩家 "+cm.getChar().getName()+" 成功购买150级武器一把。", 5120012);
			cm.worldSpouseMessage(0x20, "『绑定币商城』 : 恭喜 " + cm.getChar().getName() + " 用150W绑定猫咪币购买150级武器一把.");
			cm.dispose();
				} else {
			cm.sendOk("购买失败：\r\n\r\n#r1). 当前绑定猫咪币未达到条件.\r\n2). 背包装备栏位已满,请清理.");
			cm.dispose();
			    }
			}else if(typed==39){
                if (cm.getPlayerPoints() >= 1500000 && cm.getSpace(1) >= 1) {
			cm.gainPlayerPoints(-1500000);
			cm.gainItem(1442223, 1);
			cm.sendOk("恭喜您成功购买150级武器.");
			cm.getMap().startMapEffect("恭喜玩家 "+cm.getChar().getName()+" 成功购买150级武器一把。", 5120012);
			cm.worldSpouseMessage(0x20, "『绑定币商城』 : 恭喜 " + cm.getChar().getName() + " 用150W绑定猫咪币购买150级武器一把.");
			cm.dispose();
				} else {
			cm.sendOk("购买失败：\r\n\r\n#r1). 当前绑定猫咪币未达到条件.\r\n2). 背包装备栏位已满,请清理.");
			cm.dispose();
				}
           }
		}
	  }
	}
