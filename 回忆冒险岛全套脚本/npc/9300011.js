var status = 0;
var bossid = "等级礼包";
var giftLevel = Array(50,100,120,140,160,180,200,250);
var giftContent = Array(
	Array(4032521, 1, 1), //VIP邀请卷
	Array(4001714, 1, 1), //定居金100W
	Array(4000313, 10, 1),
	//Array(4001832, 10, 1),
	//100级
	Array(2615002, 10, 2), //低级贝勒德卷轴
	Array(2431098, 1, 2), //低级贝勒德随机
	Array(2431097, 1, 2), //伤害皮肤箱子
	Array(5062000, 10, 2), //神奇魔方
	Array(4310088, 300, 2),
	Array(4000313, 10, 2),
	Array(4001017, 5, 2),
	Array(4031179, 5, 2),
	//Array(4001832, 20, 2),
	//120级
	Array(5150040, 3, 3), //皇家理发卷
	Array(5152053, 3, 3), //皇家整容卷
	Array(2431741, 1, 3), //抵用券3000
	Array(5062000, 10, 3), //神奇魔方
	Array(4000313, 10, 3),
	Array(4001017, 5, 3),
	Array(4031179, 5, 3),
	//Array(4001832, 50, 3),
	//140级
	//Array(2431944, 1, 4), //140级武器箱子
	Array(2430226, 1, 4), //乱斗翅膀
	Array(5062000, 10, 4),
	Array(2049124, 10, 4), //正向
	//Array(2049135, 2, 4), //惊人正义20%2340000
	Array(2431741, 1, 4), //抵用券3000
	Array(4310030, 200, 4), //运动会币
	Array(4000313, 10, 4),
	Array(4001017, 5, 4),
	Array(4031179, 5, 4),
	//Array(4001832, 100, 4),

	//160级
	Array(2431741, 1, 5), //抵用券3000
	Array(4310129, 100, 5), //冬季限量硬币
	Array(5062002, 10, 5), //高级魔方
	Array(5064000, 5, 5), //防爆
	Array(2049116, 10, 5), //强化
	Array(2049135, 2, 5), //惊人正义20%2340000
	Array(4002000, 1, 5), //蜗牛邮票，兑换点卷使用
	Array(4000313, 10, 5),
//	Array(4001832, 150, 5),
	////Array(4033356, 5, 5), //正义火种1
	//Array(4000124, 5, 5), //战甲泡泡鱼内存卡
	//Array(4310030, 200, 5), //运动会币
	//Array(4000082, 30, 5), //僵尸金牙
	//Array(4021012, 3, 5), //强烈灵魂的净水
	//Array(4021011, 3, 5), //春节灵魂的火花
	//Array(4021010, 3, 5), //时间之石
	//180级
	//Array(2431945, 1, 6), //140防具箱子
	Array(2431741, 1, 6), //抵用券3000
	Array(4310129, 100, 6), //冬季限量硬币
	Array(4000517, 1, 6), //黄金鱼，提升15%
	Array(4033924, 1, 6), //神话耳环蓝图
	Array(4000313, 50, 6),
//	Array(4001832, 300, 6),
	//Array(4033356, 5, 6), //正义火种1
	//Array(4000124, 5, 6), //战甲泡泡鱼内存卡
	//Array(4310030, 300, 6), //运动会币
	//Array(4000082, 40, 6), //僵尸金牙
	//Array(4021012, 3, 6), //强烈灵魂的净水
	//Array(4021011, 3, 6), //春节灵魂的火花
	//Array(4021010, 3, 6), //时间之石
	//200级
	//Array(2431945, 1, 7), //140防具箱子
	Array(2431945, 1, 7), //140防具箱子
	Array(2431741, 1, 7), //抵用券3000
	Array(4002000, 1, 7), //蜗牛邮票，兑换点卷使用
	Array(5062000, 20, 7),
	Array(5062002, 20, 7),
	Array(5062500, 20, 7),
	Array(2049323, 1, 7),  //无损
	Array(2049752, 2, 7),  //S 潜能 30%
	Array(2049116, 20, 7), //惊人正义20%2340000
	Array(2049124, 20, 7), //惊人正义20%2340000
	Array(4000313, 100, 7),
	//Array(4001832, 600, 7),
	//Array(2049135, 5, 7), //惊人正义20%2340000
	//Array(4310030, 300, 7), //运动会币
	//Array(4033356, 5, 7), //正义火种1
	//Array(4000124, 5, 7), //战甲泡泡鱼内存卡
	//Array(4000082, 50, 7), //僵尸金牙
	//Array(4021012, 3, 7), //强烈灵魂的净水
	//Array(4021011, 3, 7), //春节灵魂的火花
	//Array(4021010, 3, 7), //时间之石
	Array(4310015, 5, 7), //斗神证物
	Array(4001714, 5, 7),
	//Array(4021019, 1, 7), //梦之石
	//250级
	Array(5062009, 50, 8),
	Array(5062002, 50, 8),
	Array(5062500, 50, 8),
	Array(5064000, 20, 8),
	//Array(2431995, 1, 8), //惊人卷轴箱子
	//Array(2431725, 1, 8), //热力四射蜡笔箱子
	Array(4310036, 3000, 8) //征服者
	//Array(4033356, 10, 8), //正义火种1
	//Array(4000124, 10, 8), //战甲泡泡鱼内存卡
	//Array(4000082, 50, 8), //僵尸金牙
	//Array(4021012, 3, 8), //强烈灵魂的净水
	//Array(4021011, 3, 8), //春节灵魂的火花
	//Array(4021010, 3, 8), //时间之石
	//Array(4310015, 2, 8) //斗神证物
)
var giftId = -1;
var giftToken = Array();
var gifts = null;
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
		var text = "";
		text += "嘿，我为你准备了许多宝贝，等你达到相应等级的时候就可以领取了，另外点击可以查看礼包内容呢，快抢先看看吧！\r\n";
		for(var key in giftLevel) {
			var tips = "";
			giftToken[key]=false;
			if (cm.getChar().getLevel()>=giftLevel[key]) {
				if (cm.getBossLog(bossid+key) >= 0) {
					tips = "(可领取)";
					giftToken[key]=true;
				} else {
					tips = "#g(已领取)#b";
				}
			} else {
				tips = "#r(等级不足)#b";
			}
			text+="#b#L"+(parseInt(key)+1)+"#领取#r#e"+giftLevel[key]+"#n#b级等级礼包 "+tips+"#l#k\r\n";
		}
		cm.sendSimple(text);
	} else if (status == 1) {
		giftId = parseInt(selection);
		var text="#r#e"+giftLevel[giftId-1]+"#n#b级礼包内容：\r\n";
		gifts = getGift(giftId);
		for(var key in gifts) {
			var itemId = gifts[key][0];
			var itemQuantity = gifts[key][1];
			text+="#v"+itemId+"##b#t"+itemId+"##k #rx "+itemQuantity+"#k\r\n";
		}
		text+="\r\n#d是否现在就领取该礼包？#k";
		cm.sendYesNo(text);
	} else if (status == 2) {
		if (giftId!=-1 && gifts != null) {
			if (cm.getSpace(1) < 8 || cm.getSpace(2) < 8 || cm.getSpace(3) < 8 || cm.getSpace(4) < 8 || cm.getSpace(5) < 8) {
				cm.sendOk("您的背包空间不足，请保证每个栏位至少8格的空间，以避免领取失败。");
				cm.dispose();
				return ;
			}
			if (giftToken[giftId-1]) {
				cm.setBossLog(bossid+(giftId-1),0,-2);
				for(var key in gifts) {
					var itemId = gifts[key][0];
					var itemQuantity = gifts[key][1];
					cm.gainItem(itemId, itemQuantity);
				}
				cm.sendOk("恭喜您，领取成功！快打开包裹看看吧！");
				cm.dispose();
			} else {
				status = -1;
				cm.sendSimple("您已经领过了该礼包或者等级未达到要求，无法领取。");
			}
		} else {
			cm.sendOk("领取错误！请联系管理员！");
			cm.dispose();
		}
	}
}
function getGift(id) {
	var lastGiftContent = Array();
	for (var key in giftContent) {
		if (giftContent[key][2]==id)
			lastGiftContent.push(giftContent[key]);
	}
	return lastGiftContent;
}