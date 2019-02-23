var status = 0;
var z = "#fUI/UIWindow/Quest/icon5/1#";//"+z+"//美化

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
		if (im.getPQLog("白银VIP",1)<0){
			var selStr = "#e#r#fEffect/ItemEff/1112811/0/0##fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k\r\n- #e#r随身npc#k#n\r\n";
			selStr += "#d欢迎使用随身特权,本次给您带来快捷服务：#k\r\n";
			selStr += "#r#L0#"+z+" 每日金币#l  #L1#"+z+" 每日点卷#l  #L2#"+z+" 每日抽奖#l\r\n";
			selStr += "#L7#"+z+" 三倍经验#l  #L8#"+z+" 领取双爆#l  #L9#"+z+" 每日道具#l\r\n";
			selStr += "#L70#"+z+" 领取勋章,戒指#l\r\n";
			selStr += "\r\n\r\n#fEffect/ItemEff/1112811/0/0##fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k";
        }else if(im.getPQLog("黄金VIP",1)<0){
			var selStr = "#e#r#fEffect/ItemEff/1112811/0/0##fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k\r\n- #e#r随身npc#k#n\r\n";
				selStr += "#d欢迎使用随身特权,本次给您带来快捷服务：#k\r\n";
				selStr += "#r#L0#"+z+" 每日金币#l  #L1#"+z+" 免费点卷#l  #L2#"+z+" 每日抽奖#l\r\n";
				selStr += "#L7#"+z+" 三倍经验#l  #L8#"+z+" 领取双爆#l  #L9#"+z+" 每日道具#l\r\n";
				selStr += "#L4#"+z+" 副本重置#l  #b#L6#"+z+" 理财抽奖#l  #r#L10#"+z+" 增加血量#l\r\n";
				selStr += "#L23#"+z+" 免费自选美容美发#l\r\n";
				selStr += "#L70#"+z+" 领取勋章,戒指#l\r\n";
				selStr += "\r\n\r\n#fEffect/ItemEff/1112811/0/0##fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k";
       
		}else{
			im.dispose();
			var selStr = "#e#r#fEffect/ItemEff/1112811/0/0##fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k\r\n- #e#r随身npc#k#n\r\n";
			selStr +="你不是VIP,请通过渠道来解决"+im.getPQLog("黄金VIP",1);
		}
		im.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
			case 70:
				if (im.getPQLog("白银VIP",1)<0&&im.getDaysPQLog("白银戒指", 30) == 0){
					im.gainItem(1112140,1,30);
					im.gainItem(1112247,1,30);
					im.gainItem(1003698,1,30);
					im.gainItem(1022229,1,30);
					im.gainItem(3700071,1,30);
					im.gainItem(1142328,1,30);
					im.setPQLog("白银戒指");
					im.worldSpouseMessage(0x15,"『理财服务』 ：玩家 "+ im.getChar().getName() +" 在随身NPC里领取VIP勋章称号。");
					im.dispose();
				}else if(im.getPQLog("黄金VIP",1)<0&&im.getDaysPQLog("黄金戒指", 30) == 0){
					im.gainItem(1112139,1,30);
					im.gainItem(1112246,1,30);
					im.gainItem(1003697,1,30);
					im.gainItem(1022229,1,30);
					im.gainItem(3700070,1,30);
					im.gainItem(1142328,1,30);
					im.setPQLog("黄金戒指");
					im.worldSpouseMessage(0x15,"『理财服务』 ：玩家 "+ im.getChar().getName() +" 在随身NPC里领取VIP勋章称号。");
					im.dispose();
				}else{
					im.sendOk("请30天后再来");
				}
				
				im.dispose();
            break;
			//-----------
        case 0:
           if (im.getPQLog("工资") < 1) { //工资
			if (im.getPQLog("白银VIP",1)<0){
					var ME= 5000000;
				}else if(im.getPQLog("黄金VIP",1)<0){
					var ME= 10000000;
				}
            	im.gainMeso(ME);
				im.setPQLog("工资");
				im.sendOk("恭喜您领取理财服务的每日工资"+ME+"万金币.");
				im.worldSpouseMessage(0x15,"『理财服务』 ：玩家 "+ im.getChar().getName() +" 在随身NPC里领取每日金币。");
				im.dispose();
            } else {
                im.sendOk("失败：\r\n\r\n#r1). 您已经领取过，请明日再领。");
				im.dispose();
            }
            break;
		case 23:
				im.dispose();
		im.openNpc(9310362,"meir");
            break;
        case 1:
           if (im.getPQLog("点卷") < 1) { //点卷
				if (im.getPQLog("白银VIP",1)<0){
					var NX= 6666;
				}else if(im.getPQLog("黄金VIP",1)<0){
					var NX= 9999;
				}
            	im.gainNX(NX);
				im.setPQLog("点卷");
				im.sendOk("恭喜您领取点卷"+NX+"点.");
				im.worldSpouseMessage(0x15,"『理财服务』 ：玩家 "+ im.getChar().getName() +" 在随身NPC里免费领取每日点卷。");
				im.dispose();
            } else {
                im.sendOk("失败：\r\n\r\n#r1). 您已经使用，请明日再试。\r\n");
				im.dispose();
            }
            break;
        case 10:
           if (im.getPlayer().getCSPoints(1) > 10000) { //会员等级
				im.dispose();
				im.openNpc(9900001,"xueliangqianghua");
            } else {
                im.sendOk("您糊弄我呢。点卷不足还点什么。最少得拥有1万点卷才可以使用。");
				im.dispose();
            }
            break;
		case 7:
           if (im.getPQLog("三倍") < 1) { //三倍
            	im.gainItem(5211060,1,1);
				im.setPQLog("三倍");
				im.sendOk("恭喜您领取理财服务的每日三倍经验卡一张.");
				im.worldSpouseMessage(0x11,"『理财服务』 ：玩家 "+ im.getChar().getName() +" 在随身NPC里领取每日三倍经验卡。");
				im.dispose();
            } else {
                im.sendOk("您已经领取过，请明日再领。");
				im.dispose();
            }
            break;
		case 8:
           if (im.getPQLog("双爆") < 1) { //双爆
            	im.gainItem(5360015,1,1);
				im.setPQLog("双爆");
				im.sendOk("恭喜您领取理财服务的每日双倍爆率卡一张.");
				im.worldSpouseMessage(0x11,"『理财服务』 ：玩家 "+ im.getChar().getName() +" 在随身NPC里领取每日双倍爆率卡。");
				im.dispose();
            } else {
                im.sendOk("您已经领取过，请明日再领。");
				im.dispose();
            }
            break;
		case 9:
           if (im.getPQLog("魔方") < 1&&im.getSpace(2)>2){ //魔方
			if (im.getPQLog("白银VIP",1)<0){
					im.gainItem(5064000,3);
					im.gainItem(2049116,3);
					im.gainItem(5062024,2);
					im.gainItem(5062500,10);
					im.gainItem(5062009,15);
					im.gainItem(2048705,5);
					im.gainItem(4310036,70);
					im.gainItem(2210097,1);
					im.gainItem(2210096,1);
					im.gainItem(5390013,15);
				}else if(im.getPQLog("黄金VIP",1)<0){
					im.gainItem(5064000,5);
					im.gainItem(2049116,5);
					im.gainItem(5062024,5);
					im.gainItem(5062500,15);
					im.gainItem(5062009,20);
					im.gainItem(2048705,10);
					im.gainItem(4310036,80);
					im.gainItem(2210097,1);
					im.gainItem(2210096,1);
					im.gainItem(5390012,15);
				}
				im.setPQLog("魔方");
				im.sendOk("恭喜您领取理财服务的每日理财道具，获得超级神奇魔方、大师级神奇魔方、六角魔方、涅槃火焰、防暴卷轴。");
				im.worldSpouseMessage(0x15,"『理财服务』 ：玩家 "+ im.getChar().getName() +" 在随身NPC里领取每日理财道具,超级神奇魔方、大师级神奇魔方、六角魔方、涅槃火焰、防暴卷轴。");
				im.dispose();
            } else {
                im.sendOk("失败：\r\n\r\n#r1). 您已经领取过，请明日再领。\r\n#r2。消耗栏至少要有3格");
				im.dispose();
            }
            break;
		case 11:
           if (im.getPQLog("积分") < 1 && im.getPlayerPoints() > 180) { //积分
            	im.gainPlayerPoints(200);
				im.setPQLog("积分");
				im.sendOk("恭喜您领取理财服务的每日积分200点.");
				im.worldSpouseMessage(0x20,"『理财服务』 ：玩家 "+ im.getChar().getName() +" 在随身NPC里领取每日积分 200 点。");
				im.dispose();
            } else {
                im.sendOk("失败：\r\n\r\n#r1). 您已经领取过，请明日再领。\r\n2). 您当前在线时间不足180分钟。");
				im.dispose();
            }
            break;
		case 12:
           if (im.getPQLog("活力") < 1 && im.getPlayerPoints() > 180) { //活力
            	im.gainPlayerEnergy(50);
				im.gainPlayerPoints(-180);
				im.setPQLog("活力");
				im.sendOk("恭喜您领取理财服务的每日活力50点.");
				im.worldSpouseMessage(0x20,"『理财服务』 ：玩家 "+ im.getChar().getName() +" 在随身NPC里领取每日活力 50 点。");
				im.dispose();
            } else {
                im.sendOk("失败：\r\n\r\n#r1). 您已经领取过，请明日再领。\r\n2). 您当前在线积分不足180点。");
				im.dispose();
            }
            break;
		case 2:
           if (im.getPQLog("抽奖") < 1) { //抽奖
				im.gainItem(2430070,1,1);
				im.setPQLog("抽奖");
				im.sendOk("恭喜您领取理财服务的每日抽奖包.");
				im.worldSpouseMessage(0x11,"『理财服务』 ：玩家 "+ im.getChar().getName() +" 在随身NPC里领取每日抽奖包一个。");
				im.dispose();
            } else {
                im.sendOk("失败：\r\n\r\n#r1). 您已经领取过，请明日再领。\r\n2). 您当前在线积分不足1000点。");
				im.dispose();
            }
            break;
		case 4:
           if (im.getPQLog("所有副本重置") < 1) { //副本重置
				im.resetEventCount("抽奖");
				im.resetEventCount("历练");
				im.resetEventCount("养成");
				im.resetEventCount("皇陵");
				im.resetEventCount("罗朱");
				im.resetEventCount("海盗");
				im.resetEventCount("森兰丸[困难]");
				im.resetEventCount("森兰丸");
				im.resetPQLog("贝勒·德");
				im.resetPQLog("阿卡伊勒[普通]");
				im.resetPQLog("普通扎昆");
				im.resetPQLog("简单扎昆");
				im.resetPQLog("进阶扎昆");
				im.resetPQLog("女皇：希纳斯");
				im.resetPQLog("暗黑龙王");
				im.resetPQLog("进阶暗黑龙王");
				im.resetPQLog("希拉");
				im.resetPQLog("希拉[困难]");
				im.resetPQLog("妖精女王：艾菲尼娅");
				im.resetPQLog("狮子王:班·雷昂[简单]");
				im.resetPQLog("狮子王:班·雷昂[普通]");
				im.resetPQLog("黄金寺院");
				im.resetPQLog("混沌品克缤");
				im.resetPQLog("品克缤");
				im.resetPQLog("强化钻机");
				im.resetPQLog("钻机");
				im.setPQLog("所有副本重置");
				im.sendOk("恭喜您使用理财服务的重置了[贝勒·德\阿卡伊勒[普通]\扎昆\女皇：希纳斯\暗黑龙王\进阶暗黑龙王\希拉\希拉[困难]\妖精女王：艾菲尼娅\狮子王:班·雷昂[简单]\狮子王:班·雷昂[普通]\黄金寺院\混沌品克缤\强化钻机\品克缤\钻机].");
				im.worldSpouseMessage(0x20,"『理财服务』 ：玩家 "+ im.getChar().getName() +" 在随身NPC里重置了全部副本任务。");
				im.dispose();
            } else {
                im.sendOk("您已经领取过，请明日再领。");
				im.dispose();
            }
            break;
		case 6:
				im.dispose();
				im.openNpc(2084001, "licaixiangzi");
            break;
		case 999:
				im.dispose();
				im.openNpc(9030100, 0);
            break;
		case 3:
           if (im.getMeso() > 10000) { //地图传送
				im.sendOk("梢后开放，练级，打钱，打抵用卷地图.");
				im.dispose();
				//im.openNpc(9900001, 11);
            } else {
                im.sendOk("金币不足1万。");
				im.dispose();
            }
            break;
		case 13:
			if (im.getMeso() > 10000) { //地图传送
				im.dispose();
				im.sendOk("近期开放。");
            } else {
                im.sendOk("金币不足1万。");
				im.dispose();
            }
            break;
		case 14:
			if (im.getMeso() > 10000) { //地图传送
				im.dispose();
				im.sendOk("近期开放。");
            } else {
                im.sendOk("金币不足1万。");
				im.dispose();
            }
            break;
		case 15:
			if (im.getMeso() > 10000) { //地图传送
				im.dispose();
				im.sendOk("近期开放。");
            } else {
                im.sendOk("金币不足1万。");
				im.dispose();
            }
            break;
		case 20:
				im.dispose();
				im.openNpc(9330104, 1);
            break;
		case 21:
           if (im.getPQLog("点卷换") < 1 && im.getPlayer().getCSPoints(1) >= 15000) { //工资
			    im.gainNX(1, -15000);
            	im.gainMeso(100000000);
				im.setPQLog("点卷换");
				im.sendOk("恭喜您换取成功.");
				im.worldSpouseMessage(0x20,"『理财服务』 ：玩家 "+ im.getChar().getName() +" 在随身NPC里用点卷换取了1亿金币。");
				im.dispose();
            } else {
                im.sendOk("失败：\r\n\r\n#r1). 您已经领取过，请明日再领。\r\n2). ");
				im.dispose();
            }
            break;
		case 22:
           if (im.getPQLog("抵用换") < 1 && im.getPlayer().getCSPoints(2) >= 30000) { //工资
			    im.gainNX(2, -30000);
            	im.gainMeso(100000000);
				im.setPQLog("抵用换");
				im.sendOk("恭喜您换取成功.");
				im.worldSpouseMessage(0x20,"『理财服务』 ：玩家 "+ im.getChar().getName() +" 在随身NPC里用抵用换取了1亿金币。");
				im.dispose();
            } else {
                im.sendOk("失败：\r\n\r\n#r1). 您已经领取过，请明日再领。\r\n2). ");
				im.dispose();
            }
            break;
        }
    }
}
