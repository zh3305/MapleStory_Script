
var status = 0;
var ttt = "#fUI/UIWindow/Quest/icon2/7#";//"+ttt+"//美化1
var ttt2 = "#fUI/UIWindow/Quest/icon6/7#";////美化2
var ttt3 = "#fUI/UIWindow/Quest/icon3/6#";//"+ttt3+"//美化圆
var ttt4 = "#fUI/UIWindow/Quest/icon5/1#";//"+ttt4+"//美化New
var ttt5 = "#fUI/UIWindow/Quest/icon0#";////美化!
var ttt7 = "#fUI/Basic/BtHide3/mouseOver/0#";//"+ttt6+"//美化会员
var ttt6 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";

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
    if (cm.getMapId() == 180000001) {
        cm.sendOk("很遗憾，您因为违反用户守则被禁止游戏活动，如有异议请联系管理员.")
        cm.dispose();
    }
    else if (status == 0) {
        var selStr = "\r\n#e#d您好，本服新增特色副本系列,更多请期待添加..#n#l#k\r\n\r\n";
        //selStr +="\r\n#d======================================================#k\r\n";
		selStr += "#L20#" + ttt6 + " #r1. #e[NEW]#n#b 迷之幻域 #r[雪花币、大量魔方、防爆]#l#n\r\n";
		selStr += "#L19#" + ttt6 + " #r2. #e[NEW]#n#b 金猪保卫战！#r[大量点卷、抵用]#l#n\r\n";
		selStr += "#L16#" + ttt6 + " #r3.#b 新版武陵道场 #r[极品装备不再是梦]#l#n\r\n";
		selStr += "#L17#" + ttt6 + " #r4.#b 拯救我的公主 #r[魔方、防爆、强化卷轴]#l#n\r\n";
		selStr += "#L15#" + ttt6 + " #r5.#b 枫之高校 #r[冬季币、大量魔方]#l#n\r\n";
		selStr += "#L14#" + ttt6 + " #r6.#b 来吧！怪物公园 #r[海量经验、椅子币]#l#n\r\n";
		selStr += "#L12#" + ttt6 + " #r7. #e[HOT]#n#b 射手村跳跳跳 #r[点卷、冬季币]#l#n\r\n";
		selStr += "#L13#" + ttt6 + " #r8. #e[HOT]#n#b 玩具城跳跳跳 #r[点卷、冬季币]#l#n\r\n";
		selStr += "#L18#" + ttt6 + " #r9. #e[HOT]#n#b 挑战克劳德 #r[极真装备、椅子、法弗纳]#l#n\r\n";
		selStr += "#L11#" + ttt6 + " #r10. #e[HOT]#n#b 神话副本 #r[极品耳环、绝版时装椅子]#l#n\r\n";
        selStr += "#L10#" + ttt6 + " #r11. #e[HOT]#n#b 阿里安特竞技场 #r[海量征服币]#l#n\r\n";
        selStr += "#b#L0#" + ttt6 + " #r12.#b 米纳尔森林保卫战 #r[运动币、喇叭]#l\r\n";
        selStr += "#L1#" + ttt6 + " #r13.#b 全民飞机大战 #r[魔方、防爆、祝福]#l\r\n";
        //selStr += "#L2#" + ttt6 + " #r2.#b 被困在城里的冒险家#l\r\n";
        selStr += "#L3#" + ttt6 + " #r14.#b 利弗里的天空庭院 #r[极真装备、稀有椅子]#l\r\n";
        selStr += "#L4#" + ttt6 + " #r15.#b 挑战英语村的大卫先生吧 #r[稀有椅子、新奇道具]#l\r\n";
        //selStr += "#L5#" + ttt6 + " #r4.#b 黄金寺院：僧侣诺伊的情愿#l\r\n";
        selStr += "#L6#" + ttt6 + " #r16.#b 关卡火力测试(小试牛刀) #r[大量魔方]#l\r\n";
        selStr += "#L7#" + ttt6 + " #r17.#b 变成废墟的民居 #r[椅子、极品装备]#l\r\n";
        selStr += "#L8#" + ttt6 + " #r18. #e[HOT]#n#b 无限火力挑战 #r[稀有道具、海量魔方]#l\r\n";
        selStr += "#L9#" + ttt6 + " #r19.#b 生化魔人欧碧啦 #r[魔方、防爆、强化卷轴]#l\r\n";
        selStr += "\r\n";
        //selStr +="\r\n#d======================================================#k\r\n";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
            case 0:
                cm.dispose();
                cm.openNpc(9900003, 109);
                break;
            case 1:
                cm.worldSpouseMessage(0x20, "[全民飞机大战] ：玩家 " + cm.getChar().getName() + " 进入了机场候机室。");
                cm.dispose();
                cm.warp(540010001, 0);
                break;
            case 2:
                cm.dispose();
                cm.openNpc(9900003, 107);
                break;
            case 3:
                cm.dispose();
                cm.openNpc(9220032);
                break;
            case 4:
                cm.dispose();
                cm.openNpc(9310057);
                break;
            case 5:
                cm.dispose();
                cm.openNpc(9900003, 101);
                break;
            case 6:
                cm.dispose();
                cm.openNpc(9900003, 102);
                break;
            case 7:
                cm.dispose();
                cm.openNpc(9900003, 700);
                break;
            case 8:
                cm.dispose();
                cm.openNpc(2060103);
                break;
            case 9:
                cm.dispose();
                cm.openNpc(9120050);
                break;
            case 10:
                cm.dispose();
                cm.openNpc(2101017,1);
                break;
			case 11:
				cm.dispose();
				cm.warp(262030000);
				break;
			case 12: 
				cm.dispose();
				cm.warp(100000202, 0);
				cm.sendOk("跳到顶上，去领取属于你的奖励吧！");
				break;
			case 13:
				cm.dispose();
				cm.warp(220000006, 0);
				cm.sendOk("跳到顶上，去领取属于你的奖励吧！");
				break;
			case 14:
				cm.dispose();
				cm.warp(951000000);
				break;
			case 15:
				cm.dispose();
				cm.warp(744000000);
				break;
			case 16:
				cm.dispose();
				cm.warp(925020001);
				break;
			case 17:
				cm.dispose();
				cm.openNpc(9310114, 2);
				break;
			case 18:
				cm.dispose();
				cm.openNpc(9220059);
				break;
			case 19:
				cm.dispose();
				cm.openNpc(9300006,1);
				break;
			case 20:
				cm.dispose();
				cm.openNpc(9070010,1);
				break;
        }
    }
}