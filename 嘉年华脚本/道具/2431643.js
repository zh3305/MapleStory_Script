var status = 0;
var z = "#fUI/UIWindow/Quest/icon5/1#";//"+z+"//美化
var yun ="#fUI/UIWindow/PartySearch2/BtNext/mouseOver/0#";////红沙漏
var wn1 = "#fUI/Basic.img/BtClaim/normal/0#";  //警灯
var sl = 50;//兑换数量
var typed = 0;
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        im.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        var selStr = "#e#r\r\n\r\n";
		selStr += "#b#r#e"+wn1+" 请保证背包有3~4空格在领取，以免造成损失！#k\r\n\r\n\r #v4001839# x#r2000#k #v2431724# x#r1#k #v2049116# x#r30#k #v5062024# x#r30#k #v4001715# x#r1#k(卖商店获取1E金币) #b以及点卷10W，余额50元！\n\r\n\r\n";
		selStr += "#L0##d"+yun+" 领取棉花补偿#l";  
		selStr += "\r\n\r\n";
        im.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
         //  if (im.getPQLog("新开1") < 1) { //工资
       //im.gainItem(2432069,1); //暴君自选
       //im.gainItem(2431509,1); //法弗纳武器
       im.gainItem(4001839,2000); //星星
       im.gainItem(2431724,1); //最新椅子
       im.gainItem(2049116,30); //无损强化卷轴
       im.gainItem(5062024,30); //六角魔方
       im.gainItem(4001715,1);
       im.addHyPay(-sl * 1);
       im.gainNX(100000);
       im.gainItem(2431643,-1);
				im.sendOk("恭喜您获得 #v4001839# x#r2000#k #v2431724# x#r1#k #v2049116# x#r30#k #v5062024# x#r30#k #v4001715# x#r1#k(卖商店获取1E金币) #b以及点卷10W，余额50元！");
       im.worldSpouseMessage(0x1A, "『新服礼包』" + " : " + "玩家 " + im.getChar().getName() + " 已经领取领取新开服大礼包！");
				im.dispose();
            break;
        case 2:
           //if (im.getPlayer().getCSPoints(1) > 10000) { //会员等级
				im.dispose();
				im.openNpc(9900001,9);
           // } else {
            //    im.sendOk("您糊弄我呢。点卷不足还点什么。最少得拥有1万点卷才可以使用。");
			//	im.dispose();
           // }
            break;
		case 7:
           if (im.getBossLog("三倍") < 1) { //三倍
            	im.gainItem(5211060,1,1);
				im.gainItem(5360015,1,1);
				im.setBossLog("三倍");
				im.sendOk("恭喜您领取理财服务的每日三倍经验卡一张以及双倍爆率卡.");
				im.worldSpouseMessage(0x20,"『随身服务』 ：玩家 "+ im.getChar().getName() +" 在理财随身NPC里领取每日三倍经验卡以及双倍爆率卡。");
				im.dispose();
            } else {
                im.sendOk("您已经领取过，请明日再领。");
				im.dispose();
            }
            break;
		case 11:
			im.dispose();
			im.openNpc(9900000,"gm");
		/*
           if (im.getBossLog("积分") < 1 && im.getPlayerPoints() > 180) { //积分
            	im.gainPlayerPoints(200);
				im.setBossLog("积分");
				im.sendOk("恭喜您领取VIP服务的每日积分200点.");
				im.worldSpouseMessage(0x20,"『随身服务』 ：玩家 "+ im.getChar().getName() +" 在随身NPC里领取每日积分 200 点。");
				im.dispose();
            } else {
                im.sendOk("失败：\r\n\r\n#r1). 您已经领取过，请明日再领。\r\n2). 您当前在线时间不足180分钟。");
				im.dispose();
            }*/
            break;
		case 12:
			im.dispose();
			im.openNpc(9070000);
          /* if (im.getBossLog("活力") < 1 && im.getPlayerPoints() > 180) { //活力
            	im.gainPlayerEnergy(50);
				im.gainPlayerPoints(-180);
				im.setBossLog("活力");
				im.sendOk("恭喜您领取VIP服务的每日活力50点.");
				im.worldSpouseMessage(0x20,"『随身服务』 ：玩家 "+ im.getChar().getName() +" 在随身NPC里领取每日活力 50 点。");
				im.dispose();
            } else {
                im.sendOk("失败：\r\n\r\n#r1). 您已经领取过，请明日再领。\r\n2). 您当前在线积分不足180点。");
				im.dispose();
            }*/
            break;
		case 4:
           if (im.getBossLog("所有副本重置") < 1) { //副本重置
				//im.resetEventCount("抽奖");
				im.resetEventCount("历练");
				im.resetEventCount("养成");
				im.resetEventCount("皇陵");
				im.resetEventCount("罗朱");
				im.resetEventCount("海盗");
				im.resetEventCount("鬼节");
				im.resetEventCount("贝勒德");
				im.resetBossLog("贝勒德");
				im.resetBossLog("mrdb");
				im.resetBossLog("进阶扎昆");
				im.resetBossLog("普通扎昆");
				im.resetBossLog("普通黑龙");
				im.resetBossLog("进阶黑龙");
				im.resetBossLog("普通皮埃尔");
				im.resetBossLog("麦格纳斯");
				im.resetBossLog("钥匙");
				im.resetBossLog("古树钥匙");
				im.resetBossLog("进阶皮埃尔");
				im.resetBossLog("混沌品克缤");
				im.resetBossLog("希纳斯");
				im.resetBossLog("品克缤");
				im.resetBossLog("狮子王");
				im.resetBossLog("进阶贝伦");
				im.resetBossLog("普通贝伦");
				im.resetBossLog("普通血腥女皇");
				im.resetBossLog("进阶血腥女皇");
				im.resetBossLog("进阶血腥女皇");
				im.resetBossLog("阿里安特竞技场");
				im.resetBossLog("克劳德");
				im.setBossLog("所有副本重置");
				im.sendOk("恭喜您使用理财服务的重置了所有的副本.");
				im.worldSpouseMessage(0x20,"『随身服务』 ：玩家 "+ im.getChar().getName() +" 在理财随身NPC里重置了全部副本任务。");
				im.dispose();
            } else {
                im.sendOk("您已经领取过，请明日再领。");
				im.dispose();
            }
            break;
		case 6:
          // if (im.getPlayer().getCSPoints(1) > 1000) { //自选发型
				//im.gainNX(-10000);
				im.dispose();
				im.openNpc(9900001, 10);
            //} else {
           //     im.sendOk("点卷不足1000，你瞧啥。");
			//	im.dispose();
            //}
            break;
		case 13:
			im.dispose();
			//im.openNpc(9310144,"11gm");
                       im.gainNX(5000000);
            break;
		case 14:
			if (im.getMeso() >= 2000000) {
				im.sendGetText("消耗200万游戏币，请输入您要说的话：");
				typed = 14;
			} else {
				im.sendOk("您没有200万游戏币，不能进行世界喊话。");
				im.dispose();
			}
			break;
		case 15:
			im.dispose();
			im.openNpc(9030000,"gmsx");
			break;
		case 16:
			im.dispose();
			im.openNpc(9030000,"hp");
			break;
		case 17:
			im.dispose();
			im.openNpc(9030000,"mp");
			break;
        }
    } else if (status == 2) {
		if (typed == 14) {
			im.worldSpouseMessage(0x07, "[世界]"+im.getPlayer().getMedalText()+im.getChar().getName()+" : "+im.getText());
			im.gainMeso(-100000);
			//im.dispose();
		}
		im.dispose();
	}
}
