/*
	拉克里斯 - Victoria Road: Kerning City (103000000)
*/
//importPackage(java.lang);

var wn20 = "#fUI/CashShop.img/CSEffect/hot/0#";  //人气图标
var status = -1;
var minLevel = 30;
var maxLevel = 250;

var minPartySize = 2;
var maxPartySize = 6;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        if (cm.getPlayer().getMapId() != 910340700) {
            cm.sendSimple("                 #b 特色#r<废弃训练场>\r\n  #k可刷票,摆脱存票的烦恼 但是不能出到市场噢  需求:最少3人  30级\r\n#r#L0#"+wn20+"我想进入组队训练场待机室。#l\r\n#d#L5#"+wn20+"通关次数奖励(50次-150次)。#l\r\n\r\n  #k每完成一次可以获得：家族声望x50：每日礼物箱子x1 正义火种1x2 RED币\r\n\r\n#k说明：#k还会随机获得RDE币,正义火种等...箱子可以开出以下物品:#b蓝调 8周年点点红 卷轴 椅子 喇叭 图腾 称号 绝版坐骑 #z1022224# 白天使 黑天使 所有真红装备(真红装备可以代替任何一个套装效果，如：最高级贝勒效果) \r\n");
        } else {
            cm.sendSimple("                 #b 特色#r<废弃训练场>\r\n #k出来不扣票,摆脱存票的烦恼   需求:最少3人 \r\n#d 请不要出去，否则再次进来将会删除你身上所有的票\r\n#b#L0#"+wn20+"我想执行组队任务。#l\r\n#r#L3#"+wn20+"通关积分换取道具。#l\r\n#d#L5#"+wn20+"通关次数奖励(50次-150次)。#l\r\n");
        }
    } else if (status == 1) {
        if (selection == 0) { //我想执行组队任务。
            if (cm.getPlayer().getMapId() != 910340700) { //不在任务开始地图
                cm.saveLocation("MULUNG_TC");
				 cm.warp(910340700, 0);
            } else if (cm.getPlayer().getParty() == null) { //没有组队
                cm.sendNext("里面的世界很危险，不能一个人单独进行。\r\n#b（请组队后再和我谈话。）");
            } else if (!cm.isLeader()) { //不是队长
                cm.sendNext("让你们的代表来和我说话。");
            } else {
                var party = cm.getPlayer().getParty().getMembers();
                var mapId = cm.getPlayer().getMapId();
                var next = true;
                var levelValid = 0;
                var inMap = 0;
                var it = party.iterator();
                while (it.hasNext()) {
                    var cPlayer = it.next();
                    if ((cPlayer.getLevel() >= minLevel) && (cPlayer.getLevel() <= maxLevel)) {
                        levelValid += 1;
                    } else {
                        next = false;
                    }
                    if (cPlayer.getMapid() == mapId) {
                        inMap += 1;
                    }
                }
                if (party.size() > maxPartySize || inMap < minPartySize) {
                    next = false;
                }
                if (next) {
                    var em = cm.getEventManager("KerningPQ");
                    if (em == null) {
                        cm.sendOk("Please try again later.");
                    } else {
                        var prop = em.getProperty("state");
                        if (prop == null || prop.equals("0")) {
                            em.startInstance(cm.getParty(), cm.getMap(), 150);
                        } else {
                            cm.sendOk("请稍等...任务正在进行中.");
                        }
                    }
                } else {
                    cm.sendOk("您所属的组队的人数不是3人以上，无法执行任务。请凑齐3人以上。如果您想招募队员，可以使用寻找组队功能。");
                }
            }
            cm.dispose();
        } else if (selection == 1) { //我想寻找队员。
            status = -1;
            /*cm.sendNext("请向周围的好友申请组队。通过寻找组队（快捷键O），可以随时找到适合自己的组队。希望你能参考一下。");*/
			if (cm.getMeso() >= 100000) {
				cm.sendGetText("消耗10万游戏币，请输入您要说的话：");
				typed = 14;
			} else {
				cm.sendOk("您没有10万游戏币，不能进行世界喊话。");
				cm.dispose();
				}
        } else if (selection == 2) { //我想听听说明。
            status = -1;
            cm.sendOk("我正在等待勇敢的冒险家。请大家用自己的力量和智慧，一起破解难题，击退强大的#r#o9300003##k！通过“获取和随机数字相等的通行证”和“猜猜正确位置”等问答后，#o9300003#就会出现。\r\n - 等级#n：20级以上#r（推荐等级：20～69 ）#k\r\n - 限制时间#n：20分钟\r\n - 参加人数#n：2～4人\r\n - 获得物品#n：#i1072369:# #t1072369# #b（#o9300003#掉落）#k\r\n - 获得物品#n：#i1072533:# #t1072533# #b（用15个#t4001531#交换）#k");
        } else if (selection == 3) { //我想获得#t1072533#。
			cm.dispose();
			cm.openNpc(9020000, 9000);
		} else if (selection == 5) { //我想获得#t1072533#。
          	 cm.dispose();
			cm.openNpc(9900004, 14);
        } else if (selection == 4) { //我想知道今天的剩余挑战次数。
            status = -1;
            cm.sendOk("今天剩余挑战次数是无数次。");
        }
    } else if (status == 2) {
        if (typed == 14) {
			cm.worldSpouseMessage(0x07, "[世界]"+cm.getPlayer().getMedalText()+cm.getChar().getName()+" : "+cm.getText());
			cm.gainMeso(-100000);
			//im.dispose();
		}
		cm.dispose();
		
    }
}