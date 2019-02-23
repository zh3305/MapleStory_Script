var status = -1;
var text = "";
var icon1 = "#fEffect/CharacterEff/1042176/0/0#";
var typed=1;
function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		if (status >= 0) {
			cm.dispose();
			return;
		}
		status--;
	}
	if (status == 0) {
		text = "情人节快乐~快乐情人节~\r\n";
		text+="#L1#"+icon1+" 情人节礼物说明#l\r\n";
		text+="#L2#"+icon1+" 领取单身礼物#l\r\n";
		text+="#L3#"+icon1+" 领取情侣组队礼物#l\r\n";
		cm.sendSimple(text);
	} else if (status == 1) {
		if (selection == 1) {
			text = "为各位光棍的幸福情侣准备的礼物，如果领了单身礼物就不能领情侣礼物，如果领了情侣礼物就不能领取单身礼物。";
			status = -1;
			cm.sendSimple(text);
		} else if (selection == 2) {
			typed = 2;
			cm.sendYesNo("是否要领取情人节单身礼物？领取之后将无法领取情侣礼物。");
		} else if (selection == 3) {
			if (cm.getParty() == null) { // 没有组队
				cm.sendOk("请和你的另一半组队以后过来领取哦！");
				cm.dispose();
			} else if (!cm.isLeader()) { // 不是队长
            	cm.sendOk("请让队长和我说话");
				cm.dispose();
			} else {
				typed = 3;
				cm.sendYesNo("是否要领取情人节情侣礼物？领取之后将无法领取情侣礼物。");
			}
		}
	} else if (status == 2) {
		if (typed == 2) {
			if (cm.getSpace(1) < 2) {
				cm.sendOk("装备栏空间不足，请至少保留2个空格。");
				cm.dispose();
				return ;
			}
			if (cm.getBossLogAcc("2015情人节礼物") != -1) {
				cm.setBossLogAcc("2015情人节礼物", -2);
				if (cm.getPlayerStat("GENDER")==0) {
					//男生礼物
					cm.gainItem(1662003, 1);
					cm.gainItem(1672014, 1);
					cm.sendOk("啦啦啦，#r送你一个女朋友，一入虎穴深似海！#k");
					cm.dispose();
				} else {
					//女生礼物
					cm.gainItem(1662002, 1);
					cm.gainItem(1672014, 1);
					cm.sendOk("啦啦啦，#r送你一个男朋友，一柱擎天不忍拔！#k");
					cm.dispose();
				}
			} else {
				cm.sendOk("您已经领取过情人节礼物了哦。");
				cm.dispose();
			}
		} else if (typed == 3) {
			if (cm.getBossLogAcc("2015情人节礼物") != -1) {
				var party = cm.getParty().getMembers();
				var next = true;
				var isLover = 0;
				var levelValid = 0;
				var it = party.iterator();
				while (it.hasNext()) {
					var cPlayer = it.next();
					if ((cPlayer.getLevel() >= 120) && (cPlayer.getLevel() <= 250)) {
						levelValid += 1;
					} else {
						next = false;
					}
					var chr = getCharacterById(cPlayer.getId());
					isLover+=(chr[0]);
				}
				if (party.size() != 2 || isLover != 1 || levelValid != party.size()) {
					next = false;
				}
				var valid = 0;
				if (next) {
					var party = cm.getParty().getMembers();
					var it = party.iterator();
					while (it.hasNext()) {
						var player=it.next();
						var chr = getCharacterById(player.getId());
						if (getBossLogAcc("2015情人节礼物", chr[1])==0) {
							valid++;
							setBossLogAcc("2015情人节礼物", chr[1], player.getId());
						}
					}
					if (valid != 2) {
						cm.sendOk("队伍中有人已经领取过礼物，无法再次领取。");
						cm.dispose();
						return;
					}
					cm.sendOk("成功领取了两把双人座椅，将双人座椅分一把给你的另一半吧。");
					cm.gainItem(3012026,1);
					cm.gainItem(3012026,1);
					cm.dispose();
				} else {
					cm.sendOk("领取失败，可能的原因有：\r\n1.双方等级不足120级\r\n2.组队必须一男一女\r\n3.组队只能为2个人"+party.size()+" "+isLover+" "+levelValid);
					cm.dispose();
				}
			} else {
				cm.sendOk("您已经领取过情人节礼物了哦。");
				cm.dispose();
			}
		}
	}
	
	function getCharacterById(id) {
		var conn=cm.getConnection();
		var sql = "select accountid, gender from characters where id = ?";
		var pstmt = conn.prepareStatement(sql);
		pstmt.setInt(1, id);
		var chr = pstmt.executeQuery();
		var rs = null
		if (chr.next()) {
			rs = Array(chr.getInt('gender'), chr.getInt('accountid'));
		}
		chr.close();
		pstmt.close();
		return rs;
	}
	
	function setBossLogAcc(bossid, accountid, characterid) {
		itemprice = selection;
		var conn = cm.getConnection();
		var delSql = "delete from bosslog where bossid = ? and accountid=?";
		var pstmt = conn.prepareStatement(delSql);
		pstmt.setString(1, bossid);
		pstmt.setInt(2, accountid);
		pstmt.executeUpdate();
		pstmt.close();
		
		var sql = "insert into bosslog(accountid, characterid, bossid, count, time) values(?,?,?,-1, CURRENT_TIMESTAMP)";
		pstmt = conn.prepareStatement(sql);
		pstmt.setInt(1, accountid);
		pstmt.setString(2, characterid);
		pstmt.setInt(3, bossid);
		pstmt.executeUpdate();
		pstmt.close();
		//conn.close();
	}
	
	function getBossLogAcc(bossid, accountid) {
		var conn=cm.getConnection();
		var sql = "select `count` from bosslog where bossid = ? and accountid = ?";
		var pstmt = conn.prepareStatement(sql);
		pstmt.setString(1, bossid);
		pstmt.setInt(2, accountid);
		var chr = pstmt.executeQuery();
		var rs = null
		if (chr.next()) {
			rs = chr.getInt('count');
		}
		chr.close();
		pstmt.close();
		return rs;
	}
}