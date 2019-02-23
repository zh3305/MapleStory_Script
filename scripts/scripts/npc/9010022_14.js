 /*
 夕阳制作★China冒险岛
 完成时间：2015年4月28日 16:34:19
 脚本功能：BOSS地图
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
        var selStr = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#亲爱的  #r#h ##k  您好，想传送到什么地方:\r\n";
		selStr += "#L0#" + eff + "#b 扎昆#l"
        selStr += "#L3#" + eff + "#b 暴力熊#l"
		selStr += "#L4#" + eff + "#b 心疤狮王#l"
		selStr += "#L2#" + eff + "#b 艾菲尼娅#l\r\n"
		
		selStr += "#L1#" + eff + "#b 闹钟#l"
		selStr += "#L5#" + eff + "#b 欧碧拉#l"
		selStr += "#L6#" + eff + "#b 阿卡伊勒#l"
		selStr += "#L7#" + eff + "#b 暗黑龙王#l\r\n"
        
		selStr += "#L9#" + eff + "#b 女皇#l"
		selStr += "#L8#" + eff + "#b 品克缤#l"
		selStr += "#L10#" + eff + "#b 鲁塔比斯#l"
		selStr += "#L11#" + eff + "#b 班·雷昂#l\r\n"
		selStr += "#L14#" + eff + "#r#e 黄金蛋#v1302152##v1102277#"
		selStr += "#L12#" + eff + "#r#e 贝勒德#v4310097##v1132245#\r\n"
        selStr += "#L13#" + eff + "#r#e 麦格纳斯#v4310058##v1142520#\r\n"
        
		//selStr += "#L14#" + eff + "#r[稀有]最高访问者#r【有几率获得#v1003797##v1042258##v1062169#】#l\r\n"
		//selStr += "#L19#" + eff + "#r[极限]超越人类的存在#r【有几率获得#v2430189##v2430189#】#l\r\n"
		
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
			    cm.sendYesNo("你现在想出发到<扎昆>入口吗？")
                cm.warp(211042401);
		        cm.sendOk("欢迎您来到<扎昆>入口，祝您游戏愉快！");
				cm.dispose();
            break;
	    case 1:
                cm.warp(220080000);
		        cm.sendOk("欢迎您来到<帕普拉图>斯入口，祝您游戏愉快！");
				cm.dispose();
            break;
	    case 2:
                cm.warp(300030300);
		        cm.sendOk("欢迎您来到<艾菲尼娅>入口，祝您游戏愉快！");
				cm.dispose();
            break;
        case 3:
                cm.warp(551030100);
		        cm.sendOk("欢迎您来到<暴力熊>入口，祝您游戏愉快！");
				cm.dispose();
            break;
		case 4:
                cm.warp(551030100);
		        cm.sendOk("欢迎您来到<心疤狮王>入口，祝您游戏愉快！");
				cm.dispose();
            break;
		case 5:
                cm.warp(802000820);
		        cm.sendOk("欢迎您来到<欧碧拉>入口，祝您游戏愉快！打完输入@PM回城");
				cm.dispose();
            break;
		case 6:
                cm.warp(272030300);
		        cm.sendOk("欢迎您来到<阿卡伊勒>入口，祝您游戏愉快！");
				cm.dispose();
            break;
		case 7:
                cm.warp(240050400);
		        cm.sendOk("欢迎您来到<暗黑龙王>入口，祝您游戏愉快！");
				cm.dispose();
            break;
		case 8:
                cm.warp(270050000);
		        cm.sendOk("欢迎您来到<品克缤>入口，祝您游戏愉快！");
				cm.dispose();
            break;
		case 9:
                cm.warp(271040000);
		        cm.sendOk("欢迎您来到<希纳斯>入口，祝您游戏愉快！");
				cm.dispose();
            break;
		case 10:
                cm.warp(105200000);
		        cm.sendOk("欢迎您来到<鲁塔比斯>入口，祝您游戏愉快！");
				cm.dispose();
            break;
		case 11:
                cm.warp(211070000);
		        cm.sendOk("欢迎您来到<班·雷昂>入口，祝您游戏愉快！");
				cm.dispose();
            break;
		case 12:
                cm.warp(863000100);
		        cm.sendOk("欢迎您来到<贝勒德>入口，祝您游戏愉快！");
				cm.dispose();
            break;
		case 13:
                cm.warp(401072000);
		        cm.sendOk("欢迎您来到<麦格纳斯>入口，祝您游戏愉快！");
				cm.dispose();
            break;
		case 14:
                cm.warp(540010001);
		        cm.sendOk("欢迎您来到<黄金蛋>入口，祝您游戏愉快！");
				cm.dispose();
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
