/*
 夕阳制作★China冒险岛
 完成时间：2015年4月28日 16:34:19
 脚本功能：野外BOSS
 */
 
 var status = 0;
var aaa ="#fEffect/CharacterEff/1082565/2/0#";
var eff ="#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
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
        var selStr = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#亲爱的#r#h ##k您好，想传送到什么地方:\r\n";
		selStr += "#L0#" + eff + "#b 多多#l"
		selStr += "#L1#" + eff + "#b 蝙蝠怪#l"
		selStr += "#L3#" + eff + "#b 蓝蘑菇王#l"
		selStr += "#L4#" + eff + "#b 僵尸菇王#l\r\n"

		selStr += "#L12#" + eff + "#b 雷卡#l"
		selStr += "#L2#" + eff + "#b 蘑菇王#l"
		selStr += "#L5#" + eff + "#b 妖怪禅师#l"
		selStr += "#L6#" + eff + "#b 克雷塞尔#l\r\n"

		selStr += "#L13#" + eff + "#b 艾里#l"
		selStr += "#L7#" + eff + "#b 大海兽#l"
		selStr += "#L8#" + eff + "#b 格瑞芬多#l"
        selStr += "#L9#" + eff + "#b 小喷火龙#l\r\n"

        selStr += "#L10#" + eff + "#b 鱼王#l"
        selStr += "#L14#" + eff + "#b 肯德熊#l"
		selStr += "#L11#" + eff + "#b 冰独角兽#l"
		selStr += "#L15#" + eff + "#b 黑山老妖#l\r\n"
		
		
		
		//selStr += "#L15#" + eff + " #b PK地图#l\r\n"
		//selStr += "#L16#" + eff + "#b 黑龙王#l"
		//selStr += "#L24#" + eff + "#b 品克缤#l"
		//selStr += "#L25#" + eff + "#b 希纳斯#l"
		//selStr += "#L26#" + eff + "#b 千年树精#l\r\n"
		//selStr += "#L27#" + eff + "#r 三核贝勒德#r【有几率获得#v4310097##v1122267##v1132246#】#l\r\n"
		//selStr += "#L28#" + eff + "#r 暴君麦格纳斯#r【有几率获得#v4310058##v2049323#无损强化】#l\r\n"
		//selStr += "#L29#" + eff + "#r[稀有]最高访问者#r【有几率获得#v1003797##v1042258##v1062169#】#l\r\n"
		//selStr += "#L30#" + eff + "#r[极限]超越人类的存在#r【有几率获得#v2430189##v2430189#】#l\r\n"
		
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
                cm.warp(270010500);
		        cm.sendOk("欢迎您来到追忆之路5，祝您游戏愉快！");
				cm.dispose();
            break;
		case 1:
                cm.warp(105030500);
		        cm.sendOk("欢迎您来到禁忌祭坛，祝您游戏愉快！");
				cm.dispose();
            break;
		case 2:
                cm.warp(100020101);
		        cm.sendOk("欢迎您来到蘑菇王小道，祝您游戏愉快！");
				cm.dispose();
            break;
		case 3:
                cm.warp(100020301);
		        cm.sendOk("欢迎您来到蓝蘑菇王森林，祝您游戏愉快！");
				cm.dispose();
            break;
		case 4:
                cm.warp(105010301);
		        cm.sendOk("欢迎您来到蚂蚁洞穴2，祝您游戏愉快！");
				cm.dispose();
            break;
		case 5:
                cm.warp(250010504);
		        cm.sendOk("欢迎您来到妖怪森林2，祝您游戏愉快！");
				cm.dispose();
            break;
        case 6:
	            cm.warp(541020800);
		        cm.sendOk("欢迎您来到克雷塞尔入口，祝您游戏愉快！");
				cm.dispose();
            break;
		case 7:
	            cm.warp(240040401);
		        cm.sendOk("欢迎您来到大海兽峡谷，祝您游戏愉快！");
				cm.dispose();
            break;
		case 8:
	            cm.warp(240020101);
		        cm.sendOk("欢迎您来到格瑞芬多森林，祝您游戏愉快！");
				cm.dispose();
            break;
		case 9:
	            cm.warp(240020401);
		        cm.sendOk("欢迎您来到喷火龙栖息地，祝您游戏愉快！");
				cm.dispose();
            break;
		case 10:
	            cm.warp(230040420);
		        cm.sendOk("欢迎您来到皮亚奴斯洞穴，祝您游戏愉快！");
				cm.dispose();
            break;
		case 11:
	            cm.warp(270010500);
		        cm.sendOk("欢迎您来到后悔之路5，祝您游戏愉快！");
				cm.dispose();
            break;
		case 12:
	            cm.warp(270030500);
		        cm.sendOk("欢迎您来到忘却之路5，祝您游戏愉快！");
				cm.dispose();
            break;
		case 13:
	            cm.warp(200010302);
		        cm.sendOk("欢迎您来到黑暗庭院II，祝您游戏愉快！");
				cm.dispose();
            break
         case 14:
	            cm.warp(250010304);
		        cm.sendOk("欢迎您来到肯德熊的地盘，祝您游戏愉快！");
				cm.dispose();
            break
		case 15:
	            cm.warp(211041400);
		        cm.sendOk("欢迎您来到死亡之林IV，祝您游戏愉快！");
				cm.dispose();
            break





		 case 29:
		if (cm.getPlayer().getLevel() > 100 ) {
			cm.warp(701000210);
			cm.sendOk("青龙之门为大混战PK.赤龙之门为组队PK战.黄龙之门为家族PK战.祝您好运");
			} else {
				cm.sendOk("对不起.PK太危险了.100级以下的玩家不能进入噢.");
			}
			cm.dispose();
            break;
        case 3:
            if (cm.getMeso() >= 200000) {
                cm.gainMeso( - 200000);
                cm.warp(211070000);
                cm.sendOk("你已经到达目的地.(狮子王爆高级装备哦!)\r\n祝你游戏愉快!");
            } else {
                cm.sendOk("你没有20W金币,我不能传送你过去");
            }
            break;
        case 4:
            if (cm.getMeso() >= 200000) {
                cm.gainMeso( - 200000);
                cm.warp(270050000);
                cm.sendOk("你已经到达目的地.(品克缤爆永恒装备和30勇士哦!)\r\n祝你游戏愉快!");
            } else {
                cm.sendOk("你没有20W金币,我不能传送你过去");
            }
            break;
        case 5:
            if (cm.getMeso() >= 200000) {
                cm.gainMeso( - 200000);
                cm.warp(105100100);
                cm.sendOk("你已经到达目的地.\r\n祝你游戏愉快!");
            } else {
                cm.sendOk("你没有20W金币,我不能传送你过去");
            }
            break;
        case 7:
            if (cm.getMeso() >= 200000) {
                cm.gainMeso( - 200000);
                cm.warp(802000710);
                cm.sendOk("你已经到达目的地.\r\n祝你游戏愉快!");
            } else {
                cm.sendOk("你没有20W金币,我不能传送你过去");
            }
            break;
        case 8:
            if (cm.getMeso() >= 200000) {
                cm.gainMeso( - 200000);
                cm.warp(802000820);
                cm.sendOk("你已经到达目的地.\r\n祝你游戏愉快!");
            } else {
                cm.sendOk("你没有20W金币,我不能传送你过去");
            }
            break;
        case 9:
            if (cm.getMeso() >= 200000) {
                cm.gainMeso( - 200000);
                cm.warp(272030300);
                cm.sendOk("你已经到达目的地.\r\n祝你游戏愉快!");
            } else {
                cm.sendOk("你没有20W金币,我不能传送你过去");
            }
            break;
        case 10:
			cm.dispose();
			cm.openNpc(9900002, 2011);
			break;
        case 11:
            if (cm.getMeso() >= 200000) {
                cm.gainMeso( - 200000);
                cm.warp(802000710);
                cm.sendOk("你已经到达目的地.\r\n祝你游戏愉快!");
            } else {
                cm.sendOk("你没有20W金币,我不能传送你过去");
            }
            break;
        case 12:
            if (cm.getMeso() >= 200000) {
                cm.gainMeso( - 200000);
                cm.warp(910023000);
                cm.sendOk("你已经到达目的地.\r\n祝你游戏愉快!");
            } else {
                cm.sendOk("你没有20W金币,我不能传送你过去");
            }
            break;
        case 6:
            if (cm.getMeso() >= 200000) {
                cm.gainMeso( - 200000);
                cm.warp(271040000);
                cm.sendOk("你已经到达目的地.\r\n祝你游戏愉快!");
            } else {
                cm.sendOk("你没有20W金币,我不能传送你过去");
            }
            break;
        case 16:
            if (cm.getMeso() >= 200000) {
                cm.gainMeso( - 200000);
                cm.warp(863010000);
                cm.sendOk("你已经到达目的地.(三核贝勒德爆高级饰品哦!)\r\n祝你游戏愉快!");
            } else {
                cm.sendOk("你没有20W金币,我不能传送你过去");
            }
            break;
        case 17:
            if (cm.getMeso() >= 200000) {
                cm.gainMeso( - 200000);
                cm.warp(401072000);
                cm.sendOk("你已经到达目的地.(暴君麦格纳斯爆高级卷轴哦!)\r\n祝你游戏愉快!");
            } else {
                cm.sendOk("你没有20W金币,我不能传送你过去");
            }
            break;
		case 18:
            if (cm.getMeso() >= 200000) {
                cm.gainMeso( - 200000);
                cm.warp(703020000);
                cm.sendOk("你已经到达目的地.(钻机爆外星人币哦.可以兑换不错属性的装备!)\r\n祝你游戏愉快!");
            } else {
                cm.sendOk("你没有20W金币,我不能传送你过去");
            }
            break;
        case 19:
            if (cm.getMeso() >= 200000) {
                cm.gainMeso( - 200000);
                cm.warp(814013000);
                cm.sendOk("找附近的 #p9137204# 吧！");
            } else {
                cm.sendOk("你没有20W金币,我不能传送你过去");
            }
            break;			
        }
        cm.dispose();
    }
}
