var status = 0;
var typed=0;
var eff = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var xz = 1 + Math.floor(Math.random() * 49);
var xz1 = 1 + Math.floor(Math.random() * 29);
var xz2 = 1 + Math.floor(Math.random() * 19);

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
        if (cm.getPlayer().getMapId() == 101000005) {
		    cm.setEventCount("心魔");
		    cm.warp(910000000);
		if (cm.getChar().getLevel() < 200) {
			cm.gainGachaponItem(2431174, xz, "[日常]挑战黑暗面", 3);
			cm.playerMessage(1,"获得 "+ xz +" 个荣誉勋章");
 } else if (cm.getChar().getLevel() > 200 && cm.getChar().getLevel() < 240) {
			cm.gainGachaponItem(2432586, xz1, "[日常]挑战黑暗面", 3);
			cm.playerMessage(1,"获得 "+ xz1 +" 个失去的荣誉勋章");
 } else if (cm.getChar().getLevel() >= 240) {
			cm.gainGachaponItem(2432602, xz2, "[日常]挑战黑暗面", 3);
			cm.playerMessage(1,"获得 "+ xz2 +" 个单身部队荣誉勋章");
 }
            cm.gainItem(5064300,1);//卷轴防护卷轴
		    cm.gainPlayerEnergy(5);
			cm.worldSpouseMessage(0x20,"[日常活动] 玩家 "+ cm.getChar().getName() +" 在挑战黑暗面中击败黑暗获得 5 点活跃奖励。");
			cm.dispose();
		} else {
		var selStr = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#亲爱的#r#h ##k您好，以下是本服趣味副本.有趣也有不错的奖励噢:\r\n";
        selStr += "#L2##b【枫之高校】今天您上学了吗#l\r\n"
        selStr += "#L10##b【怪物公园】新增极限公园(推荐30-250级)#l\r\n"
		if (cm.getPlayer().getGMLevel() >= 6) {
        selStr += "#L5##b【邪恶心魔】对抗心中的黑暗！#l\r\n"
		}
        selStr += "#L1##b【组队副本】阿斯旺，逃脱，保护地球.#l\r\n"
        //selStr += "#L3##b【主题副本】拯救世界-空降御龙#l\r\n"
        selStr += "#L4##b【迷你副本】解锁密码宝箱#l\r\n"
		//selStr += "#L11##b【迷你副本】拯救印第小孩#l\r\n"
        selStr += "#L8##b【迷你副本】快乐收集活动#l\r\n"
        selStr += "#L6##b【时空裂缝】次元入侵#l\r\n"
		cm.sendSimple(selStr);
		}
		} else if (status == 1) {
			if (selection == 1) {
                    cm.dispose();
		    cm.warp(262030000);
						cm.dispose();
			//cm.sendOk("副本正在整理中.请期待！");
			}
			if (selection == 2) {
                    cm.dispose();
		    cm.warp(744000000);
			}
			if (selection == 3) {
                    cm.dispose();
		    cm.openNpc(2085001);
			}
			if (selection == 4) {
                    cm.dispose();
		    cm.openNpc(9000008);
			}
			if (selection == 5) {
            cm.dispose();
			//cm.sendOk("正在筹备。");
		    cm.openNpc(9000178,5);
			}
			if (selection == 6) {
                    cm.dispose();	
		    cm.warp(940020000);
			}
			if (selection == 7) {
                    cm.dispose();
		    cm.openNpc(9000178,6);
			}
			if (selection == 8) {
                    cm.dispose();
		    cm.openNpc(9000178,8);
			}
			if (selection == 9) {
                    cm.dispose();
		    cm.openNpc(2094000);
			}
			if (selection == 10) {
                    cm.dispose();
		    cm.openNpc(9071003);
			}
			if (selection == 11) {
                    cm.dispose();
		    cm.warp(910025000);
			}
		}
	}
}