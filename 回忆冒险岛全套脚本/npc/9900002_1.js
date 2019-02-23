var aaa = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";

var status = 0;
var typed = 0;
var rmb = 0;
var isOld = false;
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
			isOld = isOldPlayer();
			var selStr = "#d#e不用连续登录，只要登录7天，每天即可获得下列物品：#n#k\r\n";
			selStr += "#e#d还需要登录 #r" + (7 + cm.getBossLogAcc("登录")) + "#d 天可领全部奖励#n\r\n"
			if (isOld)
				selStr += "\r\n#r由于您是老玩家，您在领取每项奖励之时还可以额外获得15枚雪花币#k\r\n\r\n";
			selStr += "#L1##b" + aaa + " 第一天登录奖励 #v4310014# #rx 1#b [详情点击查看]#l#k\r\n";
			selStr += "#L2##b" + aaa + " 第二天登录奖励 #v2431741# #rx 3#b [详情点击查看]#l#k\r\n";
			selStr += "#L3##b" + aaa + " 第三天登录奖励 #v5062002# #rx 20#b[详情点击查看]#l#k\r\n";
			selStr += "#L4##b" + aaa + " 第四天登录奖励 #v5062500# #rx 30#b [详情点击查看]#l#k\r\n";
			selStr += "#L5##b" + aaa + " 第五天登录奖励 #v5062009# #rx 50#b [详情点击查看]#l#k\r\n";
			selStr += "#L6##b" + aaa + " 第六天登录奖励 #v2049135# #rx 10#b[详情点击查看]#l#k\r\n";
			selStr += "#L7##b" + aaa + " 第七天登录奖励 #v1113037# #rx 1#b [详情点击查看]#l#k\r\n";
			selStr += " \r\n\r\n";
			cm.sendSimple(selStr);
		} else if (status == 1) {
			if (selection == 1) {
				typed = 1;
				cm.sendYesNo("- #e#d第一天登录时间奖励#k#n\r\n\r\n#v4000463##r#t4000463# x 1 #b个。\r\n\r\n不仅如此还可以领取#r冒险币 500W #b。");
			} else if (selection == 2) {
				typed = 2;
				cm.sendYesNo("- #e#d第二天登录时间奖励#k#n\r\n\r\n#v2431741##r#t2431741# x 3 #b个。\r\n\r\n不仅如此还可以领取#r冒险币 500W #b。");
			} else if (selection == 3) {
				typed = 3;
				cm.sendYesNo("- #e#d第三天登录时间奖励#k#n\r\n\r\n#v5062002##r#t5062002# x 20 #b个。\r\n\r\n#e#d#n\r\n\r\n");
			} else if (selection == 4) {
				typed = 4;
				cm.sendYesNo("- #e#d第四天登录时间奖励#k#n\r\n\r\n#v5062500##r#t5062500# x 30 #b个。\r\n\r\n#e#d#n\r\n\r\n");
			} else if (selection == 5) {
				typed = 5;
				cm.sendYesNo("- #e#d第五天登录时间奖励#k#n\r\n\r\n#v5062009##r#t5062009# x 50 #b个。\r\n\r\n#e#d#n\r\n\r\n");
			} else if (selection == 6) {
				typed = 6;
				cm.sendYesNo("- #e#d第六天登录时间奖励#k#n\r\n\r\n#v2049135##r#t2049135# x 10 #b个。\r\n\r\n#e#d#n\r\n\r\n");
			} else if (selection == 7) {
				typed = 7;
				cm.sendYesNo("- #e#d第七天登录时间奖励#k#n\r\n\r\n#v1113037##r#t1113037# x 1 #b个。\r\n\r\n#e#d特殊装备介绍：#n\r\n\r\n- #e#r力量#n:15    - #e敏捷#n:15    - #e智力#n:15\r\n- #e运气#n:15    - #e攻击#n:15    - #e魔攻#n:15\r\n\r\n#b成功领取完7天奖励后您将无法再次领取新人登录奖励，并且获得GM赠送的 1 万点卷奖励。");
			}
		} else if (status == 2) {
			if (typed == 1) {
				if (cm.getSpace(4) >= 1 && cm.getPlayer().getTodayOnlineTime() >= 360 && cm.getLevel() >= 140) {
					setBossLog();
					if (cm.getBossLogAcc("登录") == -1 && cm.getBossLogAcc("第一天") == 0) {
						cm.gainItem(4000463, 1);
						cm.gainMeso(5000000);
						if (isOld) cm.gainItem(4310014, 15);
						cm.setBossLogAcc("第一天", -2);
						cm.sendOk("恭喜您成功领取登录第一天奖励。");
						cm.worldSpouseMessage(0x20, "『回忆七天乐』 : 恭喜 " + cm.getChar().getName() + " 成功领取第一天登录奖励。");
						cm.dispose();
					} else {
						cm.sendOk("无法领取该礼包。\r\n1.您已经领取过该礼包。\r\n2.您应该领取#r#e第"+(cm.getBossLogAcc("登录")*-1)+"天#n#k礼包。");
						cm.dispose();
					}
				} else {
					cm.sendOk("失败：\r\n\r\n#r1). 今天在线时间不足360分钟.\r\n2). 已经领取过今天的奖励.\r\n3). 其他栏不足请及时清理.\r\n4). 等级小于140级. ");
					cm.dispose();
				}
			} else if (typed == 2) {
				if (cm.getSpace(5) >= 1 && cm.getPlayer().getTodayOnlineTime() >= 420 && cm.getLevel() >= 160) {
					setBossLog();
					if (cm.getBossLogAcc("登录") == -2 && cm.getBossLogAcc("第二天") == 0) {
						cm.gainMeso(5000000);
						cm.gainItem(2431741, 3);
						if (isOld) cm.gainItem(4310014, 15);
						cm.setBossLogAcc("第二天", -2);
						cm.sendOk("恭喜您成功领取登录第二天奖励。");
						cm.worldSpouseMessage(0x20, "『回忆七天乐』 : 恭喜 " + cm.getChar().getName() + " 成功领取第二天登录奖励。");
						cm.dispose();
					} else {
						cm.sendOk("无法领取该礼包。\r\n1.您已经领取过该礼包。\r\n2.您应该领取#r#e第"+(cm.getBossLogAcc("登录")*-1)+"天#n#k礼包。");
						cm.dispose();
					}
				} else {
					cm.sendOk("失败：\r\n\r\n#r1). 今天在线时间不足420分钟.\r\n2). 已经领取过今天的奖励.\r\n3). 特殊栏不足请及时清理.\r\n4). 等级小于160级. ");
					cm.dispose();
				}
			} else if (typed == 3) {
				if (cm.getSpace(5) >= 1 && cm.getPlayer().getTodayOnlineTime() >= 420 && cm.getLevel() >= 180) {
					setBossLog();
					if (cm.getBossLogAcc("登录") == -3 && cm.getBossLogAcc("第三天") == 0) {
						cm.gainItem(5062002, 20);
						if (isOld) cm.gainItem(4310014, 15);
						cm.setBossLogAcc("第三天", -2);
						cm.sendOk("恭喜您成功领取登录第三天奖励。");
						cm.worldSpouseMessage(0x20, "『回忆七天乐』 : 恭喜 " + cm.getChar().getName() + " 成功领取第三天登录奖励。");
						cm.dispose();
					} else {
						cm.sendOk("无法领取该礼包。\r\n1.您已经领取过该礼包。\r\n2.您应该领取#r#e第"+(cm.getBossLogAcc("登录")*-1)+"天#n#k礼包。");
						cm.dispose();
					}
				} else {
					cm.sendOk("失败：\r\n\r\n#r1). 今天在线时间不足420分钟.\r\n2). 已经领取过今天的奖励.\r\n3). 特殊栏不足请及时清理.\r\n4). 等级小于180级.");
					cm.dispose();
				}
			} else if (typed == 4) {
				if (cm.getSpace(5) >= 1 && cm.getPlayer().getTodayOnlineTime() >= 420 && cm.getLevel() >= 180) {
					setBossLog();
					if (cm.getBossLogAcc("登录") == -4 && cm.getBossLogAcc("第四天") == 0) {
						cm.gainItem(5062500, 30);
						if (isOld) cm.gainItem(4310014, 15);
						cm.setBossLogAcc("第四天", -2);
						cm.sendOk("恭喜您成功领取登录第四天奖励。");
						cm.worldSpouseMessage(0x20, "『回忆七天乐』 : 恭喜 " + cm.getChar().getName() + " 成功领取第四天登录奖励。");
						cm.dispose();
					} else {
						cm.sendOk("无法领取该礼包。\r\n1.您已经领取过该礼包。\r\n2.您应该领取#r#e第"+(cm.getBossLogAcc("登录")*-1)+"天#n#k礼包。");
						cm.dispose();
					}
				} else {
					cm.sendOk("失败：\r\n\r\n#r1). 今天在线时间不足420分钟.\r\n2). 已经领取过今天的奖励.\r\n3). 特殊栏不足请及时清理.\r\n4). 等级小于180级.");
					cm.dispose();
				}
			} else if (typed == 5) {
				if (cm.getSpace(5) >= 1 && cm.getPlayer().getTodayOnlineTime() >= 420 && cm.getLevel() >= 180) {
					setBossLog();
					if (cm.getBossLogAcc("登录") == -5 && cm.getBossLogAcc("第五天") == 0) {
						cm.gainItem(5062009, 50);
						if (isOld) cm.gainItem(4310014, 15);
						cm.setBossLogAcc("第五天", -2);
						cm.sendOk("恭喜您成功领取登录第五天奖励。");
						cm.worldSpouseMessage(0x20, "『回忆七天乐』 : 恭喜 " + cm.getChar().getName() + " 成功领取第五天登录奖励。");
						cm.dispose();
					} else {
						cm.sendOk("无法领取该礼包。\r\n1.您已经领取过该礼包。\r\n2.您应该领取#r#e第"+(cm.getBossLogAcc("登录")*-1)+"天#n#k礼包。");
						cm.dispose();
					}
				} else {
					cm.sendOk("失败：\r\n\r\n#r1). 今天在线时间不足420分钟.\r\n2). 已经领取过今天的奖励.\r\n3). 特殊栏不足请及时清理.\r\n4). 等级小于180级.");
					cm.dispose();
				}
			} else if (typed == 6) {
				if (cm.getSpace(2) >= 1 && cm.getPlayer().getTodayOnlineTime() >= 420 && cm.getLevel() >= 200) {
					setBossLog();
					if (cm.getBossLogAcc("登录") == -6 && cm.getBossLogAcc("第六天") == 0 ) {
						cm.gainItem(2049135, 10);
						if (isOld) cm.gainItem(4310014, 15);
						cm.setBossLogAcc("第六天", -2);
						cm.sendOk("恭喜您成功领取登录第六天奖励。");
						cm.worldSpouseMessage(0x20, "『回忆七天乐』 : 恭喜 " + cm.getChar().getName() + " 成功领取第六天登录奖励。");
						cm.dispose();
					} else {
						cm.sendOk("无法领取该礼包。\r\n1.您已经领取过该礼包。\r\n2.您应该领取#r#e第"+(cm.getBossLogAcc("登录")*-1)+"天#n#k礼包。");
						cm.dispose();
					}
				} else {
					cm.sendOk("失败：\r\n\r\n#r1). 今天在线时间不足420分钟.\r\n2). 已经领取过今天的奖励.\r\n3). 装备栏不足请及时清理.\r\n4). 等级小于200级.");
					cm.dispose();
				}
			} else if (typed == 7) {
				if (cm.getSpace(1) >= 1 && cm.getPlayer().getTodayOnlineTime() >= 420 && cm.getLevel() >= 200) {
					setBossLog();
					if (cm.getBossLogAcc("登录") == -7 && cm.getBossLogAcc("第七天") == 0) {
						//cm.gainItem(1113037, 1);
						if (isOld) cm.gainItem(4310014, 15);
						cm.gainNX(1, 10000);
						var ii = cm.getItemInfo();
						var toDrop = ii.randomizeStats(ii.getEquipById(1113037)).copy(); // 生成一个Equip类                    
						toDrop.setStr(15); //装备力量
						toDrop.setDex(15); //装备敏捷
						toDrop.setInt(15); //装备智力
						toDrop.setLuk(15); //装备运气
						toDrop.setMatk(15); //物理攻击
						toDrop.setWatk(15); //魔法攻击 
						cm.addFromDrop(cm.getC(), toDrop, false);
						cm.setBossLogAcc("第七天", -2);
						cm.sendOk("恭喜您成功领取登录第七天奖励。");
						cm.worldSpouseMessage(0x20, "『回忆七天乐』 : 恭喜 " + cm.getChar().getName() + " 成功领取第七天登录奖励获得神器一件。");
						cm.dispose();
					} else {
						cm.sendOk("无法领取该礼包。\r\n1.您已经领取过该礼包。\r\n2.您应该领取#r#e第"+(cm.getBossLogAcc("登录")*-1)+"天#n#k礼包。");
						cm.dispose();
					}
				} else {
					cm.sendOk("失败：\r\n\r\n#r1). 今天在线时间不足600分钟.\r\n2). 已经领取过今天的奖励.\r\n3). 装备栏不足请及时清理.4). 等级小于200级.");
					cm.dispose();
				}
			}
		}
	}
}
function isOldPlayer() {
	/*判断是否老玩家*/
	var conn = cm.getConnection();
	var sql = "select count(id) as num from accounts where id = ? and createdat < '2015-03-13'";
	var pstmt = conn.prepareStatement(sql);
	pstmt.setInt(1, cm.getPlayer().getAccountID());
	var rs = pstmt.executeQuery();
	var count = 0;
	var tof = false;
	if (rs.next()) count = rs.getInt('num');
	if (count > 0) tof = true;
	rs.close();
	pstmt.close();
	return tof;
	/*end*/
}

function setBossLog() {
	if (cm.getBossLogAcc("登录天数") <= 0 && cm.getBossLogAcc("登录") > -7) {
		cm.setBossLogAcc("登录天数");
		cm.setBossLogAcc("登录", -2);
	}
}