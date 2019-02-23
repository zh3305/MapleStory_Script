var status = 0;
var z = "#fUI/UIWindow/Quest/icon5/1#";//"+z+"//美化
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
        var selStr = "#e#r#fEffect/ItemEff/1112811/0/0##fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k\r\n\r\n";
		//selStr += "#b欢迎使用管理定做的NPC!#k\r\n";
		//selStr += "#L15#"+z+" 突破上限#l\r\n#L11#"+z+" 刷道具#l\r\n#L13#"+z+"#d 我要点卷#l\r\n#L16#"+z+"#d 我要HP#l\r\n#L17#"+z+"#d 我要MP#l";  //\r\n#L15#"+z+" 突破上限#l突破上限#l#L13#"+z+" #d我要点卷#l\r\n
		//selStr += "#L14#"+z+" 世界喊话#l  #L6#"+z+" 自选发型#l  #L4#"+z+" 副本重置\r\n";
		//selStr += "#L11#"+z+" 快速仓库#l  #L12#"+z+" 快速答题#l  #L15#"+z+" 雇佣管理#l\r\n";
		//selStr += "#L15#"+z+" 弗兰德里#l \r\n";  //#L13#"+z+" 快速签到#l\r\n";
		//selStr += "\r\n\r\n#fEffect/ItemEff/1112811/0/0##fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k";
        im.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
           if (im.getBossLog("工资") < 1) { //工资
            	im.gainMeso(2000000);
				im.setBossLog("工资");
				im.gainNX(3000);
				im.gainItem(2430029,1,1);
				im.gainItem(2049116, 3);
				im.gainItem(2049129, 2);
				im.gainItem(5076000, 5);
				im.gainItem(4310030, 10);
				im.sendOk("恭喜您领取理财服务的每日工资，获得#b200万#k游戏币、#b3000#k点卷、1个#b神秘盒子#k、#b强化混蛋卷轴#kx2、#b混沌卷轴#kx2、#b道具喇叭#kx5、#b运动会#kx10");
				im.worldSpouseMessage(0x20,"『随身服务』 ：玩家 "+ im.getChar().getName() +" 在随身NPC里领取每日工资，大量点卷金币和运动会币。");
				im.dispose();
            } else {
                im.sendOk("失败：\r\n\r\n#r1). 您已经领取过，请明日再领。\r\n2). 您当前在线积分不足180点。");
				im.dispose();
            }
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
