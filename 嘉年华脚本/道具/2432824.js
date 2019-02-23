var status = -1;
var status2 = -1;
var select = -1;
var select2 = -1;
var nowLv = -1;
var questDat = -1;
var questDat = -1;
var rewardLevel = [10, 15, 30, 45, 60, 85, 100];
var rewarditems = [2450042, 2450042, 2450042, 2450042, 2450042, 2450042, 2450042];
var supportLevel = [10, 30, 60, 100];
var supports = [5000137, 5010110, 1182071, 1113020];



function start() {
	im.sendSimple("你好, 我正为来到冒险岛世界的新勇士的成长及定居提供帮助。\r\n#b#L0#领取成长支援道具#l\r\n#L1#转职等级达成特殊礼物#l\r\n#L2#冒险岛世界向导#l#k");
}

function action(mode, type, selection) {
	if (mode == 1) {
		if (status2 == -1)
			status++;
	} else {
		if (status2 == -1)
			status--;
	}
	if (status == 0) {
		if (select == -1)
			select = selection;
		if (select == 0) {
			im.sendNext("为了帮助勇士你成长, 我准备了各种道具。");
			questDat = im.getQuestRecord(99998).getCustomData();
			if (questDat == null)
				questDat = -1;
			else
				questDat = Number(questDat);
		} else if (select == 1) {
			im.sendNext("为了帮助达到转职等级（10级, 30级, 60级, 100级）的勇士成长, 我准备了各种道具。");
			questDat = im.getQuestRecord(99999).getCustomData();
			if (questDat == null)
				questDat = -1;
			else
				questDat = Number(questDat);
		} else if (select == 2) {
			im.sendSimple("我们对不仅仅满足于教程内容的勇士们准备了特别板块！\r\n我们将通过特别板块为大家介绍玩冒险岛时应该知道的内容。\r\n获得与出售道具\r\n#b#L0#宠物#l\r\n#L1#背包#l\r\n#L2#自由市场#l\r\n#L3#猫头鹰#l#k\r\n\r\n装备强化\r\n#b#L4#数字强化#l\r\n#L5#星级强化#l\r\n#L6#潜能（魔方）#l#k\r\n\r\n装扮角色\r\n#b#L7#角色服装#l\r\n#L8#整容与发型#l#k");
		}
	} else if (status == 1) {
		if (nowLv == -1)
			nowLv = im.getPlayer().getLevel();
		if (select == 0 || select == 1) {
			im.sendNextPrev("当前勇士你的等级为#b" + nowLv + "级#k啊。");
		} else if (select == 2) {
			xiangDao(mode, type, selection);
		}
	} else if (status == 2) {
		if (select == 0) {
			var can = -1;
			for (var i = questDat; i < rewardLevel.length; i++) {
				if (questDat == -1 && nowLv >= rewardLevel[0]) {
					can = -2;
					break;
				} else if (nowLv >= rewardLevel[i+1] && questDat != i+1) {
					can = i+1;
					break;
				}
			}
			var str = "";
			if (can == -1 || (can == questDat && questDat == 0)) {
				if (nowLv < rewardLevel[0]) {
					im.sendOk("现在还无法领取任何东西哦。");
				} else {
					if (questDat < rewardLevel.length-1) {
						str = "如果你达到" + rewardLevel[questDat+1] + "级, 我就给你#i" + rewarditems[questDat+1] + "##b #t" + rewarditems[questDat+1] + "##k, 请记得来领取哦!";
					}
					im.sendOk("你已经领取过#t" + rewarditems[questDat] + "#了啊。" + str);
				}
			} else {
				if (can == -2)
					can = 0;
				if (im.canHold(rewarditems[can])) {
					im.gainItem(rewarditems[can], 1);
					if (questDat < rewardLevel.length-2) {
						str = "如果你达到" + rewardLevel[can+1] + "级, 我会给你#i" + rewarditems[can+1] + "##b #t" + rewarditems[can+1] + "##k, 请记得来领取哦!";
					}
					im.sendOk("你成功领取了#t" + rewarditems[can] + "#。" + str);
					im.getQuestRecord(99998).setCustomData(can);
				} else {
					im.sendOk("请确认你的背包空间是否足够。");
				}
			}
		} else if (select == 1) {
			var can = -1;
			for (var i = questDat - 1; i < supportLevel.length; i++) {
				if (questDat == -1 && nowLv >= supportLevel[0]) {
					can = -2;
					break;
				} else if (nowLv >= supportLevel[i+1] && questDat != i+1) {
					can = i+1;
					break;
				}
			}
			var str = "";
			if (can == -1 || (can == questDat && questDat == 0)) {
				if (nowLv < supportLevel[0]) {
					im.sendOk("现在还无法领取任何东西哦。");
				} else {
					if (questDat < supportLevel.length-1) {
						str = "如果你达到" + supportLevel[questDat+1] + "级, 我就给你#i" + supports[questDat+1] + "##b #t" + supports[questDat+1] + "##k, 请记得来领取哦!";
					}
					im.sendOk("你已经领取过#t" + supports[questDat] + "#了啊。" + str);
				}
			} else {
				if (can == -2)
					can = 0;
				if (im.canHold(supports[can])) {
					if (can == 0) {
						im.gainPet(supports[can], "永恒的FunMS", 15, 1642, 100, 0, -1);
					} else {
						im.gainItem(supports[can], 1);
					}
					if (questDat < supportLevel.length-2) {
						str = "如果你达到" + supportLevel[can+1] + "级, 我会给你#i" + supports[can+1] + "##b #t" + supports[can+1] + "##k, 请记得来领取哦!";
					}
					im.sendOk("你成功领取了#t" + supports[can] + "#。" + str);
					im.getQuestRecord(99999).setCustomData(can);
				} else {
					im.sendOk("请确认你的背包空间是否足够。");
				}
			}
		}
		im.dispose();
	} else {
		im.dispose();
	}
}

function xiangDao(mode, type, selection) {
	if (mode == 1) {
		status2++;
	} else {
		status2--;
	}

	if (status2 == 0) {
		if (select2 == -1)
			select2 = selection;
		if (select2 == 0) {
			im.sendNext("宠物是宠物管理员科洛伊制作出的可爱伙伴。宠物的作用有很多，可以获得道具，还能使用增益技能进行狩猎。");
		} else if (select2 == 1) {
			im.sendNext("通过狩猎怪物及参与各种活动获得的道具，将会被保管在背包中。");
		} else if (select2 == 2) {
			im.sendNext("精心搜集并整理的道具。在冒险岛世界各个地区活动的勇士们齐聚在一起，进行道具交易的地方正是自由市场。\r\n#i3800707#");
		} else if (select2 == 3) {
			im.sendNext("自由市场的自卖机太多了，很难找到想要的物品？那么，请利用#i5230000# #t5230000#来快速找到自己想要的道具吧。");
		} else if (select2 == 4) {
			im.sendNext("强化是从使用卷轴的数字强化而开始的。");
		} else if (select2 == 5) {
			im.sendNext("想要制作出较强的武器，需要经过各种试炼。我将为你说明强化的最后阶段--星级强化，请仔细听好。");
		} else if (select2 == 6) {
			im.sendNextPrev("我将为你说明下强化之花--潜能！");
		} else if (select2 == 7) {
			im.sendNextPrev("你想变得与其他勇士不同，看起来更有个性？");
		} else if (select2 == 8) {
			im.sendNextPrev("时尚的重点当然是脸蛋啦！");
		}
	} else if (status2 == 1) {
		if (select2 == 0) {
			im.sendNextPrev("宠物能帮忙拾取怪物掉落的道具，并搬运到你的背包中。\r\n学会特殊技能的宠物可以帮你使用药水，并不断施展增益技能。\r\n#i3800701#");
		} else if (select2 == 1) {
			im.sendNextPrev("你已经通过教程了解到背包的基本情况了吧？\r\n我来为你说明下背包的各种功能吧。");
		} else if (select2 == 2) {
			im.sendNextPrev("自由市场那里有很多房间，你可以在各房间内开启自卖机出售物品，或者到其他勇士的自卖机那里购买想要的物品。\r\n#i38007078");
		} else if (select2 == 3) {
			im.sendNextPrev("你可以在商城中的#b#e商店#k#n选项下进行购买。\r\n#i3800710#");
		} else if (select2 == 4) {
			im.sendNextPrev("点击背包中的装备强化按钮，然后将卷轴和装备放上去吧。\r\n#i3800712#");
		} else if (select2 == 5) {
			im.sendNextPrev("你可以使用#i2049301# #t2049301#，对可升级次数为0的装备进行星级强化。");
		} else if (select2 == 6) {
			im.sendNextPrev("以极小的概率在野外获得被赋予潜能的装备时，或者使用#i2049401# #t2049401#为c级装备赋予潜能时，将会引出装备中隐藏的力量。");
		} else if (select2 == 7) {
			im.sendNextPrev("手拿高等级装备看起来很不错，但身着美丽服装的勇士看起来更加引人注目。..如果想把角色装扮得更好看，那就在商城服装选项或礼包服装选项下进行购买吧。\r\n#i3800718#");
		} else if (select2 == 8) {
			im.sendNextPrev("请通过发型/整容来让角色变得更时尚吧。\r\n请在持有#i5152053# #t5152053#, #i5150040# #t5150040#之类道具的情况下，去村庄中的整形外科或美容院看看吧。");
		}
	} else if (status2 == 2) {
		if (select2 == 0) {
			im.sendNextPrev("如果想了解宠物的详细情报，可以在角色信息栏或者装备栏的宠物标签中进行查看。\r\n#i3800702#");
		} else if (select2 == 1) {
			im.sendNextPrev("首先是扩展背包。打开背包你会发现背包中只有24个空格。点击#b#e扩展背包#k#n按钮，你就能一下子看到96个空格。\r\n#i3800703#");
		} else if (select2 == 2) {
			im.sendNextPrev("为了开启自卖机，可以到商城的游戏- 商店选项下，购买自卖机开启许可证或者购买雇佣商人。\r\n 在仔细阅读道具说明后，购买符合你意图的自卖机就行啦！\r\n#i3800709#");
		} else if (select2 == 3) {
			im.sendNextPrev("如果使用购买的猫头鹰道具，搜索想要购买或者出售的道具，还能找到该道具的价格与位置。\r\n#i3800711#");
		} else if (select2 == 4) {
			im.sendNextPrev("确认下武器和卷轴是否已经添加到装备强化栏，然后点击升级按钮，就能进行强化了！\r\n#i3800713#");
		} else if (select2 == 5) {
			im.sendNextPrev("装备强化卷轴的使用方式与数字强化时相同。");
		} else if (select2 == 6) {
			im.sendNextPrev("被赋予潜能的装备等级可分为B~SS4级，装备提示组件下方将会标注被赋予的潜能。");
		} else if (select2 == 7) {
			im.sendNextPrev("你只要在背包的特殊栏中穿上所购买的装备就行了。穿上特殊装备后，装备栏中的道具会被自动换下。\r\n#i3800719#");
		} else if (select2 == 8) {
			im.sendNextPrev("听说#p1012117#是冒险岛世界最棒的美容师呢~\r\n#i3800720#");
		}
	} else if (status2 == 3) {
		if (select2 == 0) {
			im.sendNextPrev("宠物、宠物装备和宠物技能可以在商城的宠物选项下进行购买。");
		} else if (select2 == 1) {
			im.sendNextPrev("就像这样。\r\n #i3800704#\r\n显示X的部分为无法使用的空间。");
		} else if (select2 == 2) {
			im.dispose();
		} else if (select2 == 3) {
			im.sendNextPrev("还有更聪明的#i5230003# #t5230003#，你可以参考一下。");
		} else if (select2 == 4) {
			im.sendNextPrev("只有当装备的可升级次数大于0时，才能进行数字强化。每次升级时，可升级次数减少1次。");
		} else if (select2 == 5) {
			im.sendNextPrev("如果星级强化成功，道具名称上方的星星就会增多。\r\n请记住，在进行星级强化时，道具名称上方的星星个数越多，能力值就越强，但同时强化的成功率将会降低。\r\n#i3800715#");
		} else if (select2 == 6) {
			im.sendNextPrev("如果想更改装备等级，或者更改装备被赋予的潜能，可以使用#i5062000# #t5062000#类型的道具。魔方可以在商城强化选项中进行确认。");
		} else if (select2 == 7) {
			im.dispose();
		} else if (select2 == 8) {
			im.dispose();
		}
	} else if (status2 == 4) {
		if (select2 == 0) {
			im.sendNextPrev("如果你对宠物饲养有任何疑问，可以去找#m100000200#的#p1012005。他是宠物管理员，应该能帮你解决很多疑问。");
		} else if (select2 == 1) {
			im.sendNextPrev("通过活动获得背包扩展道具(#i2430951# #i2430952# #i2430953# #i2430954#)并使用的话，可开启能够放入道具的空间。\r\n你也可以通过商城开启背包空间。");
		} else if (select2 == 3) {
			im.sendNextPrev("当达到10级时，为了让你能通过#t2342824#来体验猫头鹰道具，我将为你发放#i5230000# #t5230000#和#i5230003# #t5230003#，请不要忘记来领取啊！");
		} else if (select2 == 4) {
			im.sendNextPrev("强化成功时，道具名旁边的数字会增大。所以这种强化才被称为是数字强化。\r\n#i3800714#");
		} else if (select2 == 5) {
			im.sendNextPrev("啊！如果对道具说明中标注“极真”的装备进行星级强化，该装备的能力值将会大幅上升。如果获得极真装备，一定要进行星级强化哦！\r\n#i3800716#");
		} else if (select2 == 6) {
			im.sendNextPrev("啊，如果你觉得潜能只有1个或2个太可惜了，可以利用#i2049500# #t2049500#之类的道具，将潜能最大提升至3个，请记住哦！\r\n#i3800717#");
		}
	} else if (status2 == 5) {
		if (select2 == 0) {
			im.sendNextPrev("当达到10级时，为了让你能通过#t2342824#在7天内体验宠物，我会为你发放#i5000393# #t5000393#，请不要忘记来领取啊！");
		} else if (select2 == 1) {
			im.sendNextPrev("接下来是收拢和整理。背包中所区分的5类标签，每个标签的最大可利用空间为96个空格。收拢和整理的作用就是可以让道具的整理变得更加便利。");
		} else if (select2 == 3) {
			im.dispose();
		} else if (select2 == 4) {
			im.sendNextPrev("使用存在破坏概率的卷轴进行强化，且强化失败时，好不容易搜集到的装备将会消失。为了防止这种事情发生，可以从商城购买#i5064000# #t5064000#，在进行强化前使用！");
		} else if (select2 == 5) {
			im.dispose();
		} else if (select2 == 6) {
			im.sendNextPrev("在2014年7月9日至2014年7月25日这段时间，如果访问#m706040000#，就能通过巨大魔方重新设置潜能，请积极参与吧");
		}
	} else if (status2 == 6) {
		if (select2 == 0) {
			im.dispose();
		} else if (select2 == 1) {
			im.sendNextPrev("点击向上收拢按钮，该标签下的道具就会从左上方开始重新排列，并且中间不会留出空格。\r\n#i3800705#");
		} else if (select2 == 4) {
			im.dispose();
		} else if (select2 == 6) {
			im.dispose();
		}
	} else if (status2 == 7) {
		if (select2 == 1) {
			im.sendNextPrev("原本显示向上搜集按钮的地方，出现了按种类排列按钮，我们现在点击下按种类排列按钮吧？\r\n该按钮能将相关标签下的道具按照相似的种类进行排列。是不是很方便啊？\r\n#i3800706#");
		}
	} else if (status2 == 8) {
		if (select2 == 1) {
			im.sendNextPrev("请利用这种隐藏的功能，有效地管理背包吧！");
		}
	} else if (status2 == 9) {
		if (select2 == 1) {
			im.sendNextPrev("当达到30级时，为了让你能通过#t2342824#享受更多背包空间，我将为你发放#i2430952# #t2430952#，请不要忘记来领取啊！");
		}
	} else if (status2 == 10) {
		if (select2 == 1) {
			im.dispose();
		}
	} else {
		status2 = -1;
	}
}
