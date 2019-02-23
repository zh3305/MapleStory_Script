//伏特加制作
var status = 0;
var z = "#fUI/UIWindow/Quest/icon5/1#";//"+z+"//美化
var kkk ="#fEffect/CharacterEff/1051296/1/0#";


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
        var selStr = " ";
		selStr += "       ";
		selStr += "             #r#L3#神秘地图#k#l\r\n\r\n";
		//selStr += "#r#L0#"+z+" 查看怪物爆率#l \r\n";
		//selStr += "#r#L3#"+z+" 地图传送#l  #L4#"+z+" 强化装备#l  #L5#"+z+" 固定装备#l\r\n";
		//selStr += "#L6#"+z+" 副本重置#l  #L7#"+z+" 传送副本#l  #L8#"+z+" 购买BUFF#l\r\n";
		//selStr += "#L9#"+z+" 三倍经验#l  #L10#"+z+" 领取双爆#l  #L11#"+z+" 每日魔方#l\r\n";
		//selStr += "               #g#L99999#(看图清除道具)#k#l\r\n   #L2014#欢乐大杂烩#k#l  #r#L2015#专属签到#k#l     #L2016#召唤BOSS ";
		selStr += " ";


        im.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
		im.dispose();
		im.openNpc(9010000, 1);//极品装备
            break;
        case 1:
 		im.dispose();
		im.openNpc(2084001, 1);//技能管理
            break;
        case 2:
           if (im.getPlayer().getCSPoints(1) > 10000) { //增加血量
				im.dispose();
				im.openNpc(2084001,2);
            } else {
                im.sendOk("您糊弄我呢。点卷不足还点什么。最少得拥有1万点卷才可以使用。");
				im.dispose();
            }
            break;
		case 3:
		im.dispose();
		im.warp(970000000, 0);
            break;
		case 4:
		im.dispose();
		im.openNpc(2084001, 4);//强化装备
            break;
		case 5:
		im.dispose();
		im.openNpc(2084001, 5);//固定装备
            break;
		case 7:
		im.dispose();
		im.openNpc(2084001, 7);//BOSS副本
		case 8:
		im.dispose();
		im.openNpc(2084001, 8);//BUFF
            break;
		case 999:
		im.dispose();
		im.openNpc(2084001, 999);//GM刷道具
            break;
		case 9:
           if (im.getBossLog("三倍") < 1) { //三倍
            	im.gainItem(5211060,1,1);
				im.setBossLog("三倍");
				im.sendOk("恭喜您领取VIP服务的每日三倍经验卡一张.");
				im.worldSpouseMessage(0x20,"『随身服务』 ：玩家 "+ im.getChar().getName() +" 在随身NPC里领取每日三倍经验卡。");
				im.dispose();
            } else {
                im.sendOk("您已经领取过，请明日再领。");
				im.dispose();
            }
            break;
		case 10:
           if (im.getBossLog("双爆") < 1) { //双爆
            	im.gainItem(5360015,1,1);
				im.setBossLog("双爆");
				im.sendOk("恭喜您领取VIP服务的每日双倍爆率卡一张.");
				im.worldSpouseMessage(0x20,"『随身服务』 ：玩家 "+ im.getChar().getName() +" 在随身NPC里领取每日双倍爆率卡。");
				im.dispose();
            } else {
                im.sendOk("您已经领取过，请明日再领。");
				im.dispose();
            }
            break;
		case 11:
           if (im.getBossLog("魔方") < 1) { //魔方
            	im.gainItem(5064000,3);
		im.gainItem(2340000,3);
		im.gainItem(5062500,3);
				im.gainItem(5062002,3);
				im.setBossLog("魔方");
				im.sendOk("恭喜您领取理财服务的每日理财道具，获得高级神奇魔方、大师级神奇魔方、防暴卷轴、祝福卷轴x3。");
				im.worldSpouseMessage(0x20,"『随身服务』 ：玩家 "+ im.getChar().getName() +" 在随身NPC里领取每日理财道具。");
				im.dispose();
            } else {
                im.sendOk("失败：\r\n\r\n#r1). 您已经领取过，请明日再领。");
				im.dispose();
            }
            break;
		case 11:
           if (im.getBossLog("积分") < 1 && im.getPlayerPoints() > 180) { //积分
            	im.gainPlayerPoints(200);
				im.setBossLog("积分");
				im.sendOk("恭喜您领取VIP服务的每日积分200点.");
				im.worldSpouseMessage(0x20,"『随身服务』 ：玩家 "+ im.getChar().getName() +" 在随身NPC里领取每日积分 200 点。");
				im.dispose();
            } else {
                im.sendOk("失败：\r\n\r\n#r1). 您已经领取过，请明日再领。\r\n2). 您当前在线时间不足180分钟。");
				im.dispose();
            }
            break;
		case 12:
           if (im.getBossLog("活力") < 1 && im.getPlayerPoints() > 180) { //活力
            	im.gainPlayerEnergy(50);
				im.gainPlayerPoints(-180);
				im.setBossLog("活力");
				im.sendOk("恭喜您领取VIP服务的每日活力50点.");
				im.worldSpouseMessage(0x20,"『随身服务』 ：玩家 "+ im.getChar().getName() +" 在随身NPC里领取每日活力 50 点。");
				im.dispose();
            } else {
                im.sendOk("失败：\r\n\r\n#r1). 您已经领取过，请明日再领。\r\n2). 您当前在线积分不足180点。");
				im.dispose();
            }
            break;
		case 6:
           if (im.getBossLog("所有副本重置") < 1) { //副本重置
				im.resetEventCount("抽奖");
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
				im.setBossLog("所有副本重置");
				im.sendOk("恭喜您使用VIP服务的重置了所有的副本.");
				im.worldSpouseMessage(0x20,"『随身服务』 ：玩家 "+ im.getChar().getName() +" 在随身NPC里重置了全部副本任务。");
				im.dispose();
            } else {
                im.sendOk("您已经领取过，请明日再领。");
				im.dispose();
            }
            break;
	case 310:
			if (im.getMeso() > 10000) { //地图传送
				im.dispose();
			im.sendGetNumber("输入你要移动的#r地图ID",910000000,100000000,999999999)
			im.warp(mapid,0)
			im.dispose();
				im.dispose();
            }
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
		case 99999:
		im.dispose();
		im.openNpc(2084001, 99999);//删除道具
            break;
		case 2014:
		im.dispose();
		im.openNpc(2420022,1);//欢乐大杂烩
            break;
		case 2015:
		im.dispose();
		im.openNpc(2084001,2015);//专属签到
            break;
		case 2016:
		im.dispose();
		im.openNpc(2084001,2016);//召唤boss
            break;
		case 0:
            if (cm.getBossLog("送装备", 1) == 0) {
			var ii = cm.getItemInfo();
			var toDrop = ii.randomizeStats(ii.getEquipById(1012011)).copy(); 
                        toDrop.setStr(50); //装备力量
			toDrop.setDex(50); //装备敏捷
			toDrop.setInt(50); //装备智力
			toDrop.setLuk(50); //装备运气
			toDrop.setMatk(30); //物理攻击
			toDrop.setWatk(30); //魔法攻击
			toDrop.setSpeed(20); //移动速度	
			toDrop.setHp(2000);//hp
			toDrop.setMp(2000);//mp
			toDrop.setJump(10); //跳跃
			toDrop.setAcc(50); //命中率
			toDrop.setEnhance(25);//强化等级
			toDrop.setPotential1(40366);
			toDrop.setPotential2(40366);
			toDrop.setPotential3(40366);
			toDrop.setPotential4(40366);
			toDrop.setPotential5(40366);
			toDrop.setPotential6(40366);
			toDrop.setOwner("兔花花神器");
			cm.addFromDrop(cm.getC(), toDrop, false)	
			cm.setBossLog("送装备", 1);
			cm.sendOk("超强装备已经给您发放.感谢您的支持.");
            } else {
				cm.sendOk("您已经领取过了");
            }
            cm.dispose();
			break;				
		}
    }
}