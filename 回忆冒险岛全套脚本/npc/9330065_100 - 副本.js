var status = 0;
var icon1 = "#fEffect/CharacterEff/1042176/0/0#";
var icon2 = "#fEffect/CharacterEff/1082565/2/0#";
var npcid = 9330065;
var gardenData = null;
var typed=0;

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
		gardenData=getGardenInfo();
		var text = icon1+" #d您的花园等级：#r["+gardenData['level']+"]#d 级\r\n";
		text+=icon1+" 您的活力：#r["+cm.getPlayerEnergy()+"]#d 点\r\n";
		text+=icon1+" 花园经验值：#r["+gardenData['exp']+"/1000]#k\r\n\r\n";
		text+="#b#L0#"+icon2+" 管理我的花园#l";
		cm.sendSimple(text);
	} else if (status == 1) {
		switch(selection) {
			case 0:
				var text="\t\t\t\t\t#d#e★ 我的花园 ★#n#k\r\n";
				text+="#L0#"+icon1+" [神奇魔方花] 距离成熟还剩余 0天18小时32分#l";
				typed=selection;
				cm.sendOkS(text, 3);
				//cm.dispose();
			break;
			case 1:
				cm.dispose();
				cm.openNpc(npcid, 100);
			break;
			case 2:
			break;
			case 3:
			break;
		}
	} else if (status == 2) {
		switch(selection) {
			case 0:
				var text="\t\t\t\t\t#d#e★ 我的花园 ★#n#k\r\n";
				text+="神奇魔方花\r\n";
				text+="距离成熟还剩余 0天18小时32分\r\n"
				text+="#L0#浇水#l\t#L1#施肥#l\t#L2#挖除#l";
				cm.sendOk(text);
				cm.dispose();
			break;
		}
	}
}

function getGardenInfo() {
	var charid = cm.getPlayer().getId();
	var sql = "SELECT * FROM memory_garden WHERE charid = ? limit 1";
	var conn = cm.getConnection();
	var pstmt = conn.prepareStatement(sql);
	pstmt.setInt(1, charid);
	var data = pstmt.executeQuery();
	if (data.next()) {
		var info = Array();
		info['level']=data.getInt('level');
		info['exp']=data.getInt('exp');
		data.close();
		pstmt.close();
		return info;
	} else {
		sql = "INSERT INTO memory_garden(charid, level, exp) VALUES(?,1,0)";
		pstmt = conn.prepareStatement(sql);
		pstmt.setInt(1, charid);
		pstmt.executeUpdate();
		pstmt.close();
		return getGardenInfo();
	}
}