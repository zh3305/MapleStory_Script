/*
玩家投票
 */

var a = 0;
var players = null;
var idx = -1;
var endTime = "2014-12-25 12:00:00";

function start() {
    a = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
        cm.dispose();
	} else {
		if (mode == 0 && a == 0) {
			cm.dispose();
			return;
		}
        if (mode == 1)
            a++;
        else
            a--;
        if (a == -1) {
            cm.dispose();
		} else if (a == 0) {
			if (players == null) {
				players = Array();
				var conn = cm.getConnection();
				var sql = "select * from playervote order by number desc";
				var pstmt = conn.prepareStatement(sql);
				rs = pstmt.executeQuery();
				var i = 0;
				while(rs.next()) {
					var id = rs.getString('id');
					var title = rs.getString('title');
					var number = rs.getInt('number');

					var pic = rs.getString('picurl');
					players[i++] = Array(id, title, number, pic);
				}
				rs.close();
				pstmt.close();
			}
			var text = "最暖男神&最美女神大比拼投票活动！\r\n";
			i = 0;
			for (var key in players) {
				
				text+="#b#L"+key+"# "+(i+1)+". "+players[key][1]+"#r("+players[key][2]+"票)#k#l\r\n";
				i++;
			}
			cm.sendSimple(text);
			//cm.dispose();
		} else if (a == 1) {
			if (idx == -1)
				idx = selection;
			var text = "我是#b#e"+players[idx][1]+"#n#k，我在回忆等你！\r\n";
			text += "#b#L1#查看他(她)的照片#l\r\n";
			text += "#L2#投他(她)一票";
			cm.sendNextPrev(text);
		} else if (a == 2) {
			if (selection == 1) {
				cm.sendPrev("已经为您打开照片查看网站。可以点击#g#e上一步#n#k返回");
				cm.openWeb(players[idx][3]);
			} else if (selection == 2) {
				if (cm.getBossLogAcc("玩家投票") != -1) {
					if (cm.getPlayer().getLevel() <= 180) {
						cm.sendOk("您的等级不到180级，无法进行投票");
						cm.dispose();
						return;
					}
					if (cm.getPlayer().getTodayOnlineTime() < 30) {
						cm.sendOk("在线时间不足30分钟，无法进行投票");
						cm.dispose();
						return;
					}
					var currentTimestamp = java.lang.System.currentTimeMillis();
					var endTimestamp = java.sql.Timestamp.valueOf(endTime).getTime();
					//限制领取时段
					if (currentTimestamp > endTimestamp) {
						cm.sendOk("投票已经截止");
						cm.dispose();
						return ;
					}
					var conn = cm.getConnection();
					var sql = "update playervote set number=number+1 where id = ?";
					var pstmt = conn.prepareStatement(sql);
					pstmt.setInt(1, players[idx][0]);
					pstmt.executeUpdate();
					pstmt.close();
					cm.setBossLogAcc("玩家投票", -2);
					cm.sendOk("投票完成！");
					cm.dispose();
				} else {
					cm.sendOk("您已经进行过投票，无法重复投票。");
					cm.dispose();
				}
			}
		}
		 //a
    }//mode
}//f